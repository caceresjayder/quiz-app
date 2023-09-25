# @title
from IPython.display import display, clear_output, HTML
import pandas as pd
import random

def get_user_choice(options):
    random.shuffle(options)
    options_str = " / ".join(f"{chr(96 + i+1)}. {option}" for i, option in enumerate(options))
    display(HTML(f"<strong><font size=4>Escolha uma opção: {options_str}</font></strong>"))
    choice = input().strip().lower()
    return options[ord(choice) - ord('a')]

def ask_question(question, correct_answer, wrong_answers, table, row, column_name, correct_update, clear=True):
    if clear:
        clear_output(wait=True)
    display(table)
    display(HTML(f"<strong><font size=4>{question}</font></strong>"))
    options = [correct_answer] + wrong_answers
    answer = get_user_choice(options)
    if answer == correct_answer:
        display(HTML(f"<strong><font size=4>Correto!</font></strong>"))
        table.at[row, column_name] = correct_update
        return True
    else:
        display(HTML(f"<strong><font size=4>ESTAVA TUDO INDO BEM, MAS AGORA ACONTECEU UM ERRO GRAVE.</font></strong>"))
        display(HTML(f"<strong><font size=4>A resposta correta seria: {correct_answer}</font></strong>"))
        input("Pressione Enter e depois clique em PLAY para jogar de novo...")
        return False

table = pd.DataFrame(columns=['Ciclo', 'Ritmo', 'Choque', 'RCP', 'Coach', 'Drogas', 'Outros'])
game_over = False

for ciclo in range(1, 5):
    if game_over:
        break

    if ciclo != 1:
        display(HTML(f"<strong><font size=4>DOIS MINUTOS</font></strong>"))

    table.at[ciclo-1, 'Ciclo'] = ciclo

    if ciclo == 1 or ciclo == 2:
        table.at[ciclo-1, 'Ritmo'] = 'FV'
        ritmo_question = "O ritmo é FV, o que fazer?"
        if ciclo == 2:
            ritmo_question = "DOIS MINUTOS. O ritmo é FV, o que fazer?"
        if not ask_question(ritmo_question, "chocar", ["comprimir", "preparar epinefrina"], table, ciclo-1, 'Choque', 'Feito'):
            game_over = True
            continue

    elif ciclo == 3:
        ritmo_question = "DOIS MINUTOS. O ritmo é uma linha reta, o que fazer agora?"
        if ask_question(ritmo_question, "Checar Cabos, ganhos e derivações", ["Chocar", "Comprimir"], table, ciclo-1, 'Ritmo', 'LR'):
            if ask_question("O ritmo é uma atividade elétrica, o que fazer agora?", "checar pulso", ["Começar RCP", "Começar protocolo de RCE"], table, ciclo-1, 'Ritmo', 'LR -> AESP'):
                if not ask_question("Não tem pulso. O que fazer agora?", "Começar RCP", ["Começar protocolo de RCE", "Fazer Epinefrina"], table, ciclo-1, 'RCP', 'Sim'):
                    game_over = True
                    continue
    elif ciclo == 4:
        if ask_question("DOIS MINUTOS.O ritmo é uma atividade elétrica. O que fazer agora?", "Checar pulso", ["Iniciar protocolo de RCE", "Fazer epinefrina"], table, ciclo-1, 'Ritmo', 'AECP'):
            if ask_question("TEM PULSO. O que fazer agora?", "Iniciar protocolo de RCE", ["Chocar", "Comprimir"], table, ciclo-1, 'RCP', 'Parou'):
                display(HTML(f"<strong><font size=4>PARABÉNS, O PACIENTE VOLTOU</font></strong>"))
                input("Pressione Enter e depois clique em PLAY para jogar de novo...")
                break

    if ciclo != 3:
        if not ask_question("Depois do choque, o que fazer?", "começar a RCP", ["checar ritmo", "preparar epinefrina"], table, ciclo-1, 'RCP', 'Sim'):
            game_over = True
            continue
        coach_action = "Estabelecer o coach" if ciclo == 1 else "Checar com o coach"
        if not ask_question("A RCP FOI INICIADA. O que fazer agora?", coach_action, ["fazer epinefrina", "buscar causas"], table, ciclo-1, 'Coach', 'Sim'):
            game_over = True
            continue
        drugs_action = "preparar epinefrina" if ciclo == 1 else "Administrar epinefrina e preparar Amiodarona 300"
        if not ask_question("O COACH ESTÁ ATUANDO.O que fazer agora?", drugs_action, ["fazer epinefrina", "ver ritmo"], table, ciclo-1, 'Drogas', 'Epi preparada' if ciclo==1 else 'Epi administrada e Amio 300 prep'):
            game_over = True
            continue

    if ciclo == 3:
        if not ask_question("A RCP FOI INICIADA. O que fazer agora?", "Checar com o coach", ["fazer epinefrina", "buscar causas"], table, ciclo-1, 'Coach', 'Sim'):
            game_over = True
            continue
        if not ask_question("O COACH ESTÁ ATUANDO. O que fazer agora?", "Preparar epinefrina", ["Fazer amiodarona 300 mg", "Fazer epinefrina"], table, ciclo-1, 'Drogas', 'Epi preparada'):
            game_over = True
            continue
        if not ask_question("VOCÊ ESTÁ INDO BEM. O que ainda falta fazer?", "checar causas", ["parar RCP", "fazer Amiodarona"], table, ciclo-1, 'Outros', 'Causas'):
            game_over = True
            continue

    if ciclo == 4:
        display(HTML(f"<strong><font size=4>DOIS MINUTOS. O ritmo é uma atividade elétrica. O que fazer agora?</font></strong>"))
        if ask_question("O ritmo é uma atividade elétrica. O que fazer agora?", "Checar pulso", ["Iniciar protocolo de RCE", "Fazer epinefrina"], table, ciclo-1, 'Ritmo', 'AECP'):
            if ask_question("TEM PULSO. O que fazer agora?", "Iniciar protocolo de RCE", ["Chocar", "Comprimir"], table, ciclo-1, 'RCP', 'Parou'):
                display(HTML(f"<strong><font size=4>PARABÉNS, O PACIENTE VOLTOU</font></strong>"))
                input("Pressione Enter e depois clique em PLAY para jogar de novo...")
                break

# Exibir tabela final
clear_output(wait=True)
display(table)