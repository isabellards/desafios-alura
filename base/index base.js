const output = process.stdout;
const input = process.stdin;

// definir a funcao aqui

function app() {
  output.write('Iniciando a execução do app...');

  input.on('data', (data) => {
    //sua funcao vem aqui
  });

  process.exit();
  return;
}

app();

const output = process.stdout;
const input = process.stdin;

function showJobAreaOptions(area) {
  if (area === 'back') {
    output.write(`Voce escolheu: ${area}`);
  } else if (area === 'front') {
    output.write(`Voce está no: ${area}`);
  }

  output.write(`A área ${area} não existe.`);
}

function app() {
  output.write('Iniciando a execução do app...');

  input.on('data', (data) => {
    const value = data
      .toString()
      .replace(/\r?\n|\r/g, ' ')
      .trim();

    showJobAreaOptions(value);

    process.exit();
  });

  return;
}

app();
