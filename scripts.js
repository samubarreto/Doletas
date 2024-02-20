const fazerRequestEPreencherjavascripts = () => {
  let request = fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
  request
    .then(response => response.json())
    .then(payload => {
      document.getElementById('js-transaction-name-1-0').innerHTML = payload.USDBRL.code
      document.getElementById('js-transaction-name-1-1').innerHTML = payload.USDBRL.codein
      document.getElementById('js-stranger-coin-1-igual').innerHTML = parseFloat(payload.USDBRL.bid).toFixed(2);

      document.getElementById('js-transaction-name-2-0').innerHTML = payload.EURBRL.code
      document.getElementById('js-transaction-name-2-1').innerHTML = payload.EURBRL.codein
      document.getElementById('js-stranger-coin-2-igual').innerHTML = parseFloat(payload.EURBRL.bid).toFixed(2);

      document.getElementById('js-transaction-name-3-0').innerHTML = payload.BTCBRL.code
      document.getElementById('js-transaction-name-3-1').innerHTML = payload.BTCBRL.codein
      document.getElementById('js-stranger-coin-3-igual').innerHTML = parseFloat(payload.BTCBRL.bid).toFixed(2);
    });
}

fazerRequestEPreencherjavascripts();

// setInterval(fazerRequestEPreencherjavascripts, 30000)

// setInterval(() => {
//   request
//     .then(response => response.json())
//     .then(payload => {
//       console.log(payload)
//     });
// }, 30000);