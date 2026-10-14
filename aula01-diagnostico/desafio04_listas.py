# Aula 01 — Desafio 04
# Trabalhando com listas

nomes = ["Ana", "Bruno", "Carlos", "Duda", "Eva"]

print("Lista completa:", nomes)
print("Primeiro nome:", nomes[0])
print("Último nome:", nomes[-1])

# Adiciona um novo item.
nomes.append("Felipe")
print("Após adicionar Felipe:", nomes)

# Percorre a lista mostrando um nome por linha.
print("\nNomes cadastrados:")
for nome in nomes:
    print(nome)

# DESAFIO RÁPIDO
# 1. Remova o nome "Bruno" da lista.
# 2. Adicione outro nome escolhido por você.
# 3. Mostre novamente todos os nomes, um por linha.
