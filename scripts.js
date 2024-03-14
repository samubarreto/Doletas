function freeConvert(num, value, convert) {
  document.getElementById(`js-ft-res-${num}`).innerHTML = `R$${(value*convert).toFixed(2)}`;
}

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
  console.log(`1, {${ftInput1.value}} - ${convert1}`)
  freeConvert('1', ftInput1.value, convert1);
});

ftInput2.addEventListener('keyup', () => {
  console.log(`2, {${ftInput2.value}} ${convert2}`)
  freeConvert('2', ftInput2.value, convert2);
});

ftInput3.addEventListener('keyup', () => {
  console.log(`3, {${ftInput3.value}} - ${convert3}`)
  freeConvert('3', ftInput3.value, convert3);
});