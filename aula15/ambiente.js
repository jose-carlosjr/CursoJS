let num = [9, 4, 7]
num[3] = 2
num.push(-3)
num.sort()

console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`Terceiro valor do vetor é ${num[2]}`)

//LAÇO DE REPETIÇÃO COM VETORES


let position = num.indexOf(-5)
    
    if (position == -1) {
        console.log(`o valor não foi encontrado`)
    } else {
    console.log(`O valor 7 se encontra na posição ${position}`)
    }