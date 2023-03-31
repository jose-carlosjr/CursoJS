let valores = [3, 8, 4, 8, 9, 0]

/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor: ${valores[pos]}`)
}
*/

//FUNCIONA DA MESMA MANEIRA
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor: ${valores[pos]}`)
}