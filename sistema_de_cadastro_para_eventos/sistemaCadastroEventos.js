
let dataAtual = 06/12/2021
let dataLimite = 10/12/2021

if (dataAtual > dataLimite){
    console.log("Evento Indisponivel")
    dataAtual = false
}else{
    dataAtual = true;
}


let dados = {"Nome": "Augusto", "Idade": 18, "Endereço": "Rua Salomão, N22, Bairro: Europa, Cidade Velha-MS"}
let idadeLimite = 18

if (dados.Idade < idadeLimite){
    console.log("Cadastro não autorizado para menores de idade.")
    dados = false;
}else{
    dados = true;
}


let vagas = ['Pessoa1', 'Pessoa2', 'Pessoa3', 'Pessoa4', 'Pessoa5', 'pessoa6', 'Pessoa7', 'Pessoa8', 'Pessoa9', 'Pessoa10', 'Pessoa11'].length;

let limiteVagas = 100

if (vagas > limiteVagas){
    console.log("Limite de Cadastro Excedido")
    vagas = false;
}else{
    vagas = true;
}

if(dataAtual == true && dados == true && vagas == true){
    console.log("Cadastro enviado com sucesso")
}






