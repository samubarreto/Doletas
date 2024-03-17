function formatarMoeda(value) {
  return value.toFixed(2).replace(/\./g, ',').replace(/\d(?=(\d{3})+,)/g, '$&.');
}

function freeConvert(num, value, convert) {
  document.getElementById(`js-ft-res-${num}`).innerHTML = `R$${formatarMoeda(value * convert)}`;

  if (value.toString().length > 7) {
    document.getElementById(`js-ft-res-${num}`).style.fontSize = ".7rem";
  } else {
    document.getElementById(`js-ft-res-${num}`).style.fontSize = ".8rem";
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
};

mainCotacoes();
setInterval(mainCotacoes, 120000);

let ftInput1 = document.getElementById('js-ft-input-1');
let ftInput2 = document.getElementById('js-ft-input-2');
let ftInput3 = document.getElementById('js-ft-input-3');

ftInput1.addEventListener('keyup', () => {
  freeConvert('1', parseFloat(ftInput1.value), convert1);
});

ftInput2.addEventListener('keyup', () => {
  freeConvert('2', parseFloat(ftInput2.value), convert2);
});

ftInput3.addEventListener('keyup', () => {
  freeConvert('3', parseFloat(ftInput3.value), convert3);
});
