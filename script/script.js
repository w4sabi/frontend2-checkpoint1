let titulo = document.getElementById('inputTitulo');
let urlImagem = document.getElementById('inputUrlImagem');
let descricao = document.getElementById('inputDescricao');
let card = document.getElementById('cards')

let botaoSubmit = document.getElementById('btnSubmit');

botaoSubmit.addEventListener('click', evento => evento.preventDefault());

function addCard() {
  let div = document.createElement('div')
  div.innerHTML = `            
<div class="card">
    <h2>${titulo.value}</h2>
    <img src="${urlImagem.value}" alt="">
    <p>${descricao.value}</p>
</div>`
  card.appendChild(div);
}

botaoSubmit.addEventListener('click', () => addCard());