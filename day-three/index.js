const area = prompt('Você deseja seguir para área de Front-End ou Back-End?');
let linguagem = '';

if (area === 'Front-End') {
  linguagem = prompt('E você deseja aprender React ou Vue?');
} else if (area === 'Back-End') {
  linguagem = prompt('E você deseja aprender C# ou Java?');
} else {
  alert('Área Inválida');
}

const especialidadeFullstack = prompt(
  'Digite 1 se gostaria de seguir se especializando na área ou 2 para tornar-se Fullstack'
);

if (especialidadeFullstack == '1') {
  alert(
    `Continue se especializando em ${linguagem} para dominar a área ${area}!`
  );
} else if (especialidadeFullstack == '2') {
  alert(
    `Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se quer se tornar Fullstack!`
  );
} else {
  alert('Você não inseriu um valor válido!');
}

let msg = prompt(
  "Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo."
);
while (msg === 'ok') {
  let novaTecnologia = prompt('Qual?');
  alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`);
  msg = prompt(
    "Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo."
  );
}
