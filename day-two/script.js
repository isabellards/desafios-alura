function setInvisible(studyQuestion) {
  document.getElementById('studyQuestion').style.display = 'none';
}

function showMessage() {
  console.log('chegou na funcao');
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const language = document.getElementById('language').value;

  const message =
    'Olá, ' +
    name +
    ', você tem ' +
    age +
    ' e já está aprendendo ' +
    language +
    '!';
  console.log(message);
}
