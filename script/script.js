const graficoDolar = document.getElementById('graficoDolar');

const graficoParaDolar = new Chart(graficoDolar, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Dólar',
        data: [],
        borderWidth: 1
      }]
    },
  });

async function conectaAPI() {

  const conecta = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
  const  ConectaTraduzido = await conecta.json();
}
setInterval(()=> conectaAPI(), 50000);

function geraHorario () {
  let data = new Date()
  let horario = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds()
  console.log(horario)
}

geraHorario()

function adicionarDados (grafico, legenda, dados) {
  grafico.data.labels.push(legenda);
  grafico.data.datasets.forEach((dataset) => {dataset.data.push(dados)});
  grafico.update();
}