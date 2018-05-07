import _ from 'lodash'

export const teReo = ['Ruru', 'Nikau', 'Korari', 'Ngahura', 'Akiraho', 'Kohekohe', 'Hohipere', 'Piwakawaka', 'Horopito', 'Punga', 'Karaka', 'Puka', 'Kawaka', 'Akepiro', 'Takau', 'Horoeka', 'Arawa', 'Tawari']

export const ruru = [
  [
    [174.7585096333, -36.8670921833],
    [174.75874785, -36.8674314167],
    [174.7590423167, -36.8674576167]
  ],
  [
    [174.75781668330004, -36.866171316700004],
    [174.7579059333, -36.866263],
    [174.7585096333, -36.8670921833]
  ]
]

export const nikau = [
  [
    [-36.8667732333, 174.75924545],
    [-36.8670921833, 174.7585096333]
  ],
  [
    [-36.8656960333, 174.76113725],
    [-36.86593800472117, 174.7607787568334]
  ],
  [
    [-36.86644745, 174.7599972667],
    [-36.8667732333, 174.75924545]
  ],
  [
    [-36.86593800472117, 174.7607787568334],
    [-36.8664151667, 174.7600718167],
    [-36.86644745, 174.7599972667]
  ]
]

const korari = [
  [
    [
      -36.8659519833,
      174.7586905167
    ],
    [
      -36.8661008,
      174.7587825
    ],
    [
      -36.8667732333,
      174.75924545
    ]
  ]
]

const akiraho = [

  [
    [
      -36.8687327833,
      174.7606934167
    ],
    [
      -36.8687486167,
      174.7605469167
    ],
    [
      -36.86866985,
      174.76036255
    ],
    [
      -36.8687215167,
      174.75986576670002
    ],
    [
      -36.8686162833,
      174.7577581333
    ]
  ]
]

const kohekohe = [
  [
    [
      -36.8708136833,
      174.7610264167
    ],
    [
      -36.8701745667,
      174.76207175
    ],
    [
      -36.87017595,
      174.7622188
    ]
  ]
]

const karaka = [
  [
    [
      -36.861518333300005,
      174.7570423833
    ],
    [
      -36.8617416167,
      174.7578143167
    ]
  ],
  [
    [
      -36.86218231670001,
      174.7592234
    ],
    [
      -36.8623105167,
      174.7596638
    ]
  ],
  [
    [
      -36.8617416167,
      174.7578143167
    ],
    [
      -36.8617973333,
      174.7578809
    ],
    [
      -36.8619151333,
      174.7583664333
    ],
    [
      -36.8620784167,
      174.7588953667
    ],
    [
      -36.86218231670001,
      174.7592234
    ]
  ]
]

const tāwari = [
  [
    [
      -36.8710216,
      174.7504151167
    ],
    [
      -36.87076145,
      174.7492476667
    ]
  ],
  [
    [
      -36.8714755667,
      174.7524834167
    ],
    [
      -36.8711642333,
      174.7510821
    ]
  ],
  [
    [
      -36.8711642333,
      174.7510821
    ],
    [
      -36.8710216,
      174.7504151167
    ]
  ]
]

const akepiro = [
  [
    [
      -36.87063745,
      174.75187985
    ],
    [
      -36.86950615,
      174.7522634
    ]
  ]
]

export const horopito = [
  [
    [-36.8705444333, 174.7528078667],
    [-36.8706045167, 174.75306285],
    [-36.8708986167, 174.7544375833]
  ]
]

const punga = [
  [
    [
      -36.8719364833,
      174.7559375167
    ],
    [
      -36.8719717333,
      174.7560419
    ],
    [
      -36.8721672667,
      174.7569950667
    ]
  ]
]

export const rākau = _.concat(nikau, korari, akiraho, kohekohe, karaka, tāwari, akepiro, horopito, punga)

// layer=53382&x=174.7585488&y=-36.8673986&max_results=5&radius=1000&geometry=true
export const vectorData = [
  {
    'geometry': {
      'type': 'MultiLineString',
      'coordinates': [
        [
          [
            174.7585096333,
            -36.8670921833
          ],
          [
            174.75874785,
            -36.8674314167
          ],
          [
            174.7590423167,
            -36.8674576167
          ]
        ],
        [
          [
            174.75781668330004,
            -36.866171316700004
          ],
          [
            174.7579059333,
            -36.866263
          ],
          [
            174.7585096333,
            -36.8670921833
          ]
        ]
      ]
    },
    'distance': 14,
    'type': 'Feature',
    'properties': {
      'road_id': 1831584,
      'geometry_class': 'Addressing Road',
      'road_type': 'Unknown',
      'road_name_class': 'Road',
      'full_road_name': 'Ruru Street',
      'road_name_label': 'Ruru St',
      'road_name_prefix': null,
      'road_name_body': 'Ruru',
      'road_name_type': 'Street',
      'road_name_suffix': null,
      'route_name_body': null,
      'route_name_number': null,
      'route_name_alpha': null,
      'route_name_suffix': null,
      'full_road_name_ascii': 'Ruru Street',
      'road_name_label_ascii': 'Ruru St',
      'road_name_body_ascii': 'Ruru'
    },
    'id': 91316
  },
  {
    'geometry': {
      'type': 'MultiLineString',
      'coordinates': [
        [
          [
            174.75924545,
            -36.8667732333
          ],
          [
            174.7585096333,
            -36.8670921833
          ]
        ],
        [
          [
            174.76113725,
            -36.8656960333
          ],
          [
            174.7607787568334,
            -36.86593800472117
          ]
        ],
        [
          [
            174.7599972667,
            -36.86644745
          ],
          [
            174.75924545,
            -36.8667732333
          ]
        ],
        [
          [
            174.7607787568334,
            -36.86593800472117
          ],
          [
            174.7600718167,
            -36.8664151667
          ],
          [
            174.7599972667,
            -36.86644745
          ]
        ]
      ]
    },
    'distance': 34,
    'type': 'Feature',
    'properties': {
      'road_id': 1831547,
      'geometry_class': 'Addressing Road',
      'road_type': 'Unknown',
      'road_name_class': 'Road',
      'full_road_name': 'Nikau Street',
      'road_name_label': 'Nikau St',
      'road_name_prefix': null,
      'road_name_body': 'Nikau',
      'road_name_type': 'Street',
      'road_name_suffix': null,
      'route_name_body': null,
      'route_name_number': null,
      'route_name_alpha': null,
      'route_name_suffix': null,
      'full_road_name_ascii': 'Nikau Street',
      'road_name_label_ascii': 'Nikau St',
      'road_name_body_ascii': 'Nikau'
    },
    'id': 91287
  },
  {
    'geometry': {
      'type': 'MultiLineString',
      'coordinates': [
        [
          [
            174.7612340667,
            -36.8666494167
          ],
          [
            174.76042485,
            -36.86702206670001
          ]
        ],
        [
          [
            174.7593728333,
            -36.8674875833
          ],
          [
            174.7590423167,
            -36.8674576167
          ]
        ],
        [
          [
            174.76042485,
            -36.86702206670001
          ],
          [
            174.7593728333,
            -36.8674875833
          ]
        ]
      ]
    },
    'distance': 44,
    'type': 'Feature',
    'properties': {
      'road_id': 1818969,
      'geometry_class': 'Addressing Road',
      'road_type': 'Unknown',
      'road_name_class': 'Road',
      'full_road_name': 'Shaddock Street',
      'road_name_label': 'Shaddock St',
      'road_name_prefix': null,
      'road_name_body': 'Shaddock',
      'road_name_type': 'Street',
      'road_name_suffix': null,
      'route_name_body': null,
      'route_name_number': null,
      'route_name_alpha': null,
      'route_name_suffix': null,
      'full_road_name_ascii': 'Shaddock Street',
      'road_name_label_ascii': 'Shaddock St',
      'road_name_body_ascii': 'Shaddock'
    },
    'id': 110520
  },
  {
    'geometry': {
      'type': 'MultiLineString',
      'coordinates': [
        [
          [
            174.7586905167,
            -36.8659519833
          ],
          [
            174.7587825,
            -36.8661008
          ],
          [
            174.75924545,
            -36.8667732333
          ]
        ]
      ]
    },
    'distance': 93,
    'type': 'Feature',
    'properties': {
      'road_id': 1824488,
      'geometry_class': 'Addressing Road',
      'road_type': 'Unknown',
      'road_name_class': 'Road',
      'full_road_name': 'Korari Street',
      'road_name_label': 'Korari St',
      'road_name_prefix': null,
      'road_name_body': 'Korari',
      'road_name_type': 'Street',
      'road_name_suffix': null,
      'route_name_body': null,
      'route_name_number': null,
      'route_name_alpha': null,
      'route_name_suffix': null,
      'full_road_name_ascii': 'Korari Street',
      'road_name_label_ascii': 'Korari St',
      'road_name_body_ascii': 'Korari'
    },
    'id': 115264
  },
  {
    'geometry': {
      'type': 'MultiLineString',
      'coordinates': [
        [
          [
            174.7571173833,
            -36.8672852833
          ],
          [
            174.75742935,
            -36.8677294
          ]
        ],
        [
          [
            174.7568166667,
            -36.8668776
          ],
          [
            174.7568804833,
            -36.8669480167
          ],
          [
            174.7571173833,
            -36.8672852833
          ]
        ]
      ]
    },
    'distance': 106,
    'type': 'Feature',
    'properties': {
      'road_id': 1823951,
      'geometry_class': 'Addressing Road',
      'road_type': 'Unknown',
      'road_name_class': 'Road',
      'full_road_name': 'Ngahura Street',
      'road_name_label': 'Ngahura St',
      'road_name_prefix': null,
      'road_name_body': 'Ngahura',
      'road_name_type': 'Street',
      'road_name_suffix': null,
      'route_name_body': null,
      'route_name_number': null,
      'route_name_alpha': null,
      'route_name_suffix': null,
      'full_road_name_ascii': 'Ngahura Street',
      'road_name_label_ascii': 'Ngahura St',
      'road_name_body_ascii': 'Ngahura'
    },
    'id': 114794
  }
]
