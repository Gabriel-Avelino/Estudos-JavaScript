function botao() {
    var nome
    var validar
    nome=prompt("Qual seu nome?");
    if(nome=="Gabriel"){
        validar= true
        //alert("Parabéns "+nome+", você ganhou 1 milhão de reais");
        document.getElementById("premio").innerHTML = "Parabéns "+ nome +", você ganhou a oportunidade de conhecer uma plataforma de ensino de tecnologia a distância, clique aqui para conhecer"
        console.log(document.getElementById("premio"))
    }else {
        validar=false
        //alert("Seu nome não está no banco de dados");
        document.getElementById("premio").innerHTML = "Desculpe "+ nome +", mas seu nome não está no banco de dados"
        console.log(document.getElementById("premio"))
    }
}

botao(validar)
alert(nome)

function redirecionar() {
    //window.open("https://digitalinnovation.one/");
    window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento){
    elemento.innerHTML="Parabéns"
    //document.getElementById("mouse").innerHTML = "Parabéns";
    //alert ("trocar texto");
}

function voltar (elemento) {
    elemento.innerHTML= "Passe o mouse aqui";
    //document.getElementById("mouse").innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Carregamento completo")
}

function Change (elemento) {
    var questão
    if (elemento.value==1) {
        questão= true
        console.log("Correto")
    } else {
        questão= false
        console.log("errado")
    }
}

Change(questão)
alert(value)



/*
function soma (n1,n2){
    return (n1+n2);
}
*/

/*
var validacao
function validaNome (nome){
    validacao; 
    alert(nome);
    if(nome=="Gabriel"){
         validacao=true;
         alert("Você ganhou um prêmio");
    }else{
        validacao=false;
        alert("Você não está autorizado");
    }
    return validacao
}
var nome = prompt ("Quem é você?");
validaNome(nome)
alert(validacao)
*/

/*
var d= new Date ();
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDate());
alert(d.getMonth()+1);
alert(d)
*/


/*
var count;
for(count=0; count<=3; count++){
    alert (count);
};
*/

/*
var count= 0
while (count<=10) {
    alert (count);
    count++
}
*/

//var idade = prompt ("Qual sua idade?")
//if (idade>=18) {
    //if (idade>18) {
        //alert("maior de idade")
    //} 
    //if (idade=18) {
        //alert ("Você possui 18 anos")
    //}
//} else {
    //alert ("menor de idade")
//}

//var legumes = [{nome:"cenoura", cor:"laranja",}, {nome:"batata", cor:"amarela",}]
//console.log(legumes[0])
//alert(legumes[0])

//var lista = ["cenoura", "beterraba", "batata"]
//lista.push("mandioca");
//lista.pop();
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" | "))

//var nome = "Gabriel Avelino";
//var n1 = 16
//var n2 = 2
//var frase = "Bem vindo ao site da SMG Soluções"

//alert (nome + " tem " + idade + " anos.");
//alert (idade+idade2)
//console.log (nome);
//console.log (n1*n2)
//console.log (frase.toLowerCase())