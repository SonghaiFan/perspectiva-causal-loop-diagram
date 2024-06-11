const allCyDataSets = {
  "CLD_data_demo.csv": {
    advocate_1: {
      nodes: [
        {
          data: {
            id: "1",
            label: "data collection",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "2",
            label: "privacy risks",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "3",
            label: "awareness",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "4",
            label: "regulation",
            history: [],
          },
          classes: "",
        },
      ],
      edges: [
        {
          data: {
            id: "1-2",
            source: "1",
            target: "2",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "2-3",
            source: "2",
            target: "3",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "3-4",
            source: "3",
            target: "4",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "4-1",
            source: "4",
            target: "1",
            label: "-",
            type: "negative",
          },
        },
      ],
    },
    advocate_2: {
      nodes: [
        {
          data: {
            id: "1",
            label: "data",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "5",
            label: "desensitisation of people",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "3",
            label: "degree of awareness",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "6",
            label: "people's buy-in",
            history: [],
          },
          classes: "",
        },
      ],
      edges: [
        {
          data: {
            id: "1-5",
            source: "1",
            target: "5",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "5-3",
            source: "5",
            target: "3",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "3-6",
            source: "3",
            target: "6",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "6-1",
            source: "6",
            target: "1",
            label: "+",
            type: "positive",
          },
        },
      ],
    },
    city_council_3: {
      nodes: [
        {
          data: {
            id: "1",
            label: "collection of data",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "7",
            label: "better services",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "8",
            label: "money",
            history: [],
          },
          classes: "",
        },
      ],
      edges: [
        {
          data: {
            id: "1-7",
            source: "1",
            target: "7",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "7-8",
            source: "7",
            target: "8",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "8-1",
            source: "8",
            target: "1",
            label: "+",
            type: "positive",
          },
        },
      ],
    },
    final: {
      nodes: [
        {
          data: {
            id: "1",
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
          classes: "advocate_1 advocate_2 city_council_3",
        },
        {
          data: {
            id: "2",
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
          classes: "advocate_1",
        },
        {
          data: {
            id: "3",
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
          classes: "advocate_1 advocate_2",
        },
        {
          data: {
            id: "4",
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
          classes: "advocate_1",
        },
        {
          data: {
            id: "5",
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
          classes: "advocate_2",
        },
        {
          data: {
            id: "6",
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
          classes: "advocate_2",
        },
        {
          data: {
            id: "7",
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
          classes: "city_council_3",
        },
        {
          data: {
            id: "8",
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
          classes: "city_council_3",
        },
        {
          data: {
            id: "9",
            label: "investment in data collecting initiatives",
            history: [],
          },
          classes: "",
        },
      ],
      edges: [
        {
          data: {
            id: "1-2",
            source: "1",
            target: "2",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "2-3",
            source: "2",
            target: "3",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "3-4",
            source: "3",
            target: "4",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "4-1",
            source: "4",
            target: "1",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "1-5",
            source: "1",
            target: "5",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "5-3",
            source: "5",
            target: "3",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "3-6",
            source: "3",
            target: "6",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "6-1",
            source: "6",
            target: "1",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "1-7",
            source: "1",
            target: "7",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "7-8",
            source: "7",
            target: "8",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "8-9",
            source: "8",
            target: "9",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "9-1",
            source: "9",
            target: "1",
            label: "+",
            type: "positive",
          },
        },
      ],
    },
  },
  "CLD_data_demo2.csv": {
    advocate_1: {
      nodes: [
        {
          data: {
            id: "1",
            label: "data collection",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "2",
            label: "privacy risks",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "3",
            label: "awareness",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "4",
            label: "regulation",
            history: [],
          },
          classes: "",
        },
      ],
      edges: [
        {
          data: {
            id: "1-2",
            source: "1",
            target: "2",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "2-3",
            source: "2",
            target: "3",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "3-4",
            source: "3",
            target: "4",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "4-1",
            source: "4",
            target: "1",
            label: "-",
            type: "negative",
          },
        },
      ],
    },
    advocate_2: {
      nodes: [
        {
          data: {
            id: "1",
            label: "data",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "5",
            label: "desensitisation of people",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "3",
            label: "degree of awareness",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "6",
            label: "people's buy-in",
            history: [],
          },
          classes: "",
        },
      ],
      edges: [
        {
          data: {
            id: "1-5",
            source: "1",
            target: "5",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "5-3",
            source: "5",
            target: "3",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "3-6",
            source: "3",
            target: "6",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "6-1",
            source: "6",
            target: "1",
            label: "+",
            type: "positive",
          },
        },
      ],
    },
    city_council_3: {
      nodes: [
        {
          data: {
            id: "1",
            label: "collection of data",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "7",
            label: "better services",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "8",
            label: "money",
            history: [],
          },
          classes: "",
        },
      ],
      edges: [
        {
          data: {
            id: "1-7",
            source: "1",
            target: "7",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "7-8",
            source: "7",
            target: "8",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "8-1",
            source: "8",
            target: "1",
            label: "+",
            type: "positive",
          },
        },
      ],
    },
    final: {
      nodes: [
        {
          data: {
            id: "1",
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
          classes: "advocate_1 advocate_2 city_council_3",
        },
        {
          data: {
            id: "2",
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
          classes: "advocate_1",
        },
        {
          data: {
            id: "3",
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
          classes: "advocate_1 advocate_2",
        },
        {
          data: {
            id: "4",
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
          classes: "advocate_1",
        },
        {
          data: {
            id: "5",
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
          classes: "advocate_2",
        },
        {
          data: {
            id: "6",
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
          classes: "advocate_2",
        },
        {
          data: {
            id: "7",
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
          classes: "city_council_3",
        },
        {
          data: {
            id: "8",
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
          classes: "city_council_3",
        },
        {
          data: {
            id: "9",
            label: "investment in data collecting initiatives",
            history: [],
          },
          classes: "",
        },
      ],
      edges: [
        {
          data: {
            id: "1-2",
            source: "1",
            target: "2",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "2-3",
            source: "2",
            target: "3",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "3-4",
            source: "3",
            target: "4",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "4-1",
            source: "4",
            target: "1",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "1-5",
            source: "1",
            target: "5",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "5-3",
            source: "5",
            target: "3",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "3-6",
            source: "3",
            target: "6",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "6-1",
            source: "6",
            target: "1",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "1-7",
            source: "1",
            target: "7",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "7-8",
            source: "7",
            target: "8",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "8-9",
            source: "8",
            target: "9",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "9-1",
            source: "9",
            target: "1",
            label: "+",
            type: "positive",
          },
        },
      ],
    },
  },
  "CLD_data_real.csv": {
    city_person_2: {
      nodes: [
        {
          data: {
            id: "1",
            label: "public policy in tech sector",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "10",
            label: "amount of data retained by private enterprises",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "2",
            label: "citizen awareness of data collection",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "3",
            label: "public sector expertise",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "4",
            label: "private transport services",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "5",
            label: "pro-private sector data structures",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "6",
            label: "rate of tech innovation",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "7",
            label: "public service funding",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "8",
            label: "hiring consultants",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "9",
            label: "technological convenience",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "17",
            label: "violation of contractual integrity (potential)",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "18",
            label: "citizen desensitisation to data collection",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "46",
            label: "quality and availability of urban services (transport)",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "50",
            label: "pedestrian data models",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "11",
            label: "on-selling of de-identified data",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "51",
            label: "corporate data practices",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "12",
            label: "speculation of data as commodity",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "14",
            label: "private sector revenue",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "13",
            label: "pedestrian models",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "15",
            label: "tech investment",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "16",
            label: "lobbying",
            history: [],
          },
          classes: "",
        },
      ],
      edges: [
        {
          data: {
            id: "1-10",
            source: "1",
            target: "10",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "2-10",
            source: "2",
            target: "10",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "3-10",
            source: "3",
            target: "10",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "4-10",
            source: "4",
            target: "10",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "5-10",
            source: "5",
            target: "10",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "6-2",
            source: "6",
            target: "2",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "6-3",
            source: "6",
            target: "3",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "7-3",
            source: "7",
            target: "3",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "3-8",
            source: "3",
            target: "8",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "8-5",
            source: "8",
            target: "5",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "9-5",
            source: "9",
            target: "5",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "10-17",
            source: "10",
            target: "17",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "10-18",
            source: "10",
            target: "18",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "10-46",
            source: "10",
            target: "46",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "10-50",
            source: "10",
            target: "50",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "10-11",
            source: "10",
            target: "11",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "11-51",
            source: "11",
            target: "51",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "11-12",
            source: "11",
            target: "12",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "12-51",
            source: "12",
            target: "51",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "11-14",
            source: "11",
            target: "14",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "13-14",
            source: "13",
            target: "14",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "14-15",
            source: "14",
            target: "15",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "14-16",
            source: "14",
            target: "16",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "15-6",
            source: "15",
            target: "6",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "16-4",
            source: "16",
            target: "4",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "17-18",
            source: "17",
            target: "18",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "18-2",
            source: "18",
            target: "2",
            label: "-",
            type: "negative",
          },
        },
      ],
    },
    digita_rights_advocate_6: {
      nodes: [
        {
          data: {
            id: "19",
            label: "legal permission to use data",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "28",
            label: "data used by law enforcement",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "20",
            label: "collection of data by law enforcement",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "21",
            label: "access of data from other entitites",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "22",
            label:
              "social and political expectations for law enfovement to be using data and technologies to better police",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "23",
            label: "techno-solutionism",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "24",
            label: "people's concern about crime",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "25",
            label: "pop-culture",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "26",
            label: "use of off-the-shelf products",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "27",
            label: "exemptions in different acts",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "7",
            label: "funding of city council",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "52",
            label: "predictive policing",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "31",
            label: "reactive policing",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "29",
            label: "predicitve policing",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "53",
            label: "biased and discriminatory outcomes",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "30",
            label: "people's sense of being able to move in public spaces",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "54",
            label: "underming of human rights",
            history: [],
          },
          classes: "",
        },
      ],
      edges: [
        {
          data: {
            id: "19-28",
            source: "19",
            target: "28",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "20-28",
            source: "20",
            target: "28",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "21-28",
            source: "21",
            target: "28",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "22-28",
            source: "22",
            target: "28",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "23-22",
            source: "23",
            target: "22",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "24-22",
            source: "24",
            target: "22",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "25-22",
            source: "25",
            target: "22",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "26-21",
            source: "26",
            target: "21",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "27-21",
            source: "27",
            target: "21",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "7-26",
            source: "7",
            target: "26",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "28-52",
            source: "28",
            target: "52",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "28-31",
            source: "28",
            target: "31",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "29-53",
            source: "29",
            target: "53",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "29-30",
            source: "29",
            target: "30",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "30-54",
            source: "30",
            target: "54",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "31-30",
            source: "31",
            target: "30",
            label: "-",
            type: "negative",
          },
        },
      ],
    },
    corporate_8: {
      nodes: [
        {
          data: {
            id: "32",
            label: "regulations and policies",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "10",
            label: "data retained by private entities",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "33",
            label: "data disposal",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "34",
            label: "tendency to go digital",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "35",
            label: "need for customised user experience",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "36",
            label: "need for insights about customers",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "37",
            label: "onset of new technologies",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "38",
            label: "data sharing between entities",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "39",
            label: "business model based on data monetisation",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "40",
            label: "privacy breaches",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "41",
            label: "cost of data storage technology",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "42",
            label: "cost cutting",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "43",
            label: "faster delivery of services",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "44",
            label: "expanding products/service offerring",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "45",
            label: "partnering with other entities yo provide bundle services",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "55",
            label: "consumerism",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "56",
            label: "timesaving",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "47",
            label: "opportunities for data monetisation",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "57",
            label: "connectedness through virtual environmentl",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "58",
            label: "trust in service providers",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "46",
            label: "quality of services",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "59",
            label: "user's ease of access to data",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "48",
            label: "tampering political systems",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "60",
            label: "justice",
            history: [],
          },
          classes: "",
        },
        {
          data: {
            id: "49",
            label: "undesignated use of data",
            history: [],
          },
          classes: "",
        },
      ],
      edges: [
        {
          data: {
            id: "32-10",
            source: "32",
            target: "10",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "33-10",
            source: "33",
            target: "10",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "34-10",
            source: "34",
            target: "10",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "35-10",
            source: "35",
            target: "10",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "36-10",
            source: "36",
            target: "10",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "37-10",
            source: "37",
            target: "10",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "38-10",
            source: "38",
            target: "10",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "39-10",
            source: "39",
            target: "10",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "40-33",
            source: "40",
            target: "33",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "41-33",
            source: "41",
            target: "33",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "42-34",
            source: "42",
            target: "34",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "43-34",
            source: "43",
            target: "34",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "44-36",
            source: "44",
            target: "36",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "45-38",
            source: "45",
            target: "38",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "45-55",
            source: "45",
            target: "55",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "35-55",
            source: "35",
            target: "55",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "35-56",
            source: "35",
            target: "56",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "10-47",
            source: "10",
            target: "47",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "10-57",
            source: "10",
            target: "57",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "10-58",
            source: "10",
            target: "58",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "10-46",
            source: "10",
            target: "46",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "45-59",
            source: "45",
            target: "59",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "46-44",
            source: "46",
            target: "44",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "47-48",
            source: "47",
            target: "48",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "48-60",
            source: "48",
            target: "60",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "47-49",
            source: "47",
            target: "49",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "49-40",
            source: "49",
            target: "40",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "47-37",
            source: "47",
            target: "37",
            label: "+",
            type: "positive",
          },
        },
      ],
    },
    final: {
      nodes: [
        {
          data: {
            id: "1",
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
          classes: "city_person_2",
        },
        {
          data: {
            id: "10",
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
          classes: "city_person_2 corporate_8",
        },
        {
          data: {
            id: "2",
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
          classes: "city_person_2",
        },
        {
          data: {
            id: "3",
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
          classes: "city_person_2",
        },
        {
          data: {
            id: "4",
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
          classes: "city_person_2",
        },
        {
          data: {
            id: "5",
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
          classes: "city_person_2",
        },
        {
          data: {
            id: "6",
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
          classes: "city_person_2",
        },
        {
          data: {
            id: "7",
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
          classes: "city_person_2 digita_rights_advocate_6",
        },
        {
          data: {
            id: "8",
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
          classes: "city_person_2",
        },
        {
          data: {
            id: "9",
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
          classes: "city_person_2",
        },
        {
          data: {
            id: "17",
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
          classes: "city_person_2",
        },
        {
          data: {
            id: "18",
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
          classes: "city_person_2",
        },
        {
          data: {
            id: "46",
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
          classes: "city_person_2 corporate_8",
        },
        {
          data: {
            id: "50",
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
          classes: "city_person_2",
        },
        {
          data: {
            id: "11",
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
          classes: "city_person_2",
        },
        {
          data: {
            id: "51",
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
          classes: "city_person_2",
        },
        {
          data: {
            id: "12",
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
          classes: "city_person_2",
        },
        {
          data: {
            id: "14",
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
          classes: "city_person_2",
        },
        {
          data: {
            id: "13",
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
          classes: "city_person_2",
        },
        {
          data: {
            id: "15",
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
          classes: "city_person_2",
        },
        {
          data: {
            id: "16",
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
          classes: "city_person_2",
        },
        {
          data: {
            id: "19",
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
          classes: "digita_rights_advocate_6",
        },
        {
          data: {
            id: "28",
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
          classes: "digita_rights_advocate_6",
        },
        {
          data: {
            id: "20",
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
          classes: "digita_rights_advocate_6",
        },
        {
          data: {
            id: "21",
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
          classes: "digita_rights_advocate_6",
        },
        {
          data: {
            id: "22",
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
          classes: "digita_rights_advocate_6",
        },
        {
          data: {
            id: "23",
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
          classes: "digita_rights_advocate_6",
        },
        {
          data: {
            id: "24",
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
          classes: "digita_rights_advocate_6",
        },
        {
          data: {
            id: "25",
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
          classes: "digita_rights_advocate_6",
        },
        {
          data: {
            id: "26",
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
          classes: "digita_rights_advocate_6",
        },
        {
          data: {
            id: "27",
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
          classes: "digita_rights_advocate_6",
        },
        {
          data: {
            id: "52",
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
          classes: "digita_rights_advocate_6",
        },
        {
          data: {
            id: "31",
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
          classes: "digita_rights_advocate_6",
        },
        {
          data: {
            id: "29",
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
          classes: "digita_rights_advocate_6",
        },
        {
          data: {
            id: "53",
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
          classes: "digita_rights_advocate_6",
        },
        {
          data: {
            id: "30",
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
          classes: "digita_rights_advocate_6",
        },
        {
          data: {
            id: "54",
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
          classes: "digita_rights_advocate_6",
        },
        {
          data: {
            id: "32",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "33",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "34",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "35",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "36",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "37",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "38",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "39",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "40",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "41",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "42",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "43",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "44",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "45",
            label: "partnering with other entities yo provide bundle services",
            history: [
              {
                id: "corporate_8_45",
                key: 45,
                label:
                  "partnering with other entities yo provide bundle services",
                participant_type: "corporate",
                group: "corporate_8",
                history: [],
              },
            ],
          },
          classes: "corporate_8",
        },
        {
          data: {
            id: "55",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "56",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "47",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "57",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "58",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "59",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "48",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "60",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "49",
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
          classes: "corporate_8",
        },
        {
          data: {
            id: "61",
            label: "availability of services",
            history: [],
          },
          classes: "",
        },
      ],
      edges: [
        {
          data: {
            id: "1-10",
            source: "1",
            target: "10",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "2-10",
            source: "2",
            target: "10",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "3-10",
            source: "3",
            target: "10",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "4-10",
            source: "4",
            target: "10",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "5-10",
            source: "5",
            target: "10",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "6-2",
            source: "6",
            target: "2",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "6-3",
            source: "6",
            target: "3",
            label: "-",
            type: "negative ",
          },
        },
        {
          data: {
            id: "7-3",
            source: "7",
            target: "3",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "3-8",
            source: "3",
            target: "8",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "8-5",
            source: "8",
            target: "5",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "9-5",
            source: "9",
            target: "5",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "10-17",
            source: "10",
            target: "17",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "10-18",
            source: "10",
            target: "18",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "10-46",
            source: "10",
            target: "46",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "10-50",
            source: "10",
            target: "50",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "10-11",
            source: "10",
            target: "11",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "11-51",
            source: "11",
            target: "51",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "11-12",
            source: "11",
            target: "12",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "12-51",
            source: "12",
            target: "51",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "11-14",
            source: "11",
            target: "14",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "13-14",
            source: "13",
            target: "14",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "14-15",
            source: "14",
            target: "15",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "14-16",
            source: "14",
            target: "16",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "15-6",
            source: "15",
            target: "6",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "16-4",
            source: "16",
            target: "4",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "17-18",
            source: "17",
            target: "18",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "18-2",
            source: "18",
            target: "2",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "19-28",
            source: "19",
            target: "28",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "20-28",
            source: "20",
            target: "28",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "21-28",
            source: "21",
            target: "28",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "22-28",
            source: "22",
            target: "28",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "23-22",
            source: "23",
            target: "22",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "24-22",
            source: "24",
            target: "22",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "25-22",
            source: "25",
            target: "22",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "26-21",
            source: "26",
            target: "21",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "27-21",
            source: "27",
            target: "21",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "7-26",
            source: "7",
            target: "26",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "28-52",
            source: "28",
            target: "52",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "28-31",
            source: "28",
            target: "31",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "29-53",
            source: "29",
            target: "53",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "29-30",
            source: "29",
            target: "30",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "30-54",
            source: "30",
            target: "54",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "31-30",
            source: "31",
            target: "30",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "32-10",
            source: "32",
            target: "10",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "33-10",
            source: "33",
            target: "10",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "34-10",
            source: "34",
            target: "10",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "35-10",
            source: "35",
            target: "10",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "36-10",
            source: "36",
            target: "10",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "37-10",
            source: "37",
            target: "10",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "38-10",
            source: "38",
            target: "10",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "39-10",
            source: "39",
            target: "10",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "40-33",
            source: "40",
            target: "33",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "41-33",
            source: "41",
            target: "33",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "42-34",
            source: "42",
            target: "34",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "43-34",
            source: "43",
            target: "34",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "44-36",
            source: "44",
            target: "36",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "45-38",
            source: "45",
            target: "38",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "45-55",
            source: "45",
            target: "55",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "35-55",
            source: "35",
            target: "55",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "35-56",
            source: "35",
            target: "56",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "10-47",
            source: "10",
            target: "47",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "10-57",
            source: "10",
            target: "57",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "10-58",
            source: "10",
            target: "58",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "10-46",
            source: "10",
            target: "46",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "45-59",
            source: "45",
            target: "59",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "46-44",
            source: "46",
            target: "44",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "47-48",
            source: "47",
            target: "48",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "48-60",
            source: "48",
            target: "60",
            label: "-",
            type: "negative",
          },
        },
        {
          data: {
            id: "47-49",
            source: "47",
            target: "49",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "49-40",
            source: "49",
            target: "40",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "47-37",
            source: "47",
            target: "37",
            label: "+",
            type: "positive",
          },
        },
        {
          data: {
            id: "10-61",
            source: "10",
            target: "61",
            label: "+",
            type: "positive",
          },
        },
      ],
    },
  },
};

export { allCyDataSets };
