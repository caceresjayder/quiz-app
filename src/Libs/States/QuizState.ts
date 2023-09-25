export type question = {
  ritmo?: string;
  question: string;
  options: string[];
  correct: string;
  table_column: string;
  set_value: string;
};

export type ciclo = {
  dos_minutos?: boolean;
  questions: question[];
};

export type ciclos = Array<ciclo>;

export type quest = {
  name: string | null;
  description: string | null;
  ciclos: ciclos | [];
};

export type TableRow = {
  Ciclo: number | null;
  Ritmo: string | null;
  Choque: string | null;
  RCP: string | null;
  Coach: string | null;
  Drogas: string | null;
  Outros: string | null;
};

export type Table = {
  1: TableRow;
  2: TableRow;
  3: TableRow;
  4: TableRow;
};

export type QuizState = {
  quest: quest;
  table: Table;
  win: boolean;
  loose: boolean;
  ciclo_actual: number;
  quiz_actual: number;
  quest_idx: number
};

const QuizState: QuizState = {
  quest: { name: null, description: null, ciclos: [] },
  table: {
    1: {
      Ciclo: null,
      Ritmo: null,
      Choque: null,
      RCP: null,
      Coach: null,
      Drogas: null,
      Outros: null,
    },
    2: {
      Ciclo: null,
      Ritmo: null,
      Choque: null,
      RCP: null,
      Coach: null,
      Drogas: null,
      Outros: null,
    },
    3: {
      Ciclo: null,
      Ritmo: null,
      Choque: null,
      RCP: null,
      Coach: null,
      Drogas: null,
      Outros: null,
    },
    4: {
      Ciclo: null,
      Ritmo: null,
      Choque: null,
      RCP: null,
      Coach: null,
      Drogas: null,
      Outros: null,
    },
  },
  loose: false,
  win: false,
  ciclo_actual: 0,
  quiz_actual: 0,
  quest_idx: 0
};

export default QuizState;
