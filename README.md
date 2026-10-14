# Programação no Desenvolvimento de Sistemas — 3ª Série — 2026

Repositório oficial da unidade curricular **Programação no Desenvolvimento de Sistemas**, organizado para uso em **GitHub Codespaces**.

**Professor:** Sidney Santos  
**Turma:** 3ª Série — Desenvolvimento de Sistemas  
**Linguagem principal:** Python

## Como vamos trabalhar

A dinâmica das aulas seguirá, sempre que possível, esta sequência:

1. **Conceito** — apresentação rápida do conteúdo.
2. **Exemplo** — leitura e interpretação de código.
3. **Tentativa do aluno** — primeiro tenta, depois conferimos.
4. **Prática no Codespaces** — execução e alteração do código.
5. **Correção** — discussão dos erros e ajustes.
6. **Checkpoint** — verificação do que foi aprendido.

## Sequência da unidade

- **Aula 01 — Diagnóstico Python**
  - entrada e saída de dados;
  - condicionais;
  - repetição;
  - listas;
  - funções;
  - funções com `return`;
  - classes e objetos;
  - `__init__`, atributos e métodos;
  - desafio integrador de cadastro de alunos.
- **Aula 02 — POO básica** *(definida após o diagnóstico)*
- **Aula 03 — Herança**
- **Aula 04 — `super()` e reutilização de código**
- **Aula 05 — Sobrescrita de métodos**
- **Aula 06 — Polimorfismo**
- **Aula 07 — Composição**
- **Aula 08 — Exceções e depuração**
- **Aula 09 — Arquivos, CSV e JSON**
- **Projeto integrador**

> A sequência poderá ser ajustada de acordo com o diagnóstico da turma.

## Abrindo no Codespaces

1. Clique em **Code**.
2. Abra a aba **Codespaces**.
3. Clique em **Create codespace on main**.
4. Aguarde o VS Code abrir no navegador.
5. Abra o terminal.

Para executar um arquivo da Aula 01:

```bash
python aula01-diagnostico/desafio01_entrada_saida.py
```

## Estrutura inicial

```text
programacao-desenvolvimento-sistemas-3serie-2026/
├── README.md
├── .gitignore
├── .devcontainer/
│   └── devcontainer.json
├── aula01-diagnostico/
│   ├── README.md
│   ├── desafio01_entrada_saida.py
│   ├── desafio02_condicionais.py
│   ├── desafio03_repeticao.py
│   ├── desafio04_listas.py
│   ├── desafio05_funcoes.py
│   ├── desafio06_return.py
│   ├── poo01_classes_objetos.py
│   ├── poo02_atributos_metodos.py
│   └── cadastro_alunos.py
└── material-professor/
    └── roteiro_aula01.md
```

## Regra principal da aula

**Primeiro tenta. Depois eu mostro.**

O objetivo não é apenas copiar código, mas compreender o que cada instrução faz, testar, errar, corrigir e evoluir.
