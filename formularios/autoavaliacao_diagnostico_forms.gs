function criarAutoavaliacaoDiagnosticoPython() {

  const form = FormApp.create(
    "Autoavaliação — Diagnóstico Python — 3ª Série"
  );

  form.setDescription(
    "AUTOAVALIAÇÃO — AULA DIAGNÓSTICA DE PYTHON\n\n" +
    "Programação no Desenvolvimento de Sistemas — 3ª Série\n" +
    "Professor: Sidney Santos\n\n" +
    "Esta atividade NÃO VALE NOTA.\n\n" +
    "O objetivo é identificar como você se sentiu durante os desafios realizados na aula e quais conteúdos precisam ser retomados antes de avançarmos.\n\n" +
    "Responda com sinceridade. Suas respostas serão utilizadas para organizar as próximas aulas."
  );

  form.setIsQuiz(false);
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setAllowResponseEdits(false);
  form.setProgressBar(true);
  form.setShuffleQuestions(false);
  form.setShowLinkToRespondAgain(false);

  form.setConfirmationMessage(
    "Autoavaliação enviada com sucesso!\n\nSuas respostas ajudarão no planejamento das próximas aulas."
  );

  form.addSectionHeaderItem()
    .setTitle("IDENTIFICAÇÃO")
    .setHelpText("Preencha seus dados antes de responder.");

  form.addTextItem()
    .setTitle("Nome completo")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Turma")
    .setHelpText("Exemplo: 3º A")
    .setRequired(true);

  form.addSectionHeaderItem()
    .setTitle("COMO FOI A AULA PARA VOCÊ?");

  const q1 = form.addMultipleChoiceItem();
  q1.setTitle("1. Pensando nos desafios realizados hoje, como você se avalia?");
  q1.setChoices([
    q1.createChoice("1 — Fiz sozinho"),
    q1.createChoice("2 — Fiz com pequenos ajustes"),
    q1.createChoice("3 — Fiz com ajuda"),
    q1.createChoice("4 — Tive muita dificuldade"),
    q1.createChoice("5 — Não consegui")
  ]);
  q1.setRequired(true);

  const q2 = form.addMultipleChoiceItem();
  q2.setTitle("2. Até qual desafio você conseguiu realizar com segurança?");
  q2.setChoices([
    q2.createChoice("Entrada e saída de dados — input() e print()"),
    q2.createChoice("Condicionais — if / elif / else"),
    q2.createChoice("Repetição — for"),
    q2.createChoice("Listas"),
    q2.createChoice("Funções"),
    q2.createChoice("Funções com return"),
    q2.createChoice("Classes e objetos"),
    q2.createChoice("__init__, self, atributos e métodos"),
    q2.createChoice("Desafio final — cadastro de alunos"),
    q2.createChoice("Tive dificuldade desde os primeiros desafios")
  ]);
  q2.setRequired(true);

  const q3 = form.addMultipleChoiceItem();
  q3.setTitle("3. Em qual conteúdo você teve MAIOR dificuldade?");
  q3.setChoices([
    q3.createChoice("Entrada e saída de dados"),
    q3.createChoice("if / elif / else"),
    q3.createChoice("for"),
    q3.createChoice("Listas"),
    q3.createChoice("Funções"),
    q3.createChoice("return"),
    q3.createChoice("Classes e objetos"),
    q3.createChoice("__init__ e self"),
    q3.createChoice("Atributos e métodos"),
    q3.createChoice("Desafio de cadastro"),
    q3.createChoice("Não tive dificuldade significativa")
  ]);
  q3.setRequired(true);

  const q4 = form.addMultipleChoiceItem();
  q4.setTitle("4. Se o professor pedir agora para você criar uma classe simples em Python sem copiar um exemplo, você conseguiria?");
  q4.setChoices([
    q4.createChoice("Sim, consigo sozinho"),
    q4.createChoice("Consigo com pequenas consultas"),
    q4.createChoice("Consigo somente com ajuda"),
    q4.createChoice("Ainda não consigo"),
    q4.createChoice("Ainda não entendi bem o que é classe e objeto")
  ]);
  q4.setRequired(true);

  const q5 = form.addCheckboxItem();
  q5.setTitle("5. Quais conteúdos você acha que deveríamos revisar nas próximas aulas?");
  q5.setChoices([
    q5.createChoice("Variáveis, input() e print()"),
    q5.createChoice("if / elif / else"),
    q5.createChoice("for"),
    q5.createChoice("Listas"),
    q5.createChoice("Funções"),
    q5.createChoice("return"),
    q5.createChoice("Classes e objetos"),
    q5.createChoice("__init__ e self"),
    q5.createChoice("Atributos e métodos"),
    q5.createChoice("Não preciso de revisão neste momento")
  ]);
  q5.setRequired(true);

  const q6 = form.addParagraphTextItem();
  q6.setTitle("6. Escreva, se quiser, qual foi sua principal dificuldade ou o que gostaria que o professor explicasse novamente.");
  q6.setRequired(false);

  form.addSectionHeaderItem()
    .setTitle("AUTOAVALIAÇÃO CONCLUÍDA")
    .setHelpText("Confira suas respostas e clique em ENVIAR.");

  Logger.log("LINK PARA EDITAR:");
  Logger.log(form.getEditUrl());
  Logger.log("LINK PARA OS ALUNOS:");
  Logger.log(form.getPublishedUrl());
}
