const teste1 = document.getElementById('teste1')
const teste2 = document.getElementById('teste2')
const teste3 = document.getElementById('teste3')

const fazerRequest = () => {
  let request = fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
  request
    .then(response => response.json())
    .then(payload => {
      teste1.innerHTML = payload.USDBRL.name
      teste2.innerHTML = payload.EURBRL.name
      teste3.innerHTML = payload.BTCBRL.name
    });
}

setInterval(fazerRequest, 30000)

// setInterval(() => {
//   request
//     .then(response => response.json())
//     .then(payload => {
//       console.log(payload)
//     });
// }, 30000);