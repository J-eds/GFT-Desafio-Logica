let nivel = " "
let resultado = calcularVitoriaDerrota(60,10)
console.log(resultado)

function calcularVitoriaDerrota(vitorias,derrotas){

    let saldoRanked = vitorias - derrotas

    if (saldoRanked < 10) {
        nivel = 'Ferro';
    } else if (saldoRanked >= 11 && saldoRanked <= 20) {
        nivel = 'Bronze';
    } else if (saldoRanked >= 21 && saldoRanked <= 50) {
        nivel = 'Prata';
    } else if (saldoRanked >= 51 && saldoRanked <= 80) {
        nivel = 'Ouro';
    } else if (saldoRanked >= 81 && saldoRanked <= 90) {
        nivel = 'Diamante';
    } else if (saldoRanked >= 91 && saldoRanked <= 100) {
        nivel = 'Lendário';
    } else if (saldoRanked >= 101) {
        nivel = 'Imortal';
    }

    return `O Herói tem de saldo de ${saldoRanked} está no nível de ${nivel}`
}