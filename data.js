const dataAtual = new Date()
const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const formatador = new Intl.DateTimeFormat('pt-br', opcoes)

const dataFormatada = formatador.format(dataAtual)

console.log(dataFormatada);



// const dia = dataAtual.getDate()
// const mes = dataAtual.getMonth() +1
// const ano = dataAtual.getFullYear()

// console.log(dia)
// console.log(mes)
// console.log(ano)

// const umDiaDepois = new Date(dataAtual)

// umDiaDepois.setDate(dataAtual.getDate() +1)

// console.log(umDiaDepois);

// const umMesAtras = new Date(dataAtual)

// umMesAtras.setMonth(dataAtual.getMonth() -1)

// console.log(umMesAtras);