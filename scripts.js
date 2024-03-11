function fillJs(payload) {
  document.getElementById('js-stranger-coin-1-igual').innerHTML = `R$${parseFloat(payload.USDBRL.bid).toFixed(2)}`;
  document.getElementById('js-stranger-coin-2-igual').innerHTML = `R$${parseFloat(payload.EURBRL.bid).toFixed(2)}`;
  document.getElementById('js-stranger-coin-3-igual').innerHTML = `R$${parseFloat(payload.GBPBRL.bid).toFixed(2)}`;
};

const getCotacoes = () => {
  let request = fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL')
  request
    .then(response => response.json())
    .then(payload => {
      fillJs(payload);
    });
};

getCotacoes();

// setInterval(fazerRequestEPreencherjavascripts, 30000)

// setInterval(() => {
//   request
//     .then(response => response.json())
//     .then(payload => {
//       console.log(payload)
//     });
// }, 30000);