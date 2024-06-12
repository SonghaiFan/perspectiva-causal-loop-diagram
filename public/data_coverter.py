import pandas as pd
import json
from collections import defaultdict


def preprocess_data(file_path):
    data = pd.read_csv(file_path)
    data.fillna('', inplace=True)
    data['source'] = data['source'].str.strip().str.lower()
    data['target'] = data['target'].str.strip().str.lower()
    data['participant_type'] = data['participant_type'].str.lower(
    ).str.strip().str.replace(' ', '_')
    return data


def create_d3_graph_data(df, version):
    df_filtered = df[df['version'] == version]
    nodes_data, links_data = [], []

    for _, row in df_filtered.iterrows():
        for node_type in ['source_id', 'target_id']:
            node_label = row['source'] if node_type == 'source_id' else row['target']
            node_color = row['source_color'] if node_type == 'source_id' else row['target_color']
            node_data = {
                "id": row[node_type],
                "label": node_label,
                "participant_type": row.get('participant_type', ''),
                "group": f"{row['participant_type']}_{row['participant_number']}" if version == 1 else "",
                "color" : node_color
            }
            nodes_data.append(node_data)

        if version == 2:
            nodes_data = list({node['id']: node for node in nodes_data}.values())

        value = 1 if row['polarity'] == 'positive' else -1
        sign = '+' if row['polarity'] == 'positive' else '-'
        # link_color = 1 if row['link_color'] == 'y' else 2
        link = {
            "id": f"{row['source_id']}-{row['target_id']}",
            "label": sign,
            "source": row['source_id'],
            "target": row['target_id'],
            "value": value,
            "type": row['polarity'],
            "participant_type": row.get('participant_type', ''),
            "group": f"{row['participant_type']}_{row['participant_number']}" if version == 1 else "",
            # "color": link_color
        }
        links_data.append(link)

    return {"nodes": nodes_data, "links": links_data}


def group_by_attribute(data):
    grouped_data = defaultdict(lambda: {'nodes': [], 'links': []})

    for node in data['nodes']:
        group = node['group']
        grouped_data[group]['nodes'].append(node)

    for link in data['links']:
        group = link['group']
        grouped_data[group]['links'].append(link)

    # for each group, remove the duplicated nodes and links based on id
    for group in grouped_data:
        grouped_data[group]['nodes'] = list(
            {node['id']: node for node in grouped_data[group]['nodes']}.values())
        grouped_data[group]['links'] = list(
            {link['id']: link for link in grouped_data[group]['links']}.values())

    return dict(grouped_data)


def add_detailed_history(graph_data, df):
    # Filter for version 1 data
    df_v1 = df[df['version'] == 1]

    # Create a detailed history map for each key
    node_history_map = {}

    for _, row in df_v1.iterrows():
        for node_type in ['source_id', 'target_id']:
            node_id = f"{row['participant_type']}_{row['participant_number']}_{row[node_type]}"
            node_label = row['source'] if node_type == 'source_id' else row['target']
            node_history_entry = {
                "id": node_id,
                "key": row[node_type],
                "label": node_label,
                "participant_type": row['participant_type'],
                "group": f"{row['participant_type']}_{row['participant_number']}",
                "history": []
            }
            if row[node_type] in node_history_map:
                if node_history_entry not in node_history_map[row[node_type]]:
                    node_history_map[row[node_type]].append(node_history_entry)
            else:
                node_history_map[row[node_type]] = [node_history_entry]

    # Add detailed history attribute to each node in the graph data
    for node in graph_data['nodes']:
        key = node['id']
        node['history'] = node_history_map.get(key, [])

    return graph_data


def generate_grouped_graph_data(file_path):
    data = preprocess_data(file_path)
    graph_data_v1 = create_d3_graph_data(data, 1)
    graph_data_v2 = create_d3_graph_data(data, 2)
    grouped_data = group_by_attribute(graph_data_v1)
    graph_data_v2_with_history = add_detailed_history(graph_data_v2, data)
    grouped_data['final'] = graph_data_v2_with_history
    return grouped_data


def get_cy_elements(data):
    cy_nodes = []
    cy_edges = []

    for node in data['nodes']:
        node_participants_history = [original_node['group']
                                     for original_node in node.get('history', [])]
        classes_string = " ".join(node_participants_history)

        cy_nodes.append({
            'data': {
                'id': str(node['id']),
                'label': node['label'],
                'color': node['color'],
                'history': node.get('history', [])
            },
            'classes': classes_string
        })

    for link in data['links']:
        cy_edges.append({
            'data': {
                'id': link['id'],
                'source': str(link['source']),
                'target': str(link['target']),
                'label': link['label'],
                'type': link['type']
            }
        })

    return {'nodes': cy_nodes, 'edges': cy_edges}


def process_datasets(data_sets):
    return {key: get_cy_elements(value) for key, value in data_sets.items()}


file_path = ['CLD_participant2.csv', 'CLD_participant6.csv', 'CLD_participant8.csv']


all_cy_data_sets = {}

for path in file_path:
    grouped_graph_data = generate_grouped_graph_data(path)
    cy_data_sets = process_datasets(grouped_graph_data)
    all_cy_data_sets[path] = cy_data_sets

with open('data.json', 'w') as f:
    json.dump(all_cy_data_sets, f, indent=4)
    print('Data saved to data.json')
