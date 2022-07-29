function template(arr) {
  let ul = document.querySelector("ul");

  let li = document.createElement("li");
  let img = document.createElement("img");
  let h3 = document.createElement("h3");
  let span = document.createElement("span");
  let p = document.createElement("p");

  img.src = arr.img;
  img.alt = arr.nome;
  h3.innerText = arr.nome;
  span.innerText = arr.secao;
  p.innerText = `R$ ${arr.preco}`;

  li.append(img, h3, span, p);
  ul.append(li);

  return li;
}

function listarCards(arr) {
  let span = document.querySelector("span");
  let ul = document.querySelector("ul");
  ul.innerText = "";
  let valor = 0;
  for (let i = 0; i < arr.length; i++) {
    template(arr[i]);
    valor += arr[i].preco;
    span.innerText = `R$ ${valor},00`;
  }
}
listarCards(produtos);

function pesquisaNome() {
  let inputBusca = document.querySelector("input");
  let btnBusca = document.querySelector(
    `.estiloGeralBotoes--botaoBuscaPorNome`
  );

  btnBusca.addEventListener("click", () => {
    let pesquisa = inputBusca.value;
    let resultado = busca(pesquisa);

    listarCards(resultado);
  });
}
pesquisaNome()

function busca(valorPesquisa) {
  let resultBusca = [];
  for (let i = 0; i < produtos.length; i++) {
    let pesquisa = valorPesquisa.toLowerCase();
    let nomeProduto = produtos[i].nome.toLowerCase();

    if (nomeProduto.includes(pesquisa)) {
      resultBusca.push(produtos[i]);
    }
  }
  return resultBusca;
}

function filtroTodos() {
  let todos = document.querySelector("#todos");

  let tds = produtos.filter((element) => {
    return element;
  });

  todos.addEventListener("click", () => {
    listarCards(tds);
  });
}
filtroTodos();

function filtroHortFruti() {
  let button = document.querySelector("#hortFruti");

  let filterHort = produtos.filter((element, i) => {
    if (produtos[i].secao == "Hortifruti") {
      return element;
    }
  });

  button.addEventListener("click", () => {
    listarCards(filterHort);
  });
}
filtroHortFruti();

function filtroPanificadora() {
  let panificadora = document.querySelector("#panificadora");

  let panifica = produtos.filter((element, i) => {
    if (produtos[i].secao == "Panificadora") {
      return element;
    }
  });

  panificadora.addEventListener("click", () => {
    listarCards(panifica);
  });
}
filtroPanificadora();

function fitroLaticinio() {
  let laticinio = document.querySelector("#laticinio");

  let lacteo = produtos.filter((element, i) => {
    if (produtos[i].secao == "Laticínio") {
      return element;
    }
  });

  laticinio.addEventListener("click", () => {
    listarCards(lacteo);
  });
}
fitroLaticinio();
