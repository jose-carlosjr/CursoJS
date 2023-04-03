// PARA O JS O ARRAY É UM object E O OBJETO TAMBÉM É UM object
// SÃO ESTRUTURAS DA MESMA CLASSE. MESMA ORIGEM

let amigo = {
    nome: 'José', 
    sexo: 'M', 
    peso: 85.4,
    engordar(p=0) {
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)