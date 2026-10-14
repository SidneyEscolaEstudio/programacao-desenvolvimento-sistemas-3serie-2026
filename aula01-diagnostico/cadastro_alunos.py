# Aula 01 — Desafio Integrador
# Cadastro de alunos usando classe, objetos, lista, repetição e entrada de dados.


class Aluno:
    def __init__(self, nome, idade, turma):
        self.nome = nome
        self.idade = idade
        self.turma = turma

    def exibir_dados(self):
        return f"{self.nome} | {self.idade} anos | Turma: {self.turma}"


alunos = []

while True:
    nome = input("Digite o nome do aluno ou 'sair': ")

    if nome.lower() == "sair":
        break

    idade = int(input("Digite a idade: "))
    turma = input("Digite a turma: ")

    aluno = Aluno(nome, idade, turma)
    alunos.append(aluno)

print("\n--- ALUNOS CADASTRADOS ---")

for aluno in alunos:
    print(aluno.exibir_dados())

# MISSÃO EXTRA
# 1. Mostre quantos alunos foram cadastrados.
# 2. Calcule a média de idade da turma.
# 3. Informe quantos alunos têm 18 anos ou mais.
