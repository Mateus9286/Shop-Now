function template(arr) {
  let ul = document.querySelector("ul");

  let li = document.createElement("li");
  let img = document.createElement("img");
  let h3 = document.createElement("h3");
  let span = document.createElement("span");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");
  let div0 = document.createElement("div")
  let preco = document.createElement("h3");
  let button = document.createElement("button");
  
  li.id = arr.id
  img.src = arr.img;
  img.alt = arr.nome;
  h3.innerText = arr.nome;
  span.innerText = arr.secao;
  p1.innerText = `1. ${arr.componentes[0]}` ;
  p2.innerText = `2. ${arr.componentes[1]}` ;
  p3.innerText = `3. ${arr.componentes[2]}` ;
  p4.innerText = `4. ${arr.componentes[3]}`;
  preco.innerText = `R$ ${arr.preco}`;
  button.innerText = `Comprar`

  li.append(img, h3, span, p1, p2, p3,p4 , div0);
  div0.append(preco,button)
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
    valor += +arr[i].preco;
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
    let secaoProduto = produtos[i].secao.toLowerCase();
    let categoriaProduto = produtos[i].categoria.toLowerCase();


    if (nomeProduto.includes(pesquisa) || secaoProduto.includes(pesquisa) || categoriaProduto.includes(pesquisa) ) {
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


function templateCarrinho(arr) {
  let carrinho = document.querySelector("#carrinho");

  let li = document.createElement("li");
  let div = document.createElement("div")
  let img = document.createElement("img");
  let h3 = document.createElement("h3");
  let span = document.createElement("span");
  let p = document.createElement("p");
  let button = document.createElement("button");

  div.classList.add("p")
  img.src = arr.img;
  img.alt = arr.nome;
  img.classList.add("produtoimg")
  h3.innerText = arr.nome;
  span.innerText = arr.secao;

  p.innerText = `R$ ${arr.preco}`;
 
  button.innerText = `Remover`
  button.id = arr.preco

  div.append(img, h3, span, p, button);
  li.append(div)
  carrinho.append(li);

  return li;
}

let ul = document.querySelector("ul");

ul.addEventListener("click", (event)=>{
  let target = event.target
  let id = target.parentNode.parentNode.id
  let produto = produtos.filter((element)=>element.id == id)
 
  if(target.tagName === `BUTTON`){
    listarCarrinho(produto)
    
  }
})



  let valor = [];
  
function listarCarrinho(produto) {
  
  let valu = document.querySelector("#valor");
  let value = document.querySelector("#quantidade");
  for (let i = 0; i < produto.length; i++) {
    templateCarrinho(produto[i])
    valor.push(produto[i].preco) ;
    
  }
  value.innerText = +valor.length

  let preco = valor.reduce((ant , atual)=> ant + +atual,0) 
  valu.innerText = `R$ ${preco},00`
  
}

function removerCarrinho(arr) {
  let value = document.querySelector("#quantidade");
  let valu = document.querySelector("#valor");
  let carrinho = document.querySelector("#carrinho");
  carrinho.addEventListener("click",(event)=>{
    let target = event.target
    let id = event.target.id
    let produto = target.parentNode.parentNode
    if(target.tagName === `BUTTON`){
       produto.remove()
   let index = arr.indexOf(id)
      arr.splice(index, 1)
      let preco = arr.reduce((ant , atual)=> ant + +atual,0) 
      valu.innerText = `R$ ${preco},00`
      value.innerText = arr.length
    }
  })
  
}
removerCarrinho(valor)







 

