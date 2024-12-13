export const mockData = {
  dashboard: {
    summaryMetrics: [
      { metric: 'Sentiment Ratio(+ve|-ve)', value: 15 },
      { metric: 'Active Users', value: 8760 },
      { metric: 'Engagement Rate', value: 0.35 },
      { metric: 'Reputation Index', value: 0.45 }
    ]
  },
  mockCampaignActivity: [
    {
      id: 123456,
      title: 'Winter Sale Campaign',
      status: 'Active',
      subtasks: [
        { id: 84522, title: 'Sub 1', isCompleted: false },
        { id: 26558, title: 'Sub 2', isCompleted: true },
        { id: 50122, title: 'Sub 3', isCompleted: false }
      ],
      description: 'Desc 1',
      lastUpdated: '2024-11-10'
    },
    {
      id: 1758950,
      title: 'Black Friday Promotion',
      subtasks: [
        { id: 80056, title: 'Sub 1', isCompleted: false },
        { id: 90950, title: 'Sub 2', isCompleted: true },
        { id: 80200, title: 'Sub 3', isCompleted: false }
      ],
      status: 'Completed',
      description: 'Desc 2',
      lastUpdated: '2024-11-05'
    },
    {
      id: 1856205,
      title: 'Cyber Monday Deals',
      status: 'Todo',
      subtasks: [
        { id: 15652, title: 'Sub 1', isCompleted: false },
        { id: 25620, title: 'Sub 2', isCompleted: true },
        { id: 15320, title: 'Sub 3', isCompleted: false }
      ],
      description: 'Desc 3',
      lastUpdated: '2024-11-15'
    },
    {
      id: 256552,
      title: 'Summer Sale',
      status: 'Completed',
      subtasks: [
        { id: 15652, title: 'Sub 1', isCompleted: false },
        { id: 25620, title: 'Sub 2', isCompleted: true },
        { id: 15320, title: 'Sub 3', isCompleted: false }
      ],
      description: 'Desc 3',
      lastUpdated: '2024-11-14'
    },
    {
      id: 202556,
      title: 'Mask Sale',
      status: 'Todo',
      subtasks: [
        { id: 15652, title: 'Sub 1', isCompleted: false },
        { id: 25620, title: 'Sub 2', isCompleted: true },
        { id: 15320, title: 'Sub 3', isCompleted: false }
      ],
      description: 'Desc 5',
      lastUpdated: '2024-11-08'
    },
    {
      id: 45252,
      title: 'Hallowen Sale',
      status: 'Todo',
      subtasks: [
        { id: 15652, title: 'Sub 1', isCompleted: false },
        { id: 25620, title: 'Sub 2', isCompleted: true },
        { id: 15320, title: 'Sub 3', isCompleted: false }
      ],
      description: 'Offload',
      lastUpdated: '2024-11-04'
    }
  ],
  audienceAnalysis: {
    demographics: [
      { category: '18-24', percentage: 25 },
      { category: '25-34', percentage: 40 },
      { category: '35-44', percentage: 20 },
      { category: '45-54', percentage: 10 },
      { category: '55+', percentage: 5 }
    ],
    audienceGrowth: [
      { date: '2024-11-01', newUsers: 120 },
      { date: '2024-11-02', newUsers: 150 },
      { date: '2024-11-03', newUsers: 180 },
      { date: '2024-11-04', newUsers: 200 }
    ],
    engagementByDemographics: [
      { category: '18-24', engagementRate: 0.5 },
      { category: '25-34', engagementRate: 0.6 },
      { category: '35-44', engagementRate: 0.4 },
      { category: '45-54', engagementRate: 0.3 },
      { category: '55+', engagementRate: 0.2 }
    ]
  },
  sentimentAnalysis: {
    sentimentDistribution: [
      { sentiment: 'Positive', count: 3200 },
      { sentiment: 'Neutral', count: 1200 },
      { sentiment: 'Negative', count: 800 }
    ],
    sentimentOverTime: [
      { date: '2024-11-01', positive: 300, neutral: 120, negative: 80 },
      { date: '2024-11-02', positive: 350, neutral: 100, negative: 90 },
      { date: '2024-11-03', positive: 400, neutral: 130, negative: 70 }
    ],
    wordCloud: [
      { word: 'Excellent', count: 150 },
      { word: 'Great', count: 140 },
      { word: 'Bad', count: 80 },
      { word: 'Average', count: 100 },
      { word: 'Terrible', count: 50 }
    ]
  },
  geographicalView: {
    regionalPerformance: [
      { region: 'North America', value: 5000 },
      { region: 'Europe', value: 4500 },
      { region: 'Asia', value: 4000 },
      { region: 'South America', value: 2500 },
      { region: 'Africa', value: 3500 } // Increased to reflect more detailed data
    ],
    heatmapData: [
      {
        id: 'AFG',
        value: 520600
      },
      {
        id: 'AGO',
        value: 949905
      },
      {
        id: 'ALB',
        value: 329910
      },
      {
        id: 'ARE',
        value: 675484
      },
      {
        id: 'ARG',
        value: 432239
      },
      {
        id: 'ARM',
        value: 288305
      },
      {
        id: 'ATA',
        value: 415648
      },
      {
        id: 'ATF',
        value: 665159
      },
      {
        id: 'AUT',
        value: 798526
      },
      {
        id: 'AZE',
        value: 481678
      },
      {
        id: 'BDI',
        value: 496457
      },
      {
        id: 'BEL',
        value: 252276
      },
      {
        id: 'BEN',
        value: 440315
      },
      {
        id: 'BFA',
        value: 343752
      },
      {
        id: 'BGD',
        value: 920203
      },
      {
        id: 'BGR',
        value: 261196
      },
      {
        id: 'BHS',
        value: 421551
      },
      {
        id: 'BIH',
        value: 974745
      },
      {
        id: 'BLR',
        value: 349288
      },
      {
        id: 'BLZ',
        value: 305983
      },
      {
        id: 'BOL',
        value: 430840
      },
      {
        id: 'BRN',
        value: 345666
      },
      {
        id: 'BTN',
        value: 649678
      },
      {
        id: 'BWA',
        value: 319392
      },
      {
        id: 'CAF',
        value: 722549
      },
      {
        id: 'CAN',
        value: 332843
      },
      {
        id: 'CHE',
        value: 122159
      },
      {
        id: 'CHL',
        value: 811736
      },
      {
        id: 'CHN',
        value: 593604
      },
      {
        id: 'CIV',
        value: 143219
      },
      {
        id: 'CMR',
        value: 630627
      },
      {
        id: 'COG',
        value: 498556
      },
      {
        id: 'COL',
        value: 660527
      },
      {
        id: 'CRI',
        value: 60262
      },
      {
        id: 'CUB',
        value: 177870
      },
      {
        id: '-99',
        value: 463208
      },
      {
        id: 'CYP',
        value: 945909
      },
      {
        id: 'CZE',
        value: 500109
      },
      {
        id: 'DEU',
        value: 63345
      },
      {
        id: 'DJI',
        value: 634523
      },
      {
        id: 'DNK',
        value: 731068
      },
      {
        id: 'DOM',
        value: 262538
      },
      {
        id: 'DZA',
        value: 760695
      },
      {
        id: 'ECU',
        value: 301263
      },
      {
        id: 'EGY',
        value: 148475
      },
      {
        id: 'ERI',
        value: 939504
      },
      {
        id: 'ESP',
        value: 706050
      },
      {
        id: 'EST',
        value: 977015
      },
      {
        id: 'ETH',
        value: 461734
      },
      {
        id: 'FIN',
        value: 22800
      },
      {
        id: 'FJI',
        value: 18985
      },
      {
        id: 'FLK',
        value: 64986
      },
      {
        id: 'FRA',
        value: 447457
      },
      {
        id: 'GAB',
        value: 669675
      },
      {
        id: 'GBR',
        value: 757120
      },
      {
        id: 'GEO',
        value: 158702
      },
      {
        id: 'GHA',
        value: 893180
      },
      {
        id: 'GIN',
        value: 877288
      },
      {
        id: 'GMB',
        value: 724530
      },
      {
        id: 'GNB',
        value: 387753
      },
      {
        id: 'GNQ',
        value: 706118
      },
      {
        id: 'GRC',
        value: 377796
      },
      {
        id: 'GTM',
        value: 66890
      },
      {
        id: 'GUY',
        value: 719300
      },
      {
        id: 'HND',
        value: 739590
      },
      {
        id: 'HRV',
        value: 929467
      },
      {
        id: 'HTI',
        value: 538961
      },
      {
        id: 'HUN',
        value: 146095
      },
      {
        id: 'IDN',
        value: 490681
      },
      {
        id: 'IND',
        value: 549818
      },
      {
        id: 'IRL',
        value: 630163
      },
      {
        id: 'IRN',
        value: 596921
      },
      {
        id: 'IRQ',
        value: 767023
      },
      {
        id: 'ISL',
        value: 478682
      },
      {
        id: 'ISR',
        value: 963688
      },
      {
        id: 'ITA',
        value: 393089
      },
      {
        id: 'JAM',
        value: 83173
      },
      {
        id: 'JOR',
        value: 52005
      },
      {
        id: 'JPN',
        value: 199174
      },
      {
        id: 'KAZ',
        value: 181424
      },
      {
        id: 'KEN',
        value: 60946
      },
      {
        id: 'KGZ',
        value: 432478
      },
      {
        id: 'KHM',
        value: 254461
      },
      {
        id: 'OSA',
        value: 942447
      },
      {
        id: 'KWT',
        value: 414413
      },
      {
        id: 'LAO',
        value: 448339
      },
      {
        id: 'LBN',
        value: 620090
      },
      {
        id: 'LBR',
        value: 435950
      },
      {
        id: 'LBY',
        value: 75091
      },
      {
        id: 'LKA',
        value: 595124
      },
      {
        id: 'LSO',
        value: 483524
      },
      {
        id: 'LTU',
        value: 867357
      },
      {
        id: 'LUX',
        value: 689172
      },
      {
        id: 'LVA',
        value: 742980
      },
      {
        id: 'MAR',
        value: 236538
      },
      {
        id: 'MDA',
        value: 926836
      },
      {
        id: 'MDG',
        value: 840840
      },
      {
        id: 'MEX',
        value: 353910
      },
      {
        id: 'MKD',
        value: 505842
      },
      {
        id: 'MLI',
        value: 286082
      },
      {
        id: 'MMR',
        value: 915544
      },
      {
        id: 'MNE',
        value: 609500
      },
      {
        id: 'MNG',
        value: 410428
      },
      {
        id: 'MOZ',
        value: 32868
      },
      {
        id: 'MRT',
        value: 375671
      },
      {
        id: 'MWI',
        value: 591935
      },
      {
        id: 'MYS',
        value: 991644
      },
      {
        id: 'NAM',
        value: 701897
      },
      {
        id: 'NCL',
        value: 144098
      },
      {
        id: 'NER',
        value: 312944
      },
      {
        id: 'NGA',
        value: 862877
      },
      {
        id: 'NIC',
        value: 90831
      },
      {
        id: 'NLD',
        value: 281879
      },
      {
        id: 'NOR',
        value: 224537
      },
      {
        id: 'NPL',
        value: 322331
      },
      {
        id: 'NZL',
        value: 86615
      },
      {
        id: 'OMN',
        value: 707881
      },
      {
        id: 'PAK',
        value: 158577
      },
      {
        id: 'PAN',
        value: 738579
      },
      {
        id: 'PER',
        value: 248751
      },
      {
        id: 'PHL',
        value: 557292
      },
      {
        id: 'PNG',
        value: 516874
      },
      {
        id: 'POL',
        value: 682137
      },
      {
        id: 'PRI',
        value: 957399
      },
      {
        id: 'PRT',
        value: 846430
      },
      {
        id: 'PRY',
        value: 720555
      },
      {
        id: 'QAT',
        value: 478726
      },
      {
        id: 'ROU',
        value: 259318
      },
      {
        id: 'RUS',
        value: 268735
      },
      {
        id: 'RWA',
        value: 136781
      },
      {
        id: 'ESH',
        value: 151957
      },
      {
        id: 'SAU',
        value: 111821
      },
      {
        id: 'SDN',
        value: 927112
      },
      {
        id: 'SDS',
        value: 966473
      },
      {
        id: 'SEN',
        value: 158085
      },
      {
        id: 'SLB',
        value: 178389
      },
      {
        id: 'SLE',
        value: 528433
      },
      {
        id: 'SLV',
        value: 353467
      },
      {
        id: 'ABV',
        value: 251
      },
      {
        id: 'SOM',
        value: 445243
      },
      {
        id: 'SRB',
        value: 202402
      },
      {
        id: 'SUR',
        value: 972121
      },
      {
        id: 'SVK',
        value: 319923
      },
      {
        id: 'SVN',
        value: 728766
      },
      {
        id: 'SWZ',
        value: 379669
      },
      {
        id: 'SYR',
        value: 16221
      },
      {
        id: 'TCD',
        value: 101273
      },
      {
        id: 'TGO',
        value: 498411
      },
      {
        id: 'THA',
        value: 506906
      },
      {
        id: 'TJK',
        value: 613093
      },
      {
        id: 'TKM',
        value: 327016
      },
      {
        id: 'TLS',
        value: 607972
      },
      {
        id: 'TTO',
        value: 936365
      },
      {
        id: 'TUN',
        value: 898416
      },
      {
        id: 'TUR',
        value: 237783
      },
      {
        id: 'TWN',
        value: 878213
      },
      {
        id: 'TZA',
        value: 442174
      },
      {
        id: 'UGA',
        value: 720710
      },
      {
        id: 'UKR',
        value: 74172
      },
      {
        id: 'URY',
        value: 753177
      },
      {
        id: 'USA',
        value: 658725
      },
      {
        id: 'UZB',
        value: 550313
      },
      {
        id: 'VEN',
        value: 707492
      },
      {
        id: 'VNM',
        value: 538907
      },
      {
        id: 'VUT',
        value: 650646
      },
      {
        id: 'PSE',
        value: 476078
      },
      {
        id: 'YEM',
        value: 957751
      },
      {
        id: 'ZAF',
        value: 836949
      },
      {
        id: 'ZMB',
        value: 714503
      },
      {
        id: 'ZWE',
        value: 405217
      },
      {
        id: 'KOR',
        value: 171135
      }
    ],
    locationsInSouthAfrica: [
      { location: 'Johannesburg', value: 200 },
      { location: 'Cape Town', value: 180 },
      { location: 'Durban', value: 150 },
      { location: 'Pretoria', value: 100 },
      { location: 'Port Elizabeth', value: 90 },
      { location: 'Bloemfontein', value: 70 },
      { location: 'East London', value: 60 },
      { location: 'Polokwane', value: 50 },
      { location: 'Nelspruit', value: 45 },
      { location: 'Kimberley', value: 40 }
    ]
  },

  trendingTopics: {
    popularityTrend: [
      {
        topic: 'AI',
        dataPoints: [
          {
            date: '2023-01-01',
            value: 52
          },
          {
            date: '2023-01-02',
            value: 55
          },
          {
            date: '2023-01-03',
            value: 119
          },
          {
            date: '2023-01-04',
            value: 114
          },
          {
            date: '2023-01-05',
            value: 144
          },
          {
            date: '2023-01-06',
            value: 113
          },
          {
            date: '2023-01-07',
            value: 142
          },
          {
            date: '2023-01-08',
            value: 149
          },
          {
            date: '2023-01-09',
            value: 148
          },
          {
            date: '2023-01-10',
            value: 97
          },
          {
            date: '2023-01-11',
            value: 106
          },
          {
            date: '2023-01-12',
            value: 88
          },
          {
            date: '2023-01-13',
            value: 94
          },
          {
            date: '2023-01-14',
            value: 150
          },
          {
            date: '2023-01-15',
            value: 125
          },
          {
            date: '2023-01-16',
            value: 55
          },
          {
            date: '2023-01-17',
            value: 137
          },
          {
            date: '2023-01-18',
            value: 83
          },
          {
            date: '2023-01-19',
            value: 86
          },
          {
            date: '2023-01-20',
            value: 87
          },
          {
            date: '2023-01-21',
            value: 110
          },
          {
            date: '2023-01-22',
            value: 131
          },
          {
            date: '2023-01-23',
            value: 149
          },
          {
            date: '2023-01-24',
            value: 51
          },
          {
            date: '2023-01-25',
            value: 133
          },
          {
            date: '2023-01-26',
            value: 76
          },
          {
            date: '2023-01-27',
            value: 87
          },
          {
            date: '2023-01-28',
            value: 69
          },
          {
            date: '2023-01-29',
            value: 91
          },
          {
            date: '2023-01-30',
            value: 101
          },
          {
            date: '2023-01-31',
            value: 104
          },
          {
            date: '2023-02-01',
            value: 100
          },
          {
            date: '2023-02-02',
            value: 88
          },
          {
            date: '2023-02-03',
            value: 103
          },
          {
            date: '2023-02-04',
            value: 106
          },
          {
            date: '2023-02-05',
            value: 69
          },
          {
            date: '2023-02-06',
            value: 125
          },
          {
            date: '2023-02-07',
            value: 104
          },
          {
            date: '2023-02-08',
            value: 96
          },
          {
            date: '2023-02-09',
            value: 135
          },
          {
            date: '2023-02-10',
            value: 127
          },
          {
            date: '2023-02-11',
            value: 132
          },
          {
            date: '2023-02-12',
            value: 76
          },
          {
            date: '2023-02-13',
            value: 86
          },
          {
            date: '2023-02-14',
            value: 55
          },
          {
            date: '2023-02-15',
            value: 113
          },
          {
            date: '2023-02-16',
            value: 111
          },
          {
            date: '2023-02-17',
            value: 142
          },
          {
            date: '2023-02-18',
            value: 143
          },
          {
            date: '2023-02-19',
            value: 108
          },
          {
            date: '2023-02-20',
            value: 59
          },
          {
            date: '2023-02-21',
            value: 60
          },
          {
            date: '2023-02-22',
            value: 58
          },
          {
            date: '2023-02-23',
            value: 108
          },
          {
            date: '2023-02-24',
            value: 136
          },
          {
            date: '2023-02-25',
            value: 66
          },
          {
            date: '2023-02-26',
            value: 81
          },
          {
            date: '2023-02-27',
            value: 83
          },
          {
            date: '2023-02-28',
            value: 90
          },
          {
            date: '2023-03-01',
            value: 124
          },
          {
            date: '2023-03-02',
            value: 141
          },
          {
            date: '2023-03-03',
            value: 97
          },
          {
            date: '2023-03-04',
            value: 54
          },
          {
            date: '2023-03-05',
            value: 107
          },
          {
            date: '2023-03-06',
            value: 65
          },
          {
            date: '2023-03-07',
            value: 138
          },
          {
            date: '2023-03-08',
            value: 132
          },
          {
            date: '2023-03-09',
            value: 133
          },
          {
            date: '2023-03-10',
            value: 113
          },
          {
            date: '2023-03-11',
            value: 111
          },
          {
            date: '2023-03-12',
            value: 81
          },
          {
            date: '2023-03-13',
            value: 79
          },
          {
            date: '2023-03-14',
            value: 148
          },
          {
            date: '2023-03-15',
            value: 84
          },
          {
            date: '2023-03-16',
            value: 139
          },
          {
            date: '2023-03-17',
            value: 93
          },
          {
            date: '2023-03-18',
            value: 91
          },
          {
            date: '2023-03-19',
            value: 105
          },
          {
            date: '2023-03-20',
            value: 95
          },
          {
            date: '2023-03-21',
            value: 67
          },
          {
            date: '2023-03-22',
            value: 132
          },
          {
            date: '2023-03-23',
            value: 132
          },
          {
            date: '2023-03-24',
            value: 60
          },
          {
            date: '2023-03-25',
            value: 55
          },
          {
            date: '2023-03-26',
            value: 140
          },
          {
            date: '2023-03-27',
            value: 68
          },
          {
            date: '2023-03-28',
            value: 101
          },
          {
            date: '2023-03-29',
            value: 127
          },
          {
            date: '2023-03-30',
            value: 116
          },
          {
            date: '2023-03-31',
            value: 95
          },
          {
            date: '2023-04-01',
            value: 79
          },
          {
            date: '2023-04-02',
            value: 68
          },
          {
            date: '2023-04-03',
            value: 58
          },
          {
            date: '2023-04-04',
            value: 147
          },
          {
            date: '2023-04-05',
            value: 142
          },
          {
            date: '2023-04-06',
            value: 108
          },
          {
            date: '2023-04-07',
            value: 52
          },
          {
            date: '2023-04-08',
            value: 110
          },
          {
            date: '2023-04-09',
            value: 70
          },
          {
            date: '2023-04-10',
            value: 109
          },
          {
            date: '2023-04-11',
            value: 107
          },
          {
            date: '2023-04-12',
            value: 55
          },
          {
            date: '2023-04-13',
            value: 89
          },
          {
            date: '2023-04-14',
            value: 119
          },
          {
            date: '2023-04-15',
            value: 58
          },
          {
            date: '2023-04-16',
            value: 107
          },
          {
            date: '2023-04-17',
            value: 80
          },
          {
            date: '2023-04-18',
            value: 103
          },
          {
            date: '2023-04-19',
            value: 130
          },
          {
            date: '2023-04-20',
            value: 148
          },
          {
            date: '2023-04-21',
            value: 107
          },
          {
            date: '2023-04-22',
            value: 93
          },
          {
            date: '2023-04-23',
            value: 63
          },
          {
            date: '2023-04-24',
            value: 110
          },
          {
            date: '2023-04-25',
            value: 61
          },
          {
            date: '2023-04-26',
            value: 97
          },
          {
            date: '2023-04-27',
            value: 141
          },
          {
            date: '2023-04-28',
            value: 138
          },
          {
            date: '2023-04-29',
            value: 100
          },
          {
            date: '2023-04-30',
            value: 86
          },
          {
            date: '2023-05-01',
            value: 57
          },
          {
            date: '2023-05-02',
            value: 94
          },
          {
            date: '2023-05-03',
            value: 147
          },
          {
            date: '2023-05-04',
            value: 104
          },
          {
            date: '2023-05-05',
            value: 150
          },
          {
            date: '2023-05-06',
            value: 109
          },
          {
            date: '2023-05-07',
            value: 79
          },
          {
            date: '2023-05-08',
            value: 141
          },
          {
            date: '2023-05-09',
            value: 97
          },
          {
            date: '2023-05-10',
            value: 120
          },
          {
            date: '2023-05-11',
            value: 63
          },
          {
            date: '2023-05-12',
            value: 107
          },
          {
            date: '2023-05-13',
            value: 130
          },
          {
            date: '2023-05-14',
            value: 140
          },
          {
            date: '2023-05-15',
            value: 73
          },
          {
            date: '2023-05-16',
            value: 84
          },
          {
            date: '2023-05-17',
            value: 145
          },
          {
            date: '2023-05-18',
            value: 106
          },
          {
            date: '2023-05-19',
            value: 69
          },
          {
            date: '2023-05-20',
            value: 87
          },
          {
            date: '2023-05-21',
            value: 60
          },
          {
            date: '2023-05-22',
            value: 104
          },
          {
            date: '2023-05-23',
            value: 96
          },
          {
            date: '2023-05-24',
            value: 102
          },
          {
            date: '2023-05-25',
            value: 85
          },
          {
            date: '2023-05-26',
            value: 50
          },
          {
            date: '2023-05-27',
            value: 117
          },
          {
            date: '2023-05-28',
            value: 87
          },
          {
            date: '2023-05-29',
            value: 145
          },
          {
            date: '2023-05-30',
            value: 90
          },
          {
            date: '2023-05-31',
            value: 147
          },
          {
            date: '2023-06-01',
            value: 81
          },
          {
            date: '2023-06-02',
            value: 86
          },
          {
            date: '2023-06-03',
            value: 128
          },
          {
            date: '2023-06-04',
            value: 140
          },
          {
            date: '2023-06-05',
            value: 119
          },
          {
            date: '2023-06-06',
            value: 110
          },
          {
            date: '2023-06-07',
            value: 135
          },
          {
            date: '2023-06-08',
            value: 150
          },
          {
            date: '2023-06-09',
            value: 119
          },
          {
            date: '2023-06-10',
            value: 104
          },
          {
            date: '2023-06-11',
            value: 76
          },
          {
            date: '2023-06-12',
            value: 74
          },
          {
            date: '2023-06-13',
            value: 90
          },
          {
            date: '2023-06-14',
            value: 140
          },
          {
            date: '2023-06-15',
            value: 53
          },
          {
            date: '2023-06-16',
            value: 86
          },
          {
            date: '2023-06-17',
            value: 91
          },
          {
            date: '2023-06-18',
            value: 116
          },
          {
            date: '2023-06-19',
            value: 101
          },
          {
            date: '2023-06-20',
            value: 83
          },
          {
            date: '2023-06-21',
            value: 60
          },
          {
            date: '2023-06-22',
            value: 137
          },
          {
            date: '2023-06-23',
            value: 134
          },
          {
            date: '2023-06-24',
            value: 70
          },
          {
            date: '2023-06-25',
            value: 100
          },
          {
            date: '2023-06-26',
            value: 105
          },
          {
            date: '2023-06-27',
            value: 98
          },
          {
            date: '2023-06-28',
            value: 90
          },
          {
            date: '2023-06-29',
            value: 62
          },
          {
            date: '2023-06-30',
            value: 52
          },
          {
            date: '2023-07-01',
            value: 112
          },
          {
            date: '2023-07-02',
            value: 133
          },
          {
            date: '2023-07-03',
            value: 123
          },
          {
            date: '2023-07-04',
            value: 105
          },
          {
            date: '2023-07-05',
            value: 121
          },
          {
            date: '2023-07-06',
            value: 96
          },
          {
            date: '2023-07-07',
            value: 79
          },
          {
            date: '2023-07-08',
            value: 122
          },
          {
            date: '2023-07-09',
            value: 76
          },
          {
            date: '2023-07-10',
            value: 86
          },
          {
            date: '2023-07-11',
            value: 92
          },
          {
            date: '2023-07-12',
            value: 61
          },
          {
            date: '2023-07-13',
            value: 108
          },
          {
            date: '2023-07-14',
            value: 126
          },
          {
            date: '2023-07-15',
            value: 129
          },
          {
            date: '2023-07-16',
            value: 69
          },
          {
            date: '2023-07-17',
            value: 123
          },
          {
            date: '2023-07-18',
            value: 141
          },
          {
            date: '2023-07-19',
            value: 130
          },
          {
            date: '2023-07-20',
            value: 54
          },
          {
            date: '2023-07-21',
            value: 99
          },
          {
            date: '2023-07-22',
            value: 149
          },
          {
            date: '2023-07-23',
            value: 95
          },
          {
            date: '2023-07-24',
            value: 117
          },
          {
            date: '2023-07-25',
            value: 88
          },
          {
            date: '2023-07-26',
            value: 136
          },
          {
            date: '2023-07-27',
            value: 101
          },
          {
            date: '2023-07-28',
            value: 148
          },
          {
            date: '2023-07-29',
            value: 50
          },
          {
            date: '2023-07-30',
            value: 128
          },
          {
            date: '2023-07-31',
            value: 101
          },
          {
            date: '2023-08-01',
            value: 134
          },
          {
            date: '2023-08-02',
            value: 122
          },
          {
            date: '2023-08-03',
            value: 143
          },
          {
            date: '2023-08-04',
            value: 80
          },
          {
            date: '2023-08-05',
            value: 57
          },
          {
            date: '2023-08-06',
            value: 92
          },
          {
            date: '2023-08-07',
            value: 76
          },
          {
            date: '2023-08-08',
            value: 75
          },
          {
            date: '2023-08-09',
            value: 55
          },
          {
            date: '2023-08-10',
            value: 55
          },
          {
            date: '2023-08-11',
            value: 85
          },
          {
            date: '2023-08-12',
            value: 73
          },
          {
            date: '2023-08-13',
            value: 107
          },
          {
            date: '2023-08-14',
            value: 67
          },
          {
            date: '2023-08-15',
            value: 144
          },
          {
            date: '2023-08-16',
            value: 120
          },
          {
            date: '2023-08-17',
            value: 137
          },
          {
            date: '2023-08-18',
            value: 134
          },
          {
            date: '2023-08-19',
            value: 127
          },
          {
            date: '2023-08-20',
            value: 99
          },
          {
            date: '2023-08-21',
            value: 97
          },
          {
            date: '2023-08-22',
            value: 144
          },
          {
            date: '2023-08-23',
            value: 70
          },
          {
            date: '2023-08-24',
            value: 102
          },
          {
            date: '2023-08-25',
            value: 119
          },
          {
            date: '2023-08-26',
            value: 80
          },
          {
            date: '2023-08-27',
            value: 98
          },
          {
            date: '2023-08-28',
            value: 140
          },
          {
            date: '2023-08-29',
            value: 145
          },
          {
            date: '2023-08-30',
            value: 89
          },
          {
            date: '2023-08-31',
            value: 58
          },
          {
            date: '2023-09-01',
            value: 122
          },
          {
            date: '2023-09-02',
            value: 52
          },
          {
            date: '2023-09-03',
            value: 90
          },
          {
            date: '2023-09-04',
            value: 80
          },
          {
            date: '2023-09-05',
            value: 55
          },
          {
            date: '2023-09-06',
            value: 150
          },
          {
            date: '2023-09-07',
            value: 70
          },
          {
            date: '2023-09-08',
            value: 95
          },
          {
            date: '2023-09-09',
            value: 149
          },
          {
            date: '2023-09-10',
            value: 84
          },
          {
            date: '2023-09-11',
            value: 98
          },
          {
            date: '2023-09-12',
            value: 127
          },
          {
            date: '2023-09-13',
            value: 99
          },
          {
            date: '2023-09-14',
            value: 86
          },
          {
            date: '2023-09-15',
            value: 100
          },
          {
            date: '2023-09-16',
            value: 112
          },
          {
            date: '2023-09-17',
            value: 100
          },
          {
            date: '2023-09-18',
            value: 92
          },
          {
            date: '2023-09-19',
            value: 52
          },
          {
            date: '2023-09-20',
            value: 100
          },
          {
            date: '2023-09-21',
            value: 117
          },
          {
            date: '2023-09-22',
            value: 103
          },
          {
            date: '2023-09-23',
            value: 122
          },
          {
            date: '2023-09-24',
            value: 80
          },
          {
            date: '2023-09-25',
            value: 113
          },
          {
            date: '2023-09-26',
            value: 115
          },
          {
            date: '2023-09-27',
            value: 99
          },
          {
            date: '2023-09-28',
            value: 144
          },
          {
            date: '2023-09-29',
            value: 56
          },
          {
            date: '2023-09-30',
            value: 137
          },
          {
            date: '2023-10-01',
            value: 91
          },
          {
            date: '2023-10-02',
            value: 116
          },
          {
            date: '2023-10-03',
            value: 82
          },
          {
            date: '2023-10-04',
            value: 115
          },
          {
            date: '2023-10-05',
            value: 121
          },
          {
            date: '2023-10-06',
            value: 54
          },
          {
            date: '2023-10-07',
            value: 133
          },
          {
            date: '2023-10-08',
            value: 143
          },
          {
            date: '2023-10-09',
            value: 132
          },
          {
            date: '2023-10-10',
            value: 127
          },
          {
            date: '2023-10-11',
            value: 78
          },
          {
            date: '2023-10-12',
            value: 128
          },
          {
            date: '2023-10-13',
            value: 140
          },
          {
            date: '2023-10-14',
            value: 127
          },
          {
            date: '2023-10-15',
            value: 99
          },
          {
            date: '2023-10-16',
            value: 90
          },
          {
            date: '2023-10-17',
            value: 95
          },
          {
            date: '2023-10-18',
            value: 148
          },
          {
            date: '2023-10-19',
            value: 147
          },
          {
            date: '2023-10-20',
            value: 68
          },
          {
            date: '2023-10-21',
            value: 115
          },
          {
            date: '2023-10-22',
            value: 147
          },
          {
            date: '2023-10-23',
            value: 112
          },
          {
            date: '2023-10-24',
            value: 96
          },
          {
            date: '2023-10-25',
            value: 56
          },
          {
            date: '2023-10-26',
            value: 54
          },
          {
            date: '2023-10-27',
            value: 63
          },
          {
            date: '2023-10-28',
            value: 77
          },
          {
            date: '2023-10-29',
            value: 59
          },
          {
            date: '2023-10-30',
            value: 74
          },
          {
            date: '2023-10-31',
            value: 145
          },
          {
            date: '2023-11-01',
            value: 55
          },
          {
            date: '2023-11-02',
            value: 67
          },
          {
            date: '2023-11-03',
            value: 123
          },
          {
            date: '2023-11-04',
            value: 137
          },
          {
            date: '2023-11-05',
            value: 98
          },
          {
            date: '2023-11-06',
            value: 53
          },
          {
            date: '2023-11-07',
            value: 115
          },
          {
            date: '2023-11-08',
            value: 132
          },
          {
            date: '2023-11-09',
            value: 116
          },
          {
            date: '2023-11-10',
            value: 146
          },
          {
            date: '2023-11-11',
            value: 123
          },
          {
            date: '2023-11-12',
            value: 64
          },
          {
            date: '2023-11-13',
            value: 73
          },
          {
            date: '2023-11-14',
            value: 88
          },
          {
            date: '2023-11-15',
            value: 88
          },
          {
            date: '2023-11-16',
            value: 95
          },
          {
            date: '2023-11-17',
            value: 75
          },
          {
            date: '2023-11-18',
            value: 141
          },
          {
            date: '2023-11-19',
            value: 58
          },
          {
            date: '2023-11-20',
            value: 107
          },
          {
            date: '2023-11-21',
            value: 68
          },
          {
            date: '2023-11-22',
            value: 91
          },
          {
            date: '2023-11-23',
            value: 75
          },
          {
            date: '2023-11-24',
            value: 52
          },
          {
            date: '2023-11-25',
            value: 73
          },
          {
            date: '2023-11-26',
            value: 73
          },
          {
            date: '2023-11-27',
            value: 88
          },
          {
            date: '2023-11-28',
            value: 72
          },
          {
            date: '2023-11-29',
            value: 137
          },
          {
            date: '2023-11-30',
            value: 135
          },
          {
            date: '2023-12-01',
            value: 132
          },
          {
            date: '2023-12-02',
            value: 66
          },
          {
            date: '2023-12-03',
            value: 91
          },
          {
            date: '2023-12-04',
            value: 74
          },
          {
            date: '2023-12-05',
            value: 132
          },
          {
            date: '2023-12-06',
            value: 103
          },
          {
            date: '2023-12-07',
            value: 134
          },
          {
            date: '2023-12-08',
            value: 130
          },
          {
            date: '2023-12-09',
            value: 128
          },
          {
            date: '2023-12-10',
            value: 82
          },
          {
            date: '2023-12-11',
            value: 136
          },
          {
            date: '2023-12-12',
            value: 132
          },
          {
            date: '2023-12-13',
            value: 57
          },
          {
            date: '2023-12-14',
            value: 79
          },
          {
            date: '2023-12-15',
            value: 145
          },
          {
            date: '2023-12-16',
            value: 144
          },
          {
            date: '2023-12-17',
            value: 55
          },
          {
            date: '2023-12-18',
            value: 68
          },
          {
            date: '2023-12-19',
            value: 113
          },
          {
            date: '2023-12-20',
            value: 147
          },
          {
            date: '2023-12-21',
            value: 148
          },
          {
            date: '2023-12-22',
            value: 78
          },
          {
            date: '2023-12-23',
            value: 71
          },
          {
            date: '2023-12-24',
            value: 97
          },
          {
            date: '2023-12-25',
            value: 56
          },
          {
            date: '2023-12-26',
            value: 104
          },
          {
            date: '2023-12-27',
            value: 130
          },
          {
            date: '2023-12-28',
            value: 93
          },
          {
            date: '2023-12-29',
            value: 107
          },
          {
            date: '2023-12-30',
            value: 54
          },
          {
            date: '2023-12-31',
            value: 148
          }
        ]
      },
      {
        topic: 'Machine Learning',
        dataPoints: [
          {
            date: '2023-01-01',
            value: 105
          },
          {
            date: '2023-01-02',
            value: 56
          },
          {
            date: '2023-01-03',
            value: 90
          },
          {
            date: '2023-01-04',
            value: 114
          },
          {
            date: '2023-01-05',
            value: 77
          },
          {
            date: '2023-01-06',
            value: 106
          },
          {
            date: '2023-01-07',
            value: 110
          },
          {
            date: '2023-01-08',
            value: 115
          },
          {
            date: '2023-01-09',
            value: 110
          },
          {
            date: '2023-01-10',
            value: 58
          },
          {
            date: '2023-01-11',
            value: 127
          },
          {
            date: '2023-01-12',
            value: 71
          },
          {
            date: '2023-01-13',
            value: 85
          },
          {
            date: '2023-01-14',
            value: 59
          },
          {
            date: '2023-01-15',
            value: 43
          },
          {
            date: '2023-01-16',
            value: 54
          },
          {
            date: '2023-01-17',
            value: 104
          },
          {
            date: '2023-01-18',
            value: 55
          },
          {
            date: '2023-01-19',
            value: 95
          },
          {
            date: '2023-01-20',
            value: 91
          },
          {
            date: '2023-01-21',
            value: 106
          },
          {
            date: '2023-01-22',
            value: 93
          },
          {
            date: '2023-01-23',
            value: 57
          },
          {
            date: '2023-01-24',
            value: 64
          },
          {
            date: '2023-01-25',
            value: 118
          },
          {
            date: '2023-01-26',
            value: 88
          },
          {
            date: '2023-01-27',
            value: 83
          },
          {
            date: '2023-01-28',
            value: 48
          },
          {
            date: '2023-01-29',
            value: 120
          },
          {
            date: '2023-01-30',
            value: 89
          },
          {
            date: '2023-01-31',
            value: 83
          },
          {
            date: '2023-02-01',
            value: 88
          },
          {
            date: '2023-02-02',
            value: 85
          },
          {
            date: '2023-02-03',
            value: 75
          },
          {
            date: '2023-02-04',
            value: 80
          },
          {
            date: '2023-02-05',
            value: 110
          },
          {
            date: '2023-02-06',
            value: 51
          },
          {
            date: '2023-02-07',
            value: 128
          },
          {
            date: '2023-02-08',
            value: 130
          },
          {
            date: '2023-02-09',
            value: 124
          },
          {
            date: '2023-02-10',
            value: 128
          },
          {
            date: '2023-02-11',
            value: 87
          },
          {
            date: '2023-02-12',
            value: 88
          },
          {
            date: '2023-02-13',
            value: 76
          },
          {
            date: '2023-02-14',
            value: 96
          },
          {
            date: '2023-02-15',
            value: 64
          },
          {
            date: '2023-02-16',
            value: 62
          },
          {
            date: '2023-02-17',
            value: 129
          },
          {
            date: '2023-02-18',
            value: 97
          },
          {
            date: '2023-02-19',
            value: 122
          },
          {
            date: '2023-02-20',
            value: 49
          },
          {
            date: '2023-02-21',
            value: 102
          },
          {
            date: '2023-02-22',
            value: 120
          },
          {
            date: '2023-02-23',
            value: 43
          },
          {
            date: '2023-02-24',
            value: 66
          },
          {
            date: '2023-02-25',
            value: 100
          },
          {
            date: '2023-02-26',
            value: 130
          },
          {
            date: '2023-02-27',
            value: 116
          },
          {
            date: '2023-02-28',
            value: 80
          },
          {
            date: '2023-03-01',
            value: 121
          },
          {
            date: '2023-03-02',
            value: 125
          },
          {
            date: '2023-03-03',
            value: 51
          },
          {
            date: '2023-03-04',
            value: 41
          },
          {
            date: '2023-03-05',
            value: 88
          },
          {
            date: '2023-03-06',
            value: 127
          },
          {
            date: '2023-03-07',
            value: 116
          },
          {
            date: '2023-03-08',
            value: 72
          },
          {
            date: '2023-03-09',
            value: 85
          },
          {
            date: '2023-03-10',
            value: 73
          },
          {
            date: '2023-03-11',
            value: 102
          },
          {
            date: '2023-03-12',
            value: 56
          },
          {
            date: '2023-03-13',
            value: 65
          },
          {
            date: '2023-03-14',
            value: 85
          },
          {
            date: '2023-03-15',
            value: 98
          },
          {
            date: '2023-03-16',
            value: 57
          },
          {
            date: '2023-03-17',
            value: 96
          },
          {
            date: '2023-03-18',
            value: 120
          },
          {
            date: '2023-03-19',
            value: 85
          },
          {
            date: '2023-03-20',
            value: 128
          },
          {
            date: '2023-03-21',
            value: 125
          },
          {
            date: '2023-03-22',
            value: 47
          },
          {
            date: '2023-03-23',
            value: 59
          },
          {
            date: '2023-03-24',
            value: 118
          },
          {
            date: '2023-03-25',
            value: 110
          },
          {
            date: '2023-03-26',
            value: 72
          },
          {
            date: '2023-03-27',
            value: 84
          },
          {
            date: '2023-03-28',
            value: 76
          },
          {
            date: '2023-03-29',
            value: 120
          },
          {
            date: '2023-03-30',
            value: 76
          },
          {
            date: '2023-03-31',
            value: 56
          },
          {
            date: '2023-04-01',
            value: 49
          },
          {
            date: '2023-04-02',
            value: 107
          },
          {
            date: '2023-04-03',
            value: 96
          },
          {
            date: '2023-04-04',
            value: 42
          },
          {
            date: '2023-04-05',
            value: 126
          },
          {
            date: '2023-04-06',
            value: 116
          },
          {
            date: '2023-04-07',
            value: 87
          },
          {
            date: '2023-04-08',
            value: 61
          },
          {
            date: '2023-04-09',
            value: 52
          },
          {
            date: '2023-04-10',
            value: 55
          },
          {
            date: '2023-04-11',
            value: 104
          },
          {
            date: '2023-04-12',
            value: 80
          },
          {
            date: '2023-04-13',
            value: 106
          },
          {
            date: '2023-04-14',
            value: 120
          },
          {
            date: '2023-04-15',
            value: 89
          },
          {
            date: '2023-04-16',
            value: 77
          },
          {
            date: '2023-04-17',
            value: 93
          },
          {
            date: '2023-04-18',
            value: 56
          },
          {
            date: '2023-04-19',
            value: 127
          },
          {
            date: '2023-04-20',
            value: 68
          },
          {
            date: '2023-04-21',
            value: 103
          },
          {
            date: '2023-04-22',
            value: 77
          },
          {
            date: '2023-04-23',
            value: 110
          },
          {
            date: '2023-04-24',
            value: 46
          },
          {
            date: '2023-04-25',
            value: 64
          },
          {
            date: '2023-04-26',
            value: 49
          },
          {
            date: '2023-04-27',
            value: 45
          },
          {
            date: '2023-04-28',
            value: 68
          },
          {
            date: '2023-04-29',
            value: 77
          },
          {
            date: '2023-04-30',
            value: 95
          },
          {
            date: '2023-05-01',
            value: 43
          },
          {
            date: '2023-05-02',
            value: 40
          },
          {
            date: '2023-05-03',
            value: 70
          },
          {
            date: '2023-05-04',
            value: 49
          },
          {
            date: '2023-05-05',
            value: 103
          },
          {
            date: '2023-05-06',
            value: 119
          },
          {
            date: '2023-05-07',
            value: 112
          },
          {
            date: '2023-05-08',
            value: 87
          },
          {
            date: '2023-05-09',
            value: 106
          },
          {
            date: '2023-05-10',
            value: 127
          },
          {
            date: '2023-05-11',
            value: 56
          },
          {
            date: '2023-05-12',
            value: 88
          },
          {
            date: '2023-05-13',
            value: 81
          },
          {
            date: '2023-05-14',
            value: 57
          },
          {
            date: '2023-05-15',
            value: 78
          },
          {
            date: '2023-05-16',
            value: 45
          },
          {
            date: '2023-05-17',
            value: 121
          },
          {
            date: '2023-05-18',
            value: 93
          },
          {
            date: '2023-05-19',
            value: 124
          },
          {
            date: '2023-05-20',
            value: 119
          },
          {
            date: '2023-05-21',
            value: 59
          },
          {
            date: '2023-05-22',
            value: 73
          },
          {
            date: '2023-05-23',
            value: 89
          },
          {
            date: '2023-05-24',
            value: 48
          },
          {
            date: '2023-05-25',
            value: 83
          },
          {
            date: '2023-05-26',
            value: 122
          },
          {
            date: '2023-05-27',
            value: 83
          },
          {
            date: '2023-05-28',
            value: 73
          },
          {
            date: '2023-05-29',
            value: 104
          },
          {
            date: '2023-05-30',
            value: 75
          },
          {
            date: '2023-05-31',
            value: 106
          },
          {
            date: '2023-06-01',
            value: 95
          },
          {
            date: '2023-06-02',
            value: 101
          },
          {
            date: '2023-06-03',
            value: 69
          },
          {
            date: '2023-06-04',
            value: 46
          },
          {
            date: '2023-06-05',
            value: 124
          },
          {
            date: '2023-06-06',
            value: 74
          },
          {
            date: '2023-06-07',
            value: 124
          },
          {
            date: '2023-06-08',
            value: 59
          },
          {
            date: '2023-06-09',
            value: 109
          },
          {
            date: '2023-06-10',
            value: 42
          },
          {
            date: '2023-06-11',
            value: 77
          },
          {
            date: '2023-06-12',
            value: 100
          },
          {
            date: '2023-06-13',
            value: 69
          },
          {
            date: '2023-06-14',
            value: 95
          },
          {
            date: '2023-06-15',
            value: 107
          },
          {
            date: '2023-06-16',
            value: 90
          },
          {
            date: '2023-06-17',
            value: 49
          },
          {
            date: '2023-06-18',
            value: 76
          },
          {
            date: '2023-06-19',
            value: 56
          },
          {
            date: '2023-06-20',
            value: 107
          },
          {
            date: '2023-06-21',
            value: 47
          },
          {
            date: '2023-06-22',
            value: 85
          },
          {
            date: '2023-06-23',
            value: 90
          },
          {
            date: '2023-06-24',
            value: 54
          },
          {
            date: '2023-06-25',
            value: 63
          },
          {
            date: '2023-06-26',
            value: 74
          },
          {
            date: '2023-06-27',
            value: 71
          },
          {
            date: '2023-06-28',
            value: 119
          },
          {
            date: '2023-06-29',
            value: 111
          },
          {
            date: '2023-06-30',
            value: 103
          },
          {
            date: '2023-07-01',
            value: 44
          },
          {
            date: '2023-07-02',
            value: 65
          },
          {
            date: '2023-07-03',
            value: 116
          },
          {
            date: '2023-07-04',
            value: 105
          },
          {
            date: '2023-07-05',
            value: 120
          },
          {
            date: '2023-07-06',
            value: 106
          },
          {
            date: '2023-07-07',
            value: 62
          },
          {
            date: '2023-07-08',
            value: 95
          },
          {
            date: '2023-07-09',
            value: 54
          },
          {
            date: '2023-07-10',
            value: 57
          },
          {
            date: '2023-07-11',
            value: 54
          },
          {
            date: '2023-07-12',
            value: 70
          },
          {
            date: '2023-07-13',
            value: 117
          },
          {
            date: '2023-07-14',
            value: 41
          },
          {
            date: '2023-07-15',
            value: 48
          },
          {
            date: '2023-07-16',
            value: 114
          },
          {
            date: '2023-07-17',
            value: 93
          },
          {
            date: '2023-07-18',
            value: 51
          },
          {
            date: '2023-07-19',
            value: 96
          },
          {
            date: '2023-07-20',
            value: 41
          },
          {
            date: '2023-07-21',
            value: 130
          },
          {
            date: '2023-07-22',
            value: 107
          },
          {
            date: '2023-07-23',
            value: 100
          },
          {
            date: '2023-07-24',
            value: 68
          },
          {
            date: '2023-07-25',
            value: 122
          },
          {
            date: '2023-07-26',
            value: 124
          },
          {
            date: '2023-07-27',
            value: 97
          },
          {
            date: '2023-07-28',
            value: 104
          },
          {
            date: '2023-07-29',
            value: 91
          },
          {
            date: '2023-07-30',
            value: 70
          },
          {
            date: '2023-07-31',
            value: 126
          },
          {
            date: '2023-08-01',
            value: 84
          },
          {
            date: '2023-08-02',
            value: 51
          },
          {
            date: '2023-08-03',
            value: 61
          },
          {
            date: '2023-08-04',
            value: 127
          },
          {
            date: '2023-08-05',
            value: 75
          },
          {
            date: '2023-08-06',
            value: 40
          },
          {
            date: '2023-08-07',
            value: 111
          },
          {
            date: '2023-08-08',
            value: 125
          },
          {
            date: '2023-08-09',
            value: 41
          },
          {
            date: '2023-08-10',
            value: 84
          },
          {
            date: '2023-08-11',
            value: 52
          },
          {
            date: '2023-08-12',
            value: 78
          },
          {
            date: '2023-08-13',
            value: 88
          },
          {
            date: '2023-08-14',
            value: 45
          },
          {
            date: '2023-08-15',
            value: 52
          },
          {
            date: '2023-08-16',
            value: 57
          },
          {
            date: '2023-08-17',
            value: 79
          },
          {
            date: '2023-08-18',
            value: 88
          },
          {
            date: '2023-08-19',
            value: 130
          },
          {
            date: '2023-08-20',
            value: 73
          },
          {
            date: '2023-08-21',
            value: 43
          },
          {
            date: '2023-08-22',
            value: 115
          },
          {
            date: '2023-08-23',
            value: 96
          },
          {
            date: '2023-08-24',
            value: 43
          },
          {
            date: '2023-08-25',
            value: 82
          },
          {
            date: '2023-08-26',
            value: 49
          },
          {
            date: '2023-08-27',
            value: 110
          },
          {
            date: '2023-08-28',
            value: 85
          },
          {
            date: '2023-08-29',
            value: 66
          },
          {
            date: '2023-08-30',
            value: 71
          },
          {
            date: '2023-08-31',
            value: 72
          },
          {
            date: '2023-09-01',
            value: 64
          },
          {
            date: '2023-09-02',
            value: 126
          },
          {
            date: '2023-09-03',
            value: 60
          },
          {
            date: '2023-09-04',
            value: 109
          },
          {
            date: '2023-09-05',
            value: 90
          },
          {
            date: '2023-09-06',
            value: 56
          },
          {
            date: '2023-09-07',
            value: 90
          },
          {
            date: '2023-09-08',
            value: 120
          },
          {
            date: '2023-09-09',
            value: 109
          },
          {
            date: '2023-09-10',
            value: 93
          },
          {
            date: '2023-09-11',
            value: 62
          },
          {
            date: '2023-09-12',
            value: 76
          },
          {
            date: '2023-09-13',
            value: 117
          },
          {
            date: '2023-09-14',
            value: 107
          },
          {
            date: '2023-09-15',
            value: 43
          },
          {
            date: '2023-09-16',
            value: 122
          },
          {
            date: '2023-09-17',
            value: 118
          },
          {
            date: '2023-09-18',
            value: 114
          },
          {
            date: '2023-09-19',
            value: 43
          },
          {
            date: '2023-09-20',
            value: 60
          },
          {
            date: '2023-09-21',
            value: 93
          },
          {
            date: '2023-09-22',
            value: 68
          },
          {
            date: '2023-09-23',
            value: 44
          },
          {
            date: '2023-09-24',
            value: 69
          },
          {
            date: '2023-09-25',
            value: 78
          },
          {
            date: '2023-09-26',
            value: 69
          },
          {
            date: '2023-09-27',
            value: 79
          },
          {
            date: '2023-09-28',
            value: 94
          },
          {
            date: '2023-09-29',
            value: 108
          },
          {
            date: '2023-09-30',
            value: 75
          },
          {
            date: '2023-10-01',
            value: 87
          },
          {
            date: '2023-10-02',
            value: 46
          },
          {
            date: '2023-10-03',
            value: 41
          },
          {
            date: '2023-10-04',
            value: 72
          },
          {
            date: '2023-10-05',
            value: 102
          },
          {
            date: '2023-10-06',
            value: 84
          },
          {
            date: '2023-10-07',
            value: 95
          },
          {
            date: '2023-10-08',
            value: 112
          },
          {
            date: '2023-10-09',
            value: 91
          },
          {
            date: '2023-10-10',
            value: 54
          },
          {
            date: '2023-10-11',
            value: 116
          },
          {
            date: '2023-10-12',
            value: 117
          },
          {
            date: '2023-10-13',
            value: 63
          },
          {
            date: '2023-10-14',
            value: 118
          },
          {
            date: '2023-10-15',
            value: 69
          },
          {
            date: '2023-10-16',
            value: 92
          },
          {
            date: '2023-10-17',
            value: 72
          },
          {
            date: '2023-10-18',
            value: 68
          },
          {
            date: '2023-10-19',
            value: 63
          },
          {
            date: '2023-10-20',
            value: 72
          },
          {
            date: '2023-10-21',
            value: 72
          },
          {
            date: '2023-10-22',
            value: 108
          },
          {
            date: '2023-10-23',
            value: 44
          },
          {
            date: '2023-10-24',
            value: 97
          },
          {
            date: '2023-10-25',
            value: 130
          },
          {
            date: '2023-10-26',
            value: 72
          },
          {
            date: '2023-10-27',
            value: 69
          },
          {
            date: '2023-10-28',
            value: 116
          },
          {
            date: '2023-10-29',
            value: 118
          },
          {
            date: '2023-10-30',
            value: 69
          },
          {
            date: '2023-10-31',
            value: 81
          },
          {
            date: '2023-11-01',
            value: 65
          },
          {
            date: '2023-11-02',
            value: 52
          },
          {
            date: '2023-11-03',
            value: 115
          },
          {
            date: '2023-11-04',
            value: 92
          },
          {
            date: '2023-11-05',
            value: 106
          },
          {
            date: '2023-11-06',
            value: 126
          },
          {
            date: '2023-11-07',
            value: 110
          },
          {
            date: '2023-11-08',
            value: 65
          },
          {
            date: '2023-11-09',
            value: 61
          },
          {
            date: '2023-11-10',
            value: 57
          },
          {
            date: '2023-11-11',
            value: 124
          },
          {
            date: '2023-11-12',
            value: 118
          },
          {
            date: '2023-11-13',
            value: 90
          },
          {
            date: '2023-11-14',
            value: 58
          },
          {
            date: '2023-11-15',
            value: 116
          },
          {
            date: '2023-11-16',
            value: 43
          },
          {
            date: '2023-11-17',
            value: 87
          },
          {
            date: '2023-11-18',
            value: 127
          },
          {
            date: '2023-11-19',
            value: 103
          },
          {
            date: '2023-11-20',
            value: 47
          },
          {
            date: '2023-11-21',
            value: 117
          },
          {
            date: '2023-11-22',
            value: 123
          },
          {
            date: '2023-11-23',
            value: 129
          },
          {
            date: '2023-11-24',
            value: 75
          },
          {
            date: '2023-11-25',
            value: 69
          },
          {
            date: '2023-11-26',
            value: 98
          },
          {
            date: '2023-11-27',
            value: 77
          },
          {
            date: '2023-11-28',
            value: 115
          },
          {
            date: '2023-11-29',
            value: 114
          },
          {
            date: '2023-11-30',
            value: 82
          },
          {
            date: '2023-12-01',
            value: 45
          },
          {
            date: '2023-12-02',
            value: 107
          },
          {
            date: '2023-12-03',
            value: 51
          },
          {
            date: '2023-12-04',
            value: 126
          },
          {
            date: '2023-12-05',
            value: 92
          },
          {
            date: '2023-12-06',
            value: 56
          },
          {
            date: '2023-12-07',
            value: 120
          },
          {
            date: '2023-12-08',
            value: 51
          },
          {
            date: '2023-12-09',
            value: 50
          },
          {
            date: '2023-12-10',
            value: 98
          },
          {
            date: '2023-12-11',
            value: 45
          },
          {
            date: '2023-12-12',
            value: 64
          },
          {
            date: '2023-12-13',
            value: 47
          },
          {
            date: '2023-12-14',
            value: 54
          },
          {
            date: '2023-12-15',
            value: 94
          },
          {
            date: '2023-12-16',
            value: 83
          },
          {
            date: '2023-12-17',
            value: 57
          },
          {
            date: '2023-12-18',
            value: 55
          },
          {
            date: '2023-12-19',
            value: 124
          },
          {
            date: '2023-12-20',
            value: 53
          },
          {
            date: '2023-12-21',
            value: 124
          },
          {
            date: '2023-12-22',
            value: 105
          },
          {
            date: '2023-12-23',
            value: 55
          },
          {
            date: '2023-12-24',
            value: 99
          },
          {
            date: '2023-12-25',
            value: 103
          },
          {
            date: '2023-12-26',
            value: 83
          },
          {
            date: '2023-12-27',
            value: 89
          },
          {
            date: '2023-12-28',
            value: 43
          },
          {
            date: '2023-12-29',
            value: 83
          },
          {
            date: '2023-12-30',
            value: 85
          },
          {
            date: '2023-12-31',
            value: 104
          }
        ]
      },
      {
        topic: 'Blockchain',
        dataPoints: [
          {
            date: '2023-01-01',
            value: 34
          },
          {
            date: '2023-01-02',
            value: 43
          },
          {
            date: '2023-01-03',
            value: 85
          },
          {
            date: '2023-01-04',
            value: 92
          },
          {
            date: '2023-01-05',
            value: 92
          },
          {
            date: '2023-01-06',
            value: 74
          },
          {
            date: '2023-01-07',
            value: 44
          },
          {
            date: '2023-01-08',
            value: 78
          },
          {
            date: '2023-01-09',
            value: 77
          },
          {
            date: '2023-01-10',
            value: 75
          },
          {
            date: '2023-01-11',
            value: 63
          },
          {
            date: '2023-01-12',
            value: 67
          },
          {
            date: '2023-01-13',
            value: 39
          },
          {
            date: '2023-01-14',
            value: 54
          },
          {
            date: '2023-01-15',
            value: 71
          },
          {
            date: '2023-01-16',
            value: 99
          },
          {
            date: '2023-01-17',
            value: 96
          },
          {
            date: '2023-01-18',
            value: 66
          },
          {
            date: '2023-01-19',
            value: 59
          },
          {
            date: '2023-01-20',
            value: 77
          },
          {
            date: '2023-01-21',
            value: 83
          },
          {
            date: '2023-01-22',
            value: 100
          },
          {
            date: '2023-01-23',
            value: 95
          },
          {
            date: '2023-01-24',
            value: 40
          },
          {
            date: '2023-01-25',
            value: 51
          },
          {
            date: '2023-01-26',
            value: 90
          },
          {
            date: '2023-01-27',
            value: 98
          },
          {
            date: '2023-01-28',
            value: 48
          },
          {
            date: '2023-01-29',
            value: 68
          },
          {
            date: '2023-01-30',
            value: 69
          },
          {
            date: '2023-01-31',
            value: 85
          },
          {
            date: '2023-02-01',
            value: 48
          },
          {
            date: '2023-02-02',
            value: 100
          },
          {
            date: '2023-02-03',
            value: 86
          },
          {
            date: '2023-02-04',
            value: 62
          },
          {
            date: '2023-02-05',
            value: 71
          },
          {
            date: '2023-02-06',
            value: 90
          },
          {
            date: '2023-02-07',
            value: 61
          },
          {
            date: '2023-02-08',
            value: 71
          },
          {
            date: '2023-02-09',
            value: 55
          },
          {
            date: '2023-02-10',
            value: 42
          },
          {
            date: '2023-02-11',
            value: 37
          },
          {
            date: '2023-02-12',
            value: 86
          },
          {
            date: '2023-02-13',
            value: 44
          },
          {
            date: '2023-02-14',
            value: 97
          },
          {
            date: '2023-02-15',
            value: 95
          },
          {
            date: '2023-02-16',
            value: 64
          },
          {
            date: '2023-02-17',
            value: 69
          },
          {
            date: '2023-02-18',
            value: 89
          },
          {
            date: '2023-02-19',
            value: 48
          },
          {
            date: '2023-02-20',
            value: 96
          },
          {
            date: '2023-02-21',
            value: 55
          },
          {
            date: '2023-02-22',
            value: 55
          },
          {
            date: '2023-02-23',
            value: 34
          },
          {
            date: '2023-02-24',
            value: 66
          },
          {
            date: '2023-02-25',
            value: 87
          },
          {
            date: '2023-02-26',
            value: 93
          },
          {
            date: '2023-02-27',
            value: 32
          },
          {
            date: '2023-02-28',
            value: 54
          },
          {
            date: '2023-03-01',
            value: 77
          },
          {
            date: '2023-03-02',
            value: 74
          },
          {
            date: '2023-03-03',
            value: 46
          },
          {
            date: '2023-03-04',
            value: 51
          },
          {
            date: '2023-03-05',
            value: 99
          },
          {
            date: '2023-03-06',
            value: 77
          },
          {
            date: '2023-03-07',
            value: 34
          },
          {
            date: '2023-03-08',
            value: 100
          },
          {
            date: '2023-03-09',
            value: 38
          },
          {
            date: '2023-03-10',
            value: 75
          },
          {
            date: '2023-03-11',
            value: 43
          },
          {
            date: '2023-03-12',
            value: 62
          },
          {
            date: '2023-03-13',
            value: 45
          },
          {
            date: '2023-03-14',
            value: 99
          },
          {
            date: '2023-03-15',
            value: 81
          },
          {
            date: '2023-03-16',
            value: 81
          },
          {
            date: '2023-03-17',
            value: 68
          },
          {
            date: '2023-03-18',
            value: 79
          },
          {
            date: '2023-03-19',
            value: 86
          },
          {
            date: '2023-03-20',
            value: 79
          },
          {
            date: '2023-03-21',
            value: 81
          },
          {
            date: '2023-03-22',
            value: 53
          },
          {
            date: '2023-03-23',
            value: 35
          },
          {
            date: '2023-03-24',
            value: 55
          },
          {
            date: '2023-03-25',
            value: 69
          },
          {
            date: '2023-03-26',
            value: 30
          },
          {
            date: '2023-03-27',
            value: 58
          },
          {
            date: '2023-03-28',
            value: 85
          },
          {
            date: '2023-03-29',
            value: 48
          },
          {
            date: '2023-03-30',
            value: 46
          },
          {
            date: '2023-03-31',
            value: 54
          },
          {
            date: '2023-04-01',
            value: 37
          },
          {
            date: '2023-04-02',
            value: 76
          },
          {
            date: '2023-04-03',
            value: 54
          },
          {
            date: '2023-04-04',
            value: 80
          },
          {
            date: '2023-04-05',
            value: 90
          },
          {
            date: '2023-04-06',
            value: 91
          },
          {
            date: '2023-04-07',
            value: 83
          },
          {
            date: '2023-04-08',
            value: 58
          },
          {
            date: '2023-04-09',
            value: 86
          },
          {
            date: '2023-04-10',
            value: 36
          },
          {
            date: '2023-04-11',
            value: 47
          },
          {
            date: '2023-04-12',
            value: 62
          },
          {
            date: '2023-04-13',
            value: 67
          },
          {
            date: '2023-04-14',
            value: 53
          },
          {
            date: '2023-04-15',
            value: 66
          },
          {
            date: '2023-04-16',
            value: 54
          },
          {
            date: '2023-04-17',
            value: 89
          },
          {
            date: '2023-04-18',
            value: 45
          },
          {
            date: '2023-04-19',
            value: 73
          },
          {
            date: '2023-04-20',
            value: 85
          },
          {
            date: '2023-04-21',
            value: 82
          },
          {
            date: '2023-04-22',
            value: 86
          },
          {
            date: '2023-04-23',
            value: 71
          },
          {
            date: '2023-04-24',
            value: 64
          },
          {
            date: '2023-04-25',
            value: 40
          },
          {
            date: '2023-04-26',
            value: 47
          },
          {
            date: '2023-04-27',
            value: 95
          },
          {
            date: '2023-04-28',
            value: 58
          },
          {
            date: '2023-04-29',
            value: 73
          },
          {
            date: '2023-04-30',
            value: 57
          },
          {
            date: '2023-05-01',
            value: 81
          },
          {
            date: '2023-05-02',
            value: 78
          },
          {
            date: '2023-05-03',
            value: 30
          },
          {
            date: '2023-05-04',
            value: 36
          },
          {
            date: '2023-05-05',
            value: 77
          },
          {
            date: '2023-05-06',
            value: 100
          },
          {
            date: '2023-05-07',
            value: 81
          },
          {
            date: '2023-05-08',
            value: 92
          },
          {
            date: '2023-05-09',
            value: 83
          },
          {
            date: '2023-05-10',
            value: 89
          },
          {
            date: '2023-05-11',
            value: 53
          },
          {
            date: '2023-05-12',
            value: 100
          },
          {
            date: '2023-05-13',
            value: 82
          },
          {
            date: '2023-05-14',
            value: 42
          },
          {
            date: '2023-05-15',
            value: 74
          },
          {
            date: '2023-05-16',
            value: 44
          },
          {
            date: '2023-05-17',
            value: 31
          },
          {
            date: '2023-05-18',
            value: 69
          },
          {
            date: '2023-05-19',
            value: 78
          },
          {
            date: '2023-05-20',
            value: 83
          },
          {
            date: '2023-05-21',
            value: 65
          },
          {
            date: '2023-05-22',
            value: 95
          },
          {
            date: '2023-05-23',
            value: 85
          },
          {
            date: '2023-05-24',
            value: 52
          },
          {
            date: '2023-05-25',
            value: 62
          },
          {
            date: '2023-05-26',
            value: 67
          },
          {
            date: '2023-05-27',
            value: 93
          },
          {
            date: '2023-05-28',
            value: 100
          },
          {
            date: '2023-05-29',
            value: 87
          },
          {
            date: '2023-05-30',
            value: 50
          },
          {
            date: '2023-05-31',
            value: 42
          },
          {
            date: '2023-06-01',
            value: 48
          },
          {
            date: '2023-06-02',
            value: 38
          },
          {
            date: '2023-06-03',
            value: 73
          },
          {
            date: '2023-06-04',
            value: 74
          },
          {
            date: '2023-06-05',
            value: 39
          },
          {
            date: '2023-06-06',
            value: 53
          },
          {
            date: '2023-06-07',
            value: 47
          },
          {
            date: '2023-06-08',
            value: 71
          },
          {
            date: '2023-06-09',
            value: 74
          },
          {
            date: '2023-06-10',
            value: 68
          },
          {
            date: '2023-06-11',
            value: 54
          },
          {
            date: '2023-06-12',
            value: 31
          },
          {
            date: '2023-06-13',
            value: 54
          },
          {
            date: '2023-06-14',
            value: 72
          },
          {
            date: '2023-06-15',
            value: 74
          },
          {
            date: '2023-06-16',
            value: 43
          },
          {
            date: '2023-06-17',
            value: 61
          },
          {
            date: '2023-06-18',
            value: 71
          },
          {
            date: '2023-06-19',
            value: 85
          },
          {
            date: '2023-06-20',
            value: 41
          },
          {
            date: '2023-06-21',
            value: 85
          },
          {
            date: '2023-06-22',
            value: 32
          },
          {
            date: '2023-06-23',
            value: 100
          },
          {
            date: '2023-06-24',
            value: 46
          },
          {
            date: '2023-06-25',
            value: 47
          },
          {
            date: '2023-06-26',
            value: 63
          },
          {
            date: '2023-06-27',
            value: 46
          },
          {
            date: '2023-06-28',
            value: 76
          },
          {
            date: '2023-06-29',
            value: 49
          },
          {
            date: '2023-06-30',
            value: 37
          },
          {
            date: '2023-07-01',
            value: 88
          },
          {
            date: '2023-07-02',
            value: 80
          },
          {
            date: '2023-07-03',
            value: 33
          },
          {
            date: '2023-07-04',
            value: 58
          },
          {
            date: '2023-07-05',
            value: 58
          },
          {
            date: '2023-07-06',
            value: 52
          },
          {
            date: '2023-07-07',
            value: 43
          },
          {
            date: '2023-07-08',
            value: 95
          },
          {
            date: '2023-07-09',
            value: 77
          },
          {
            date: '2023-07-10',
            value: 55
          },
          {
            date: '2023-07-11',
            value: 98
          },
          {
            date: '2023-07-12',
            value: 41
          },
          {
            date: '2023-07-13',
            value: 41
          },
          {
            date: '2023-07-14',
            value: 54
          },
          {
            date: '2023-07-15',
            value: 52
          },
          {
            date: '2023-07-16',
            value: 44
          },
          {
            date: '2023-07-17',
            value: 38
          },
          {
            date: '2023-07-18',
            value: 55
          },
          {
            date: '2023-07-19',
            value: 90
          },
          {
            date: '2023-07-20',
            value: 98
          },
          {
            date: '2023-07-21',
            value: 58
          },
          {
            date: '2023-07-22',
            value: 33
          },
          {
            date: '2023-07-23',
            value: 91
          },
          {
            date: '2023-07-24',
            value: 64
          },
          {
            date: '2023-07-25',
            value: 64
          },
          {
            date: '2023-07-26',
            value: 88
          },
          {
            date: '2023-07-27',
            value: 81
          },
          {
            date: '2023-07-28',
            value: 31
          },
          {
            date: '2023-07-29',
            value: 52
          },
          {
            date: '2023-07-30',
            value: 53
          },
          {
            date: '2023-07-31',
            value: 57
          },
          {
            date: '2023-08-01',
            value: 59
          },
          {
            date: '2023-08-02',
            value: 84
          },
          {
            date: '2023-08-03',
            value: 58
          },
          {
            date: '2023-08-04',
            value: 48
          },
          {
            date: '2023-08-05',
            value: 92
          },
          {
            date: '2023-08-06',
            value: 47
          },
          {
            date: '2023-08-07',
            value: 54
          },
          {
            date: '2023-08-08',
            value: 55
          },
          {
            date: '2023-08-09',
            value: 38
          },
          {
            date: '2023-08-10',
            value: 99
          },
          {
            date: '2023-08-11',
            value: 84
          },
          {
            date: '2023-08-12',
            value: 40
          },
          {
            date: '2023-08-13',
            value: 63
          },
          {
            date: '2023-08-14',
            value: 38
          },
          {
            date: '2023-08-15',
            value: 42
          },
          {
            date: '2023-08-16',
            value: 40
          },
          {
            date: '2023-08-17',
            value: 35
          },
          {
            date: '2023-08-18',
            value: 64
          },
          {
            date: '2023-08-19',
            value: 71
          },
          {
            date: '2023-08-20',
            value: 97
          },
          {
            date: '2023-08-21',
            value: 79
          },
          {
            date: '2023-08-22',
            value: 81
          },
          {
            date: '2023-08-23',
            value: 42
          },
          {
            date: '2023-08-24',
            value: 39
          },
          {
            date: '2023-08-25',
            value: 41
          },
          {
            date: '2023-08-26',
            value: 54
          },
          {
            date: '2023-08-27',
            value: 36
          },
          {
            date: '2023-08-28',
            value: 79
          },
          {
            date: '2023-08-29',
            value: 67
          },
          {
            date: '2023-08-30',
            value: 70
          },
          {
            date: '2023-08-31',
            value: 69
          },
          {
            date: '2023-09-01',
            value: 67
          },
          {
            date: '2023-09-02',
            value: 41
          },
          {
            date: '2023-09-03',
            value: 67
          },
          {
            date: '2023-09-04',
            value: 85
          },
          {
            date: '2023-09-05',
            value: 91
          },
          {
            date: '2023-09-06',
            value: 41
          },
          {
            date: '2023-09-07',
            value: 64
          },
          {
            date: '2023-09-08',
            value: 43
          },
          {
            date: '2023-09-09',
            value: 49
          },
          {
            date: '2023-09-10',
            value: 57
          },
          {
            date: '2023-09-11',
            value: 76
          },
          {
            date: '2023-09-12',
            value: 56
          },
          {
            date: '2023-09-13',
            value: 91
          },
          {
            date: '2023-09-14',
            value: 58
          },
          {
            date: '2023-09-15',
            value: 44
          },
          {
            date: '2023-09-16',
            value: 64
          },
          {
            date: '2023-09-17',
            value: 54
          },
          {
            date: '2023-09-18',
            value: 44
          },
          {
            date: '2023-09-19',
            value: 65
          },
          {
            date: '2023-09-20',
            value: 88
          },
          {
            date: '2023-09-21',
            value: 35
          },
          {
            date: '2023-09-22',
            value: 84
          },
          {
            date: '2023-09-23',
            value: 41
          },
          {
            date: '2023-09-24',
            value: 40
          },
          {
            date: '2023-09-25',
            value: 69
          },
          {
            date: '2023-09-26',
            value: 91
          },
          {
            date: '2023-09-27',
            value: 42
          },
          {
            date: '2023-09-28',
            value: 35
          },
          {
            date: '2023-09-29',
            value: 53
          },
          {
            date: '2023-09-30',
            value: 68
          },
          {
            date: '2023-10-01',
            value: 47
          },
          {
            date: '2023-10-02',
            value: 89
          },
          {
            date: '2023-10-03',
            value: 97
          },
          {
            date: '2023-10-04',
            value: 85
          },
          {
            date: '2023-10-05',
            value: 100
          },
          {
            date: '2023-10-06',
            value: 34
          },
          {
            date: '2023-10-07',
            value: 93
          },
          {
            date: '2023-10-08',
            value: 47
          },
          {
            date: '2023-10-09',
            value: 58
          },
          {
            date: '2023-10-10',
            value: 46
          },
          {
            date: '2023-10-11',
            value: 73
          },
          {
            date: '2023-10-12',
            value: 57
          },
          {
            date: '2023-10-13',
            value: 98
          },
          {
            date: '2023-10-14',
            value: 43
          },
          {
            date: '2023-10-15',
            value: 99
          },
          {
            date: '2023-10-16',
            value: 72
          },
          {
            date: '2023-10-17',
            value: 76
          },
          {
            date: '2023-10-18',
            value: 47
          },
          {
            date: '2023-10-19',
            value: 39
          },
          {
            date: '2023-10-20',
            value: 43
          },
          {
            date: '2023-10-21',
            value: 69
          },
          {
            date: '2023-10-22',
            value: 69
          },
          {
            date: '2023-10-23',
            value: 84
          },
          {
            date: '2023-10-24',
            value: 38
          },
          {
            date: '2023-10-25',
            value: 89
          },
          {
            date: '2023-10-26',
            value: 43
          },
          {
            date: '2023-10-27',
            value: 59
          },
          {
            date: '2023-10-28',
            value: 87
          },
          {
            date: '2023-10-29',
            value: 96
          },
          {
            date: '2023-10-30',
            value: 71
          },
          {
            date: '2023-10-31',
            value: 60
          },
          {
            date: '2023-11-01',
            value: 73
          },
          {
            date: '2023-11-02',
            value: 58
          },
          {
            date: '2023-11-03',
            value: 96
          },
          {
            date: '2023-11-04',
            value: 32
          },
          {
            date: '2023-11-05',
            value: 97
          },
          {
            date: '2023-11-06',
            value: 57
          },
          {
            date: '2023-11-07',
            value: 45
          },
          {
            date: '2023-11-08',
            value: 30
          },
          {
            date: '2023-11-09',
            value: 84
          },
          {
            date: '2023-11-10',
            value: 87
          },
          {
            date: '2023-11-11',
            value: 34
          },
          {
            date: '2023-11-12',
            value: 68
          },
          {
            date: '2023-11-13',
            value: 42
          },
          {
            date: '2023-11-14',
            value: 63
          },
          {
            date: '2023-11-15',
            value: 89
          },
          {
            date: '2023-11-16',
            value: 37
          },
          {
            date: '2023-11-17',
            value: 68
          },
          {
            date: '2023-11-18',
            value: 84
          },
          {
            date: '2023-11-19',
            value: 73
          },
          {
            date: '2023-11-20',
            value: 33
          },
          {
            date: '2023-11-21',
            value: 90
          },
          {
            date: '2023-11-22',
            value: 58
          },
          {
            date: '2023-11-23',
            value: 94
          },
          {
            date: '2023-11-24',
            value: 63
          },
          {
            date: '2023-11-25',
            value: 94
          },
          {
            date: '2023-11-26',
            value: 40
          },
          {
            date: '2023-11-27',
            value: 36
          },
          {
            date: '2023-11-28',
            value: 74
          },
          {
            date: '2023-11-29',
            value: 99
          },
          {
            date: '2023-11-30',
            value: 49
          },
          {
            date: '2023-12-01',
            value: 64
          },
          {
            date: '2023-12-02',
            value: 71
          },
          {
            date: '2023-12-03',
            value: 60
          },
          {
            date: '2023-12-04',
            value: 80
          },
          {
            date: '2023-12-05',
            value: 54
          },
          {
            date: '2023-12-06',
            value: 44
          },
          {
            date: '2023-12-07',
            value: 73
          },
          {
            date: '2023-12-08',
            value: 66
          },
          {
            date: '2023-12-09',
            value: 59
          },
          {
            date: '2023-12-10',
            value: 40
          },
          {
            date: '2023-12-11',
            value: 73
          },
          {
            date: '2023-12-12',
            value: 64
          },
          {
            date: '2023-12-13',
            value: 100
          },
          {
            date: '2023-12-14',
            value: 69
          },
          {
            date: '2023-12-15',
            value: 34
          },
          {
            date: '2023-12-16',
            value: 64
          },
          {
            date: '2023-12-17',
            value: 88
          },
          {
            date: '2023-12-18',
            value: 60
          },
          {
            date: '2023-12-19',
            value: 40
          },
          {
            date: '2023-12-20',
            value: 36
          },
          {
            date: '2023-12-21',
            value: 81
          },
          {
            date: '2023-12-22',
            value: 51
          },
          {
            date: '2023-12-23',
            value: 63
          },
          {
            date: '2023-12-24',
            value: 100
          },
          {
            date: '2023-12-25',
            value: 86
          },
          {
            date: '2023-12-26',
            value: 56
          },
          {
            date: '2023-12-27',
            value: 68
          },
          {
            date: '2023-12-28',
            value: 70
          },
          {
            date: '2023-12-29',
            value: 82
          },
          {
            date: '2023-12-30',
            value: 100
          },
          {
            date: '2023-12-31',
            value: 82
          }
        ]
      }
    ]
  },
  influencers: {
    influencerMetrics: [
      { name: 'John Doe', followers: 500000, engagementRate: 0.2 },
      { name: 'Jane Smith', followers: 300000, engagementRate: 0.25 },
      { name: 'Tech Guru', followers: 200000, engagementRate: 0.3 }
    ]
  },
  posts: {
    cumulativePosts: [
      {
        id: 1,
        date: '2024-11-17',
        platform: 'Twitter',
        title: 'Exciting Launch!',
        description: 'We just launched our new feature. Check it out now!',
        image: '/Helper_Prof_pic-002-255x300.jpg',
        likes: 120,
        interactions: 300
      },
      {
        id: 2,
        date: '2024-11-15',
        platform: 'Facebook',
        title: 'Community Event',
        description:
          'Join us this weekend for a fun-filled community gathering.',
        image: '/static/images/posts/facebook-event.jpg',
        likes: 200,
        interactions: 450
      },
      {
        id: 3,
        date: '2024-11-14',
        platform: 'Instagram',
        title: 'Photography Tips',
        description: 'Learn the secrets to perfect portrait photography.',
        image: '/static/images/posts/instagram-tips.jpg',
        likes: 320,
        interactions: 500
      },
      {
        id: 4,
        date: '2024-11-13',
        platform: 'LinkedIn',
        title: 'Career Advancement Webinar',
        description: "Don't miss this opportunity to boost your career skills.",
        image: '/static/images/posts/linkedin-webinar.jpg',
        likes: 180,
        interactions: 350
      },
      {
        id: 5,
        date: '2024-11-12',
        platform: 'Twitter',
        title: 'User Testimonials',
        description: 'Our users share their experiences with our product.',
        image: '/static/images/posts/twitter-testimonials.jpg',
        likes: 150,
        interactions: 280
      }
    ]
  },
  comparativeMetrics: {
    shareOfVoice: [
      { company: 'QuantX', value: 30 },
      { company: 'smeGO', value: 50 },
      { company: 'Meltwater', value: 20 }
    ],
    customerReach: [
      { company: 'QuantX', date: '2024-11-01', value: 1000 },
      { company: 'smeGO', date: '2024-11-01', value: 1200 },
      { company: 'Meltwater', date: '2024-11-01', value: 1800 },
      { company: 'QuantX', date: '2024-11-02', value: 1500 },
      { company: 'smeGO', date: '2024-11-02', value: 2210 },
      { company: 'Meltwater', date: '2024-11-02', value: 1810 },
      { company: 'QuantX', date: '2024-11-03', value: 1020 },
      { company: 'smeGO', date: '2024-11-03', value: 1220 },
      { company: 'Meltwater', date: '2024-11-03', value: 2250 },
      { company: 'QuantX', date: '2024-11-04', value: 1020 },
      { company: 'smeGO', date: '2024-11-04', value: 1220 },
      { company: 'Meltwater', date: '2024-11-04', value: 2000 }
    ],
    engagementRate: [
      { company: 'QuantX', engagement: 25 },
      { company: 'smeGO', engagement: 40 },
      { company: 'Meltwater', engagement: 35 }
    ]
  },
  engagementMetrics: {
    engagementRateOverTime: [
      {
        date: '2023-01-01',
        engagementRate: 0.2
      },
      {
        date: '2023-01-02',
        engagementRate: 0.56
      },
      {
        date: '2023-01-03',
        engagementRate: 0.41
      },
      {
        date: '2023-01-04',
        engagementRate: 0.58
      },
      {
        date: '2023-01-05',
        engagementRate: 0.57
      },
      {
        date: '2023-01-06',
        engagementRate: 0.51
      },
      {
        date: '2023-01-07',
        engagementRate: 0.24
      },
      {
        date: '2023-01-08',
        engagementRate: 0.29
      },
      {
        date: '2023-01-09',
        engagementRate: 0.36
      },
      {
        date: '2023-01-10',
        engagementRate: 0.59
      },
      {
        date: '2023-01-11',
        engagementRate: 0.51
      },
      {
        date: '2023-01-12',
        engagementRate: 0.32
      },
      {
        date: '2023-01-13',
        engagementRate: 0.23
      },
      {
        date: '2023-01-14',
        engagementRate: 0.32
      },
      {
        date: '2023-01-15',
        engagementRate: 0.25
      },
      {
        date: '2023-01-16',
        engagementRate: 0.26
      },
      {
        date: '2023-01-17',
        engagementRate: 0.45
      },
      {
        date: '2023-01-18',
        engagementRate: 0.2
      },
      {
        date: '2023-01-19',
        engagementRate: 0.29
      },
      {
        date: '2023-01-20',
        engagementRate: 0.55
      },
      {
        date: '2023-01-21',
        engagementRate: 0.49
      },
      {
        date: '2023-01-22',
        engagementRate: 0.42
      },
      {
        date: '2023-01-23',
        engagementRate: 0.39
      },
      {
        date: '2023-01-24',
        engagementRate: 0.54
      },
      {
        date: '2023-01-25',
        engagementRate: 0.27
      },
      {
        date: '2023-01-26',
        engagementRate: 0.53
      },
      {
        date: '2023-01-27',
        engagementRate: 0.27
      },
      {
        date: '2023-01-28',
        engagementRate: 0.26
      },
      {
        date: '2023-01-29',
        engagementRate: 0.4
      },
      {
        date: '2023-01-30',
        engagementRate: 0.29
      },
      {
        date: '2023-01-31',
        engagementRate: 0.52
      },
      {
        date: '2023-02-01',
        engagementRate: 0.31
      },
      {
        date: '2023-02-02',
        engagementRate: 0.36
      },
      {
        date: '2023-02-03',
        engagementRate: 0.55
      },
      {
        date: '2023-02-04',
        engagementRate: 0.33
      },
      {
        date: '2023-02-05',
        engagementRate: 0.27
      },
      {
        date: '2023-02-06',
        engagementRate: 0.44
      },
      {
        date: '2023-02-07',
        engagementRate: 0.23
      },
      {
        date: '2023-02-08',
        engagementRate: 0.52
      },
      {
        date: '2023-02-09',
        engagementRate: 0.58
      },
      {
        date: '2023-02-10',
        engagementRate: 0.26
      },
      {
        date: '2023-02-11',
        engagementRate: 0.35
      },
      {
        date: '2023-02-12',
        engagementRate: 0.29
      },
      {
        date: '2023-02-13',
        engagementRate: 0.43
      },
      {
        date: '2023-02-14',
        engagementRate: 0.48
      },
      {
        date: '2023-02-15',
        engagementRate: 0.21
      },
      {
        date: '2023-02-16',
        engagementRate: 0.22
      },
      {
        date: '2023-02-17',
        engagementRate: 0.58
      },
      {
        date: '2023-02-18',
        engagementRate: 0.51
      },
      {
        date: '2023-02-19',
        engagementRate: 0.29
      },
      {
        date: '2023-02-20',
        engagementRate: 0.37
      },
      {
        date: '2023-02-21',
        engagementRate: 0.59
      },
      {
        date: '2023-02-22',
        engagementRate: 0.55
      },
      {
        date: '2023-02-23',
        engagementRate: 0.28
      },
      {
        date: '2023-02-24',
        engagementRate: 0.22
      },
      {
        date: '2023-02-25',
        engagementRate: 0.36
      },
      {
        date: '2023-02-26',
        engagementRate: 0.42
      },
      {
        date: '2023-02-27',
        engagementRate: 0.53
      },
      {
        date: '2023-02-28',
        engagementRate: 0.4
      },
      {
        date: '2023-03-01',
        engagementRate: 0.25
      },
      {
        date: '2023-03-02',
        engagementRate: 0.51
      },
      {
        date: '2023-03-03',
        engagementRate: 0.4
      },
      {
        date: '2023-03-04',
        engagementRate: 0.45
      },
      {
        date: '2023-03-05',
        engagementRate: 0.51
      },
      {
        date: '2023-03-06',
        engagementRate: 0.27
      },
      {
        date: '2023-03-07',
        engagementRate: 0.33
      },
      {
        date: '2023-03-08',
        engagementRate: 0.5
      },
      {
        date: '2023-03-09',
        engagementRate: 0.57
      },
      {
        date: '2023-03-10',
        engagementRate: 0.44
      },
      {
        date: '2023-03-11',
        engagementRate: 0.54
      },
      {
        date: '2023-03-12',
        engagementRate: 0.5
      },
      {
        date: '2023-03-13',
        engagementRate: 0.41
      },
      {
        date: '2023-03-14',
        engagementRate: 0.48
      },
      {
        date: '2023-03-15',
        engagementRate: 0.36
      },
      {
        date: '2023-03-16',
        engagementRate: 0.24
      },
      {
        date: '2023-03-17',
        engagementRate: 0.54
      },
      {
        date: '2023-03-18',
        engagementRate: 0.21
      },
      {
        date: '2023-03-19',
        engagementRate: 0.41
      },
      {
        date: '2023-03-20',
        engagementRate: 0.36
      },
      {
        date: '2023-03-21',
        engagementRate: 0.33
      },
      {
        date: '2023-03-22',
        engagementRate: 0.35
      },
      {
        date: '2023-03-23',
        engagementRate: 0.29
      },
      {
        date: '2023-03-24',
        engagementRate: 0.2
      },
      {
        date: '2023-03-25',
        engagementRate: 0.46
      },
      {
        date: '2023-03-26',
        engagementRate: 0.25
      },
      {
        date: '2023-03-27',
        engagementRate: 0.54
      },
      {
        date: '2023-03-28',
        engagementRate: 0.28
      },
      {
        date: '2023-03-29',
        engagementRate: 0.33
      },
      {
        date: '2023-03-30',
        engagementRate: 0.21
      },
      {
        date: '2023-03-31',
        engagementRate: 0.6
      },
      {
        date: '2023-04-01',
        engagementRate: 0.28
      },
      {
        date: '2023-04-02',
        engagementRate: 0.49
      },
      {
        date: '2023-04-03',
        engagementRate: 0.28
      },
      {
        date: '2023-04-04',
        engagementRate: 0.44
      },
      {
        date: '2023-04-05',
        engagementRate: 0.48
      },
      {
        date: '2023-04-06',
        engagementRate: 0.38
      },
      {
        date: '2023-04-07',
        engagementRate: 0.35
      },
      {
        date: '2023-04-08',
        engagementRate: 0.29
      },
      {
        date: '2023-04-09',
        engagementRate: 0.39
      },
      {
        date: '2023-04-10',
        engagementRate: 0.31
      },
      {
        date: '2023-04-11',
        engagementRate: 0.29
      },
      {
        date: '2023-04-12',
        engagementRate: 0.49
      },
      {
        date: '2023-04-13',
        engagementRate: 0.28
      },
      {
        date: '2023-04-14',
        engagementRate: 0.32
      },
      {
        date: '2023-04-15',
        engagementRate: 0.51
      },
      {
        date: '2023-04-16',
        engagementRate: 0.35
      },
      {
        date: '2023-04-17',
        engagementRate: 0.53
      },
      {
        date: '2023-04-18',
        engagementRate: 0.59
      },
      {
        date: '2023-04-19',
        engagementRate: 0.27
      },
      {
        date: '2023-04-20',
        engagementRate: 0.46
      },
      {
        date: '2023-04-21',
        engagementRate: 0.37
      },
      {
        date: '2023-04-22',
        engagementRate: 0.59
      },
      {
        date: '2023-04-23',
        engagementRate: 0.37
      },
      {
        date: '2023-04-24',
        engagementRate: 0.34
      },
      {
        date: '2023-04-25',
        engagementRate: 0.49
      },
      {
        date: '2023-04-26',
        engagementRate: 0.23
      },
      {
        date: '2023-04-27',
        engagementRate: 0.35
      },
      {
        date: '2023-04-28',
        engagementRate: 0.22
      },
      {
        date: '2023-04-29',
        engagementRate: 0.26
      },
      {
        date: '2023-04-30',
        engagementRate: 0.54
      },
      {
        date: '2023-05-01',
        engagementRate: 0.31
      },
      {
        date: '2023-05-02',
        engagementRate: 0.48
      },
      {
        date: '2023-05-03',
        engagementRate: 0.53
      },
      {
        date: '2023-05-04',
        engagementRate: 0.46
      },
      {
        date: '2023-05-05',
        engagementRate: 0.24
      },
      {
        date: '2023-05-06',
        engagementRate: 0.55
      },
      {
        date: '2023-05-07',
        engagementRate: 0.56
      },
      {
        date: '2023-05-08',
        engagementRate: 0.47
      },
      {
        date: '2023-05-09',
        engagementRate: 0.53
      },
      {
        date: '2023-05-10',
        engagementRate: 0.32
      },
      {
        date: '2023-05-11',
        engagementRate: 0.59
      },
      {
        date: '2023-05-12',
        engagementRate: 0.52
      },
      {
        date: '2023-05-13',
        engagementRate: 0.6
      },
      {
        date: '2023-05-14',
        engagementRate: 0.23
      },
      {
        date: '2023-05-15',
        engagementRate: 0.48
      },
      {
        date: '2023-05-16',
        engagementRate: 0.49
      },
      {
        date: '2023-05-17',
        engagementRate: 0.58
      },
      {
        date: '2023-05-18',
        engagementRate: 0.49
      },
      {
        date: '2023-05-19',
        engagementRate: 0.55
      },
      {
        date: '2023-05-20',
        engagementRate: 0.29
      },
      {
        date: '2023-05-21',
        engagementRate: 0.5
      },
      {
        date: '2023-05-22',
        engagementRate: 0.46
      },
      {
        date: '2023-05-23',
        engagementRate: 0.57
      },
      {
        date: '2023-05-24',
        engagementRate: 0.49
      },
      {
        date: '2023-05-25',
        engagementRate: 0.5
      },
      {
        date: '2023-05-26',
        engagementRate: 0.24
      },
      {
        date: '2023-05-27',
        engagementRate: 0.27
      },
      {
        date: '2023-05-28',
        engagementRate: 0.39
      },
      {
        date: '2023-05-29',
        engagementRate: 0.47
      },
      {
        date: '2023-05-30',
        engagementRate: 0.25
      },
      {
        date: '2023-05-31',
        engagementRate: 0.35
      },
      {
        date: '2023-06-01',
        engagementRate: 0.34
      },
      {
        date: '2023-06-02',
        engagementRate: 0.55
      },
      {
        date: '2023-06-03',
        engagementRate: 0.6
      },
      {
        date: '2023-06-04',
        engagementRate: 0.52
      },
      {
        date: '2023-06-05',
        engagementRate: 0.23
      },
      {
        date: '2023-06-06',
        engagementRate: 0.29
      },
      {
        date: '2023-06-07',
        engagementRate: 0.39
      },
      {
        date: '2023-06-08',
        engagementRate: 0.41
      },
      {
        date: '2023-06-09',
        engagementRate: 0.55
      },
      {
        date: '2023-06-10',
        engagementRate: 0.5
      },
      {
        date: '2023-06-11',
        engagementRate: 0.27
      },
      {
        date: '2023-06-12',
        engagementRate: 0.34
      },
      {
        date: '2023-06-13',
        engagementRate: 0.53
      },
      {
        date: '2023-06-14',
        engagementRate: 0.25
      },
      {
        date: '2023-06-15',
        engagementRate: 0.29
      },
      {
        date: '2023-06-16',
        engagementRate: 0.42
      },
      {
        date: '2023-06-17',
        engagementRate: 0.37
      },
      {
        date: '2023-06-18',
        engagementRate: 0.47
      },
      {
        date: '2023-06-19',
        engagementRate: 0.52
      },
      {
        date: '2023-06-20',
        engagementRate: 0.22
      },
      {
        date: '2023-06-21',
        engagementRate: 0.34
      },
      {
        date: '2023-06-22',
        engagementRate: 0.29
      },
      {
        date: '2023-06-23',
        engagementRate: 0.29
      },
      {
        date: '2023-06-24',
        engagementRate: 0.26
      },
      {
        date: '2023-06-25',
        engagementRate: 0.33
      },
      {
        date: '2023-06-26',
        engagementRate: 0.44
      },
      {
        date: '2023-06-27',
        engagementRate: 0.44
      },
      {
        date: '2023-06-28',
        engagementRate: 0.52
      },
      {
        date: '2023-06-29',
        engagementRate: 0.59
      },
      {
        date: '2023-06-30',
        engagementRate: 0.32
      },
      {
        date: '2023-07-01',
        engagementRate: 0.29
      },
      {
        date: '2023-07-02',
        engagementRate: 0.5
      },
      {
        date: '2023-07-03',
        engagementRate: 0.48
      },
      {
        date: '2023-07-04',
        engagementRate: 0.56
      },
      {
        date: '2023-07-05',
        engagementRate: 0.29
      },
      {
        date: '2023-07-06',
        engagementRate: 0.56
      },
      {
        date: '2023-07-07',
        engagementRate: 0.48
      },
      {
        date: '2023-07-08',
        engagementRate: 0.58
      },
      {
        date: '2023-07-09',
        engagementRate: 0.55
      },
      {
        date: '2023-07-10',
        engagementRate: 0.47
      },
      {
        date: '2023-07-11',
        engagementRate: 0.55
      },
      {
        date: '2023-07-12',
        engagementRate: 0.57
      },
      {
        date: '2023-07-13',
        engagementRate: 0.51
      },
      {
        date: '2023-07-14',
        engagementRate: 0.47
      },
      {
        date: '2023-07-15',
        engagementRate: 0.51
      },
      {
        date: '2023-07-16',
        engagementRate: 0.37
      },
      {
        date: '2023-07-17',
        engagementRate: 0.39
      },
      {
        date: '2023-07-18',
        engagementRate: 0.21
      },
      {
        date: '2023-07-19',
        engagementRate: 0.51
      },
      {
        date: '2023-07-20',
        engagementRate: 0.5
      },
      {
        date: '2023-07-21',
        engagementRate: 0.26
      },
      {
        date: '2023-07-22',
        engagementRate: 0.36
      },
      {
        date: '2023-07-23',
        engagementRate: 0.3
      },
      {
        date: '2023-07-24',
        engagementRate: 0.38
      },
      {
        date: '2023-07-25',
        engagementRate: 0.52
      },
      {
        date: '2023-07-26',
        engagementRate: 0.36
      },
      {
        date: '2023-07-27',
        engagementRate: 0.26
      },
      {
        date: '2023-07-28',
        engagementRate: 0.32
      },
      {
        date: '2023-07-29',
        engagementRate: 0.58
      },
      {
        date: '2023-07-30',
        engagementRate: 0.28
      },
      {
        date: '2023-07-31',
        engagementRate: 0.48
      },
      {
        date: '2023-08-01',
        engagementRate: 0.49
      },
      {
        date: '2023-08-02',
        engagementRate: 0.2
      },
      {
        date: '2023-08-03',
        engagementRate: 0.32
      },
      {
        date: '2023-08-04',
        engagementRate: 0.23
      },
      {
        date: '2023-08-05',
        engagementRate: 0.22
      },
      {
        date: '2023-08-06',
        engagementRate: 0.39
      },
      {
        date: '2023-08-07',
        engagementRate: 0.31
      },
      {
        date: '2023-08-08',
        engagementRate: 0.37
      },
      {
        date: '2023-08-09',
        engagementRate: 0.51
      },
      {
        date: '2023-08-10',
        engagementRate: 0.21
      },
      {
        date: '2023-08-11',
        engagementRate: 0.37
      },
      {
        date: '2023-08-12',
        engagementRate: 0.53
      },
      {
        date: '2023-08-13',
        engagementRate: 0.33
      },
      {
        date: '2023-08-14',
        engagementRate: 0.36
      },
      {
        date: '2023-08-15',
        engagementRate: 0.57
      },
      {
        date: '2023-08-16',
        engagementRate: 0.27
      },
      {
        date: '2023-08-17',
        engagementRate: 0.3
      },
      {
        date: '2023-08-18',
        engagementRate: 0.38
      },
      {
        date: '2023-08-19',
        engagementRate: 0.55
      },
      {
        date: '2023-08-20',
        engagementRate: 0.25
      },
      {
        date: '2023-08-21',
        engagementRate: 0.47
      },
      {
        date: '2023-08-22',
        engagementRate: 0.55
      },
      {
        date: '2023-08-23',
        engagementRate: 0.5
      },
      {
        date: '2023-08-24',
        engagementRate: 0.3
      },
      {
        date: '2023-08-25',
        engagementRate: 0.47
      },
      {
        date: '2023-08-26',
        engagementRate: 0.23
      },
      {
        date: '2023-08-27',
        engagementRate: 0.52
      },
      {
        date: '2023-08-28',
        engagementRate: 0.24
      },
      {
        date: '2023-08-29',
        engagementRate: 0.59
      },
      {
        date: '2023-08-30',
        engagementRate: 0.33
      },
      {
        date: '2023-08-31',
        engagementRate: 0.58
      },
      {
        date: '2023-09-01',
        engagementRate: 0.45
      },
      {
        date: '2023-09-02',
        engagementRate: 0.43
      },
      {
        date: '2023-09-03',
        engagementRate: 0.57
      },
      {
        date: '2023-09-04',
        engagementRate: 0.32
      },
      {
        date: '2023-09-05',
        engagementRate: 0.54
      },
      {
        date: '2023-09-06',
        engagementRate: 0.33
      },
      {
        date: '2023-09-07',
        engagementRate: 0.53
      },
      {
        date: '2023-09-08',
        engagementRate: 0.5
      },
      {
        date: '2023-09-09',
        engagementRate: 0.27
      },
      {
        date: '2023-09-10',
        engagementRate: 0.21
      },
      {
        date: '2023-09-11',
        engagementRate: 0.47
      },
      {
        date: '2023-09-12',
        engagementRate: 0.26
      },
      {
        date: '2023-09-13',
        engagementRate: 0.52
      },
      {
        date: '2023-09-14',
        engagementRate: 0.24
      },
      {
        date: '2023-09-15',
        engagementRate: 0.46
      },
      {
        date: '2023-09-16',
        engagementRate: 0.51
      },
      {
        date: '2023-09-17',
        engagementRate: 0.33
      },
      {
        date: '2023-09-18',
        engagementRate: 0.51
      },
      {
        date: '2023-09-19',
        engagementRate: 0.3
      },
      {
        date: '2023-09-20',
        engagementRate: 0.56
      },
      {
        date: '2023-09-21',
        engagementRate: 0.42
      },
      {
        date: '2023-09-22',
        engagementRate: 0.54
      },
      {
        date: '2023-09-23',
        engagementRate: 0.21
      },
      {
        date: '2023-09-24',
        engagementRate: 0.5
      },
      {
        date: '2023-09-25',
        engagementRate: 0.33
      },
      {
        date: '2023-09-26',
        engagementRate: 0.59
      },
      {
        date: '2023-09-27',
        engagementRate: 0.48
      },
      {
        date: '2023-09-28',
        engagementRate: 0.32
      },
      {
        date: '2023-09-29',
        engagementRate: 0.3
      },
      {
        date: '2023-09-30',
        engagementRate: 0.49
      },
      {
        date: '2023-10-01',
        engagementRate: 0.43
      },
      {
        date: '2023-10-02',
        engagementRate: 0.42
      },
      {
        date: '2023-10-03',
        engagementRate: 0.34
      },
      {
        date: '2023-10-04',
        engagementRate: 0.45
      },
      {
        date: '2023-10-05',
        engagementRate: 0.3
      },
      {
        date: '2023-10-06',
        engagementRate: 0.56
      },
      {
        date: '2023-10-07',
        engagementRate: 0.24
      },
      {
        date: '2023-10-08',
        engagementRate: 0.47
      },
      {
        date: '2023-10-09',
        engagementRate: 0.23
      },
      {
        date: '2023-10-10',
        engagementRate: 0.47
      },
      {
        date: '2023-10-11',
        engagementRate: 0.53
      },
      {
        date: '2023-10-12',
        engagementRate: 0.3
      },
      {
        date: '2023-10-13',
        engagementRate: 0.2
      },
      {
        date: '2023-10-14',
        engagementRate: 0.4
      },
      {
        date: '2023-10-15',
        engagementRate: 0.3
      },
      {
        date: '2023-10-16',
        engagementRate: 0.54
      },
      {
        date: '2023-10-17',
        engagementRate: 0.35
      },
      {
        date: '2023-10-18',
        engagementRate: 0.57
      },
      {
        date: '2023-10-19',
        engagementRate: 0.4
      },
      {
        date: '2023-10-20',
        engagementRate: 0.5
      },
      {
        date: '2023-10-21',
        engagementRate: 0.27
      },
      {
        date: '2023-10-22',
        engagementRate: 0.21
      },
      {
        date: '2023-10-23',
        engagementRate: 0.51
      },
      {
        date: '2023-10-24',
        engagementRate: 0.38
      },
      {
        date: '2023-10-25',
        engagementRate: 0.4
      },
      {
        date: '2023-10-26',
        engagementRate: 0.55
      },
      {
        date: '2023-10-27',
        engagementRate: 0.47
      },
      {
        date: '2023-10-28',
        engagementRate: 0.38
      },
      {
        date: '2023-10-29',
        engagementRate: 0.34
      },
      {
        date: '2023-10-30',
        engagementRate: 0.49
      },
      {
        date: '2023-10-31',
        engagementRate: 0.32
      },
      {
        date: '2023-11-01',
        engagementRate: 0.57
      },
      {
        date: '2023-11-02',
        engagementRate: 0.29
      },
      {
        date: '2023-11-03',
        engagementRate: 0.2
      },
      {
        date: '2023-11-04',
        engagementRate: 0.28
      },
      {
        date: '2023-11-05',
        engagementRate: 0.44
      },
      {
        date: '2023-11-06',
        engagementRate: 0.53
      },
      {
        date: '2023-11-07',
        engagementRate: 0.48
      },
      {
        date: '2023-11-08',
        engagementRate: 0.54
      },
      {
        date: '2023-11-09',
        engagementRate: 0.51
      },
      {
        date: '2023-11-10',
        engagementRate: 0.21
      },
      {
        date: '2023-11-11',
        engagementRate: 0.37
      },
      {
        date: '2023-11-12',
        engagementRate: 0.24
      },
      {
        date: '2023-11-13',
        engagementRate: 0.53
      },
      {
        date: '2023-11-14',
        engagementRate: 0.48
      },
      {
        date: '2023-11-15',
        engagementRate: 0.28
      },
      {
        date: '2023-11-16',
        engagementRate: 0.34
      },
      {
        date: '2023-11-17',
        engagementRate: 0.33
      },
      {
        date: '2023-11-18',
        engagementRate: 0.2
      },
      {
        date: '2023-11-19',
        engagementRate: 0.34
      },
      {
        date: '2023-11-20',
        engagementRate: 0.21
      },
      {
        date: '2023-11-21',
        engagementRate: 0.49
      },
      {
        date: '2023-11-22',
        engagementRate: 0.54
      },
      {
        date: '2023-11-23',
        engagementRate: 0.55
      },
      {
        date: '2023-11-24',
        engagementRate: 0.58
      },
      {
        date: '2023-11-25',
        engagementRate: 0.47
      },
      {
        date: '2023-11-26',
        engagementRate: 0.41
      },
      {
        date: '2023-11-27',
        engagementRate: 0.21
      },
      {
        date: '2023-11-28',
        engagementRate: 0.33
      },
      {
        date: '2023-11-29',
        engagementRate: 0.52
      },
      {
        date: '2023-11-30',
        engagementRate: 0.24
      },
      {
        date: '2023-12-01',
        engagementRate: 0.38
      },
      {
        date: '2023-12-02',
        engagementRate: 0.48
      },
      {
        date: '2023-12-03',
        engagementRate: 0.3
      },
      {
        date: '2023-12-04',
        engagementRate: 0.38
      },
      {
        date: '2023-12-05',
        engagementRate: 0.38
      },
      {
        date: '2023-12-06',
        engagementRate: 0.55
      },
      {
        date: '2023-12-07',
        engagementRate: 0.29
      },
      {
        date: '2023-12-08',
        engagementRate: 0.58
      },
      {
        date: '2023-12-09',
        engagementRate: 0.39
      },
      {
        date: '2023-12-10',
        engagementRate: 0.56
      },
      {
        date: '2023-12-11',
        engagementRate: 0.55
      },
      {
        date: '2023-12-12',
        engagementRate: 0.56
      },
      {
        date: '2023-12-13',
        engagementRate: 0.21
      },
      {
        date: '2023-12-14',
        engagementRate: 0.44
      },
      {
        date: '2023-12-15',
        engagementRate: 0.47
      },
      {
        date: '2023-12-16',
        engagementRate: 0.21
      },
      {
        date: '2023-12-17',
        engagementRate: 0.57
      },
      {
        date: '2023-12-18',
        engagementRate: 0.4
      },
      {
        date: '2023-12-19',
        engagementRate: 0.32
      },
      {
        date: '2023-12-20',
        engagementRate: 0.51
      },
      {
        date: '2023-12-21',
        engagementRate: 0.31
      },
      {
        date: '2023-12-22',
        engagementRate: 0.55
      },
      {
        date: '2023-12-23',
        engagementRate: 0.2
      },
      {
        date: '2023-12-24',
        engagementRate: 0.33
      },
      {
        date: '2023-12-25',
        engagementRate: 0.42
      },
      {
        date: '2023-12-26',
        engagementRate: 0.29
      },
      {
        date: '2023-12-27',
        engagementRate: 0.41
      },
      {
        date: '2023-12-28',
        engagementRate: 0.52
      },
      {
        date: '2023-12-29',
        engagementRate: 0.26
      },
      {
        date: '2023-12-30',
        engagementRate: 0.39
      },
      {
        date: '2023-12-31',
        engagementRate: 0.25
      },
      {
        date: '2024-01-01',
        engagementRate: 0.43
      },
      {
        date: '2024-01-02',
        engagementRate: 0.59
      },
      {
        date: '2024-01-03',
        engagementRate: 0.42
      },
      {
        date: '2024-01-04',
        engagementRate: 0.51
      },
      {
        date: '2024-01-05',
        engagementRate: 0.4
      },
      {
        date: '2024-01-06',
        engagementRate: 0.59
      },
      {
        date: '2024-01-07',
        engagementRate: 0.4
      },
      {
        date: '2024-01-08',
        engagementRate: 0.6
      },
      {
        date: '2024-01-09',
        engagementRate: 0.55
      },
      {
        date: '2024-01-10',
        engagementRate: 0.3
      },
      {
        date: '2024-01-11',
        engagementRate: 0.49
      },
      {
        date: '2024-01-12',
        engagementRate: 0.24
      },
      {
        date: '2024-01-13',
        engagementRate: 0.48
      },
      {
        date: '2024-01-14',
        engagementRate: 0.36
      },
      {
        date: '2024-01-15',
        engagementRate: 0.55
      },
      {
        date: '2024-01-16',
        engagementRate: 0.32
      },
      {
        date: '2024-01-17',
        engagementRate: 0.54
      },
      {
        date: '2024-01-18',
        engagementRate: 0.21
      },
      {
        date: '2024-01-19',
        engagementRate: 0.35
      },
      {
        date: '2024-01-20',
        engagementRate: 0.43
      },
      {
        date: '2024-01-21',
        engagementRate: 0.47
      },
      {
        date: '2024-01-22',
        engagementRate: 0.22
      },
      {
        date: '2024-01-23',
        engagementRate: 0.33
      },
      {
        date: '2024-01-24',
        engagementRate: 0.41
      },
      {
        date: '2024-01-25',
        engagementRate: 0.59
      },
      {
        date: '2024-01-26',
        engagementRate: 0.59
      },
      {
        date: '2024-01-27',
        engagementRate: 0.4
      },
      {
        date: '2024-01-28',
        engagementRate: 0.23
      },
      {
        date: '2024-01-29',
        engagementRate: 0.29
      },
      {
        date: '2024-01-30',
        engagementRate: 0.42
      },
      {
        date: '2024-01-31',
        engagementRate: 0.4
      },
      {
        date: '2024-02-01',
        engagementRate: 0.29
      },
      {
        date: '2024-02-02',
        engagementRate: 0.45
      },
      {
        date: '2024-02-03',
        engagementRate: 0.58
      },
      {
        date: '2024-02-04',
        engagementRate: 0.45
      },
      {
        date: '2024-02-05',
        engagementRate: 0.46
      },
      {
        date: '2024-02-06',
        engagementRate: 0.53
      },
      {
        date: '2024-02-07',
        engagementRate: 0.3
      },
      {
        date: '2024-02-08',
        engagementRate: 0.35
      },
      {
        date: '2024-02-09',
        engagementRate: 0.52
      },
      {
        date: '2024-02-10',
        engagementRate: 0.22
      },
      {
        date: '2024-02-11',
        engagementRate: 0.29
      },
      {
        date: '2024-02-12',
        engagementRate: 0.28
      },
      {
        date: '2024-02-13',
        engagementRate: 0.35
      },
      {
        date: '2024-02-14',
        engagementRate: 0.38
      },
      {
        date: '2024-02-15',
        engagementRate: 0.2
      },
      {
        date: '2024-02-16',
        engagementRate: 0.49
      },
      {
        date: '2024-02-17',
        engagementRate: 0.47
      },
      {
        date: '2024-02-18',
        engagementRate: 0.36
      },
      {
        date: '2024-02-19',
        engagementRate: 0.55
      },
      {
        date: '2024-02-20',
        engagementRate: 0.36
      },
      {
        date: '2024-02-21',
        engagementRate: 0.33
      },
      {
        date: '2024-02-22',
        engagementRate: 0.4
      },
      {
        date: '2024-02-23',
        engagementRate: 0.55
      },
      {
        date: '2024-02-24',
        engagementRate: 0.57
      },
      {
        date: '2024-02-25',
        engagementRate: 0.42
      },
      {
        date: '2024-02-26',
        engagementRate: 0.39
      },
      {
        date: '2024-02-27',
        engagementRate: 0.55
      },
      {
        date: '2024-02-28',
        engagementRate: 0.5
      },
      {
        date: '2024-02-29',
        engagementRate: 0.47
      },
      {
        date: '2024-03-01',
        engagementRate: 0.59
      },
      {
        date: '2024-03-02',
        engagementRate: 0.35
      },
      {
        date: '2024-03-03',
        engagementRate: 0.53
      },
      {
        date: '2024-03-04',
        engagementRate: 0.55
      },
      {
        date: '2024-03-05',
        engagementRate: 0.26
      },
      {
        date: '2024-03-06',
        engagementRate: 0.44
      },
      {
        date: '2024-03-07',
        engagementRate: 0.54
      },
      {
        date: '2024-03-08',
        engagementRate: 0.36
      },
      {
        date: '2024-03-09',
        engagementRate: 0.38
      },
      {
        date: '2024-03-10',
        engagementRate: 0.56
      },
      {
        date: '2024-03-11',
        engagementRate: 0.4
      },
      {
        date: '2024-03-12',
        engagementRate: 0.37
      },
      {
        date: '2024-03-13',
        engagementRate: 0.51
      },
      {
        date: '2024-03-14',
        engagementRate: 0.29
      },
      {
        date: '2024-03-15',
        engagementRate: 0.33
      },
      {
        date: '2024-03-16',
        engagementRate: 0.51
      },
      {
        date: '2024-03-17',
        engagementRate: 0.41
      },
      {
        date: '2024-03-18',
        engagementRate: 0.57
      },
      {
        date: '2024-03-19',
        engagementRate: 0.39
      },
      {
        date: '2024-03-20',
        engagementRate: 0.27
      },
      {
        date: '2024-03-21',
        engagementRate: 0.47
      },
      {
        date: '2024-03-22',
        engagementRate: 0.29
      },
      {
        date: '2024-03-23',
        engagementRate: 0.47
      },
      {
        date: '2024-03-24',
        engagementRate: 0.53
      },
      {
        date: '2024-03-25',
        engagementRate: 0.51
      },
      {
        date: '2024-03-26',
        engagementRate: 0.51
      },
      {
        date: '2024-03-27',
        engagementRate: 0.46
      },
      {
        date: '2024-03-28',
        engagementRate: 0.31
      },
      {
        date: '2024-03-29',
        engagementRate: 0.49
      },
      {
        date: '2024-03-30',
        engagementRate: 0.59
      },
      {
        date: '2024-03-31',
        engagementRate: 0.38
      },
      {
        date: '2024-04-01',
        engagementRate: 0.56
      },
      {
        date: '2024-04-02',
        engagementRate: 0.27
      },
      {
        date: '2024-04-03',
        engagementRate: 0.35
      },
      {
        date: '2024-04-04',
        engagementRate: 0.25
      },
      {
        date: '2024-04-05',
        engagementRate: 0.44
      },
      {
        date: '2024-04-06',
        engagementRate: 0.54
      },
      {
        date: '2024-04-07',
        engagementRate: 0.22
      },
      {
        date: '2024-04-08',
        engagementRate: 0.57
      },
      {
        date: '2024-04-09',
        engagementRate: 0.49
      },
      {
        date: '2024-04-10',
        engagementRate: 0.28
      },
      {
        date: '2024-04-11',
        engagementRate: 0.21
      },
      {
        date: '2024-04-12',
        engagementRate: 0.26
      },
      {
        date: '2024-04-13',
        engagementRate: 0.59
      },
      {
        date: '2024-04-14',
        engagementRate: 0.45
      },
      {
        date: '2024-04-15',
        engagementRate: 0.28
      },
      {
        date: '2024-04-16',
        engagementRate: 0.21
      },
      {
        date: '2024-04-17',
        engagementRate: 0.24
      },
      {
        date: '2024-04-18',
        engagementRate: 0.49
      },
      {
        date: '2024-04-19',
        engagementRate: 0.54
      },
      {
        date: '2024-04-20',
        engagementRate: 0.34
      },
      {
        date: '2024-04-21',
        engagementRate: 0.29
      },
      {
        date: '2024-04-22',
        engagementRate: 0.5
      },
      {
        date: '2024-04-23',
        engagementRate: 0.33
      },
      {
        date: '2024-04-24',
        engagementRate: 0.52
      },
      {
        date: '2024-04-25',
        engagementRate: 0.37
      },
      {
        date: '2024-04-26',
        engagementRate: 0.29
      },
      {
        date: '2024-04-27',
        engagementRate: 0.34
      },
      {
        date: '2024-04-28',
        engagementRate: 0.53
      },
      {
        date: '2024-04-29',
        engagementRate: 0.53
      },
      {
        date: '2024-04-30',
        engagementRate: 0.46
      },
      {
        date: '2024-05-01',
        engagementRate: 0.42
      },
      {
        date: '2024-05-02',
        engagementRate: 0.52
      },
      {
        date: '2024-05-03',
        engagementRate: 0.58
      },
      {
        date: '2024-05-04',
        engagementRate: 0.35
      },
      {
        date: '2024-05-05',
        engagementRate: 0.5
      },
      {
        date: '2024-05-06',
        engagementRate: 0.38
      },
      {
        date: '2024-05-07',
        engagementRate: 0.44
      },
      {
        date: '2024-05-08',
        engagementRate: 0.53
      },
      {
        date: '2024-05-09',
        engagementRate: 0.4
      },
      {
        date: '2024-05-10',
        engagementRate: 0.38
      },
      {
        date: '2024-05-11',
        engagementRate: 0.31
      },
      {
        date: '2024-05-12',
        engagementRate: 0.39
      },
      {
        date: '2024-05-13',
        engagementRate: 0.2
      },
      {
        date: '2024-05-14',
        engagementRate: 0.26
      },
      {
        date: '2024-05-15',
        engagementRate: 0.27
      },
      {
        date: '2024-05-16',
        engagementRate: 0.36
      },
      {
        date: '2024-05-17',
        engagementRate: 0.45
      },
      {
        date: '2024-05-18',
        engagementRate: 0.41
      },
      {
        date: '2024-05-19',
        engagementRate: 0.45
      },
      {
        date: '2024-05-20',
        engagementRate: 0.32
      },
      {
        date: '2024-05-21',
        engagementRate: 0.53
      },
      {
        date: '2024-05-22',
        engagementRate: 0.45
      },
      {
        date: '2024-05-23',
        engagementRate: 0.41
      },
      {
        date: '2024-05-24',
        engagementRate: 0.49
      },
      {
        date: '2024-05-25',
        engagementRate: 0.32
      },
      {
        date: '2024-05-26',
        engagementRate: 0.2
      },
      {
        date: '2024-05-27',
        engagementRate: 0.43
      },
      {
        date: '2024-05-28',
        engagementRate: 0.31
      },
      {
        date: '2024-05-29',
        engagementRate: 0.52
      },
      {
        date: '2024-05-30',
        engagementRate: 0.46
      },
      {
        date: '2024-05-31',
        engagementRate: 0.53
      },
      {
        date: '2024-06-01',
        engagementRate: 0.49
      },
      {
        date: '2024-06-02',
        engagementRate: 0.38
      },
      {
        date: '2024-06-03',
        engagementRate: 0.41
      },
      {
        date: '2024-06-04',
        engagementRate: 0.49
      },
      {
        date: '2024-06-05',
        engagementRate: 0.43
      },
      {
        date: '2024-06-06',
        engagementRate: 0.57
      },
      {
        date: '2024-06-07',
        engagementRate: 0.26
      },
      {
        date: '2024-06-08',
        engagementRate: 0.21
      },
      {
        date: '2024-06-09',
        engagementRate: 0.28
      },
      {
        date: '2024-06-10',
        engagementRate: 0.54
      },
      {
        date: '2024-06-11',
        engagementRate: 0.56
      },
      {
        date: '2024-06-12',
        engagementRate: 0.36
      },
      {
        date: '2024-06-13',
        engagementRate: 0.39
      },
      {
        date: '2024-06-14',
        engagementRate: 0.36
      },
      {
        date: '2024-06-15',
        engagementRate: 0.49
      },
      {
        date: '2024-06-16',
        engagementRate: 0.6
      },
      {
        date: '2024-06-17',
        engagementRate: 0.23
      },
      {
        date: '2024-06-18',
        engagementRate: 0.54
      },
      {
        date: '2024-06-19',
        engagementRate: 0.43
      },
      {
        date: '2024-06-20',
        engagementRate: 0.25
      },
      {
        date: '2024-06-21',
        engagementRate: 0.35
      },
      {
        date: '2024-06-22',
        engagementRate: 0.47
      },
      {
        date: '2024-06-23',
        engagementRate: 0.38
      },
      {
        date: '2024-06-24',
        engagementRate: 0.41
      },
      {
        date: '2024-06-25',
        engagementRate: 0.42
      },
      {
        date: '2024-06-26',
        engagementRate: 0.41
      },
      {
        date: '2024-06-27',
        engagementRate: 0.52
      },
      {
        date: '2024-06-28',
        engagementRate: 0.23
      },
      {
        date: '2024-06-29',
        engagementRate: 0.48
      },
      {
        date: '2024-06-30',
        engagementRate: 0.6
      },
      {
        date: '2024-07-01',
        engagementRate: 0.58
      },
      {
        date: '2024-07-02',
        engagementRate: 0.21
      },
      {
        date: '2024-07-03',
        engagementRate: 0.34
      },
      {
        date: '2024-07-04',
        engagementRate: 0.22
      },
      {
        date: '2024-07-05',
        engagementRate: 0.52
      },
      {
        date: '2024-07-06',
        engagementRate: 0.35
      },
      {
        date: '2024-07-07',
        engagementRate: 0.43
      },
      {
        date: '2024-07-08',
        engagementRate: 0.53
      },
      {
        date: '2024-07-09',
        engagementRate: 0.56
      },
      {
        date: '2024-07-10',
        engagementRate: 0.22
      },
      {
        date: '2024-07-11',
        engagementRate: 0.54
      },
      {
        date: '2024-07-12',
        engagementRate: 0.21
      },
      {
        date: '2024-07-13',
        engagementRate: 0.26
      },
      {
        date: '2024-07-14',
        engagementRate: 0.41
      },
      {
        date: '2024-07-15',
        engagementRate: 0.32
      },
      {
        date: '2024-07-16',
        engagementRate: 0.52
      },
      {
        date: '2024-07-17',
        engagementRate: 0.41
      },
      {
        date: '2024-07-18',
        engagementRate: 0.4
      },
      {
        date: '2024-07-19',
        engagementRate: 0.37
      },
      {
        date: '2024-07-20',
        engagementRate: 0.46
      },
      {
        date: '2024-07-21',
        engagementRate: 0.22
      },
      {
        date: '2024-07-22',
        engagementRate: 0.59
      },
      {
        date: '2024-07-23',
        engagementRate: 0.24
      },
      {
        date: '2024-07-24',
        engagementRate: 0.54
      },
      {
        date: '2024-07-25',
        engagementRate: 0.49
      },
      {
        date: '2024-07-26',
        engagementRate: 0.25
      },
      {
        date: '2024-07-27',
        engagementRate: 0.35
      },
      {
        date: '2024-07-28',
        engagementRate: 0.39
      },
      {
        date: '2024-07-29',
        engagementRate: 0.49
      },
      {
        date: '2024-07-30',
        engagementRate: 0.29
      },
      {
        date: '2024-07-31',
        engagementRate: 0.27
      },
      {
        date: '2024-08-01',
        engagementRate: 0.55
      },
      {
        date: '2024-08-02',
        engagementRate: 0.2
      },
      {
        date: '2024-08-03',
        engagementRate: 0.55
      },
      {
        date: '2024-08-04',
        engagementRate: 0.28
      },
      {
        date: '2024-08-05',
        engagementRate: 0.54
      },
      {
        date: '2024-08-06',
        engagementRate: 0.41
      },
      {
        date: '2024-08-07',
        engagementRate: 0.36
      },
      {
        date: '2024-08-08',
        engagementRate: 0.51
      },
      {
        date: '2024-08-09',
        engagementRate: 0.5
      },
      {
        date: '2024-08-10',
        engagementRate: 0.26
      },
      {
        date: '2024-08-11',
        engagementRate: 0.37
      },
      {
        date: '2024-08-12',
        engagementRate: 0.52
      },
      {
        date: '2024-08-13',
        engagementRate: 0.31
      },
      {
        date: '2024-08-14',
        engagementRate: 0.41
      },
      {
        date: '2024-08-15',
        engagementRate: 0.34
      },
      {
        date: '2024-08-16',
        engagementRate: 0.21
      },
      {
        date: '2024-08-17',
        engagementRate: 0.46
      },
      {
        date: '2024-08-18',
        engagementRate: 0.47
      },
      {
        date: '2024-08-19',
        engagementRate: 0.41
      },
      {
        date: '2024-08-20',
        engagementRate: 0.45
      },
      {
        date: '2024-08-21',
        engagementRate: 0.32
      },
      {
        date: '2024-08-22',
        engagementRate: 0.28
      },
      {
        date: '2024-08-23',
        engagementRate: 0.37
      },
      {
        date: '2024-08-24',
        engagementRate: 0.37
      },
      {
        date: '2024-08-25',
        engagementRate: 0.33
      },
      {
        date: '2024-08-26',
        engagementRate: 0.26
      },
      {
        date: '2024-08-27',
        engagementRate: 0.28
      },
      {
        date: '2024-08-28',
        engagementRate: 0.42
      },
      {
        date: '2024-08-29',
        engagementRate: 0.47
      },
      {
        date: '2024-08-30',
        engagementRate: 0.53
      },
      {
        date: '2024-08-31',
        engagementRate: 0.5
      },
      {
        date: '2024-09-01',
        engagementRate: 0.58
      },
      {
        date: '2024-09-02',
        engagementRate: 0.43
      },
      {
        date: '2024-09-03',
        engagementRate: 0.35
      },
      {
        date: '2024-09-04',
        engagementRate: 0.53
      },
      {
        date: '2024-09-05',
        engagementRate: 0.41
      },
      {
        date: '2024-09-06',
        engagementRate: 0.37
      },
      {
        date: '2024-09-07',
        engagementRate: 0.45
      },
      {
        date: '2024-09-08',
        engagementRate: 0.41
      },
      {
        date: '2024-09-09',
        engagementRate: 0.55
      },
      {
        date: '2024-09-10',
        engagementRate: 0.27
      },
      {
        date: '2024-09-11',
        engagementRate: 0.21
      },
      {
        date: '2024-09-12',
        engagementRate: 0.55
      },
      {
        date: '2024-09-13',
        engagementRate: 0.29
      },
      {
        date: '2024-09-14',
        engagementRate: 0.35
      },
      {
        date: '2024-09-15',
        engagementRate: 0.29
      },
      {
        date: '2024-09-16',
        engagementRate: 0.55
      },
      {
        date: '2024-09-17',
        engagementRate: 0.53
      },
      {
        date: '2024-09-18',
        engagementRate: 0.48
      },
      {
        date: '2024-09-19',
        engagementRate: 0.59
      },
      {
        date: '2024-09-20',
        engagementRate: 0.37
      },
      {
        date: '2024-09-21',
        engagementRate: 0.25
      },
      {
        date: '2024-09-22',
        engagementRate: 0.35
      },
      {
        date: '2024-09-23',
        engagementRate: 0.56
      },
      {
        date: '2024-09-24',
        engagementRate: 0.57
      },
      {
        date: '2024-09-25',
        engagementRate: 0.26
      },
      {
        date: '2024-09-26',
        engagementRate: 0.39
      },
      {
        date: '2024-09-27',
        engagementRate: 0.29
      },
      {
        date: '2024-09-28',
        engagementRate: 0.42
      },
      {
        date: '2024-09-29',
        engagementRate: 0.42
      },
      {
        date: '2024-09-30',
        engagementRate: 0.22
      },
      {
        date: '2024-10-01',
        engagementRate: 0.44
      },
      {
        date: '2024-10-02',
        engagementRate: 0.33
      },
      {
        date: '2024-10-03',
        engagementRate: 0.57
      },
      {
        date: '2024-10-04',
        engagementRate: 0.59
      },
      {
        date: '2024-10-05',
        engagementRate: 0.39
      },
      {
        date: '2024-10-06',
        engagementRate: 0.52
      },
      {
        date: '2024-10-07',
        engagementRate: 0.25
      },
      {
        date: '2024-10-08',
        engagementRate: 0.55
      },
      {
        date: '2024-10-09',
        engagementRate: 0.26
      },
      {
        date: '2024-10-10',
        engagementRate: 0.54
      },
      {
        date: '2024-10-11',
        engagementRate: 0.47
      },
      {
        date: '2024-10-12',
        engagementRate: 0.49
      },
      {
        date: '2024-10-13',
        engagementRate: 0.57
      },
      {
        date: '2024-10-14',
        engagementRate: 0.37
      },
      {
        date: '2024-10-15',
        engagementRate: 0.27
      },
      {
        date: '2024-10-16',
        engagementRate: 0.4
      },
      {
        date: '2024-10-17',
        engagementRate: 0.3
      },
      {
        date: '2024-10-18',
        engagementRate: 0.29
      },
      {
        date: '2024-10-19',
        engagementRate: 0.21
      },
      {
        date: '2024-10-20',
        engagementRate: 0.49
      },
      {
        date: '2024-10-21',
        engagementRate: 0.29
      },
      {
        date: '2024-10-22',
        engagementRate: 0.5
      },
      {
        date: '2024-10-23',
        engagementRate: 0.33
      },
      {
        date: '2024-10-24',
        engagementRate: 0.58
      },
      {
        date: '2024-10-25',
        engagementRate: 0.58
      },
      {
        date: '2024-10-26',
        engagementRate: 0.45
      },
      {
        date: '2024-10-27',
        engagementRate: 0.28
      },
      {
        date: '2024-10-28',
        engagementRate: 0.41
      },
      {
        date: '2024-10-29',
        engagementRate: 0.4
      },
      {
        date: '2024-10-30',
        engagementRate: 0.27
      },
      {
        date: '2024-10-31',
        engagementRate: 0.43
      },
      {
        date: '2024-11-01',
        engagementRate: 0.47
      },
      {
        date: '2024-11-02',
        engagementRate: 0.51
      },
      {
        date: '2024-11-03',
        engagementRate: 0.24
      },
      {
        date: '2024-11-04',
        engagementRate: 0.56
      },
      {
        date: '2024-11-05',
        engagementRate: 0.23
      },
      {
        date: '2024-11-06',
        engagementRate: 0.51
      },
      {
        date: '2024-11-07',
        engagementRate: 0.55
      },
      {
        date: '2024-11-08',
        engagementRate: 0.54
      },
      {
        date: '2024-11-09',
        engagementRate: 0.34
      },
      {
        date: '2024-11-10',
        engagementRate: 0.28
      },
      {
        date: '2024-11-11',
        engagementRate: 0.32
      },
      {
        date: '2024-11-12',
        engagementRate: 0.41
      },
      {
        date: '2024-11-13',
        engagementRate: 0.51
      },
      {
        date: '2024-11-14',
        engagementRate: 0.21
      },
      {
        date: '2024-11-15',
        engagementRate: 0.4
      },
      {
        date: '2024-11-16',
        engagementRate: 0.37
      },
      {
        date: '2024-11-17',
        engagementRate: 0.32
      }
    ],
    contentTypeEngagement: [
      { type: 'Videos', engagementRate: 0.69 },
      { type: 'Images', engagementRate: 0.53 },
      { type: 'Articles', engagementRate: 0.44 },
      { type: 'Podcasts', engagementRate: 0.31 },
      { type: 'Infographics', engagementRate: 0.46 }
    ]
  },
  keywordTracker: {
    keywordRankings: [
      { keyword: 'React', rank: 1, date: '2024-11-01' },
      { keyword: 'JavaScript', rank: 2, date: '2024-11-01' }
    ]
  },
  comparativeAnalysis: {
    competitorMetrics: [
      { competitor: 'Company A', followers: 5000, engagementRate: 0.2 },
      { competitor: 'Company B', followers: 6000, engagementRate: 0.15 }
    ]
  },
  reports: {
    cumulativeMetrics: [
      { date: '2024-11-01', revenue: 1000 },
      { date: '2024-11-02', revenue: 1500 }
    ]
  }
}

export default mockData
