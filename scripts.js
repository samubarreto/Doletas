let length, ftInput1, ftInput2, ftInput3, adviceElement, c = 120;

function formatarMoeda(value) {
  return value.toFixed(2).replace(/\./g, ',').replace(/\d(?=(\d{3})+,)/g, '$&.');
}

function freeConvert(num, value, convert) {
  const ftResP = document.getElementById(`js-ft-res-${num}`);

  if (isNaN(value)) {
    ftResP.innerHTML = '';
  } else {
    ftResP.innerHTML = `R$${formatarMoeda(value * convert)}`;
    length = value.toString().length;
    ftResP.style.fontSize = length > 7 ? (length >= 15 ? ".55rem" : (length >= 12 ? ".6rem" : ".7rem")) : ".8rem";
  }
}

function baseFill(num, convert, payload) {
  document.getElementById(`js-from-${num}`).innerHTML = `${payload[convert].code}`;
  document.getElementById(`js-to-${num}`).innerHTML = `${payload[convert].codein}`;
  document.getElementById(`js-res-${num}`).innerHTML = `R$${formatarMoeda(parseFloat(payload[convert].bid))}`;
}

function fillJs(payload) {
  baseFill('1', 'USDBRL', payload);
  baseFill('2', 'EURBRL', payload);
  baseFill('3', 'GBPBRL', payload);
};

const counter = () => {
  adviceElement = document.getElementById('js-advice');
  c -= 1;
  adviceElement.innerHTML = `Faltam ${c} segundos para as cotações atualizarem automaticamente`
  if (c === 0) {
    c = 120;
    mainCotacoes();
  }
}

const mainCotacoes = () => {
  fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL')
    .then(response => {
      if (response.status === 200) {
        response.json().then(payload => {
          fillJs(payload);
          convert1 = payload.USDBRL.bid;
          convert2 = payload.EURBRL.bid;
          convert3 = payload.GBPBRL.bid;
        });
      }
    })
    .catch(error => {
      console.error('Erro ao obter cotações:', error);
    });
};

mainCotacoes();
setInterval(counter, 1050);

ftInput1 = document.getElementById('js-ft-input-1');
ftInput2 = document.getElementById('js-ft-input-2');
ftInput3 = document.getElementById('js-ft-input-3');

ftInput1.addEventListener('keyup', () => {
  freeConvert('1', parseFloat(ftInput1.value), convert1);
});

ftInput2.addEventListener('keyup', () => {
  freeConvert('2', parseFloat(ftInput2.value), convert2);
});

ftInput3.addEventListener('keyup', () => {
  freeConvert('3', parseFloat(ftInput3.value), convert3);
});
