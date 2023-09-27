import { TableRow, quest } from "@/Libs/States/QuizState";

type quizes = {
  name: string;
  description: string;
  ciclos: {
    questions: {
      ritmo?: string;
      timer?: number | 'continue';
      question: string,
      options: string[];
      correct: string;
      table_values: Partial<TableRow>;
    }[];
  }[];
}[];

const quizes: quizes = [
  {
    name: "Caso Clínico #1",
    description: "",
    ciclos: [
      {
        questions: [
          {
            ritmo: "FV",
            question: "O ritmo é esse, o que fazer?",
            options: [
              "Desfibrilar com 200 J",
              "comprimir",
              "preparar epinefrina",
            ],
            correct: "Desfibrilar com 200 J",
            table_values: {
              Choque: "Feito",
              Ritmo: "FV",
            },
          },
          {
            question: "Depois do choque, o que fazer?",
            options: ["Começar a RCP", "Checar ritmo", "Preparar epinefrina"],
            correct: "Começar a RCP",
            table_values: {
              RCP: "Sim",
            },
          },
          {
            question: "A RCP FOI INICIADA. O que fazer agora?",
            options: [
              "Estabelecer o Coach",
              "Fazer epinefrina",
              "Buscar causas",
            ],
            correct: "Estabelecer o Coach",
            table_values: {
              Coach: "Sim",
            },
          },
          {
            question: "O COACH ESTÁ ATUANDO.O que fazer agora?",
            options: ["Preparar epinefrina", "Fazer epinefrina", "Ver ritmo"],
            correct: "Preparar epinefrina",
            table_values: {
              Drogas: "Epi preparada",
            },
          },
        ],
      },
      {
        questions: [
          {
            ritmo: "FV",
            question:
              "DOIS MINUTOS, “TROCA MAS NÃO TOCA”. O ritmo é esse. o que fazer?",
            options: [
              "Desfibrilar com 200 J",
              "Comprimir",
              "Preparar epinefrina",
            ],
            correct: "Desfibrilar com 200 J",
            table_values: {
              Choque: "Feito",
              Ritmo: "FV",
            },
          },
          {
            question: "Depois do choque, o que fazer?",
            options: ["Começar a RCP", "Checar ritmo", "Preparar epinefrina"],
            correct: "Começar a RCP",
            table_values: {
              RCP: "Sim",
            },
          },
          {
            question: "A RCP FOI INICIADA. O que fazer agora?",
            options: [
              "Checar com o coach",
              "Fazer epinefrina",
              "Buscar causas",
            ],
            correct: "Checar com o coach",
            table_values: {
              Coach: "Sim",
            },
          },
          {
            question: "O COACH ESTÁ ATUANDO.O que fazer agora?",
            options: [
              "Administrar epinefrina e preparar Amiodarona 300",
              "Fazer epinefrina",
              "Ver ritmo",
            ],
            correct: "Administrar epinefrina e preparar Amiodarona 300",
            table_values: {
              Drogas: "Epi administrada e Amio 300 prep",
            },
          },
        ],
      },
      {
        questions: [
          {
            ritmo: "LR",
            question:
              "DOIS MINUTOS, “TROCA MAS NÃO TOCA”. O ritmo é esse. o que fazer agora?",
            options: [
              "Checar Cabos, ganhos e derivações",
              "Chocar",
              "Comprimir",
            ],
            correct: "Checar Cabos, ganhos e derivações",
            table_values: {
              Ritmo: "LR",
            },
          },
          {
            ritmo: "AE",
            question:
              "O COACH CORRIGIU UM CABO CAÍDO. O ritmo agora é esse, o que fazer agora?",
            options: [
              "Checar pulso",
              "Começar RCP",
              "Começar protocolo de RCE",
            ],
            correct: "Checar pulso",
            table_values: {
              Ritmo: "LR -> AESP",
            },
          },
          {
            question: "Não tem pulso. O que fazer agora?",
            options: [
              "Começar RCP",
              "Começar protocolo de RCE",
              "Fazer Epinefrina",
            ],
            correct: "Começar RCP",
            table_values: {
              Choque: "Não",
              RCP: "Sim",
            },
          },
          {
            question: "A RCP FOI INICIADA. O que fazer agora?",
            options: [
              "Checar com o coach",
              "Fazer epinefrina",
              "Buscar causas",
            ],
            correct: "Checar com o coach",
            table_values: {
              Coach: "Sim",
            },
          },
          {
            question: "O COACH ESTÁ ATUANDO. O que fazer agora?",
            options: [
              "Preparar epinefrina",
              "Fazer amiodarona 300 mg",
              "Fazer epinefrina",
            ],
            correct: "Preparar epinefrina",
            table_values: {
              Drogas: "Epi preparada",
            },
          },
          {
            question: "VOCÊ ESTÁ INDO BEM. O que ainda falta fazer?",
            options: ["Checar causas", "Parar RCP", "Fazer Amiodarona"],
            correct: "Checar causas",
            table_values: {
              Outros: "Causas",
            },
          },
        ],
      },
      {
        questions: [
          {
            ritmo: "AE",
            question:
              "DOIS MINUTOS, “TROCA MAS NÃO TOCA”. O ritmo é esse. O que fazer agora?",
            options: [
              "Checar pulso",
              "Iniciar protocolo de RCE",
              "Fazer epinefrina",
            ],
            correct: "Checar pulso",
            table_values: {
              Ritmo: "AECP",
            },
          },
          {
            question: "TEM PULSO. O que fazer agora?",
            options: [
              "Iniciar protocolo de RCE",
              "Desfibrilar com 200 J",
              "Retornar a RCP",
            ],
            correct: "Iniciar protocolo de RCE",
            table_values: {},
          },
        ],
      },
    ],
  },

  {
    name: "Caso Clínico #2",
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
            table_values: {
              Ritmo: "TVSP",
            },
          },
          {
            ritmo: "TV",
            question: "NÃO TEM PULSO. O que fazer agora?",
            options: [
              "Desfibrilar com 200 J",
              "Cardioverter sincronizado com 100 J",
              "Comprimir",
            ],
            correct: "Desfibrilar com 200 J",
            table_values: {
              Choque: "Feito",
            },
          },
          {
            question: "Depois do choque, o que fazer?",
            options: ["Começar a RCP", "Checar ritmo", "Preparar epinefrina"],
            correct: "Começar a RCP",
            table_values: {
              RCP: "Sim",
            },
          },
          {
            question: "RCP INICIADA. O que fazer agora?",
            options: [
              "Estabelecer o Coach",
              "Checar ritmo",
              "Administrar epinefrina",
            ],
            correct: "Estabelecer o Coach",
            table_values: {
              Coach: "Sim",
            },
          },
          {
            question: "O COACH ESTÁ ATUANDO. O que fazer agora?",
            options: [
              "Preparar epinefrina",
              "Checar ritmo",
              "Administrar epinefrina",
            ],
            correct: "Preparar epinefrina",
            table_values: {
              Drogas: "Epi preparada",
            },
          },
        ],
      },
      {
        questions: [
          {
            ritmo: "FV",
            question:
              "DOIS MINUTOS, “TROCA MAS NÃO TOCA”. O ritmo é esse. O que fazer agora?",
            options: [
              "Desfibrilar com 200 J",
              "Administrar epinefrina",
              "Iniciar a RCP",
            ],
            correct: "Desfibrilar com 200 J",
            table_values: {
              Choque: "Feito",
              Ritmo: "FV",
            },
          },
          {
            question: "Depois do choque, o que fazer?",
            options: ["Começar a RCP", "Checar ritmo", "Preparar epinefrina"],
            correct: "Começar a RCP",
            table_values: {
              RCP: "Sim",
            },
          },
          {
            question: "RCP INICIADA. O que fazer agora?",
            options: [
              "Checar o Coach",
              "Checar ritmo",
              "Administrar epinefrina",
            ],
            correct: "Checar o Coach",
            table_values: {
              Coach: "Sim",
            },
          },
          {
            question: "COACH ATUANDO. O que fazer agora?",
            options: [
              "Administrar Epinefrina e Preparar 300 mg de Amiodarona",
              "Administrar Amiodarona 300 mg",
              "Checar ritmo",
            ],
            correct: "Administrar Epinefrina e Preparar 300 mg de Amiodarona",
            table_values: {
              Drogas: "Epi administrada e Amio 300 prep",
            },
          },
        ],
      },
      {
        questions: [
          {
            ritmo: "AE",
            question:
              "DOIS MINUTOS, “TROCA MAS NÃO TOCA”. O ritmo é esse. O que fazer agora?",
            options: [
              "Checar pulso",
              "Começar RCP",
              "Começar protocolo de RCE",
            ],
            correct: "Checar pulso",
            table_values: {
              Ritmo: "AESP",
            },
          },
          {
            ritmo: "AE",
            question: "NÃO TEM PULSO. O que fazer agora?",
            options: [
              "Começar RCP",
              "Desfibrilar com 200 J",
              "Começar protocolo de RCE",
            ],
            correct: "Começar RCP",
            table_values: {
              RCP: "Sim",
              Choque: "Não",
            },
          },
          {
            question: "RCP INICIADA. O que fazer agora?",
            options: [
              "Checar o Coach",
              "Administrar amiodarona",
              "Administrar epinefrina",
            ],
            correct: "Checar o Coach",
            table_values: {
              Coach: "Sim",
            },
          },
          {
            question: "COACH ATUANDO. O que fazer agora?",
            options: [
              "Preparar Epinefrina",
              "Administrar Amiodarona 300 mg",
              "Checar ritmo",
            ],
            correct: "Preparar Epinefrina",
            table_values: {
              Drogas: "Epi preparada",
            },
          },
          {
            question: "VOCÊ ESTÁ INDO BEM. O que ainda falta fazer?",
            options: ["Checar causas", "Parar RCP", "Fazer Amiodarona"],
            correct: "Checar causas",
            table_values: {
              Outros: "Causas",
            },
          },
        ],
      },
      {
        questions: [
          {
            ritmo: "AE",
            question:
              "DOIS MINUTOS, “TROCA MAS NÃO TOCA”. O ritmo é esse. O que fazer agora?",
            options: [
              "Checar pulso",
              "Iniciar protocolo de RCE",
              "Fazer epinefrina",
            ],
            correct: "Checar pulso",
            table_values: {
              Ritmo: "AECP",
            },
          },
          {
            question: "TEM PULSO. O que fazer agora?",
            options: ["Iniciar protocolo de RCE", "Chocar", "Comprimir"],
            correct: "Iniciar protocolo de RCE",
            table_values: {},
          },
        ],
      },
    ],
  },

  {
    name: "Caso Clínico #3",
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
            table_values: {
              Ritmo: "FV",
              Choque: "Feito",
            },
          },
          {
            question: "Depois do choque, o que fazer?",
            options: [
              "Começar a RCP",
              "Cardioverter sincronizado com 100 J",
              "Administrar Epinefrina",
            ],
            correct: "Começar a RCP",
            table_values: {
              Choque: "Feito",
            },
          },
          {
            question: "RCP INICIADA. O que fazer agora?",
            options: [
              "Estabelecer o Coach",
              "Checar ritmo",
              "Administrar epinefrina",
            ],
            correct: "Estabelecer o Coach",
            table_values: {
              Coach: "Sim",
            },
          },
          {
            question: "COACH ATUANDO. O que fazer agora?",
            options: [
              "Preparar epinefrina",
              "Checar ritmo",
              "Administrar epinefrina",
            ],
            correct: "Preparar epinefrina",
            table_values: {
              Drogas: "Epi preparada",
            },
          },
        ],
      },
      {
        questions: [
          {
            ritmo: "FV",
            question:
              "DOIS MINUTOS, “TROCA MAS NÃO TOCA”. O ritmo é esse. O que fazer agora?",
            options: [
              "Desfibrilar com 200 J",
              "Administrar epinefrina",
              "Comprimir",
            ],
            correct: "Desfibrilar com 200 J",
            table_values: {
              Ritmo: "FV",
              Choque: "Feito",
            },
          },
          {
            question: "Depois do choque, o que fazer?",
            options: ["Iniciar a RCP", "Checar ritmo", "Preparar epinefrina"],
            correct: "Iniciar a RCP",
            table_values: {
              RCP: "Sim",
            },
          },
          {
            question: "RCP INICIADA. O que fazer agora?",
            options: [
              "Checar o Coach",
              "Checar ritmo",
              "Administrar epinefrina",
            ],
            correct: "Checar o Coach",
            table_values: {
              Coach: "Sim",
            },
          },
          {
            question: "COACH ATUANDO. O que fazer agora?",
            options: [
              "Administrar Epinefrina e Preparar 300 mg de Amiodarona",
              "Administrar Amiodarona 300 mg",
              "Checar ritmo",
            ],
            correct: "Administrar Epinefrina e Preparar 300 mg de Amiodarona",
            table_values: {
              Drogas: "Epi administrada e Amio 300 prep",
            },
          },
        ],
      },
      {
        questions: [
          {
            ritmo: "FV",
            question:
              "DOIS MINUTOS, “TROCA MAS NÃO TOCA”. O ritmo é esse. O que fazer agora?",
            options: [
              "Desfibrilar com 200 J",
              "Administrar epinefrina",
              "Comprimir",
            ],
            correct: "Desfibrilar com 200 J",
            table_values: {
              Ritmo: "FV",
              Choque: "Feito",
            },
          },
          {
            question: "Depois do choque, o que fazer?",
            options: ["Iniciar a RCP", "Checar ritmo", "Preparar epinefrina"],
            correct: "Iniciar a RCP",
            table_values: {
              RCP: "Sim",
            },
          },
          {
            question: "RCP INICIADA. O que fazer agora?",
            options: [
              "Checar o Coach",
              "Checar ritmo",
              "Administrar epinefrina",
            ],
            correct: "Checar o Coach",
            table_values: {
              Coach: "Sim",
            },
          },
          {
            question: "COACH ATUANDO. O que fazer agora?",
            options: [
              "Administrar Amiodarona 300 mg e Preparar Epinefrina",
              "Administrar Atropina 1 mg",
              "Checar ritmo",
            ],
            correct: "Administrar Amiodarona 300 mg e Preparar Epinefrina",
            table_values: {
              Drogas: "Amio 300 administrada e Epi preparada",
            },
          },
        ],
      },
      {
        questions: [
          {
            ritmo: "LR",
            question:
              "DOIS MINUTOS, “TROCA MAS NÃO TOCA”. O ritmo é esse. O que fazer agora?",
            options: [
              "Checar cabos, ganhos e derivações",
              "Começar RCP",
              "Administrar epinefrina",
            ],
            correct: "Checar cabos, ganhos e derivações",
            table_values: {
              Ritmo: "LR",
            },
          },
          {
            ritmo: "AE",
            question:
              "O COACH CORRIGIU A DERIVAÇÃO PARA D2. O ritmo agora é esse. O que fazer agora?",
            options: [
              "Checar pulso",
              "Começar RCP",
              "Começar protocolo de RCE",
            ],
            correct: "Checar pulso",
            table_values: {
              Ritmo: "LR -> AESP",
            },
          },
          {
            question: "NÃO TEM PULSO. O que fazer agora?",
            options: [
              "Começar RCP",
              "Administrar Epinefrina",
              "Administrar Amiodarona",
            ],
            correct: "Começar RCP",
            table_values: {
              Choque: "Não",
              RCP: "Sim",
            },
          },
          {
            question: "RCP INICIADA. O que fazer agora?",
            options: [
              "Checar o Coach",
              "Administrar amiodarona",
              "Administrar epinefrina",
            ],
            correct: "Checar o Coach",
            table_values: {
              Coach: "Sim",
            },
          },
          {
            question: "COACH ATUANDO. O que fazer agora?",
            options: [
              "Administrar Epinefrina",
              "Administrar Amiodarona 300 mg",
              "Checar ritmo",
            ],
            correct: "Administrar Epinefrina",
            table_values: {
              Drogas: "Epi administrada",
            },
          },
          {
            question: "VOCÊ ESTÁ INDO BEM. O que ainda falta fazer?",
            options: ["Checar causas", "Parar RCP", "Fazer Amiodarona"],
            correct: "Checar causas",
            table_values: {
              Outros: "Causas",
            },
          },
        ],
      },
      {
        questions: [
          {
            ritmo: "AE",
            question:
              "DOIS MINUTOS, “TROCA MAS NÃO TOCA”. O ritmo é esse. O que fazer agora?",
            options: [
              "Checar pulso",
              "Iniciar protocolo de RCE",
              "Fazer epinefrina",
            ],
            correct: "Checar pulso",
            table_values: {
              Ritmo: "AECP",
            },
          },
          {
            question: "TEM PULSO. O que fazer agora?",
            options: [
              "Iniciar protocolo de RCE",
              "Desfibrilar com 200 J",
              "Iniciar RCP",
            ],
            correct: "Iniciar protocolo de RCE",
            table_values: {},
          },
        ],
      },
    ],
  },

  {
    name: "Caso Clínico #4",
    description: "",
    ciclos: [
      {
        questions: [
          {
            ritmo: "AE",
            question:
              "O paciente não tinha pulso e o ritmo é esse.  O que fazer agora?",
            options: [
              "Iniciar a RCP",
              "Administrar epinefrina",
              "Estabelecer o coach",
            ],
            correct: "Iniciar a RCP",
            table_values: {
              Ritmo: "AESP",
              Choque: "Não",
              RCP: "Sim",
            },
          },
          {
            question: "RCP INICIADA. O que fazer agora?",
            options: [
              "Estabelecer o Coach",
              "Administrar amiodarona",
              "Checar o ritmo",
            ],
            correct: "Estabelecer o Coach",
            table_values: {
              Coach: "Sim",
            },
          },
          {
            question: "COACH ATUANDO. O que fazer agora?",
            options: [
              "Administrar Epinefrina",
              "Administrar Amiodarona 300 mg",
              "Checar ritmo",
            ],
            correct: "Administrar Epinefrina",
            table_values: {
              Drogas: "Epi administrada",
            },
          },
          {
            question: "VOCÊ ESTÁ INDO BEM. O que ainda falta fazer?",
            options: ["Checar causas", "Parar RCP", "Fazer Amiodarona"],
            correct: "Checar causas",
            table_values: {
              Outros: "Causas",
            },
          },
        ],
      },
      {
        questions: [
          {
            ritmo: "AE",
            question:
              "DOIS MINUTOS, “TROCA MAS NÃO TOCA”. O ritmo é esse. O que fazer agora?",
            options: [
              "Checar pulso",
              "Administrar epinefrina",
              "Começar a RCP",
            ],
            correct: "Checar pulso",
            table_values: {
              Ritmo: "AESP",
            },
          },
          {
            question: "NÃO TEM PULSO. O que fazer agora?",
            options: [
              "Começar RCP",
              "Administrar epinefrina",
              "Começar os cuidados pós parada",
            ],
            correct: "Começar RCP",
            table_values: {
              RCP: "Sim",
            },
          },
          {
            question: "RCP INICIADA. O que fazer agora?",
            options: [
              "Checar o Coach",
              "Administrar amiodarona",
              "administrar epinefrina",
            ],
            correct: "Checar o Coach",
            table_values: {
              Coach: "Sim",
            },
          },
          {
            question: "COACH ATUANDO. O que fazer agora?",
            options: [
              "Preparar Epinefrina",
              "Administrar Amiodarona 300 mg",
              "Administrar Epinefrina",
            ],
            correct: "Preparar Epinefrina",
            table_values: {
              Drogas: "Epi preparada",
            },
          },
          {
            question: "VOCÊ ESTÁ INDO BEM. O que ainda falta fazer?",
            options: ["Checar causas", "Parar RCP", "Fazer Amiodarona"],
            correct: "Checar causas",
            table_values: {
              Outros: "Causas",
            },
          },
        ],
      },
      {
        questions: [
          {
            ritmo: "AE",
            question:
              "DOIS MINUTOS, “TROCA MAS NÃO TOCA”. O ritmo é esse. O que fazer agora?",
            options: [
              "Checar pulso",
              "Iniciar protocolo de RCE",
              "Fazer epinefrina",
            ],
            correct: "Checar pulso",
            table_values: {
              Ritmo: "AECP",
            },
          },
          {
            question: "TEM PULSO. O que fazer agora?",
            options: [
              "Iniciar protocolo de RCE",
              "Desfibrilar com 200 J",
              "Iniciar RCP",
            ],
            correct: "Iniciar protocolo de RCE",
            table_values: {},
          },
        ],
      },
    ],
  },
];

export default quizes;
