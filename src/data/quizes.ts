const quizes = [
  {
    name: "Caso Clinico #1",
    description: "",
    ciclos: [
      {
        questions: [
          {
            ritmo: "FV",
            question: "O ritmo é, o que fazer?",
            options: ["chocar", "comprimir", "preparar epinefrina"],
            correct: "chocar",
            table_column: "Choque",
            set_value: "Feito",
          },
          {
            question: "Depois do choque, o que fazer?",
            options: ["começar a RCP", "checar ritmo", "preparar epinefrina"],
            correct: "começar a RCP",
            table_column: "RCP",
            set_value: "Sim",
          },
          {
            question: "A RCP FOI INICIADA. O que fazer agora?",
            options: [
              "Estabelecer o coach",
              "fazer epinefrina",
              "buscar causas",
            ],
            correct: "Estabelecer o coach",
            table_column: "Coach",
            set_value: "Sim",
          },
          {
            question: "O COACH ESTÁ ATUANDO.O que fazer agora?",
            options: ["preparar epinefrina", "fazer epinefrina", "ver ritmo"],
            correct: "preparar epinefrina",
            table_column: "Drogas",
            set_value: "Epi preparada",
          },
        ],
      },
      {
        dos_minutos: true,
        questions: [
          {
            ritmo: "FV",
            question: "O ritmo é, o que fazer?",
            options: ["chocar", "comprimir", "preparar epinefrina"],
            correct: "chocar",
            table_column: "Choque",
            set_value: "Feito",
          },
          {
            question: "Depois do choque, o que fazer?",
            options: ["começar a RCP", "checar ritmo", "preparar epinefrina"],
            correct: "começar a RCP",
            table_column: "RCP",
            set_value: "Sim",
          },
          {
            question: "A RCP FOI INICIADA. O que fazer agora?",
            options: [
              "Checar com o coach",
              "fazer epinefrina",
              "buscar causas",
            ],
            correct: "Checar com o coach",
            table_column: "Coach",
            set_value: "Sim",
          },
          {
            question: "O COACH ESTÁ ATUANDO.O que fazer agora?",
            options: [
              "Administrar epinefrina e preparar Amiodarona 300",
              "fazer epinefrina",
              "ver ritmo",
            ],
            correct: "Administrar epinefrina e preparar Amiodarona 300",
            table_column: "Drogas",
            set_value: "Epi administrada e Amio 300 prep",
          },
        ],
      },
      {
        dos_minutos: true,
        questions: [
          {
            ritmo: "LR",
            question: "O ritmo é, o que fazer agora?",
            options: [
              "Checar Cabos, ganhos e derivações",
              "Chocar",
              "Comprimir",
            ],
            correct: "Checar Cabos, ganhos e derivações",
            table_column: "Ritmo",
            set_value: "LR",
          },
          {
            ritmo: "AE",
            question: "O ritmo é, o que fazer agora?",
            options: [
              "checar pulso",
              "Começar RCP",
              "Começar protocolo de RCE",
            ],
            correct: "checar pulso",
            table_column: "Ritmo",
            set_value: "LR -> AESP",
          },
          {
            question: "Não tem pulso. O que fazer agora?",
            options: [
              "Começar RCP",
              "Começar protocolo de RCE",
              "Fazer Epinefrina",
            ],
            correct: "Começar RCP",
            table_column: "RCP",
            set_value: "Sim",
          },
          {
            question: "A RCP FOI INICIADA. O que fazer agora?",
            options: [
              "Checar com o coach",
              "fazer epinefrina",
              "buscar causas",
            ],
            correct: "Checar com o coach",
            table_column: "Coach",
            set_value: "Sim",
          },
          {
            question: "O COACH ESTÁ ATUANDO. O que fazer agora?",
            options: [
              "Preparar epinefrina",
              "Fazer amiodarona 300 mg",
              "Fazer epinefrina",
            ],
            correct: "Preparar epinefrina",
            table_column: "Drogas",
            set_value: "Epi preparada",
          },
          {
            question: "VOCÊ ESTÁ INDO BEM. O que ainda falta fazer?",
            options: ["checar causas", "parar RCP", "fazer Amiodarona"],
            correct: "checar causas",
            table_column: "Outros",
            set_value: "Causas",
          },
        ],
      },
      {
        dos_minutos: "true",
        questions: [
          {
            ritmo: "AE",
            question: "O ritmo é, O que fazer agora?",
            options: [
              "Checar pulso",
              "Iniciar protocolo de RCE",
              "Fazer epinefrina",
            ],
            correct: "Checar pulso",
            table_column: "Ritmo",
            set_value: "AECP",
          },
          {
            question: "TEM PULSO. O que fazer agora?",
            options: ["Iniciar protocolo de RCE", "Chocar", "Comprimir"],
            correct: "Iniciar protocolo de RCE",
            table_column: "RCP",
            set_value: "Parou",
          },
        ],
      },
    ],
  },

  {
    name: "Caso Clinico #2",
    description: "",
    ciclos: [
      {
        questions: [
          {
            ritmo: "TV",
            question: "O ritmo é. O que fazer?",
            options: [
              "Checar pulso",
              "Desfibrilar com 200 J",
              "Cardioverter com 100 J",
            ],
            correct: "Checar pulso",
            table_column: "Ritmo",
            set_value: "TVSP",
          },
          {
            ritmo: "TV",
            question: "O RITMO É. O que fazer agora?",
            options: [
              "Desfibrilar com 200 J",
              "Cardioverter sincronizado com 100 J",
              "Comprimir",
            ],
            correct: "Desfibrilar com 200 J",
            table_column: "Choque",
            set_value: "Feito",
          },
          {
            question: "Depois do choque, o que fazer?",
            options: ["começar a RCP", "checar ritmo", "preparar epinefrina"],
            correct: "começar a RCP",
            table_column: "RCP",
            set_value: "Sim",
          },
          {
            question: "RCP INICIADA. O que fazer agora?",
            options: [
              "Estabelecer o Coach",
              "Checar ritmo",
              "administrar epinefrina",
            ],
            correct: "Estabelecer o Coach",
            table_column: "Coach",
            set_value: "Sim",
          },
          {
            question: "COACH ATUANDO. O que fazer agora?",
            options: [
              "Preparar epinefrina",
              "Checar ritmo",
              "administrar epinefrina",
            ],
            correct: "Preparar epinefrina",
            table_column: "Drogas",
            set_value: "Epi preparada",
          },
        ],
      },
      {
        dos_minutos: true,
        questions: [
          {
            ritmo: "FV",
            question: "O ritmo agora é. O que fazer agora?",
            options: ["Chocar", "administrar epinefrina", "comprimir"],
            correct: "Chocar",
            table_column: "Ritmo",
            set_value: "FV",
          },
          {
            question: "Depois do choque, o que fazer?",
            options: ["começar a RCP", "checar ritmo", "preparar epinefrina"],
            correct: "começar a RCP",
            table_column: "RCP",
            set_value: "Sim",
          },
          {
            question: "RCP INICIADA. O que fazer agora?",
            options: [
              "Checar o Coach",
              "Checar ritmo",
              "administrar epinefrina",
            ],
            correct: "Checar o Coach",
            table_column: "Coach",
            set_value: "Sim",
          },
          {
            question: "COACH ATUANDO. O que fazer agora?",
            options: [
              "Administrar Epinefrina e Preparar 300 mg de Amiodarona",
              "Administrar Amiodarona 300 mg",
              "checar ritmo",
            ],
            correct: "Administrar Epinefrina e Preparar 300 mg de Amiodarona",
            table_column: "Drogas",
            set_value: "Epi administrada e Amio 300 prep",
          },
        ],
      },
      {
        dos_minutos: true,
        questions: [
          {
            ritmo: "AE",
            question: "O ritmo é. O que fazer agora?",
            options: [
              "checar pulso",
              "Começar RCP",
              "Começar protocolo de RCE",
            ],
            correct: "checar pulso",
            table_column: "Ritmo",
            set_value: "AESP",
          },
          {
            question: "RCP INICIADA. O que fazer agora?",
            options: [
              "Checar o Coach",
              "Administrar amiodarona",
              "administrar epinefrina",
            ],
            correct: "Checar o Coach",
            table_column: "Coach",
            set_value: "Sim",
          },
          {
            question: "COACH ATUANDO. O que fazer agora?",
            options: [
              "Preparar Epinefrina",
              "Administrar Amiodarona 300 mg",
              "checar ritmo",
            ],
            correct: "Preparar Epinefrina",
            table_column: "Drogas",
            set_value: "Epi preparada",
          },
          {
            question: "VOCÊ ESTÁ INDO BEM. O que ainda falta fazer?",
            options: ["Checar causas", "Parar RCP", "Fazer Amiodarona"],
            correct: "Checar causas",
            table_column: "Outros",
            set_value: "Causas",
          },
        ],
      },
      {
        dos_minutos: true,
        questions: [
          {
            ritmo: "AE",
            question: "O ritmo é. O que fazer agora?",
            options: [
              "checar pulso",
              "Iniciar protocolo de RCE",
              "Fazer epinefrina",
            ],
            correct: "checar pulso",
            table_column: "Ritmo",
            set_value: "AECP",
          },
          {
            question: "TEM PULSO. O que fazer agora?",
            options: ["Iniciar protocolo de RCE", "Chocar", "Comprimir"],
            correct: "Iniciar protocolo de RCE",
            table_column: "RCP",
            set_value: "Parou",
          },
        ],
      },
    ],
  },

  {
    name: "Caso Clinico #3",
    description: "",
    ciclos: [
      {
        questions: [
          {
            ritmo: "FV",
            question: "O RITMO É. O que fazer agora?",
            options: [
              "Desfibrilar com 200 J",
              "Cardioverter sincronizado com 100 J",
              "Comprimir",
            ],
            correct: "Desfibrilar com 200 J",
            table_column: "Choque",
            set_value: "Feito",
          },
          {
            question: "Depois do choque, o que fazer?",
            options: [
              "começar a RCP",
              "Cardioverter sincronizado com 100 J",
              "Comprimir",
            ],
            correct: "começar a RCP",
            table_column: "Choque",
            set_value: "Feito",
          },
          {
            question: "RCP INICIADA. O que fazer agora?",
            options: [
              "Estabelecer o Coach",
              "Checar ritmo",
              "administrar epinefrina",
            ],
            corrent: "Estabelecer o Coach",
            table_column: "Coach",
            set_value: "Sim",
          },
          {
            question: "COACH ATUANDO. O que fazer agora?",
            options: [
              "Preparar epinefrina",
              "Checar ritmo",
              "administrar epinefrina",
            ],
            correct: "Preparar epinefrina",
            table_column: "Drogas",
            set_value: "Epi preparada",
          },
        ],
      },
      {
        dos_minutos: true,
        questions: [
          {
            ritmo: "FV",
            question: "O ritmo agora é. O que fazer agora?",
            options: ["Chocar", "administrar epinefrina", "comprimir"],
            correct: "Chocar",
            table_column: "Choque",
            set_value: "Feito",
          },
          {
            question: "Depois do choque, o que fazer?",
            options: ["começar a RCP", "checar ritmo", "preparar epinefrina"],
            correct: "começar a RCP",
            table_column: "RCP",
            set_value: "Sim",
          },
          {
            question: "RCP INICIADA. O que fazer agora?",
            options: [
              "Checar o Coach",
              "Checar ritmo",
              "administrar epinefrina",
            ],
            correct: "Checar o Coach",
            table_column: "Coach",
            set_value: "Sim",
          },
          {
            question: "COACH ATUANDO. O que fazer agora?",
            options: [
              "Administrar Epinefrina e Preparar 300 mg de Amiodarona",
              "Administrar Amiodarona 300 mg",
              "checar ritmo",
            ],
            correct: "Administrar Epinefrina e Preparar 300 mg de Amiodarona",
            table_column: "Drogas",
            set_value: "Epi administrada e Amio 300 prep",
          },
        ],
      },
      {
        dos_minutos: true,
        questions: [
          {
            ritmo: "FV",
            question: "O ritmo ainda é. O que fazer agora?",
            options: ["Chocar", "administrar epinefrina", "comprimir"],
            correct: "Chocar",
            table_column: "Choque",
            set_value: "Feito",
          },
          {
            question: "Depois do choque, o que fazer?",
            options: ["começar a RCP", "checar ritmo", "preparar epinefrina"],
            correct: "começar a RCP",
            table_column: "RCP",
            set_value: "Sim",
          },
          {
            question: "RCP INICIADA. O que fazer agora?",
            options: [
              "Checar o Coach",
              "Checar ritmo",
              "administrar epinefrina",
            ],
            correct: "Checar o Coach",
            table_column: "Coach",
            set_value: "Sim",
          },
          {
            question: "COACH ATUANDO. O que fazer agora?",
            options: [
              "Administrar Amiodarona 300 mg e Preparar Epinefrina",
              "Administrar Atropina 1 mg",
              "checar ritmo",
            ],
            correct: "Administrar Amiodarona 300 mg e Preparar Epinefrina",
            table_column: "Drogas",
            set_value: "Amio 300 administrada e Epi preparada",
          },
        ],
      },
      {
        dos_minutos: true,
        questions: [
          {
            ritmo: "LR",
            question: "O ritmo é. O que fazer agora?",
            options: [
              "Checar cabos, ganhos e derivações",
              "Começar RCP",
              "Administrar epinefrina",
            ],
            correct: "Checar cabos, ganhos e derivações",
            table_column: "Ritmo",
            set_value: "LR",
          },
          {
            ritmo: "AE",
            question: "CHECADO TUDO e o ritmo virou. O que fazer agora?",
            options: [
              "checar pulso",
              "Começar RCP",
              "Começar protocolo de RCE",
            ],
            correct: "checar pulso",
            table_column: "Ritmo",
            set_value: "LR -> AESP",
          },
          {
            question: "NÃO TEM PULSO. O que fazer agora?",
            options: [
              "Começar RCP",
              "Administrar Epinefrina",
              "Administrar Amiodarona",
            ],
            correct: "Começar RCP",
            table_column: "RCP",
            set_value: "Sim",
          },
          {
            question: "RCP INICIADA. O que fazer agora?",
            options: [
              "Checar o Coach",
              "Administrar amiodarona",
              "administrar epinefrina",
            ],
            correct: "Checar o Coach",
            table_column: "Coach",
            set_value: "Sim",
          },
          {
            question: "COACH ATUANDO. O que fazer agora?",
            options: [
              "Administrar Epinefrina",
              "Administrar Amiodarona 300 mg",
              "checar ritmo",
            ],
            correct: "Administrar Epinefrina",
            table_column: "Drogas",
            set_value: "Epi administrada",
          },
          {
            question: "VOCÊ ESTÁ INDO BEM. O que ainda falta fazer?",
            options: ["Checar causas", "Parar RCP", "Fazer Amiodarona"],
            correct: "Checar causas",
            table_column: "Outros",
            set_value: "Causas",
          },
        ],
      },
      {
        dos_minutos: true,
        questions: [
          {
            ritmo: "AE",
            question: "O ritmo é. O que fazer agora?",
            options: [
              "Checar pulso",
              "Iniciar protocolo de RCE",
              "Fazer epinefrina",
            ],
            correct: "Checar pulso",
            table_column: "Ritmo",
            set_value: "AECP",
          },
          {
            question: "TEM PULSO. O que fazer agora?",
            options: ["Iniciar protocolo de RCE", "Chocar", "Comprimir"],
            correct: "Iniciar protocolo de RCE",
            table_column: "RCP",
            set_value: "Parou",
          },
        ],
      },
    ],
  },

  {
    name: "Caso Clinico #4",
    description: "",
    ciclos: [
      {
        questions: [
          {
            ritmo: "AE",
            question: "O ritmo é. O que fazer agora?",
            options: [
              "começar a RCP",
              "Administrar epinefrina",
              "Estabelecer o coach",
            ],
            correct: "começar a RCP",
            table_column: "RCP",
            set_value: "Sim",
          },
          {
            question: "RCP INICIADA. O que fazer agora?",
            options: [
              "Estabelecer o Coach",
              "Administrar amiodarona",
              "Checar o ritmo",
            ],
            correct: "Estabelecer o Coach",
            table_column: "Coach",
            set_value: "Sim",
          },
          {
            question: "COACH ATUANDO. O que fazer agora?",
            options: [
              "Administrar Epinefrina",
              "Administrar Amiodarona 300 mg",
              "checar ritmo",
            ],
            correct: "Administrar Epinefrina",
            table_column: "Drogas",
            set_value: "Epi administrada",
          },
          {
            question: "VOCÊ ESTÁ INDO BEM. O que ainda falta fazer?",
            options: ["Checar causas", "Parar RCP", "Fazer Amiodarona"],
            correct: "Checar causas",
            table_column: "Outros",
            set_value: "Causas",
          },
        ],
      },
      {
        questions: [
          {
            ritmo: "AE",
            question: "O ritmo é. O que fazer agora?",
            options: [
              "Checar pulso",
              "Administrar epinefrina",
              "Começar a RCP",
            ],
            correct: "Checar pulso",
            table_column: "Ritmo",
            set_value: "AESP",
          },
          {
            question: "NÃO TEM PULSO. O que fazer agora?",
            options: [
              "Começar RCP",
              "Administrar epinefrina",
              "Começar os cuidados pós parada",
            ],
            correct: "Começar RCP",
            table_column: "RCP",
            set_value: "Sim",
          },
          {
            question: "RCP INICIADA. O que fazer agora?",
            options: [
              "Checar o Coach",
              "Administrar amiodarona",
              "administrar epinefrina",
            ],
            correct: "Checar o Coach",
            table_column: "Coach",
            set_value: "Sim",
          },
          {
            question: "COACH ATUANDO. O que fazer agora?",
            options: [
              "Preparar Epinefrina",
              "Administrar Amiodarona 300 mg",
              "Administrar Epinefrina",
            ],
            correct: "Preparar Epinefrina",
            table_column: "Drogas",
            set_value: "Epi preparada",
          },
          {
            question: "VOCÊ ESTÁ INDO BEM. O que ainda falta fazer?",
            options: ["Checar causas", "Parar RCP", "Fazer Amiodarona"],
          },
        ],
      },
      {
        dos_minutos: true,
        questions: [
          {
            ritmo: "AE",
            question: "O ritmo é. O que fazer agora?",
            options: [
              "Checar pulso",
              "Iniciar protocolo de RCE",
              "Fazer epinefrina",
            ],
            correct: "Checar pulso",
            table_column: "Ritmo",
            set_value: "AECP",
          },
          {
            question: "TEM PULSO. O que fazer agora?",
            options: ["Iniciar protocolo de RCE", "Chocar", "Comprimir"],
            table_column: "RCP",
            set_value: "Parou",
          },
        ],
      },
    ],
  },
];

export default quizes;
