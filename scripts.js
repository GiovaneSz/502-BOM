let texto = document.querySelector("p")
let nome = document.querySelector("input")
let botao = document.querySelector("button")
let Evc = document.querySelector("a")

function acessar(){
    localStorage.setItem(`nome`,nome.value);
    texto.innerHTML =`seja bem vindo ${localStorage.nome}`;
    Evc.innerHTML = `È voce ${localStorage.nome}`;
}

function reset(){
    localStorage.removeItem(`nome`)
}



botao.onclick = acessar;    
Evc.onclick = reset;
