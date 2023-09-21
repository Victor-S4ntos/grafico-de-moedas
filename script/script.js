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
  let tempo = geraHorario();
  let valor = ConectaTraduzido.USDBRL.ask;
  adicionarDados(geraHorario, tempo, valor)
}
setInterval(()=> conectaAPI(), 5000);

function geraHorario () {
  let data = new Date()
  let horario = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds()
  return horario
}

geraHorario()

function adicionarDados (grafico, legenda, dados) {
  graficoParaDolar.data.labels.push(legenda);
  graficoParaDolar.data.datasets.forEach((dataset) => {
    dataset.data.push(dados)
  });
  graficoParaDolar.update();
}