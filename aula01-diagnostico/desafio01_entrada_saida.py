# Aula 01 — Desafio 01
# Entrada e saída de dados

# Recebe o nome digitado pelo usuário.
nome = input("Digite seu nome: ")

# input() devolve texto. Como idade é um número inteiro,
# usamos int() para fazer a conversão.
idade = int(input("Digite sua idade: "))

# A f-string permite inserir variáveis dentro do texto.
print(f"Olá, {nome}! Você tem {idade} anos.")

# DESAFIO RÁPIDO
# Acrescente uma variável chamada cidade e mostre no final:
# "Ana tem 17 anos e mora em Curitiba."
