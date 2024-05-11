//INTRODUÇÃO JS
var nome1 = window.prompt('Digite seu nome')
var idade1 = Number(window.prompt('Digite sua idade'))
var salario = Number(window.prompt('Digite seu salário'))
var auxilio = Number(window.prompt('Digite o seu auxílio'))
document.write(`Seu nome é: ${nome1.toUpperCase()} e têm ${nome1.length} letras.<br/>`)
document.write(`Sua idade é ${idade1}.<br/>`)
document.write(`Seu salário é ${salario.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}.<br/>`)
var sal_final = salario + auxilio
document.write(`Seu salário após a soma do auxílio é ${sal_final.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}.<br/>`)
sal_final < 1640 ? document.write('Você não recebe um salário mínimo.') : document.write('Você recebe um salário mínimo.<br/>')

//AULA DOM JS
var botao = window.document.getElementById('botao')
botao.style.color = 'blue'
botao.style.background = 'green'

//AULA EVENTOS DOM JS
var a = document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar(){
    a.innerText = 'clicou'
    a.style.background = 'red'
}
function entrar(){
    a.innerText = 'entrou'
}
function sair(){
    a.innerText = 'saiu'
    a.style.background = 'green'
}

//EVENTOS DOM PT2
function somar(){
var tn1 = window.document.getElementById('txtn1')
var tn2 = window.document.getElementById('txtn2')
var res1 = window.document.getElementById('res1')
var n1 = Number(tn1.value)
var n2 = Number(tn2.value)
var s = n1 + n2
res1.innerHTML = `${n1} + ${n2}  = <strong>${s}</strong>`
}

//CONDIÇÕES PT1

var vel = 70
console.log(`A velocidade do seu carro é ${vel}Km/h`)
if (vel > 60){  // Condição simples (só usa if)
    console.log('Você ultrapassou a velocidade permitida. MULTADO')
}
console.log('Dirija sempre usando cinto de segurança!')
var país = 'EUA'
console.log(`Vivendo em ${país}`)
if(país == 'Brasil') {  // Condição composta (if e else)
    console.log('Brasileiro!')
} else {
    console.log('Estrangeiro!')
}

//CONDIÇÕES PT1
function calcular() {
    var txtv = window.document.getElementById('txtvel')
    var res2 = window.document.getElementById('res2')
    var vel2 = Number(txtv.value)
    res2.innerHTML = `<p>Sua velocidade atual é de <strong>${vel2}Km/h</strong></p>`
    if (vel2 > 60) {
        res2.innerHTML += `<p>Você está <strong>MULTADO!</strong> por excesso de velocidade</p>`
    }
    res2.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}

//CONDIÇÕES PT1
function teste() {
    var txtn = document.getElementById('txtnacional').value
    var res3 = document.getElementById('res3')
    res3.innerHTML = `<p>O país que você nasceu é: ${txtn}</p>`
    if (txtn == 'brasil' || txtn == 'Brasil') {
        res3.innerHTML += '<p>Você é <strong>Brasileiro!</strong></p>'
    } else {
        res3.innerHTML += '<p>Você é <strong>Estrangeiro!</strong></p>'
    }
}

//CONDIÇÕES ANINHADAS
if (idade1 < 16) {
    document.write('<br/>Não vota')
} else if (idade1 < 18 || idade1 > 65) {
    document.write('<br/>Voto opcional')
} else {
    document.write('<br/>Voto obrigatório')
}

var agora = new Date() //PEGAR HORÁRIO ATUAL DA MÁQUINA
var hora = agora.getHours() //PEGAR HORÁRIO ATUAL DA MÁQUINA
document.write(`<br/>Agora são ${hora} horas`)
if (hora < 12) {
    document.write ('<br/>Bom dia')
} else if (hora <= 18) {
    document.write ('<br/>Boa tarde')
} else {
    document.write ('<br/>Boa noite')
}

var agora = new Date()
var diaSem = agora.getDay()

/*PEGAR DIA DA SEMANA
var agora = new Date()
var diaSem = agora.getDay()
0 = DOMINGO
1 = SEGUNDA
2 = TERÇA
3 = QUARTA
4 = QUINTA
5 = SEXTA
6 = SÁBADO
*/

switch(diaSem) {
    case 0:
        document.write('<br/>Hoje é Domingo')
        break
    case 1:
        document.write('<br/>Hoje é Segunda')
        break
    case 2:
        document.write('<br/>Hoje é Terça')
        break
    case 3:
        document.write('<br/>Hoje é Quarta')
        break
    case 4:
        document.write('<br/>Hoje é Quinta')
        break
    case 5:
        document.write('<br/>Hoje é Sexta')
        break
    case 6:
        document.write('<br/>Hoje é Sábado')
        break
    default:
        document.write('<br/>Dia inválido!')
        break
}