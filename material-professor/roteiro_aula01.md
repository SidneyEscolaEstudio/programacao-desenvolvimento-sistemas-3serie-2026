# Roteiro do Professor — Aula 01 — Diagnóstico Python

**Unidade:** Programação no Desenvolvimento de Sistemas  
**Turma:** 3ª Série  
**Professor:** Sidney Santos

## Objetivo da aula

Diagnosticar o que os estudantes já dominam em Python e POO antes de definir o ritmo das próximas aulas.

## Regra da aula

**Slide → pergunta → aluno tenta → Codespaces → correção → pequeno desafio → próximo slide.**

Use a frase: **“Primeiro tenta. Depois eu mostro.”**

---

## Slide 01 — Diagnóstico Python

Explique que a aula não é prova. O objetivo é descobrir o ponto real da turma antes de continuar o planejamento.

Pergunte:
- Quem já programou em Python?
- Qual foi o último programa que lembra de ter feito?
- Quem lembra o que é uma variável?
- Alguém já trabalhou com classe e objeto?

## Slide 02 — Objetivos

Explique que a aula vai do básico até POO. O resultado definirá se a turma precisa de recomposição, POO básica ou se já pode avançar.

## Slide 03 — Como será a aula

Explique a dinâmica e peça que não copiem respostas dos colegas durante o diagnóstico.

## Slide 04 — Entrada e saída

Arquivo: `aula01-diagnostico/desafio01_entrada_saida.py`

Perguntas:
- Qual comando recebe dados do usuário?
- Qual comando mostra informações na tela?
- Por que usamos `int()` na idade?

Checkpoint: o aluno reconhece `input()`, `print()`, variável, `int()` e f-string?

## Slide 05 — Condicionais

Arquivo: `aula01-diagnostico/desafio02_condicionais.py`

Perguntas:
- Como fazemos o programa tomar uma decisão?
- Qual a diferença entre `=` e `==`?
- O que acontece se a idade for exatamente 18?

Checkpoint: o aluno compreende condição, indentação e `if/elif/else`?

## Slide 06 — Repetição

Arquivo: `aula01-diagnostico/desafio03_repeticao.py`

Perguntas:
- Por que `range(1, 11)` termina no 10?
- Como mostrar até 20?
- Como mostrar apenas números pares?

Checkpoint: compreende `for`, `range()` e repetição?

## Slide 07 — Listas

Arquivo: `aula01-diagnostico/desafio04_listas.py`

Perguntas:
- Por que o primeiro índice é 0?
- O que `nomes[-1]` representa?
- Como adicionar e remover elementos?

Checkpoint: compreende lista, índice, `append()`, `remove()` e percurso com `for`?

## Slide 08 — Funções

Arquivo: `aula01-diagnostico/desafio05_funcoes.py`

Perguntas:
- Criar uma função já executa seu código?
- O que é parâmetro?
- Qual a diferença entre definir e chamar uma função?

## Slide 09 — Funções com retorno

Arquivo: `aula01-diagnostico/desafio06_return.py`

Pergunta principal:
- Qual a diferença entre `print()` e `return`?

Checkpoint: consegue criar uma função que receba valores e devolva um resultado?

## Slide 10 — Classes e objetos

Arquivo: `aula01-diagnostico/poo01_classes_objetos.py`

Antes de explicar, pergunte:
- O que é uma classe?
- O que é um objeto?

Analogia sugerida: **classe = planta da casa; objeto = casa construída a partir da planta.**

Perguntas:
- `Aluno` é classe ou objeto?
- `aluno1` é classe ou objeto?
- Dois objetos da mesma classe precisam ter os mesmos dados?

## Slide 11 — Construtor, atributos e métodos

Arquivo: `aula01-diagnostico/poo02_atributos_metodos.py`

Explique:
- `__init__` inicializa o objeto;
- `self.nome` e `self.idade` são atributos;
- `exibir_dados()` e `fazer_aniversario()` são métodos.

Pergunta diagnóstica:
- Se eu alterar `aluno1`, `aluno2` também muda?

## Slide 12 — Desafio integrador

Arquivo: `aula01-diagnostico/cadastro_alunos.py`

Não entregue a solução inteira imediatamente. Peça que a turma identifique primeiro:
1. a classe;
2. os atributos;
3. a lista;
4. a repetição;
5. a criação do objeto;
6. o `append()`;
7. o `for` final.

Pergunta principal: **a lista está guardando somente nomes ou objetos completos?**

## Slide 13 — Ticket de saída

Oriente os estudantes a responder a **Autoavaliação — Diagnóstico Python** publicada no Google Classroom.

Explique que não vale nota e será usada para planejar as próximas aulas.

---

## Registro do professor/mediador

Para cada estudante, observar:

| Habilidade | Domina | Apoio | Não demonstrou |
|---|---|---|---|
| Entrada/saída | ✅ | ⚠️ | ❌ |
| `if` | ✅ | ⚠️ | ❌ |
| `for` | ✅ | ⚠️ | ❌ |
| Listas | ✅ | ⚠️ | ❌ |
| Funções | ✅ | ⚠️ | ❌ |
| POO | ✅ | ⚠️ | ❌ |

## Decisão para a próxima aula

- **Python básico fraco:** recomposição.
- **Python básico bom + POO fraca:** POO básica.
- **Python básico + POO consolidados:** iniciar herança e `super()`.
