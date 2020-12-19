
export const  hypothesis	= [
    {
        "id": 0,
        "type": "IPS",
        "hypothesis": "H1: Un étudiant venant du BL et n’a jamais fait un robot ni capteur a un profil IPS",
        "questions": [
            {
                "id": 1,
                "question": "Quel parcours avez vous fait avant d’intégrer l'ensim ?",
                "responses": [
                    {
                        "response":"BL",
                        "score": 10
                    }
                ]
            },{
                "id": 2,
                "question": "As-tu déjà réalisé ? [Un robot]",
                "responses": [
                    {
                        "response":"Jamais",
                        "score": 10
                    }
                ]
            },{
                "id":3,
                "question": "As-tu déjà réalisé ? [Un système électronique (capteurs...)]",
                "responses": [
                    {
                        "response":"Jamais",
                        "score": 10
                    }
                ]
            }
        ]
    },
    {
        "id": 1,
        "type": "ASTRE",
        "hypothesis": "H2: Un étudiant venant d’une classe prépa classique et qui s'intéresse à ENSIMElec a un profil ASTRE",
        "questions": [
            {
                "id": 1,
                "question": "Quel parcours avez vous fait avant d’intégrer l'ensim ?",
                "responses": [
                    {
                        "response":"Prépa intégrée",
                        "score": 5
                    },{
                        "response":"Prépa classique",
                        "score": 5
                    }
                ]
            },{
                "id":4,
                "question": "Quelles sont les associations de l'ensim qui t’intéresse ?",
                "responses": [
                    {
                        "response":"ENSIM’elec",
                        "score": 15
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "type": "IPS",
        "hypothesis": "H3 : Un étudiant venant d’une classe prépa ayant déjà utilisé Java ou python a un profil IPS",
        "questions": [
            {
                "id": 1,
                "question": "Quel parcours avez vous fait avant d’intégrer l'ensim ?",
                "responses": [
                    {
                        "response":"Prépa classique",
                        "score": 10
                    }
                ]
            },{
                "id":7,
                "question": "Quel langage de programmation as-tu déjà utilisé ?",
                "responses": [
                    {
                        "response":"Java",
                        "score": 5
                    },
                    {
                        "response":"python",
                        "score": 5
                    }
                ]
            }
        ],
    },{
        "id": 3,
        "type": "ASTRE",
        "hypothesis": "H4: Un étudiant ayant déjà fait de l’assembleur et C ou Arduino et utilise régulièrement Linux a un profil ASTRE",
        "questions": [
            {
                "id":7,
                "question": "Quel langage de programmation as-tu déjà utilisé ?",
                "responses": [
                    {
                        "response":"Assembleur",
                        "score": 5
                    },{
                        "response":"C",
                        "score": 5
                    }
                ]
            },{
                "id":5,
                "question": "As-tu déjà utilisé ? [Une carte Arduino/Raspberry]",
                "responses": [
                    {
                        "response":"Régulièrement",
                        "score": 20
                    },
                    {
                        "response":"Tout le temps",
                        "score": 20
                    },
                    {
                        "response":"Un peu",
                        "score": 5
                    }
                ]
            },{
                "id":6,
                "question": "As-tu déjà utilisé ? [Linux]",
                "responses": [
                    {
                        "response":"Régulièrement",
                        "score": 10
                    },
                    {
                        "response":"Tout le temps",
                        "score": 10
                    }
                ]
            }
        ],
    },{
        "id": 4,
        "type": "IPS",
        "hypothesis": "H5 : un étudiant de prépa intégrée et qui s’interesse à Jensim, InfoGraFist Pic’Asaulta est un profil IPS",
        "questions": [
            {
                "id": 1,
                "question": "Quel parcours avez vous fait avant d’intégrer l'ensim ?",
                "responses": [
                    {
                        "response":"Prépa intégrée",
                        "score": 5
                    }
                ]
            },{
                "id":4,
                "question": "Quelles sont les associations de l'ensim qui t’intéresse ?",
                "responses": [
                    {
                        "response":"Jensim",
                        "score": 1
                    },
                    {
                        "response":"Infographie",
                        "score": 2
                    },
                    {
                        "response":"Pic’Asaulta",
                        "score": 1
                    }
                ]
            }
        ],
    },{
        "id": 5,
        "type": "IPS",
        "hypothesis": "H6 : Un étudiant qui aime les langages haut-niveau exemple : javascript, Php, ou HTML5/CSS et utilise régulièrement des logiciels de retouche (Paint, photoshop) sera un IPS par excellence",
        "questions": [
            {
                "id":7,
                "question": "Quel langage de programmation as-tu déjà utilisé ?",
                "responses": [
                    {
                        "response":"JavaScript",
                        "score": 5
                    },{
                        "response": "HTML5 CSS",
                        "score": 10
                    },{
                        "response":"Php",
                        "score": 5
                    }
                ]
            },
            {
                "id":8,
                "question": "As-tu déjà utilisé ? [Des logiciels de retouche (Paint, Photoshop)]",
                "responses": [
                    {
                        "response":"Régulièrement",
                        "score": 20
                    },
                    {
                        "response":"Tout le temps",
                        "score": 20
                    },
                    {
                        "response":"Un peu",
                        "score": 10
                    }
                ]
            }
        ],
    },{
        "id": 6,
        "type": "ASTRE",
        "hypothesis": "H7 : Un étudiant ayant déjà réalisé un système électronique ou capteur ou robot a un profil ASTRE",
        "questions": [
            {
                "id":3,
                "question": "As-tu déjà réalisé ? [Un système électronique (capteurs...)]",
                "responses": [
                    {
                        "response":"Régulièrement",
                        "score": 20
                    },
                    {
                        "response":"Tout le temps",
                        "score": 20
                    },
                    {
                        "response":"Un peu",
                        "score": 10
                    }
                ]
            },{
                "id": 2,
                "question": "As-tu déjà réalisé ? [Un robot]",
                "responses": [
                    {
                        "response":"Régulièrement",
                        "score": 20
                    },
                    {
                        "response":"Tout le temps",
                        "score": 20
                    },
                    {
                        "response":"Un peu",
                        "score": 10
                    }
                ]
            }
        ],
    }
] ;
