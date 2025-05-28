var nome = document.getElementById("nome");
var profissao = document.getElementById("profissao");
var botao = document.getElementById("botao");
var idade = document.getElementById("idade");
var conteudoListaUsuarios = document.getElementById("conteudo-lista-usuarios");
var pessoas = ["Luiz","José","Ana","Pedro","Maria"];

botao.addEventListener("click", function(){

    if(nome.value == ""){
        alert("Informe um nome!");
        return;

    }else if (nome.value.length < 3){
        alert("Informe o nome completo!");
        return;
    }

    if(profissao.value == ""){
        alert("Informe uma profissao");
        return;

    }else if (profissao.value.length < 1){
        alert("Informe a profissao completa");
        return;
    }

    if(idade.value <= 17){
        alert("Só são aceitos maiores de 18");
        return;
    }

    if(!pessoas.includes(nome.value)){
        alert("Cliente inválido");
        return;
    }
    alert("Cliente válido");
});
console.log(nome);