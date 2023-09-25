# Quiz APP with Next.js
Frameworks:
- Next.js

Libraries:
- TypeScript
- Tailwindcss
- DaisyUI
- React-Countdown

Description:
Game of questions, with cronometer included.

Workflow:
play -> select quiz -> select the convenient option before the times run out.

```
git clone https://github.com/caceresjayder/quiz-app
```

```javascript
npm install
```

```javascript
npm run dev
```

SPA:
- Contact Form view.
- Landing view.
- Quiz Selection view
- Quiz view

TODO:
Form Contact logic with some mailer as `emailjs`

Structure:

```
Quiz-App
|
|
|__public
|
|__src
|   |
|   |__app
|   |   |   layout.tsx
|   |   |   page.tsx
|   |
|   |__assets
|   |   |   AE.png
|   |   |   FV.png
|   |   |   LR.jpeg
|   |   |   TV.jgep
|   |
|   |__components
|   |     |__ContactForm
|   |     |   |   index.tsx
|   |     |__Landing
|   |     |   |   index.tsx
|   |     |__Quiz
|   |     |   |__components
|   |     |   |   |   Counter.tsx
|   |     |   |   |   Modal.tsx
|   |     |   |   |   Table.tsx
|   |     |   |  index.tsx
|   |     |__QuizSelection
|   |     |   |   index.tsx
|   |
|   |__data
|   |   |  quizes.ts
|   |
|   |__Libs
|   |   |__Context
|   |   |   |   index.tsx
|   |   |__Reducers
|   |   |   |   index.tsx
|   |   |   |   QuizReducer.tsx
|   |   |   |   ViewsReducer.tsx
|   |   |__States
|   |   |   |   index.tsx
|   |   |   |   QuizState.tsx
|   |   |   |   ViewState.tsx
|   |   |__Store
|   |   |   |   index.tsx
|   |
|   |__styles
|   |   |  global.css 
|   .eslintrc.json
|   .gitignore
|   next.config.js
|   package-lock.json
|   package.json
|   postcss.config.js
|   README.md
|   tailwind.config.js
|   tsconfig.json
```

quiz format:

```javascript
[
  {
    name: string;
    description: string;
    ciclos: [
      {
      questions: [
        {
        ritmo?: string; // FV | LR | TV | AE
        timer?: number | 'continue'; // seconds
        question: string,
        options: string[];
        correct: string;
        table_values: {
            Ciclo?: number | null;
            Ritmo?: string | null;
            Choque?: string | null;
            RCP?: string | null;
            Coach?: string | null;
            Drogas?: string | null;
            Outros?: string | null;
        };
        }
      ];
      }
    ];
  }
];
```

Glossary:</br> 
  `?` : Optional parameter</br>
  `|` : Or</br>

Uses the format above to creates new quizes in the data folder into the quizes file.

Important:</br>

#### Data logic:

Each quiz contain the name, description, ciclos attribute.</br>
Each ciclo contain questions
Each questions question object
Each question contain
</br> 
optional `ritmo` and optional `timer`
</br> `question`: the question string to display
</br> `options`: gonna be rendered as input radio in html, `important to include the correct answer into the array`
</br> `correct`: contains the correct answer to compare
</br> `table_values`: values in the table to be setted if correct answer.

#### Timer Logic:

Due the Countdown works with the timer attribute from quiz object if you need to pass the remaining time to next questions you have to use the `continue` attribute in timer. </br>

Example: </br>
first question sets `30` seconds to pass the remaining time</br>
then the second question have `continue` attribute in timer.

#### Ritmo Logic:

Setting ritmo to FV or LR or TV or AE renders the corresponding image.

#### Table logic:

Can be setted many options in the table_values object, if the player answer succesfully the question those values gonna be setted in the current table.



## License
MIT
## License  
[MIT](https://choosealicense.com/licenses/mit/)  
