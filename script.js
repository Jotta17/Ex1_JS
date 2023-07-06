/* 
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

*/

alert('Informe dois números:')
let n1 = prompt('Informe o primeiro número:')
let n2 = prompt('Informe o segundo número:')

n1 = Number(n1)
n2 = Number(n2)

const soma = n1 + n2
const sub = n1 - n2
const mult = n1 * n2
const div = n1 / n2
const restDiv = n1 % n2

const verNumerosIguais = n1 === n2 
const verParImpar = soma % 2 === 0 


alert(`0 resultado da soma é: ${soma}`)
alert(`0 resultado da subtração é: ${sub}`)
alert(`0 resultado da multiplicação é: ${mult}`)
alert(`0 resultado da divisão é: ${div}`)
alert(`0 restante da divisão é: ${restDiv}`)



if(verNumerosIguais){
    alert('Os números informados são iguais.')
}else{
    alert('Os números informados são diferentes.')
}

if(verParImpar){
    alert('A soma dos números é par: ' + soma)
}else{
    alert('A soma dos números é impar: ' + soma)
}

