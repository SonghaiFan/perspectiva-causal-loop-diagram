function getCyElements(data) {
  var nodes = [];
  var edges = [];

  data.nodes.forEach((node) => {
    let nodeParticipantsHistory = [];

    if (node.history && node.history.length > 0) {
      node.history.forEach((originalNode) => {
        nodeParticipantsHistory.push(originalNode.group);
      });
    }

    let classesString = nodeParticipantsHistory.join(" ");

    console.log(classesString);
    nodes.push({
      data: {
        id: node.id.toString(),
        label: node.label,
        history: node.history,
      },
      classes: classesString,
    });
  });

  data.links.forEach((link) => {
    edges.push({
      data: {
        id: link.id,
        source: link.source.toString(),
        target: link.target.toString(),
        label: link.label,
        type: link.type,
      },
    });
  });

  return { nodes: nodes, edges: edges };
}

const DataSetsDemo = {
  advocate_1: {
    nodes: [
      {
        id: 1,
        label: "data collection",
        participant_type: "advocate",
        group: "advocate_1",
      },
      {
        id: 2,
        label: "privacy risks",
        participant_type: "advocate",
        group: "advocate_1",
      },
      {
        id: 3,
        label: "awareness",
        participant_type: "advocate",
        group: "advocate_1",
      },
      {
        id: 4,
        label: "regulation",
        participant_type: "advocate",
        group: "advocate_1",
      },
    ],
    links: [
      {
        id: "1-2",
        label: "data collection -(+)-> privacy risks",
        source: 1,
        target: 2,
        value: 1,
        type: "positive",
        participant_type: "advocate",
        group: "advocate_1",
      },
      {
        id: "2-3",
        label: "privacy risks -(+)-> awareness",
        source: 2,
        target: 3,
        value: 1,
        type: "positive",
        participant_type: "advocate",
        group: "advocate_1",
      },
      {
        id: "3-4",
        label: "awareness -(+)-> regulation",
        source: 3,
        target: 4,
        value: 1,
        type: "positive",
        participant_type: "advocate",
        group: "advocate_1",
      },
      {
        id: "4-1",
        label: "regulation -(-)-> data collection",
        source: 4,
        target: 1,
        value: -1,
        type: "negative",
        participant_type: "advocate",
        group: "advocate_1",
      },
    ],
  },
  advocate_2: {
    nodes: [
      {
        id: 1,
        label: "data",
        participant_type: "advocate",
        group: "advocate_2",
      },
      {
        id: 5,
        label: "desensitisation of people",
        participant_type: "advocate",
        group: "advocate_2",
      },
      {
        id: 3,
        label: "degree of awareness",
        participant_type: "advocate",
        group: "advocate_2",
      },
      {
        id: 6,
        label: "people's buy-in",
        participant_type: "advocate",
        group: "advocate_2",
      },
    ],
    links: [
      {
        id: "1-5",
        label: "data -(+)-> desensitisation of people",
        source: 1,
        target: 5,
        value: 1,
        type: "positive",
        participant_type: "advocate",
        group: "advocate_2",
      },
      {
        id: "5-3",
        label: "desensitisation of people -(-)-> degree of awareness",
        source: 5,
        target: 3,
        value: -1,
        type: "negative",
        participant_type: "advocate",
        group: "advocate_2",
      },
      {
        id: "3-6",
        label: "degree of awareness -(-)-> people's buy-in",
        source: 3,
        target: 6,
        value: -1,
        type: "negative",
        participant_type: "advocate",
        group: "advocate_2",
      },
      {
        id: "6-1",
        label: "people's buy-in -(+)-> data",
        source: 6,
        target: 1,
        value: 1,
        type: "positive",
        participant_type: "advocate",
        group: "advocate_2",
      },
    ],
  },
  city_council_3: {
    nodes: [
      {
        id: 1,
        label: "collection of data",
        participant_type: "city_council",
        group: "city_council_3",
      },
      {
        id: 7,
        label: "better services",
        participant_type: "city_council",
        group: "city_council_3",
      },
      {
        id: 8,
        label: "money",
        participant_type: "city_council",
        group: "city_council_3",
      },
    ],
    links: [
      {
        id: "1-7",
        label: "collection of data -(+)-> better services",
        source: 1,
        target: 7,
        value: 1,
        type: "positive",
        participant_type: "city_council",
        group: "city_council_3",
      },
      {
        id: "7-8",
        label: "better services -(+)-> money",
        source: 7,
        target: 8,
        value: 1,
        type: "positive",
        participant_type: "city_council",
        group: "city_council_3",
      },
      {
        id: "8-1",
        label: "money -(+)-> collection of data",
        source: 8,
        target: 1,
        value: 1,
        type: "positive",
        participant_type: "city_council",
        group: "city_council_3",
      },
    ],
  },
  final: {
    nodes: [
      {
        id: 1,
        label: "amount of collected data",
        history: [
          {
            id: "advocate_1_1",
            key: 1,
            label: "data collection",
            participant_type: "advocate",
            group: "advocate_1",
            history: [],
          },
          {
            id: "advocate_2_1",
            key: 1,
            label: "data",
            participant_type: "advocate",
            group: "advocate_2",
            history: [],
          },
          {
            id: "city_council_3_1",
            key: 1,
            label: "collection of data",
            participant_type: "city_council",
            group: "city_council_3",
            history: [],
          },
        ],
      },
      {
        id: 2,
        label: "level of privacy risk",
        history: [
          {
            id: "advocate_1_2",
            key: 2,
            label: "privacy risks",
            participant_type: "advocate",
            group: "advocate_1",
            history: [],
          },
        ],
      },
      {
        id: 3,
        label: "level of awareness",
        history: [
          {
            id: "advocate_1_3",
            key: 3,
            label: "awareness",
            participant_type: "advocate",
            group: "advocate_1",
            history: [],
          },
          {
            id: "advocate_2_3",
            key: 3,
            label: "degree of awareness",
            participant_type: "advocate",
            group: "advocate_2",
            history: [],
          },
        ],
      },
      {
        id: 4,
        label: "level of regulation",
        history: [
          {
            id: "advocate_1_4",
            key: 4,
            label: "regulation",
            participant_type: "advocate",
            group: "advocate_1",
            history: [],
          },
        ],
      },
      {
        id: 5,
        label: "degree to which people are sensitised",
        history: [
          {
            id: "advocate_2_5",
            key: 5,
            label: "desensitisation of people",
            participant_type: "advocate",
            group: "advocate_2",
            history: [],
          },
        ],
      },
      {
        id: 6,
        label: "level of people's approval to data collection",
        history: [
          {
            id: "advocate_2_6",
            key: 6,
            label: "people's buy-in",
            participant_type: "advocate",
            group: "advocate_2",
            history: [],
          },
        ],
      },
      {
        id: 7,
        label: "quality of services",
        history: [
          {
            id: "city_council_3_7",
            key: 7,
            label: "better services",
            participant_type: "city_council",
            group: "city_council_3",
            history: [],
          },
        ],
      },
      {
        id: 8,
        label: "profit generated by data collecting entities",
        history: [
          {
            id: "city_council_3_8",
            key: 8,
            label: "money",
            participant_type: "city_council",
            group: "city_council_3",
            history: [],
          },
        ],
      },
      {
        id: 9,
        label: "investment in data collecting initiatives",
        history: [],
      },
    ],
    links: [
      {
        id: "1-2",
        label: "amount of collected data -(+)-> level of privacy risk",
        source: 1,
        target: 2,
        value: 1,
        type: "positive",
      },
      {
        id: "2-3",
        label: "level of privacy risk -(+)-> level of awareness",
        source: 2,
        target: 3,
        value: 1,
        type: "positive",
      },
      {
        id: "3-4",
        label: "level of awareness -(+)-> level of regulation",
        source: 3,
        target: 4,
        value: 1,
        type: "positive",
      },
      {
        id: "4-1",
        label: "level of regulation -(-)-> amount of collected data",
        source: 4,
        target: 1,
        value: -1,
        type: "negative",
      },
      {
        id: "1-5",
        label:
          "amount of collected data -(-)-> degree to which people are sensitised",
        source: 1,
        target: 5,
        value: -1,
        type: "negative",
      },
      {
        id: "5-3",
        label:
          "degree to which people are sensitised -(+)-> level of awareness",
        source: 5,
        target: 3,
        value: 1,
        type: "positive",
      },
      {
        id: "3-6",
        label:
          "level of awareness -(-)-> level of people's approval to data collection",
        source: 3,
        target: 6,
        value: -1,
        type: "negative",
      },
      {
        id: "6-1",
        label:
          "level of people's approval to data collection -(+)-> amount of collected data",
        source: 6,
        target: 1,
        value: 1,
        type: "positive",
      },
      {
        id: "1-7",
        label: "amount of collected data -(+)-> quality of services",
        source: 1,
        target: 7,
        value: 1,
        type: "positive",
      },
      {
        id: "7-8",
        label:
          "quality of services -(+)-> profit generated by data collecting entities",
        source: 7,
        target: 8,
        value: 1,
        type: "positive",
      },
      {
        id: "8-9",
        label:
          "profit generated by data collecting entities -(+)-> investment in data collecting initiatives",
        source: 8,
        target: 9,
        value: 1,
        type: "positive",
      },
      {
        id: "9-1",
        label:
          "investment in data collecting initiatives -(+)-> amount of collected data",
        source: 9,
        target: 1,
        value: 1,
        type: "positive",
      },
    ],
  },
};

const realDataSets = {
  city_person_2: {
    nodes: [
      {
        id: 1,
        label: "public policy in tech sector",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: 10,
        label: "amount of data retained by private enterprises",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: 2,
        label: "citizen awareness of data collection",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: 3,
        label: "public sector expertise",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: 4,
        label: "private transport services",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: 5,
        label: "pro-private sector data structures",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: 6,
        label: "rate of tech innovation",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: 7,
        label: "public service funding",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: 8,
        label: "hiring consultants",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: 9,
        label: "technological convenience",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: 17,
        label: "violation of contractual integrity (potential)",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: 18,
        label: "citizen desensitisation to data collection",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: 46,
        label: "quality and availability of urban services (transport)",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: 50,
        label: "pedestrian data models",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: 11,
        label: "on-selling of de-identified data",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: 51,
        label: "corporate data practices",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: 12,
        label: "speculation of data as commodity",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: 14,
        label: "private sector revenue",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: 13,
        label: "pedestrian models",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: 15,
        label: "tech investment",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: 16,
        label: "lobbying",
        participant_type: "city_person",
        group: "city_person_2",
      },
    ],
    links: [
      {
        id: "1-10",
        label:
          "public policy in tech sector -(-)-> amount of data retained by private enterprises",
        source: 1,
        target: 10,
        value: -1,
        type: "negative",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "2-10",
        label:
          "citizen awareness of data collection -(-)-> amount of data retained by private enterprises",
        source: 2,
        target: 10,
        value: -1,
        type: "negative",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "3-10",
        label:
          "public sector expertise -(-)-> amount of data retained by private enterprises",
        source: 3,
        target: 10,
        value: -1,
        type: "negative",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "4-10",
        label:
          "private transport services -(+)-> amount of data retained by private enterprises",
        source: 4,
        target: 10,
        value: 1,
        type: "positive",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "5-10",
        label:
          "pro-private sector data structures -(+)-> amount of data retained by private enterprises",
        source: 5,
        target: 10,
        value: 1,
        type: "positive",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "6-2",
        label:
          "rate of tech innovation -(-)-> citizen awareness of data collection",
        source: 6,
        target: 2,
        value: -1,
        type: "negative",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "6-3",
        label: "rate of tech innovation -(-)-> public sector expertise",
        source: 6,
        target: 3,
        value: -1,
        type: "negative",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "7-3",
        label: "public service funding -(+)-> public sector expertise",
        source: 7,
        target: 3,
        value: 1,
        type: "positive",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "3-8",
        label: "public sector expertise -(-)-> hiring consultants",
        source: 3,
        target: 8,
        value: -1,
        type: "negative",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "8-5",
        label: "hiring consultants -(+)-> pro-private sector data structures",
        source: 8,
        target: 5,
        value: 1,
        type: "positive",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "9-5",
        label:
          "technological convenience -(+)-> pro-private sector data structures",
        source: 9,
        target: 5,
        value: 1,
        type: "positive",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "10-17",
        label:
          "amount of data retained by private enterprises -(+)-> violation of contractual integrity (potential)",
        source: 10,
        target: 17,
        value: 1,
        type: "positive",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "10-18",
        label:
          "amount of data retained by private enterprises -(+)-> citizen desensitisation to data collection",
        source: 10,
        target: 18,
        value: 1,
        type: "positive",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "10-46",
        label:
          "amount of data retained by private enterprises -(+)-> quality and availability of urban services (transport)",
        source: 10,
        target: 46,
        value: 1,
        type: "positive",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "10-50",
        label:
          "amount of data retained by private enterprises -(+)-> pedestrian data models",
        source: 10,
        target: 50,
        value: 1,
        type: "positive",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "10-11",
        label:
          "amount of data retained by private enterprises -(+)-> on-selling of de-identified data",
        source: 10,
        target: 11,
        value: 1,
        type: "positive",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "11-51",
        label:
          "on-selling of de-identified data -(+)-> corporate data practices",
        source: 11,
        target: 51,
        value: 1,
        type: "positive",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "11-12",
        label:
          "on-selling of de-identified data -(+)-> speculation of data as commodity",
        source: 11,
        target: 12,
        value: 1,
        type: "positive",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "12-51",
        label:
          "speculation of data as commodity -(+)-> corporate data practices",
        source: 12,
        target: 51,
        value: 1,
        type: "positive",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "11-14",
        label: "on-selling of de-identified data -(+)-> private sector revenue",
        source: 11,
        target: 14,
        value: 1,
        type: "positive",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "13-14",
        label: "pedestrian models -(+)-> private sector revenue",
        source: 13,
        target: 14,
        value: 1,
        type: "positive",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "14-15",
        label: "private sector revenue -(+)-> tech investment",
        source: 14,
        target: 15,
        value: 1,
        type: "positive",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "14-16",
        label: "private sector revenue -(+)-> lobbying",
        source: 14,
        target: 16,
        value: 1,
        type: "positive",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "15-6",
        label: "tech investment -(+)-> rate of tech innovation",
        source: 15,
        target: 6,
        value: 1,
        type: "positive",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "16-4",
        label: "lobbying -(+)-> private transport services",
        source: 16,
        target: 4,
        value: 1,
        type: "positive",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "17-18",
        label:
          "violation of contractual integrity (potential) -(-)-> citizen desensitisation to data collection",
        source: 17,
        target: 18,
        value: -1,
        type: "negative",
        participant_type: "city_person",
        group: "city_person_2",
      },
      {
        id: "18-2",
        label:
          "citizen desensitisation to data collection -(-)-> citizen awareness of data collection",
        source: 18,
        target: 2,
        value: -1,
        type: "negative",
        participant_type: "city_person",
        group: "city_person_2",
      },
    ],
  },
  digita_rights_advocate_6: {
    nodes: [
      {
        id: 19,
        label: "legal permission to use data",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: 28,
        label: "data used by law enforcement",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: 20,
        label: "collection of data by law enforcement",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: 21,
        label: "access of data from other entitites",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: 22,
        label:
          "social and political expectations for law enfovement to be using data and technologies to better police",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: 23,
        label: "techno-solutionism",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: 24,
        label: "people's concern about crime",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: 25,
        label: "pop-culture",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: 26,
        label: "use of off-the-shelf products",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: 27,
        label: "exemptions in different acts",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: 7,
        label: "funding of city council",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: 52,
        label: "predictive policing",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: 31,
        label: "reactive policing",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: 29,
        label: "predicitve policing",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: 53,
        label: "biased and discriminatory outcomes",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: 30,
        label: "people's sense of being able to move in public spaces",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: 54,
        label: "underming of human rights",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
    ],
    links: [
      {
        id: "19-28",
        label:
          "legal permission to use data -(+)-> data used by law enforcement",
        source: 19,
        target: 28,
        value: 1,
        type: "positive",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: "20-28",
        label:
          "collection of data by law enforcement -(+)-> data used by law enforcement",
        source: 20,
        target: 28,
        value: 1,
        type: "positive",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: "21-28",
        label:
          "access of data from other entitites -(+)-> data used by law enforcement",
        source: 21,
        target: 28,
        value: 1,
        type: "positive",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: "22-28",
        label:
          "social and political expectations for law enfovement to be using data and technologies to better police -(+)-> data used by law enforcement",
        source: 22,
        target: 28,
        value: 1,
        type: "positive",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: "23-22",
        label:
          "techno-solutionism -(+)-> social and political expectations for law enfovement to be using data and technologies to better police",
        source: 23,
        target: 22,
        value: 1,
        type: "positive",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: "24-22",
        label:
          "people's concern about crime -(+)-> social and political expectations for law enfovement to be using data and technologies to better police",
        source: 24,
        target: 22,
        value: 1,
        type: "positive",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: "25-22",
        label:
          "pop-culture -(+)-> social and political expectations for law enfovement to be using data and technologies to better police",
        source: 25,
        target: 22,
        value: 1,
        type: "positive",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: "26-21",
        label:
          "use of off-the-shelf products -(+)-> access of data from other entitites",
        source: 26,
        target: 21,
        value: 1,
        type: "positive",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: "27-21",
        label:
          "exemptions in different acts -(+)-> access of data from other entitites",
        source: 27,
        target: 21,
        value: 1,
        type: "positive",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: "7-26",
        label: "funding of city council -(-)-> use of off-the-shelf products",
        source: 7,
        target: 26,
        value: -1,
        type: "negative",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: "28-52",
        label: "data used by law enforcement -(+)-> predictive policing",
        source: 28,
        target: 52,
        value: 1,
        type: "positive",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: "28-31",
        label: "data used by law enforcement -(+)-> reactive policing",
        source: 28,
        target: 31,
        value: 1,
        type: "positive",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: "29-53",
        label: "predicitve policing -(+)-> biased and discriminatory outcomes",
        source: 29,
        target: 53,
        value: 1,
        type: "positive",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: "29-30",
        label:
          "predicitve policing -(-)-> people's sense of being able to move in public spaces",
        source: 29,
        target: 30,
        value: -1,
        type: "negative",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: "30-54",
        label:
          "people's sense of being able to move in public spaces -(-)-> underming of human rights",
        source: 30,
        target: 54,
        value: -1,
        type: "negative",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
      {
        id: "31-30",
        label:
          "reactive policing -(-)-> people's sense of being able to move in public spaces",
        source: 31,
        target: 30,
        value: -1,
        type: "negative",
        participant_type: "digita_rights_advocate",
        group: "digita_rights_advocate_6",
      },
    ],
  },
  corporate_8: {
    nodes: [
      {
        id: 32,
        label: "regulations and policies",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 10,
        label: "data retained by private entities",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 33,
        label: "data disposal",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 34,
        label: "tendency to go digital",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 35,
        label: "need for customised user experience",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 36,
        label: "need for insights about customers",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 37,
        label: "onset of new technologies",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 38,
        label: "data sharing between entities",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 39,
        label: "business model based on data monetisation",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 40,
        label: "privacy breaches",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 41,
        label: "cost of data storage technology",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 42,
        label: "cost cutting",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 43,
        label: "faster delivery of services",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 44,
        label: "expanding products/service offerring",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 45,
        label: "partnering with other entities yo provide bundle services",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 55,
        label: "consumerism",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 56,
        label: "timesaving",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 47,
        label: "opportunities for data monetisation",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 57,
        label: "connectedness through virtual environmentl",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 58,
        label: "trust in service providers",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 46,
        label: "quality of services",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 59,
        label: "user's ease of access to data",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 48,
        label: "tampering political systems",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 60,
        label: "justice",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: 49,
        label: "undesignated use of data",
        participant_type: "corporate",
        group: "corporate_8",
      },
    ],
    links: [
      {
        id: "32-10",
        label:
          "regulations and policies -(-)-> data retained by private entities",
        source: 32,
        target: 10,
        value: -1,
        type: "negative",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "33-10",
        label: "data disposal -(-)-> data retained by private entities",
        source: 33,
        target: 10,
        value: -1,
        type: "negative",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "34-10",
        label:
          "tendency to go digital -(+)-> data retained by private entities",
        source: 34,
        target: 10,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "35-10",
        label:
          "need for customised user experience -(+)-> data retained by private entities",
        source: 35,
        target: 10,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "36-10",
        label:
          "need for insights about customers -(+)-> data retained by private entities",
        source: 36,
        target: 10,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "37-10",
        label:
          "onset of new technologies -(+)-> data retained by private entities",
        source: 37,
        target: 10,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "38-10",
        label:
          "data sharing between entities -(+)-> data retained by private entities",
        source: 38,
        target: 10,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "39-10",
        label:
          "business model based on data monetisation -(+)-> data retained by private entities",
        source: 39,
        target: 10,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "40-33",
        label: "privacy breaches -(+)-> data disposal",
        source: 40,
        target: 33,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "41-33",
        label: "cost of data storage technology -(+)-> data disposal",
        source: 41,
        target: 33,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "42-34",
        label: "cost cutting -(+)-> tendency to go digital",
        source: 42,
        target: 34,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "43-34",
        label: "faster delivery of services -(+)-> tendency to go digital",
        source: 43,
        target: 34,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "44-36",
        label:
          "expanding products/service offerring -(+)-> need for insights about customers",
        source: 44,
        target: 36,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "45-38",
        label:
          "partnering with other entities yo provide bundle services -(+)-> data sharing between entities",
        source: 45,
        target: 38,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "45-55",
        label:
          "partnering with other entities yo provide bundle services -(+)-> consumerism",
        source: 45,
        target: 55,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "35-55",
        label: "need for customised user experience -(+)-> consumerism",
        source: 35,
        target: 55,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "35-56",
        label: "need for customised user experience -(+)-> timesaving",
        source: 35,
        target: 56,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "10-47",
        label:
          "data retained by private entities -(+)-> opportunities for data monetisation",
        source: 10,
        target: 47,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "10-57",
        label:
          "data retained by private entities -(+)-> connectedness through virtual environmentl",
        source: 10,
        target: 57,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "10-58",
        label:
          "data retained by private entities -(-)-> trust in service providers",
        source: 10,
        target: 58,
        value: -1,
        type: "negative",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "10-46",
        label: "data retained by private entities -(+)-> quality of services",
        source: 10,
        target: 46,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "45-59",
        label:
          "partnering with other entities yo provide bundle services -(+)-> user's ease of access to data",
        source: 45,
        target: 59,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "46-44",
        label:
          "quality of services -(+)-> expanding products/service offerring",
        source: 46,
        target: 44,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "47-48",
        label:
          "opportunities for data monetisation -(+)-> tampering political systems",
        source: 47,
        target: 48,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "48-60",
        label: "tampering political systems -(-)-> justice",
        source: 48,
        target: 60,
        value: -1,
        type: "negative",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "47-49",
        label:
          "opportunities for data monetisation -(+)-> undesignated use of data",
        source: 47,
        target: 49,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "49-40",
        label: "undesignated use of data -(+)-> privacy breaches",
        source: 49,
        target: 40,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
      {
        id: "47-37",
        label:
          "opportunities for data monetisation -(+)-> onset of new technologies",
        source: 47,
        target: 37,
        value: 1,
        type: "positive",
        participant_type: "corporate",
        group: "corporate_8",
      },
    ],
  },
  final: {
    nodes: [
      {
        id: 1,
        label: "degree to which the tech sector is regulated",
        history: [
          {
            id: "city_person_2_1",
            key: 1,
            label: "public policy in tech sector",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
        ],
      },
      {
        id: 10,
        label: "amount of data retained by private entities",
        history: [
          {
            id: "city_person_2_10",
            key: 10,
            label: "amount of data retained by private enterprises",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
          {
            id: "corporate_8_10",
            key: 10,
            label: "data retained by private entities",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 2,
        label: "level of citizen awareness",
        history: [
          {
            id: "city_person_2_2",
            key: 2,
            label: "citizen awareness of data collection",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
        ],
      },
      {
        id: 3,
        label: "level of public sector expertise",
        history: [
          {
            id: "city_person_2_3",
            key: 3,
            label: "public sector expertise",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
        ],
      },
      {
        id: 4,
        label: "privatisation of transport services",
        history: [
          {
            id: "city_person_2_4",
            key: 4,
            label: "private transport services",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
        ],
      },
      {
        id: 5,
        label: "pro-private sector data structures",
        history: [
          {
            id: "city_person_2_5",
            key: 5,
            label: "pro-private sector data structures",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
        ],
      },
      {
        id: 6,
        label: "rate of technological innovation",
        history: [
          {
            id: "city_person_2_6",
            key: 6,
            label: "rate of tech innovation",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
        ],
      },
      {
        id: 7,
        label: "public sector funding",
        history: [
          {
            id: "city_person_2_7",
            key: 7,
            label: "public service funding",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
          {
            id: "digita_rights_advocate_6_7",
            key: 7,
            label: "funding of city council",
            participant_type: "digita_rights_advocate",
            group: "digita_rights_advocate_6",
            history: [],
          },
        ],
      },
      {
        id: 8,
        label: "hiring consultants",
        history: [
          {
            id: "city_person_2_8",
            key: 8,
            label: "hiring consultants",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
        ],
      },
      {
        id: 9,
        label: "technological convenience",
        history: [
          {
            id: "city_person_2_9",
            key: 9,
            label: "technological convenience",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
        ],
      },
      {
        id: 17,
        label: "violation of contractual integrity (potential)",
        history: [
          {
            id: "city_person_2_17",
            key: 17,
            label: "violation of contractual integrity (potential)",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
        ],
      },
      {
        id: 18,
        label: "citizen desensitisation to data collection",
        history: [
          {
            id: "city_person_2_18",
            key: 18,
            label: "citizen desensitisation to data collection",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
        ],
      },
      {
        id: 46,
        label: "quality of services",
        history: [
          {
            id: "city_person_2_46",
            key: 46,
            label: "quality and availability of urban services (transport)",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
          {
            id: "corporate_8_46",
            key: 46,
            label: "quality of services",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 50,
        label: "pedestrian data models",
        history: [
          {
            id: "city_person_2_50",
            key: 50,
            label: "pedestrian data models",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
        ],
      },
      {
        id: 11,
        label: "on-selling of de-identified data",
        history: [
          {
            id: "city_person_2_11",
            key: 11,
            label: "on-selling of de-identified data",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
        ],
      },
      {
        id: 51,
        label: "corporate data practices",
        history: [
          {
            id: "city_person_2_51",
            key: 51,
            label: "corporate data practices",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
        ],
      },
      {
        id: 12,
        label: "speculation of data as commodity",
        history: [
          {
            id: "city_person_2_12",
            key: 12,
            label: "speculation of data as commodity",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
        ],
      },
      {
        id: 14,
        label: "private sector revenue",
        history: [
          {
            id: "city_person_2_14",
            key: 14,
            label: "private sector revenue",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
        ],
      },
      {
        id: 13,
        label: "pedestrian models",
        history: [
          {
            id: "city_person_2_13",
            key: 13,
            label: "pedestrian models",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
        ],
      },
      {
        id: 15,
        label: "investments in technological developments",
        history: [
          {
            id: "city_person_2_15",
            key: 15,
            label: "tech investment",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
        ],
      },
      {
        id: 16,
        label: "lobbying",
        history: [
          {
            id: "city_person_2_16",
            key: 16,
            label: "lobbying",
            participant_type: "city_person",
            group: "city_person_2",
            history: [],
          },
        ],
      },
      {
        id: 19,
        label: "legal permission to use data",
        history: [
          {
            id: "digita_rights_advocate_6_19",
            key: 19,
            label: "legal permission to use data",
            participant_type: "digita_rights_advocate",
            group: "digita_rights_advocate_6",
            history: [],
          },
        ],
      },
      {
        id: 28,
        label: "amount of data used by law enforcement",
        history: [
          {
            id: "digita_rights_advocate_6_28",
            key: 28,
            label: "data used by law enforcement",
            participant_type: "digita_rights_advocate",
            group: "digita_rights_advocate_6",
            history: [],
          },
        ],
      },
      {
        id: 20,
        label: "amount of data collected by law enforcemententcement",
        history: [
          {
            id: "digita_rights_advocate_6_20",
            key: 20,
            label: "collection of data by law enforcement",
            participant_type: "digita_rights_advocate",
            group: "digita_rights_advocate_6",
            history: [],
          },
        ],
      },
      {
        id: 21,
        label: "access of data from other entitites",
        history: [
          {
            id: "digita_rights_advocate_6_21",
            key: 21,
            label: "access of data from other entitites",
            participant_type: "digita_rights_advocate",
            group: "digita_rights_advocate_6",
            history: [],
          },
        ],
      },
      {
        id: 22,
        label:
          "social and political expectations for law enfovement to be using data and technologies to better police",
        history: [
          {
            id: "digita_rights_advocate_6_22",
            key: 22,
            label:
              "social and political expectations for law enfovement to be using data and technologies to better police",
            participant_type: "digita_rights_advocate",
            group: "digita_rights_advocate_6",
            history: [],
          },
        ],
      },
      {
        id: 23,
        label: "techno-solutionism",
        history: [
          {
            id: "digita_rights_advocate_6_23",
            key: 23,
            label: "techno-solutionism",
            participant_type: "digita_rights_advocate",
            group: "digita_rights_advocate_6",
            history: [],
          },
        ],
      },
      {
        id: 24,
        label: "people's concern about crime",
        history: [
          {
            id: "digita_rights_advocate_6_24",
            key: 24,
            label: "people's concern about crime",
            participant_type: "digita_rights_advocate",
            group: "digita_rights_advocate_6",
            history: [],
          },
        ],
      },
      {
        id: 25,
        label: "pop-culture",
        history: [
          {
            id: "digita_rights_advocate_6_25",
            key: 25,
            label: "pop-culture",
            participant_type: "digita_rights_advocate",
            group: "digita_rights_advocate_6",
            history: [],
          },
        ],
      },
      {
        id: 26,
        label: "use of off-the-shelf products",
        history: [
          {
            id: "digita_rights_advocate_6_26",
            key: 26,
            label: "use of off-the-shelf products",
            participant_type: "digita_rights_advocate",
            group: "digita_rights_advocate_6",
            history: [],
          },
        ],
      },
      {
        id: 27,
        label: "exemptions in different acts",
        history: [
          {
            id: "digita_rights_advocate_6_27",
            key: 27,
            label: "exemptions in different acts",
            participant_type: "digita_rights_advocate",
            group: "digita_rights_advocate_6",
            history: [],
          },
        ],
      },
      {
        id: 52,
        label: "predictive policing",
        history: [
          {
            id: "digita_rights_advocate_6_52",
            key: 52,
            label: "predictive policing",
            participant_type: "digita_rights_advocate",
            group: "digita_rights_advocate_6",
            history: [],
          },
        ],
      },
      {
        id: 31,
        label: "reactive policing",
        history: [
          {
            id: "digita_rights_advocate_6_31",
            key: 31,
            label: "reactive policing",
            participant_type: "digita_rights_advocate",
            group: "digita_rights_advocate_6",
            history: [],
          },
        ],
      },
      {
        id: 29,
        label: "predicitve policing",
        history: [
          {
            id: "digita_rights_advocate_6_29",
            key: 29,
            label: "predicitve policing",
            participant_type: "digita_rights_advocate",
            group: "digita_rights_advocate_6",
            history: [],
          },
        ],
      },
      {
        id: 53,
        label: "biased and discriminatory outcomes",
        history: [
          {
            id: "digita_rights_advocate_6_53",
            key: 53,
            label: "biased and discriminatory outcomes",
            participant_type: "digita_rights_advocate",
            group: "digita_rights_advocate_6",
            history: [],
          },
        ],
      },
      {
        id: 30,
        label: "people's sense of being able to move in public spaces",
        history: [
          {
            id: "digita_rights_advocate_6_30",
            key: 30,
            label: "people's sense of being able to move in public spaces",
            participant_type: "digita_rights_advocate",
            group: "digita_rights_advocate_6",
            history: [],
          },
        ],
      },
      {
        id: 54,
        label: "underming of human rights",
        history: [
          {
            id: "digita_rights_advocate_6_54",
            key: 54,
            label: "underming of human rights",
            participant_type: "digita_rights_advocate",
            group: "digita_rights_advocate_6",
            history: [],
          },
        ],
      },
      {
        id: 32,
        label: "regulations and policies",
        history: [
          {
            id: "corporate_8_32",
            key: 32,
            label: "regulations and policies",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 33,
        label: "amount of disposed data",
        history: [
          {
            id: "corporate_8_33",
            key: 33,
            label: "data disposal",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 34,
        label: "tendency to go digital",
        history: [
          {
            id: "corporate_8_34",
            key: 34,
            label: "tendency to go digital",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 35,
        label: "need for customised user experience",
        history: [
          {
            id: "corporate_8_35",
            key: 35,
            label: "need for customised user experience",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 36,
        label: "need for insights about customers",
        history: [
          {
            id: "corporate_8_36",
            key: 36,
            label: "need for insights about customers",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 37,
        label: "onset of new technologies",
        history: [
          {
            id: "corporate_8_37",
            key: 37,
            label: "onset of new technologies",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 38,
        label: "data sharing between entities",
        history: [
          {
            id: "corporate_8_38",
            key: 38,
            label: "data sharing between entities",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 39,
        label: "business model based on data monetisation",
        history: [
          {
            id: "corporate_8_39",
            key: 39,
            label: "business model based on data monetisation",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 40,
        label: "privacy breaches",
        history: [
          {
            id: "corporate_8_40",
            key: 40,
            label: "privacy breaches",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 41,
        label: "cost of data storage technology",
        history: [
          {
            id: "corporate_8_41",
            key: 41,
            label: "cost of data storage technology",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 42,
        label: "cost cutting",
        history: [
          {
            id: "corporate_8_42",
            key: 42,
            label: "cost cutting",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 43,
        label: "faster delivery of services",
        history: [
          {
            id: "corporate_8_43",
            key: 43,
            label: "faster delivery of services",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 44,
        label: "expanding products/service offerring",
        history: [
          {
            id: "corporate_8_44",
            key: 44,
            label: "expanding products/service offerring",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 45,
        label: "partnering with other entities yo provide bundle services",
        history: [
          {
            id: "corporate_8_45",
            key: 45,
            label: "partnering with other entities yo provide bundle services",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 55,
        label: "consumerism",
        history: [
          {
            id: "corporate_8_55",
            key: 55,
            label: "consumerism",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 56,
        label: "timesaving",
        history: [
          {
            id: "corporate_8_56",
            key: 56,
            label: "timesaving",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 47,
        label: "opportunities for data monetisation",
        history: [
          {
            id: "corporate_8_47",
            key: 47,
            label: "opportunities for data monetisation",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 57,
        label: "connectedness through virtual environmentl",
        history: [
          {
            id: "corporate_8_57",
            key: 57,
            label: "connectedness through virtual environmentl",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 58,
        label: "trust in service providers",
        history: [
          {
            id: "corporate_8_58",
            key: 58,
            label: "trust in service providers",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 59,
        label: "user's ease of access to data",
        history: [
          {
            id: "corporate_8_59",
            key: 59,
            label: "user's ease of access to data",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 48,
        label: "tampering political systems",
        history: [
          {
            id: "corporate_8_48",
            key: 48,
            label: "tampering political systems",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 60,
        label: "justice",
        history: [
          {
            id: "corporate_8_60",
            key: 60,
            label: "justice",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 49,
        label: "undesignated use of data",
        history: [
          {
            id: "corporate_8_49",
            key: 49,
            label: "undesignated use of data",
            participant_type: "corporate",
            group: "corporate_8",
            history: [],
          },
        ],
      },
      {
        id: 61,
        label: "availability of services",
        history: [],
      },
    ],
    links: [
      {
        id: "1-10",
        label:
          "degree to which the tech sector is regulated -(-)-> amount of data retained by private entities",
        source: 1,
        target: 10,
        value: -1,
        type: "negative",
      },
      {
        id: "2-10",
        label:
          "level of citizen awareness -(-)-> amount of data retained by private entities",
        source: 2,
        target: 10,
        value: -1,
        type: "negative",
      },
      {
        id: "3-10",
        label:
          "level of public sector expertise -(-)-> amount of data retained by private entities",
        source: 3,
        target: 10,
        value: -1,
        type: "negative",
      },
      {
        id: "4-10",
        label:
          "privatisation of transport services -(+)-> amount of data retained by private entities",
        source: 4,
        target: 10,
        value: 1,
        type: "positive",
      },
      {
        id: "5-10",
        label:
          "pro-private sector data structures -(+)-> amount of data retained by private entities",
        source: 5,
        target: 10,
        value: 1,
        type: "positive",
      },
      {
        id: "6-2",
        label:
          "rate of technological innovation -(-)-> level of citizen awareness",
        source: 6,
        target: 2,
        value: -1,
        type: "negative",
      },
      {
        id: "6-3",
        label:
          "rate of technological innovation -(-)-> level of public sector expertise",
        source: 6,
        target: 3,
        value: -1,
        type: "negative ",
      },
      {
        id: "7-3",
        label: "public sector funding -(+)-> level of public sector expertise",
        source: 7,
        target: 3,
        value: 1,
        type: "positive",
      },
      {
        id: "3-8",
        label: "level of public sector expertise -(-)-> hiring consultants",
        source: 3,
        target: 8,
        value: -1,
        type: "negative",
      },
      {
        id: "8-5",
        label: "hiring consultants -(+)-> pro-private sector data structures",
        source: 8,
        target: 5,
        value: 1,
        type: "positive",
      },
      {
        id: "9-5",
        label:
          "technological convenience -(+)-> pro-private sector data structures",
        source: 9,
        target: 5,
        value: 1,
        type: "positive",
      },
      {
        id: "10-17",
        label:
          "amount of data retained by private entities -(+)-> violation of contractual integrity (potential)",
        source: 10,
        target: 17,
        value: 1,
        type: "positive",
      },
      {
        id: "10-18",
        label:
          "amount of data retained by private entities -(+)-> citizen desensitisation to data collection",
        source: 10,
        target: 18,
        value: 1,
        type: "positive",
      },
      {
        id: "10-46",
        label:
          "amount of data retained by private entities -(+)-> quality of services",
        source: 10,
        target: 46,
        value: 1,
        type: "positive",
      },
      {
        id: "10-50",
        label:
          "amount of data retained by private entities -(+)-> pedestrian data models",
        source: 10,
        target: 50,
        value: 1,
        type: "positive",
      },
      {
        id: "10-11",
        label:
          "amount of data retained by private entities -(+)-> on-selling of de-identified data",
        source: 10,
        target: 11,
        value: 1,
        type: "positive",
      },
      {
        id: "11-51",
        label:
          "on-selling of de-identified data -(+)-> corporate data practices",
        source: 11,
        target: 51,
        value: 1,
        type: "positive",
      },
      {
        id: "11-12",
        label:
          "on-selling of de-identified data -(+)-> speculation of data as commodity",
        source: 11,
        target: 12,
        value: 1,
        type: "positive",
      },
      {
        id: "12-51",
        label:
          "speculation of data as commodity -(+)-> corporate data practices",
        source: 12,
        target: 51,
        value: 1,
        type: "positive",
      },
      {
        id: "11-14",
        label: "on-selling of de-identified data -(+)-> private sector revenue",
        source: 11,
        target: 14,
        value: 1,
        type: "positive",
      },
      {
        id: "13-14",
        label: "pedestrian models -(+)-> private sector revenue",
        source: 13,
        target: 14,
        value: 1,
        type: "positive",
      },
      {
        id: "14-15",
        label:
          "private sector revenue -(+)-> investments in technological developments",
        source: 14,
        target: 15,
        value: 1,
        type: "positive",
      },
      {
        id: "14-16",
        label: "private sector revenue -(+)-> lobbying",
        source: 14,
        target: 16,
        value: 1,
        type: "positive",
      },
      {
        id: "15-6",
        label:
          "investments in technological developments -(+)-> rate of technological innovation",
        source: 15,
        target: 6,
        value: 1,
        type: "positive",
      },
      {
        id: "16-4",
        label: "lobbying -(+)-> privatisation of transport services",
        source: 16,
        target: 4,
        value: 1,
        type: "positive",
      },
      {
        id: "17-18",
        label:
          "violation of contractual integrity (potential) -(-)-> citizen desensitisation to data collection",
        source: 17,
        target: 18,
        value: -1,
        type: "negative",
      },
      {
        id: "18-2",
        label:
          "citizen desensitisation to data collection -(-)-> level of citizen awareness",
        source: 18,
        target: 2,
        value: -1,
        type: "negative",
      },
      {
        id: "19-28",
        label:
          "legal permission to use data -(+)-> amount of data used by law enforcement",
        source: 19,
        target: 28,
        value: 1,
        type: "positive",
      },
      {
        id: "20-28",
        label:
          "amount of data collected by law enforcemententcement -(+)-> amount of data used by law enforcement",
        source: 20,
        target: 28,
        value: 1,
        type: "positive",
      },
      {
        id: "21-28",
        label:
          "access of data from other entitites -(+)-> amount of data used by law enforcement",
        source: 21,
        target: 28,
        value: 1,
        type: "positive",
      },
      {
        id: "22-28",
        label:
          "social and political expectations for law enfovement to be using data and technologies to better police -(+)-> amount of data used by law enforcement",
        source: 22,
        target: 28,
        value: 1,
        type: "positive",
      },
      {
        id: "23-22",
        label:
          "techno-solutionism -(+)-> social and political expectations for law enfovement to be using data and technologies to better police",
        source: 23,
        target: 22,
        value: 1,
        type: "positive",
      },
      {
        id: "24-22",
        label:
          "people's concern about crime -(+)-> social and political expectations for law enfovement to be using data and technologies to better police",
        source: 24,
        target: 22,
        value: 1,
        type: "positive",
      },
      {
        id: "25-22",
        label:
          "pop-culture -(+)-> social and political expectations for law enfovement to be using data and technologies to better police",
        source: 25,
        target: 22,
        value: 1,
        type: "positive",
      },
      {
        id: "26-21",
        label:
          "use of off-the-shelf products -(+)-> access of data from other entitites",
        source: 26,
        target: 21,
        value: 1,
        type: "positive",
      },
      {
        id: "27-21",
        label:
          "exemptions in different acts -(+)-> access of data from other entitites",
        source: 27,
        target: 21,
        value: 1,
        type: "positive",
      },
      {
        id: "7-26",
        label: "public sector funding -(-)-> use of off-the-shelf products",
        source: 7,
        target: 26,
        value: -1,
        type: "negative",
      },
      {
        id: "28-52",
        label:
          "amount of data used by law enforcement -(+)-> predictive policing",
        source: 28,
        target: 52,
        value: 1,
        type: "positive",
      },
      {
        id: "28-31",
        label:
          "amount of data used by law enforcement -(+)-> reactive policing",
        source: 28,
        target: 31,
        value: 1,
        type: "positive",
      },
      {
        id: "29-53",
        label: "predicitve policing -(+)-> biased and discriminatory outcomes",
        source: 29,
        target: 53,
        value: 1,
        type: "positive",
      },
      {
        id: "29-30",
        label:
          "predicitve policing -(-)-> people's sense of being able to move in public spaces",
        source: 29,
        target: 30,
        value: -1,
        type: "negative",
      },
      {
        id: "30-54",
        label:
          "people's sense of being able to move in public spaces -(-)-> underming of human rights",
        source: 30,
        target: 54,
        value: -1,
        type: "negative",
      },
      {
        id: "31-30",
        label:
          "reactive policing -(-)-> people's sense of being able to move in public spaces",
        source: 31,
        target: 30,
        value: -1,
        type: "negative",
      },
      {
        id: "32-10",
        label:
          "regulations and policies -(-)-> amount of data retained by private entities",
        source: 32,
        target: 10,
        value: -1,
        type: "negative",
      },
      {
        id: "33-10",
        label:
          "amount of disposed data -(-)-> amount of data retained by private entities",
        source: 33,
        target: 10,
        value: -1,
        type: "negative",
      },
      {
        id: "34-10",
        label:
          "tendency to go digital -(+)-> amount of data retained by private entities",
        source: 34,
        target: 10,
        value: 1,
        type: "positive",
      },
      {
        id: "35-10",
        label:
          "need for customised user experience -(+)-> amount of data retained by private entities",
        source: 35,
        target: 10,
        value: 1,
        type: "positive",
      },
      {
        id: "36-10",
        label:
          "need for insights about customers -(+)-> amount of data retained by private entities",
        source: 36,
        target: 10,
        value: 1,
        type: "positive",
      },
      {
        id: "37-10",
        label:
          "onset of new technologies -(+)-> amount of data retained by private entities",
        source: 37,
        target: 10,
        value: 1,
        type: "positive",
      },
      {
        id: "38-10",
        label:
          "data sharing between entities -(+)-> amount of data retained by private entities",
        source: 38,
        target: 10,
        value: 1,
        type: "positive",
      },
      {
        id: "39-10",
        label:
          "business model based on data monetisation -(+)-> amount of data retained by private entities",
        source: 39,
        target: 10,
        value: 1,
        type: "positive",
      },
      {
        id: "40-33",
        label: "privacy breaches -(+)-> amount of disposed data",
        source: 40,
        target: 33,
        value: 1,
        type: "positive",
      },
      {
        id: "41-33",
        label: "cost of data storage technology -(+)-> amount of disposed data",
        source: 41,
        target: 33,
        value: 1,
        type: "positive",
      },
      {
        id: "42-34",
        label: "cost cutting -(+)-> tendency to go digital",
        source: 42,
        target: 34,
        value: 1,
        type: "positive",
      },
      {
        id: "43-34",
        label: "faster delivery of services -(+)-> tendency to go digital",
        source: 43,
        target: 34,
        value: 1,
        type: "positive",
      },
      {
        id: "44-36",
        label:
          "expanding products/service offerring -(+)-> need for insights about customers",
        source: 44,
        target: 36,
        value: 1,
        type: "positive",
      },
      {
        id: "45-38",
        label:
          "partnering with other entities yo provide bundle services -(+)-> data sharing between entities",
        source: 45,
        target: 38,
        value: 1,
        type: "positive",
      },
      {
        id: "45-55",
        label:
          "partnering with other entities yo provide bundle services -(+)-> consumerism",
        source: 45,
        target: 55,
        value: 1,
        type: "positive",
      },
      {
        id: "35-55",
        label: "need for customised user experience -(+)-> consumerism",
        source: 35,
        target: 55,
        value: 1,
        type: "positive",
      },
      {
        id: "35-56",
        label: "need for customised user experience -(+)-> timesaving",
        source: 35,
        target: 56,
        value: 1,
        type: "positive",
      },
      {
        id: "10-47",
        label:
          "amount of data retained by private entities -(+)-> opportunities for data monetisation",
        source: 10,
        target: 47,
        value: 1,
        type: "positive",
      },
      {
        id: "10-57",
        label:
          "amount of data retained by private entities -(+)-> connectedness through virtual environmentl",
        source: 10,
        target: 57,
        value: 1,
        type: "positive",
      },
      {
        id: "10-58",
        label:
          "amount of data retained by private entities -(-)-> trust in service providers",
        source: 10,
        target: 58,
        value: -1,
        type: "negative",
      },
      {
        id: "10-46",
        label:
          "amount of data retained by private entities -(+)-> quality of services",
        source: 10,
        target: 46,
        value: 1,
        type: "positive",
      },
      {
        id: "45-59",
        label:
          "partnering with other entities yo provide bundle services -(+)-> user's ease of access to data",
        source: 45,
        target: 59,
        value: 1,
        type: "positive",
      },
      {
        id: "46-44",
        label:
          "quality of services -(+)-> expanding products/service offerring",
        source: 46,
        target: 44,
        value: 1,
        type: "positive",
      },
      {
        id: "47-48",
        label:
          "opportunities for data monetisation -(+)-> tampering political systems",
        source: 47,
        target: 48,
        value: 1,
        type: "positive",
      },
      {
        id: "48-60",
        label: "tampering political systems -(-)-> justice",
        source: 48,
        target: 60,
        value: -1,
        type: "negative",
      },
      {
        id: "47-49",
        label:
          "opportunities for data monetisation -(+)-> undesignated use of data",
        source: 47,
        target: 49,
        value: 1,
        type: "positive",
      },
      {
        id: "49-40",
        label: "undesignated use of data -(+)-> privacy breaches",
        source: 49,
        target: 40,
        value: 1,
        type: "positive",
      },
      {
        id: "47-37",
        label:
          "opportunities for data monetisation -(+)-> onset of new technologies",
        source: 47,
        target: 37,
        value: 1,
        type: "positive",
      },
      {
        id: "10-61",
        label:
          "amount of data retained by private entities -(+)-> availability of services",
        source: 10,
        target: 61,
        value: 1,
        type: "positive",
      },
    ],
  },
};

const cyDataSetsDemo = Object.fromEntries(
  Object.entries(DataSetsDemo).map(([key, value]) => [
    key,
    getCyElements(value),
  ])
);

const cyDataSetsReal = Object.fromEntries(
  Object.entries(realDataSets).map(([key, value]) => [
    key,
    getCyElements(value),
  ])
);

const allCyDataSets = {
  Demo: cyDataSetsDemo,
  Real: cyDataSetsReal,
};

console.log(cyDataSetsDemo);

export { cyDataSetsDemo, cyDataSetsReal, allCyDataSets };
