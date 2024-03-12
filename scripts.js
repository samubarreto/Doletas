function fillJs(payload) {
  document.getElementById('js-stranger-coin-1-igual').innerHTML = `R$${parseFloat(payload.USDBRL.bid).toFixed(2)}`;
  document.getElementById('js-from-1').innerHTML = `${payload.USDBRL.code}`;
  document.getElementById('js-to-1').innerHTML = `${payload.USDBRL.codein}`;

  document.getElementById('js-stranger-coin-2-igual').innerHTML = `R$${parseFloat(payload.EURBRL.bid).toFixed(2)}`;
  document.getElementById('js-from-2').innerHTML = `${payload.EURBRL.code}`;
  document.getElementById('js-to-2').innerHTML = `${payload.EURBRL.codein}`;

  document.getElementById('js-stranger-coin-3-igual').innerHTML = `R$${parseFloat(payload.GBPBRL.bid).toFixed(2)}`;
  document.getElementById('js-from-3').innerHTML = `${payload.GBPBRL.code}`;
  document.getElementById('js-to-3').innerHTML = `${payload.GBPBRL.codein}`;

};

const mainCotacoes = () => {
  fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL')
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Erro na requisição. Status de resposta: ' + response.status);
      }
    })
    .then(payload => {
      fillJs(payload);
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
    });
};

mainCotacoes();
setInterval(mainCotacoes, 30000);


mainCotacoes();
setInterval(mainCotacoes, 30000)
