let requestedDataKoeln;
let requestedDataBerlin;
let requestedDataMünchen;
let requestedDataHamburg;
let requestedData;

let dataArray = [];
let dataMin;
let dataMax;

// Called once when the program starts just before setup().
// Use this to load external data, i.e. make your API calls here.
// See https://p5js.org/reference/#/p5/preload
function preload() {
    // Call RKI Covid-19 API
    requestedDataKoeln = [
        {
            "trends": [
                {
                    "name": "#BSCFCB",
                    "url": "http://twitter.com/search?q=%23BSCFCB",
                    "promoted_content": null,
                    "query": "%23BSCFCB",
                    "tweet_volume": null
                },
                {
                    "name": "#BRU2301",
                    "url": "http://twitter.com/search?q=%23BRU2301",
                    "promoted_content": null,
                    "query": "%23BRU2301",
                    "tweet_volume": 22659
                },
                {
                    "name": "#GERSWE",
                    "url": "http://twitter.com/search?q=%23GERSWE",
                    "promoted_content": null,
                    "query": "%23GERSWE",
                    "tweet_volume": null
                },
                {
                    "name": "#TeamFreiheit",
                    "url": "http://twitter.com/search?q=%23TeamFreiheit",
                    "promoted_content": null,
                    "query": "%23TeamFreiheit",
                    "tweet_volume": null
                },
                {
                    "name": "Antifa",
                    "url": "http://twitter.com/search?q=Antifa",
                    "promoted_content": null,
                    "query": "Antifa",
                    "tweet_volume": 50458
                },
                {
                    "name": "Schönen Sonntag",
                    "url": "http://twitter.com/search?q=%22Sch%C3%B6nen+Sonntag%22",
                    "promoted_content": null,
                    "query": "%22Sch%C3%B6nen+Sonntag%22",
                    "tweet_volume": null
                },
                {
                    "name": "Gnabry",
                    "url": "http://twitter.com/search?q=Gnabry",
                    "promoted_content": null,
                    "query": "Gnabry",
                    "tweet_volume": null
                },
                {
                    "name": "Kirche",
                    "url": "http://twitter.com/search?q=Kirche",
                    "promoted_content": null,
                    "query": "Kirche",
                    "tweet_volume": null
                },
                {
                    "name": "Hertha",
                    "url": "http://twitter.com/search?q=Hertha",
                    "promoted_content": null,
                    "query": "Hertha",
                    "tweet_volume": null
                },
                {
                    "name": "Sonntagabend",
                    "url": "http://twitter.com/search?q=Sonntagabend",
                    "promoted_content": null,
                    "query": "Sonntagabend",
                    "tweet_volume": null
                },
                {
                    "name": "Packers",
                    "url": "http://twitter.com/search?q=Packers",
                    "promoted_content": null,
                    "query": "Packers",
                    "tweet_volume": 469821
                },
                {
                    "name": "guten morgen ihr lieben",
                    "url": "http://twitter.com/search?q=%22guten+morgen+ihr+lieben%22",
                    "promoted_content": null,
                    "query": "%22guten+morgen+ihr+lieben%22",
                    "tweet_volume": null
                },
                {
                    "name": "Anzeigen",
                    "url": "http://twitter.com/search?q=Anzeigen",
                    "promoted_content": null,
                    "query": "Anzeigen",
                    "tweet_volume": null
                },
                {
                    "name": "Sonntags",
                    "url": "http://twitter.com/search?q=Sonntags",
                    "promoted_content": null,
                    "query": "Sonntags",
                    "tweet_volume": null
                },
                {
                    "name": "Ukraine",
                    "url": "http://twitter.com/search?q=Ukraine",
                    "promoted_content": null,
                    "query": "Ukraine",
                    "tweet_volume": 337387
                },
                {
                    "name": "Anouschka",
                    "url": "http://twitter.com/search?q=Anouschka",
                    "promoted_content": null,
                    "query": "Anouschka",
                    "tweet_volume": null
                },
                {
                    "name": "Ziyech",
                    "url": "http://twitter.com/search?q=Ziyech",
                    "promoted_content": null,
                    "query": "Ziyech",
                    "tweet_volume": 74753
                },
                {
                    "name": "Admiral",
                    "url": "http://twitter.com/search?q=Admiral",
                    "promoted_content": null,
                    "query": "Admiral",
                    "tweet_volume": 16513
                },
                {
                    "name": "Tolisso",
                    "url": "http://twitter.com/search?q=Tolisso",
                    "promoted_content": null,
                    "query": "Tolisso",
                    "tweet_volume": null
                },
                {
                    "name": "leroy",
                    "url": "http://twitter.com/search?q=leroy",
                    "promoted_content": null,
                    "query": "leroy",
                    "tweet_volume": null
                },
                {
                    "name": "Janina",
                    "url": "http://twitter.com/search?q=Janina",
                    "promoted_content": null,
                    "query": "Janina",
                    "tweet_volume": null
                },
                {
                    "name": "Vergessenheit",
                    "url": "http://twitter.com/search?q=Vergessenheit",
                    "promoted_content": null,
                    "query": "Vergessenheit",
                    "tweet_volume": null
                },
                {
                    "name": "dschungelprüfung",
                    "url": "http://twitter.com/search?q=dschungelpr%C3%BCfung",
                    "promoted_content": null,
                    "query": "dschungelpr%C3%BCfung",
                    "tweet_volume": null
                },
                {
                    "name": "Gegentor",
                    "url": "http://twitter.com/search?q=Gegentor",
                    "promoted_content": null,
                    "query": "Gegentor",
                    "tweet_volume": null
                },
                {
                    "name": "Zeckenfieber",
                    "url": "http://twitter.com/search?q=Zeckenfieber",
                    "promoted_content": null,
                    "query": "Zeckenfieber",
                    "tweet_volume": null
                },
                {
                    "name": "Rodgers",
                    "url": "http://twitter.com/search?q=Rodgers",
                    "promoted_content": null,
                    "query": "Rodgers",
                    "tweet_volume": 653971
                },
                {
                    "name": "handspiel",
                    "url": "http://twitter.com/search?q=handspiel",
                    "promoted_content": null,
                    "query": "handspiel",
                    "tweet_volume": null
                },
                {
                    "name": "Ausschreitungen",
                    "url": "http://twitter.com/search?q=Ausschreitungen",
                    "promoted_content": null,
                    "query": "Ausschreitungen",
                    "tweet_volume": null
                },
                {
                    "name": "Schönen Abend",
                    "url": "http://twitter.com/search?q=%22Sch%C3%B6nen+Abend%22",
                    "promoted_content": null,
                    "query": "%22Sch%C3%B6nen+Abend%22",
                    "tweet_volume": null
                },
                {
                    "name": "Raizen",
                    "url": "http://twitter.com/search?q=Raizen",
                    "promoted_content": null,
                    "query": "Raizen",
                    "tweet_volume": null
                },
                {
                    "name": "Coman",
                    "url": "http://twitter.com/search?q=Coman",
                    "promoted_content": null,
                    "query": "Coman",
                    "tweet_volume": null
                },
                {
                    "name": "Kimmich",
                    "url": "http://twitter.com/search?q=Kimmich",
                    "promoted_content": null,
                    "query": "Kimmich",
                    "tweet_volume": null
                },
                {
                    "name": "Bundeskanzler",
                    "url": "http://twitter.com/search?q=Bundeskanzler",
                    "promoted_content": null,
                    "query": "Bundeskanzler",
                    "tweet_volume": null
                },
                {
                    "name": "Vortex",
                    "url": "http://twitter.com/search?q=Vortex",
                    "promoted_content": null,
                    "query": "Vortex",
                    "tweet_volume": null
                },
                {
                    "name": "Stufe",
                    "url": "http://twitter.com/search?q=Stufe",
                    "promoted_content": null,
                    "query": "Stufe",
                    "tweet_volume": null
                },
                {
                    "name": "Lügenpresse",
                    "url": "http://twitter.com/search?q=L%C3%BCgenpresse",
                    "promoted_content": null,
                    "query": "L%C3%BCgenpresse",
                    "tweet_volume": null
                },
                {
                    "name": "ALWAYS WITH JIMIN",
                    "url": "http://twitter.com/search?q=%22ALWAYS+WITH+JIMIN%22",
                    "promoted_content": null,
                    "query": "%22ALWAYS+WITH+JIMIN%22",
                    "tweet_volume": 61403
                },
                {
                    "name": "Sané",
                    "url": "http://twitter.com/search?q=San%C3%A9",
                    "promoted_content": null,
                    "query": "San%C3%A9",
                    "tweet_volume": 21305
                },
                {
                    "name": "Harald",
                    "url": "http://twitter.com/search?q=Harald",
                    "promoted_content": null,
                    "query": "Harald",
                    "tweet_volume": null
                },
                {
                    "name": "Spurs",
                    "url": "http://twitter.com/search?q=Spurs",
                    "promoted_content": null,
                    "query": "Spurs",
                    "tweet_volume": 62384
                },
                {
                    "name": "Lukaku",
                    "url": "http://twitter.com/search?q=Lukaku",
                    "promoted_content": null,
                    "query": "Lukaku",
                    "tweet_volume": 50744
                },
                {
                    "name": "Thomas Müller",
                    "url": "http://twitter.com/search?q=%22Thomas+M%C3%BCller%22",
                    "promoted_content": null,
                    "query": "%22Thomas+M%C3%BCller%22",
                    "tweet_volume": null
                },
                {
                    "name": "Gestalt",
                    "url": "http://twitter.com/search?q=Gestalt",
                    "promoted_content": null,
                    "query": "Gestalt",
                    "tweet_volume": null
                },
                {
                    "name": "Fussball",
                    "url": "http://twitter.com/search?q=Fussball",
                    "promoted_content": null,
                    "query": "Fussball",
                    "tweet_volume": null
                },
                {
                    "name": "Stellengesuche",
                    "url": "http://twitter.com/search?q=Stellengesuche",
                    "promoted_content": null,
                    "query": "Stellengesuche",
                    "tweet_volume": null
                },
                {
                    "name": "Coco",
                    "url": "http://twitter.com/search?q=Coco",
                    "promoted_content": null,
                    "query": "Coco",
                    "tweet_volume": 69974
                },
                {
                    "name": "Sonntagmorgen",
                    "url": "http://twitter.com/search?q=Sonntagmorgen",
                    "promoted_content": null,
                    "query": "Sonntagmorgen",
                    "tweet_volume": null
                },
                {
                    "name": "Russia",
                    "url": "http://twitter.com/search?q=Russia",
                    "promoted_content": null,
                    "query": "Russia",
                    "tweet_volume": 268878
                },
                {
                    "name": "Randalierer",
                    "url": "http://twitter.com/search?q=Randalierer",
                    "promoted_content": null,
                    "query": "Randalierer",
                    "tweet_volume": null
                }
            ],
            "as_of": "2022-01-23T19:26:55Z",
            "created_at": "2022-01-18T21:10:41Z",
            "locations": [
                {
                    "name": "Cologne",
                    "woeid": 667931
                }
            ]
        }
    ]

    requestedDataBerlin = [
        {
            "trends": [
                {
                    "name": "#BSCFCB",
                    "url": "http://twitter.com/search?q=%23BSCFCB",
                    "promoted_content": null,
                    "query": "%23BSCFCB",
                    "tweet_volume": null
                },
                {
                    "name": "#BRU2301",
                    "url": "http://twitter.com/search?q=%23BRU2301",
                    "promoted_content": null,
                    "query": "%23BRU2301",
                    "tweet_volume": 22465
                },
                {
                    "name": "#GERSWE",
                    "url": "http://twitter.com/search?q=%23GERSWE",
                    "promoted_content": null,
                    "query": "%23GERSWE",
                    "tweet_volume": null
                },
                {
                    "name": "#TeamFreiheit",
                    "url": "http://twitter.com/search?q=%23TeamFreiheit",
                    "promoted_content": null,
                    "query": "%23TeamFreiheit",
                    "tweet_volume": null
                },
                {
                    "name": "Antifa",
                    "url": "http://twitter.com/search?q=Antifa",
                    "promoted_content": null,
                    "query": "Antifa",
                    "tweet_volume": 49909
                },
                {
                    "name": "#RBLWOB",
                    "url": "http://twitter.com/search?q=%23RBLWOB",
                    "promoted_content": null,
                    "query": "%23RBLWOB",
                    "tweet_volume": null
                },
                {
                    "name": "Schönen Sonntag",
                    "url": "http://twitter.com/search?q=%22Sch%C3%B6nen+Sonntag%22",
                    "promoted_content": null,
                    "query": "%22Sch%C3%B6nen+Sonntag%22",
                    "tweet_volume": null
                },
                {
                    "name": "Gnabry",
                    "url": "http://twitter.com/search?q=Gnabry",
                    "promoted_content": null,
                    "query": "Gnabry",
                    "tweet_volume": null
                },
                {
                    "name": "Kirche",
                    "url": "http://twitter.com/search?q=Kirche",
                    "promoted_content": null,
                    "query": "Kirche",
                    "tweet_volume": null
                },
                {
                    "name": "Hertha",
                    "url": "http://twitter.com/search?q=Hertha",
                    "promoted_content": null,
                    "query": "Hertha",
                    "tweet_volume": null
                },
                {
                    "name": "Sonntagabend",
                    "url": "http://twitter.com/search?q=Sonntagabend",
                    "promoted_content": null,
                    "query": "Sonntagabend",
                    "tweet_volume": null
                },
                {
                    "name": "Packers",
                    "url": "http://twitter.com/search?q=Packers",
                    "promoted_content": null,
                    "query": "Packers",
                    "tweet_volume": 468850
                },
                {
                    "name": "guten morgen ihr lieben",
                    "url": "http://twitter.com/search?q=%22guten+morgen+ihr+lieben%22",
                    "promoted_content": null,
                    "query": "%22guten+morgen+ihr+lieben%22",
                    "tweet_volume": null
                },
                {
                    "name": "Anzeigen",
                    "url": "http://twitter.com/search?q=Anzeigen",
                    "promoted_content": null,
                    "query": "Anzeigen",
                    "tweet_volume": null
                },
                {
                    "name": "Sonntags",
                    "url": "http://twitter.com/search?q=Sonntags",
                    "promoted_content": null,
                    "query": "Sonntags",
                    "tweet_volume": null
                },
                {
                    "name": "Ukraine",
                    "url": "http://twitter.com/search?q=Ukraine",
                    "promoted_content": null,
                    "query": "Ukraine",
                    "tweet_volume": 335720
                },
                {
                    "name": "Anouschka",
                    "url": "http://twitter.com/search?q=Anouschka",
                    "promoted_content": null,
                    "query": "Anouschka",
                    "tweet_volume": null
                },
                {
                    "name": "Ziyech",
                    "url": "http://twitter.com/search?q=Ziyech",
                    "promoted_content": null,
                    "query": "Ziyech",
                    "tweet_volume": 73490
                },
                {
                    "name": "Admiral",
                    "url": "http://twitter.com/search?q=Admiral",
                    "promoted_content": null,
                    "query": "Admiral",
                    "tweet_volume": 16464
                },
                {
                    "name": "Tolisso",
                    "url": "http://twitter.com/search?q=Tolisso",
                    "promoted_content": null,
                    "query": "Tolisso",
                    "tweet_volume": null
                },
                {
                    "name": "Leroy",
                    "url": "http://twitter.com/search?q=Leroy",
                    "promoted_content": null,
                    "query": "Leroy",
                    "tweet_volume": null
                },
                {
                    "name": "Janina",
                    "url": "http://twitter.com/search?q=Janina",
                    "promoted_content": null,
                    "query": "Janina",
                    "tweet_volume": null
                },
                {
                    "name": "Vergessenheit",
                    "url": "http://twitter.com/search?q=Vergessenheit",
                    "promoted_content": null,
                    "query": "Vergessenheit",
                    "tweet_volume": null
                },
                {
                    "name": "dschungelprüfung",
                    "url": "http://twitter.com/search?q=dschungelpr%C3%BCfung",
                    "promoted_content": null,
                    "query": "dschungelpr%C3%BCfung",
                    "tweet_volume": null
                },
                {
                    "name": "Gegentor",
                    "url": "http://twitter.com/search?q=Gegentor",
                    "promoted_content": null,
                    "query": "Gegentor",
                    "tweet_volume": null
                },
                {
                    "name": "Zeckenfieber",
                    "url": "http://twitter.com/search?q=Zeckenfieber",
                    "promoted_content": null,
                    "query": "Zeckenfieber",
                    "tweet_volume": null
                },
                {
                    "name": "Rodgers",
                    "url": "http://twitter.com/search?q=Rodgers",
                    "promoted_content": null,
                    "query": "Rodgers",
                    "tweet_volume": 652086
                },
                {
                    "name": "handspiel",
                    "url": "http://twitter.com/search?q=handspiel",
                    "promoted_content": null,
                    "query": "handspiel",
                    "tweet_volume": null
                },
                {
                    "name": "Ausschreitungen",
                    "url": "http://twitter.com/search?q=Ausschreitungen",
                    "promoted_content": null,
                    "query": "Ausschreitungen",
                    "tweet_volume": null
                },
                {
                    "name": "Schönen Abend",
                    "url": "http://twitter.com/search?q=%22Sch%C3%B6nen+Abend%22",
                    "promoted_content": null,
                    "query": "%22Sch%C3%B6nen+Abend%22",
                    "tweet_volume": null
                },
                {
                    "name": "Raizen",
                    "url": "http://twitter.com/search?q=Raizen",
                    "promoted_content": null,
                    "query": "Raizen",
                    "tweet_volume": null
                },
                {
                    "name": "Coman",
                    "url": "http://twitter.com/search?q=Coman",
                    "promoted_content": null,
                    "query": "Coman",
                    "tweet_volume": null
                },
                {
                    "name": "Kimmich",
                    "url": "http://twitter.com/search?q=Kimmich",
                    "promoted_content": null,
                    "query": "Kimmich",
                    "tweet_volume": null
                },
                {
                    "name": "Bundeskanzler",
                    "url": "http://twitter.com/search?q=Bundeskanzler",
                    "promoted_content": null,
                    "query": "Bundeskanzler",
                    "tweet_volume": null
                },
                {
                    "name": "Vortex",
                    "url": "http://twitter.com/search?q=Vortex",
                    "promoted_content": null,
                    "query": "Vortex",
                    "tweet_volume": null
                },
                {
                    "name": "Stufe",
                    "url": "http://twitter.com/search?q=Stufe",
                    "promoted_content": null,
                    "query": "Stufe",
                    "tweet_volume": null
                },
                {
                    "name": "Lügenpresse",
                    "url": "http://twitter.com/search?q=L%C3%BCgenpresse",
                    "promoted_content": null,
                    "query": "L%C3%BCgenpresse",
                    "tweet_volume": null
                },
                {
                    "name": "ALWAYS WITH JIMIN",
                    "url": "http://twitter.com/search?q=%22ALWAYS+WITH+JIMIN%22",
                    "promoted_content": null,
                    "query": "%22ALWAYS+WITH+JIMIN%22",
                    "tweet_volume": 61157
                },
                {
                    "name": "Sané",
                    "url": "http://twitter.com/search?q=San%C3%A9",
                    "promoted_content": null,
                    "query": "San%C3%A9",
                    "tweet_volume": 21161
                },
                {
                    "name": "Harald",
                    "url": "http://twitter.com/search?q=Harald",
                    "promoted_content": null,
                    "query": "Harald",
                    "tweet_volume": null
                },
                {
                    "name": "Spurs",
                    "url": "http://twitter.com/search?q=Spurs",
                    "promoted_content": null,
                    "query": "Spurs",
                    "tweet_volume": 61583
                },
                {
                    "name": "Lukaku",
                    "url": "http://twitter.com/search?q=Lukaku",
                    "promoted_content": null,
                    "query": "Lukaku",
                    "tweet_volume": 50548
                },
                {
                    "name": "Thomas Müller",
                    "url": "http://twitter.com/search?q=%22Thomas+M%C3%BCller%22",
                    "promoted_content": null,
                    "query": "%22Thomas+M%C3%BCller%22",
                    "tweet_volume": null
                },
                {
                    "name": "Gestalt",
                    "url": "http://twitter.com/search?q=Gestalt",
                    "promoted_content": null,
                    "query": "Gestalt",
                    "tweet_volume": null
                },
                {
                    "name": "Fussball",
                    "url": "http://twitter.com/search?q=Fussball",
                    "promoted_content": null,
                    "query": "Fussball",
                    "tweet_volume": null
                },
                {
                    "name": "Stellengesuche",
                    "url": "http://twitter.com/search?q=Stellengesuche",
                    "promoted_content": null,
                    "query": "Stellengesuche",
                    "tweet_volume": null
                },
                {
                    "name": "Coco",
                    "url": "http://twitter.com/search?q=Coco",
                    "promoted_content": null,
                    "query": "Coco",
                    "tweet_volume": 69746
                },
                {
                    "name": "Sonntagmorgen",
                    "url": "http://twitter.com/search?q=Sonntagmorgen",
                    "promoted_content": null,
                    "query": "Sonntagmorgen",
                    "tweet_volume": null
                },
                {
                    "name": "Russia",
                    "url": "http://twitter.com/search?q=Russia",
                    "promoted_content": null,
                    "query": "Russia",
                    "tweet_volume": 267558
                },
                {
                    "name": "Randalierer",
                    "url": "http://twitter.com/search?q=Randalierer",
                    "promoted_content": null,
                    "query": "Randalierer",
                    "tweet_volume": null
                }
            ],
            "as_of": "2022-01-23T19:21:31Z",
            "created_at": "2022-01-18T21:10:41Z",
            "locations": [
                {
                    "name": "Berlin",
                    "woeid": 638242
                }
            ]
        }
    ]

    requestedDataMünchen = [
        {
            "trends": [
                {
                    "name": "#BSCFCB",
                    "url": "http://twitter.com/search?q=%23BSCFCB",
                    "promoted_content": null,
                    "query": "%23BSCFCB",
                    "tweet_volume": null
                },
                {
                    "name": "#BRU2301",
                    "url": "http://twitter.com/search?q=%23BRU2301",
                    "promoted_content": null,
                    "query": "%23BRU2301",
                    "tweet_volume": 22534
                },
                {
                    "name": "#GERSWE",
                    "url": "http://twitter.com/search?q=%23GERSWE",
                    "promoted_content": null,
                    "query": "%23GERSWE",
                    "tweet_volume": null
                },
                {
                    "name": "#TeamFreiheit",
                    "url": "http://twitter.com/search?q=%23TeamFreiheit",
                    "promoted_content": null,
                    "query": "%23TeamFreiheit",
                    "tweet_volume": null
                },
                {
                    "name": "Antifa",
                    "url": "http://twitter.com/search?q=Antifa",
                    "promoted_content": null,
                    "query": "Antifa",
                    "tweet_volume": 50084
                },
                {
                    "name": "#RBLWOB",
                    "url": "http://twitter.com/search?q=%23RBLWOB",
                    "promoted_content": null,
                    "query": "%23RBLWOB",
                    "tweet_volume": null
                },
                {
                    "name": "Schönen Sonntag",
                    "url": "http://twitter.com/search?q=%22Sch%C3%B6nen+Sonntag%22",
                    "promoted_content": null,
                    "query": "%22Sch%C3%B6nen+Sonntag%22",
                    "tweet_volume": null
                },
                {
                    "name": "Gnabry",
                    "url": "http://twitter.com/search?q=Gnabry",
                    "promoted_content": null,
                    "query": "Gnabry",
                    "tweet_volume": null
                },
                {
                    "name": "Kirche",
                    "url": "http://twitter.com/search?q=Kirche",
                    "promoted_content": null,
                    "query": "Kirche",
                    "tweet_volume": null
                },
                {
                    "name": "Hertha",
                    "url": "http://twitter.com/search?q=Hertha",
                    "promoted_content": null,
                    "query": "Hertha",
                    "tweet_volume": null
                },
                {
                    "name": "Sonntagabend",
                    "url": "http://twitter.com/search?q=Sonntagabend",
                    "promoted_content": null,
                    "query": "Sonntagabend",
                    "tweet_volume": null
                },
                {
                    "name": "Packers",
                    "url": "http://twitter.com/search?q=Packers",
                    "promoted_content": null,
                    "query": "Packers",
                    "tweet_volume": 469171
                },
                {
                    "name": "guten morgen ihr lieben",
                    "url": "http://twitter.com/search?q=%22guten+morgen+ihr+lieben%22",
                    "promoted_content": null,
                    "query": "%22guten+morgen+ihr+lieben%22",
                    "tweet_volume": null
                },
                {
                    "name": "Anzeigen",
                    "url": "http://twitter.com/search?q=Anzeigen",
                    "promoted_content": null,
                    "query": "Anzeigen",
                    "tweet_volume": null
                },
                {
                    "name": "Sonntags",
                    "url": "http://twitter.com/search?q=Sonntags",
                    "promoted_content": null,
                    "query": "Sonntags",
                    "tweet_volume": null
                },
                {
                    "name": "Ukraine",
                    "url": "http://twitter.com/search?q=Ukraine",
                    "promoted_content": null,
                    "query": "Ukraine",
                    "tweet_volume": 336214
                },
                {
                    "name": "Anouschka",
                    "url": "http://twitter.com/search?q=Anouschka",
                    "promoted_content": null,
                    "query": "Anouschka",
                    "tweet_volume": null
                },
                {
                    "name": "Ziyech",
                    "url": "http://twitter.com/search?q=Ziyech",
                    "promoted_content": null,
                    "query": "Ziyech",
                    "tweet_volume": 74097
                },
                {
                    "name": "Admiral",
                    "url": "http://twitter.com/search?q=Admiral",
                    "promoted_content": null,
                    "query": "Admiral",
                    "tweet_volume": 16474
                },
                {
                    "name": "Tolisso",
                    "url": "http://twitter.com/search?q=Tolisso",
                    "promoted_content": null,
                    "query": "Tolisso",
                    "tweet_volume": null
                },
                {
                    "name": "Leroy",
                    "url": "http://twitter.com/search?q=Leroy",
                    "promoted_content": null,
                    "query": "Leroy",
                    "tweet_volume": null
                },
                {
                    "name": "Janina",
                    "url": "http://twitter.com/search?q=Janina",
                    "promoted_content": null,
                    "query": "Janina",
                    "tweet_volume": null
                },
                {
                    "name": "Vergessenheit",
                    "url": "http://twitter.com/search?q=Vergessenheit",
                    "promoted_content": null,
                    "query": "Vergessenheit",
                    "tweet_volume": null
                },
                {
                    "name": "dschungelprüfung",
                    "url": "http://twitter.com/search?q=dschungelpr%C3%BCfung",
                    "promoted_content": null,
                    "query": "dschungelpr%C3%BCfung",
                    "tweet_volume": null
                },
                {
                    "name": "Gegentor",
                    "url": "http://twitter.com/search?q=Gegentor",
                    "promoted_content": null,
                    "query": "Gegentor",
                    "tweet_volume": null
                },
                {
                    "name": "Zeckenfieber",
                    "url": "http://twitter.com/search?q=Zeckenfieber",
                    "promoted_content": null,
                    "query": "Zeckenfieber",
                    "tweet_volume": null
                },
                {
                    "name": "Rodgers",
                    "url": "http://twitter.com/search?q=Rodgers",
                    "promoted_content": null,
                    "query": "Rodgers",
                    "tweet_volume": 652785
                },
                {
                    "name": "handspiel",
                    "url": "http://twitter.com/search?q=handspiel",
                    "promoted_content": null,
                    "query": "handspiel",
                    "tweet_volume": null
                },
                {
                    "name": "Ausschreitungen",
                    "url": "http://twitter.com/search?q=Ausschreitungen",
                    "promoted_content": null,
                    "query": "Ausschreitungen",
                    "tweet_volume": null
                },
                {
                    "name": "Schönen Abend",
                    "url": "http://twitter.com/search?q=%22Sch%C3%B6nen+Abend%22",
                    "promoted_content": null,
                    "query": "%22Sch%C3%B6nen+Abend%22",
                    "tweet_volume": null
                },
                {
                    "name": "Raizen",
                    "url": "http://twitter.com/search?q=Raizen",
                    "promoted_content": null,
                    "query": "Raizen",
                    "tweet_volume": null
                },
                {
                    "name": "Coman",
                    "url": "http://twitter.com/search?q=Coman",
                    "promoted_content": null,
                    "query": "Coman",
                    "tweet_volume": null
                },
                {
                    "name": "Kimmich",
                    "url": "http://twitter.com/search?q=Kimmich",
                    "promoted_content": null,
                    "query": "Kimmich",
                    "tweet_volume": null
                },
                {
                    "name": "Bundeskanzler",
                    "url": "http://twitter.com/search?q=Bundeskanzler",
                    "promoted_content": null,
                    "query": "Bundeskanzler",
                    "tweet_volume": null
                },
                {
                    "name": "Vortex",
                    "url": "http://twitter.com/search?q=Vortex",
                    "promoted_content": null,
                    "query": "Vortex",
                    "tweet_volume": null
                },
                {
                    "name": "Stufe",
                    "url": "http://twitter.com/search?q=Stufe",
                    "promoted_content": null,
                    "query": "Stufe",
                    "tweet_volume": null
                },
                {
                    "name": "Lügenpresse",
                    "url": "http://twitter.com/search?q=L%C3%BCgenpresse",
                    "promoted_content": null,
                    "query": "L%C3%BCgenpresse",
                    "tweet_volume": null
                },
                {
                    "name": "ALWAYS WITH JIMIN",
                    "url": "http://twitter.com/search?q=%22ALWAYS+WITH+JIMIN%22",
                    "promoted_content": null,
                    "query": "%22ALWAYS+WITH+JIMIN%22",
                    "tweet_volume": 61247
                },
                {
                    "name": "Sané",
                    "url": "http://twitter.com/search?q=San%C3%A9",
                    "promoted_content": null,
                    "query": "San%C3%A9",
                    "tweet_volume": 21229
                },
                {
                    "name": "Harald",
                    "url": "http://twitter.com/search?q=Harald",
                    "promoted_content": null,
                    "query": "Harald",
                    "tweet_volume": null
                },
                {
                    "name": "Spurs",
                    "url": "http://twitter.com/search?q=Spurs",
                    "promoted_content": null,
                    "query": "Spurs",
                    "tweet_volume": 62032
                },
                {
                    "name": "Lukaku",
                    "url": "http://twitter.com/search?q=Lukaku",
                    "promoted_content": null,
                    "query": "Lukaku",
                    "tweet_volume": 50626
                },
                {
                    "name": "Thomas Müller",
                    "url": "http://twitter.com/search?q=%22Thomas+M%C3%BCller%22",
                    "promoted_content": null,
                    "query": "%22Thomas+M%C3%BCller%22",
                    "tweet_volume": null
                },
                {
                    "name": "Gestalt",
                    "url": "http://twitter.com/search?q=Gestalt",
                    "promoted_content": null,
                    "query": "Gestalt",
                    "tweet_volume": null
                },
                {
                    "name": "Fussball",
                    "url": "http://twitter.com/search?q=Fussball",
                    "promoted_content": null,
                    "query": "Fussball",
                    "tweet_volume": null
                },
                {
                    "name": "Stellengesuche",
                    "url": "http://twitter.com/search?q=Stellengesuche",
                    "promoted_content": null,
                    "query": "Stellengesuche",
                    "tweet_volume": null
                },
                {
                    "name": "Coco",
                    "url": "http://twitter.com/search?q=Coco",
                    "promoted_content": null,
                    "query": "Coco",
                    "tweet_volume": 69824
                },
                {
                    "name": "Sonntagmorgen",
                    "url": "http://twitter.com/search?q=Sonntagmorgen",
                    "promoted_content": null,
                    "query": "Sonntagmorgen",
                    "tweet_volume": null
                },
                {
                    "name": "Russia",
                    "url": "http://twitter.com/search?q=Russia",
                    "promoted_content": null,
                    "query": "Russia",
                    "tweet_volume": 267766
                },
                {
                    "name": "Randalierer",
                    "url": "http://twitter.com/search?q=Randalierer",
                    "promoted_content": null,
                    "query": "Randalierer",
                    "tweet_volume": null
                }
            ],
            "as_of": "2022-01-23T19:23:20Z",
            "created_at": "2022-01-18T21:10:41Z",
            "locations": [
                {
                    "name": "Munich",
                    "woeid": 676757
                }
            ]
        }
    ]

    requestedDataHamburg = [
        {
            "trends": [
                {
                    "name": "#BSCFCB",
                    "url": "http://twitter.com/search?q=%23BSCFCB",
                    "promoted_content": null,
                    "query": "%23BSCFCB",
                    "tweet_volume": null
                },
                {
                    "name": "#BRU2301",
                    "url": "http://twitter.com/search?q=%23BRU2301",
                    "promoted_content": null,
                    "query": "%23BRU2301",
                    "tweet_volume": 22567
                },
                {
                    "name": "#GERSWE",
                    "url": "http://twitter.com/search?q=%23GERSWE",
                    "promoted_content": null,
                    "query": "%23GERSWE",
                    "tweet_volume": null
                },
                {
                    "name": "#TeamFreiheit",
                    "url": "http://twitter.com/search?q=%23TeamFreiheit",
                    "promoted_content": null,
                    "query": "%23TeamFreiheit",
                    "tweet_volume": null
                },
                {
                    "name": "Antifa",
                    "url": "http://twitter.com/search?q=Antifa",
                    "promoted_content": null,
                    "query": "Antifa",
                    "tweet_volume": 50259
                },
                {
                    "name": "#RBLWOB",
                    "url": "http://twitter.com/search?q=%23RBLWOB",
                    "promoted_content": null,
                    "query": "%23RBLWOB",
                    "tweet_volume": null
                },
                {
                    "name": "Schönen Sonntag",
                    "url": "http://twitter.com/search?q=%22Sch%C3%B6nen+Sonntag%22",
                    "promoted_content": null,
                    "query": "%22Sch%C3%B6nen+Sonntag%22",
                    "tweet_volume": null
                },
                {
                    "name": "Gnabry",
                    "url": "http://twitter.com/search?q=Gnabry",
                    "promoted_content": null,
                    "query": "Gnabry",
                    "tweet_volume": null
                },
                {
                    "name": "Kirche",
                    "url": "http://twitter.com/search?q=Kirche",
                    "promoted_content": null,
                    "query": "Kirche",
                    "tweet_volume": null
                },
                {
                    "name": "Hertha",
                    "url": "http://twitter.com/search?q=Hertha",
                    "promoted_content": null,
                    "query": "Hertha",
                    "tweet_volume": null
                },
                {
                    "name": "Sonntagabend",
                    "url": "http://twitter.com/search?q=Sonntagabend",
                    "promoted_content": null,
                    "query": "Sonntagabend",
                    "tweet_volume": null
                },
                {
                    "name": "Packers",
                    "url": "http://twitter.com/search?q=Packers",
                    "promoted_content": null,
                    "query": "Packers",
                    "tweet_volume": 469482
                },
                {
                    "name": "guten morgen ihr lieben",
                    "url": "http://twitter.com/search?q=%22guten+morgen+ihr+lieben%22",
                    "promoted_content": null,
                    "query": "%22guten+morgen+ihr+lieben%22",
                    "tweet_volume": null
                },
                {
                    "name": "Anzeigen",
                    "url": "http://twitter.com/search?q=Anzeigen",
                    "promoted_content": null,
                    "query": "Anzeigen",
                    "tweet_volume": null
                },
                {
                    "name": "Sonntags",
                    "url": "http://twitter.com/search?q=Sonntags",
                    "promoted_content": null,
                    "query": "Sonntags",
                    "tweet_volume": null
                },
                {
                    "name": "Ukraine",
                    "url": "http://twitter.com/search?q=Ukraine",
                    "promoted_content": null,
                    "query": "Ukraine",
                    "tweet_volume": 336817
                },
                {
                    "name": "Anouschka",
                    "url": "http://twitter.com/search?q=Anouschka",
                    "promoted_content": null,
                    "query": "Anouschka",
                    "tweet_volume": null
                },
                {
                    "name": "Ziyech",
                    "url": "http://twitter.com/search?q=Ziyech",
                    "promoted_content": null,
                    "query": "Ziyech",
                    "tweet_volume": 74257
                },
                {
                    "name": "Admiral",
                    "url": "http://twitter.com/search?q=Admiral",
                    "promoted_content": null,
                    "query": "Admiral",
                    "tweet_volume": 16496
                },
                {
                    "name": "Tolisso",
                    "url": "http://twitter.com/search?q=Tolisso",
                    "promoted_content": null,
                    "query": "Tolisso",
                    "tweet_volume": null
                },
                {
                    "name": "Leroy",
                    "url": "http://twitter.com/search?q=Leroy",
                    "promoted_content": null,
                    "query": "Leroy",
                    "tweet_volume": null
                },
                {
                    "name": "Janina",
                    "url": "http://twitter.com/search?q=Janina",
                    "promoted_content": null,
                    "query": "Janina",
                    "tweet_volume": null
                },
                {
                    "name": "Vergessenheit",
                    "url": "http://twitter.com/search?q=Vergessenheit",
                    "promoted_content": null,
                    "query": "Vergessenheit",
                    "tweet_volume": null
                },
                {
                    "name": "dschungelprüfung",
                    "url": "http://twitter.com/search?q=dschungelpr%C3%BCfung",
                    "promoted_content": null,
                    "query": "dschungelpr%C3%BCfung",
                    "tweet_volume": null
                },
                {
                    "name": "Gegentor",
                    "url": "http://twitter.com/search?q=Gegentor",
                    "promoted_content": null,
                    "query": "Gegentor",
                    "tweet_volume": null
                },
                {
                    "name": "Zeckenfieber",
                    "url": "http://twitter.com/search?q=Zeckenfieber",
                    "promoted_content": null,
                    "query": "Zeckenfieber",
                    "tweet_volume": null
                },
                {
                    "name": "Rodgers",
                    "url": "http://twitter.com/search?q=Rodgers",
                    "promoted_content": null,
                    "query": "Rodgers",
                    "tweet_volume": 653085
                },
                {
                    "name": "handspiel",
                    "url": "http://twitter.com/search?q=handspiel",
                    "promoted_content": null,
                    "query": "handspiel",
                    "tweet_volume": null
                },
                {
                    "name": "Ausschreitungen",
                    "url": "http://twitter.com/search?q=Ausschreitungen",
                    "promoted_content": null,
                    "query": "Ausschreitungen",
                    "tweet_volume": null
                },
                {
                    "name": "Schönen Abend",
                    "url": "http://twitter.com/search?q=%22Sch%C3%B6nen+Abend%22",
                    "promoted_content": null,
                    "query": "%22Sch%C3%B6nen+Abend%22",
                    "tweet_volume": null
                },
                {
                    "name": "Raizen",
                    "url": "http://twitter.com/search?q=Raizen",
                    "promoted_content": null,
                    "query": "Raizen",
                    "tweet_volume": null
                },
                {
                    "name": "Coman",
                    "url": "http://twitter.com/search?q=Coman",
                    "promoted_content": null,
                    "query": "Coman",
                    "tweet_volume": null
                },
                {
                    "name": "Kimmich",
                    "url": "http://twitter.com/search?q=Kimmich",
                    "promoted_content": null,
                    "query": "Kimmich",
                    "tweet_volume": null
                },
                {
                    "name": "Bundeskanzler",
                    "url": "http://twitter.com/search?q=Bundeskanzler",
                    "promoted_content": null,
                    "query": "Bundeskanzler",
                    "tweet_volume": null
                },
                {
                    "name": "Vortex",
                    "url": "http://twitter.com/search?q=Vortex",
                    "promoted_content": null,
                    "query": "Vortex",
                    "tweet_volume": null
                },
                {
                    "name": "Stufe",
                    "url": "http://twitter.com/search?q=Stufe",
                    "promoted_content": null,
                    "query": "Stufe",
                    "tweet_volume": null
                },
                {
                    "name": "Lügenpresse",
                    "url": "http://twitter.com/search?q=L%C3%BCgenpresse",
                    "promoted_content": null,
                    "query": "L%C3%BCgenpresse",
                    "tweet_volume": null
                },
                {
                    "name": "ALWAYS WITH JIMIN",
                    "url": "http://twitter.com/search?q=%22ALWAYS+WITH+JIMIN%22",
                    "promoted_content": null,
                    "query": "%22ALWAYS+WITH+JIMIN%22",
                    "tweet_volume": 61288
                },
                {
                    "name": "Sané",
                    "url": "http://twitter.com/search?q=San%C3%A9",
                    "promoted_content": null,
                    "query": "San%C3%A9",
                    "tweet_volume": 21255
                },
                {
                    "name": "Harald",
                    "url": "http://twitter.com/search?q=Harald",
                    "promoted_content": null,
                    "query": "Harald",
                    "tweet_volume": null
                },
                {
                    "name": "Spurs",
                    "url": "http://twitter.com/search?q=Spurs",
                    "promoted_content": null,
                    "query": "Spurs",
                    "tweet_volume": 62032
                },
                {
                    "name": "Lukaku",
                    "url": "http://twitter.com/search?q=Lukaku",
                    "promoted_content": null,
                    "query": "Lukaku",
                    "tweet_volume": 50650
                },
                {
                    "name": "Thomas Müller",
                    "url": "http://twitter.com/search?q=%22Thomas+M%C3%BCller%22",
                    "promoted_content": null,
                    "query": "%22Thomas+M%C3%BCller%22",
                    "tweet_volume": null
                },
                {
                    "name": "Gestalt",
                    "url": "http://twitter.com/search?q=Gestalt",
                    "promoted_content": null,
                    "query": "Gestalt",
                    "tweet_volume": null
                },
                {
                    "name": "Fussball",
                    "url": "http://twitter.com/search?q=Fussball",
                    "promoted_content": null,
                    "query": "Fussball",
                    "tweet_volume": null
                },
                {
                    "name": "Stellengesuche",
                    "url": "http://twitter.com/search?q=Stellengesuche",
                    "promoted_content": null,
                    "query": "Stellengesuche",
                    "tweet_volume": null
                },
                {
                    "name": "Coco",
                    "url": "http://twitter.com/search?q=Coco",
                    "promoted_content": null,
                    "query": "Coco",
                    "tweet_volume": 69900
                },
                {
                    "name": "Sonntagmorgen",
                    "url": "http://twitter.com/search?q=Sonntagmorgen",
                    "promoted_content": null,
                    "query": "Sonntagmorgen",
                    "tweet_volume": null
                },
                {
                    "name": "Russia",
                    "url": "http://twitter.com/search?q=Russia",
                    "promoted_content": null,
                    "query": "Russia",
                    "tweet_volume": 268262
                },
                {
                    "name": "Randalierer",
                    "url": "http://twitter.com/search?q=Randalierer",
                    "promoted_content": null,
                    "query": "Randalierer",
                    "tweet_volume": null
                }
            ],
            "as_of": "2022-01-23T19:24:34Z",
            "created_at": "2022-01-18T21:10:41Z",
            "locations": [
                {
                    "name": "Hamburg",
                    "woeid": 656958
                }
            ]
        }
    ]

    requestedData = [requestedDataKoeln, requestedDataBerlin , requestedDataMünchen , requestedDataHamburg]



}

// Called once when the program starts.
// See https://p5js.org/reference/#/p5/setup
function setup() {
    createCanvas(800, 800);

    // Log fetched data
    print("API data: ");
    print(JSON.stringify(requestedData, undefined, 2));
    console.log(requestedData.trends);


     dataArray = new Array(requestedData.trends.length);
    for(let i=0; i < requestedData.trends.length; i++){
        dataArray[i] = requestedData.trends[i].name;
     }
    print(dataArray);

}

// Called over and over to refresh your visualisation.
// See https://p5js.org/reference/#/p5/draw
function draw() {
    // Visualize amount of cases as circles with normalized diameters
    background(0);
    // for(let i=0; i < dataArray.length; i++){
    //     const diameter = map(dataArray[i], dataMin, dataMax, 20, 200);
    //     const x = 100*i;
    //     fill(255);
    //     if (dist(mouseX, mouseY, x, 400) <= diameter/2) {
    //         fill(255, 0, 0);
    //     } else {
    //         fill(255);
    //     }
    //     circle(x, 400, diameter);
    // }
    circle(400, 400, 100);
}