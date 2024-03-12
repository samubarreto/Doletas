function baseFill(num, convert, payload) {
  document.getElementById(`js-from-${num}`).innerHTML = `${payload[convert].code}`;
  document.getElementById(`js-to-${num}`).innerHTML = `${payload[convert].codein}`;
  document.getElementById(`js-res-${num}`).innerHTML = `R$${parseFloat(payload[convert].bid).toFixed(2)}`;
}

function fillJs(payload) {

  baseFill('1', 'USDBRL', payload);
  baseFill('2', 'EURBRL', payload);
  baseFill('3', 'GBPBRL', payload);
};

const mainCotacoes = () => {
  fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL')
    .then(response => {
      if (response.status === 200) {
        response.json().then(payload => {
          fillJs(payload);
        });
      }
    })
};

mainCotacoes();
setInterval(mainCotacoes, 120000);
