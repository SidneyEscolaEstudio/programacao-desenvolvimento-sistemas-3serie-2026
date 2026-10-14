# Aula 01 — POO 02
# __init__, atributos e métodos


class Aluno:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def exibir_dados(self):
        print(f"Nome: {self.nome}")
        print(f"Idade: {self.idade} anos")

    def fazer_aniversario(self):
        self.idade += 1


aluno1 = Aluno("Ana", 17)
aluno2 = Aluno("Carlos", 16)

print("Antes do aniversário:")
aluno1.exibir_dados()
aluno2.exibir_dados()

aluno1.fazer_aniversario()

print("\nDepois do aniversário de Ana:")
aluno1.exibir_dados()
aluno2.exibir_dados()

# DESAFIO RÁPIDO
# Acrescente o atributo turma no construtor e mostre a turma
# no método exibir_dados().
