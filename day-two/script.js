function setInvisible(studyQuestion) {
  document.getElementById('studyQuestion').style.display = 'none';
}

function showMessage() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const language = document.getElementById('language').value;

  const messageOne =
    'Olá, ' +
    name +
    ', você tem ' +
    age +
    ' e já está aprendendo ' +
    language +
    '!';
  console.log(messageOne);

  setInvisible('studyQuestion');

  document.getElementById('studyQuestion').style.display = 'block';
}

function sendAnswer() {
  const answerStudyQuestion = document.getElementById('answerStudyQuestion');

  if (answerStudyQuestion == 1) {
    const successMessage =
      'Muito bom! Continue estudando e você terá muito sucesso.';
    console.log(successMessage);
    document.getElementById('finalMessage').value = successMessage;
  } else {
    const failureMessage =
      'Ahh que pena... Já tentou aprender outras linguagens?';
    console.log(failureMessage);
    document.getElementById('finalMessage').value = failureMessage;
  }
}
