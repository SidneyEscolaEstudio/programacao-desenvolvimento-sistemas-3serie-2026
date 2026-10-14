# Aula 01 — POO 01
# Classes e objetos


class Aluno:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def exibir_dados(self):
        print(f"Nome: {self.nome}")
        print(f"Idade: {self.idade} anos")


# Criando dois objetos diferentes a partir da mesma classe.
aluno1 = Aluno("Ana", 17)
aluno2 = Aluno("Carlos", 18)

aluno1.exibir_dados()
print("---")
aluno2.exibir_dados()

# DESAFIO RÁPIDO
# Crie um terceiro objeto com seu nome e sua idade.
