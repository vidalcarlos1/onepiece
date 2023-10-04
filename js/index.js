//window.alert("Escolha seu personagem!")


//OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
// passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles

const botoes = document.querySelectorAll('.botao');


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        console.log(indice);
        console.log(persongens[indice])

        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado")



        persongens[indice].classList.add("selecionado");

    });
});

const persongens = document.querySelectorAll(".personagem");



//botoes.addEventListener("click", () => {
//  console.log("clicou no botão!")
//})