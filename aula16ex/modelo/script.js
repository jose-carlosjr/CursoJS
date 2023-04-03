let num = document.getElementById('num')
let lista = document.querySelector('select#dados')
let res = document.querySelector('div#res')
let valores = []

//VERIFICA SE O NÚMERO DIGITADO É VÁLIDO, OU SEJA, SE ESTÁ ENTRE 1 E 100
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

//VERIFICA SE O NÚMERO DIGITADO JÁ SE ENCONTRA NA LISTA
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

//ADICIONA NÚMEROS NO SELECT(LISTA)
function adicionar() {

    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }

    num.value = ''
    num.focus()
}

//ANALISA OS DADOS ADICIONADOS À LISTA E ENTREGA OS RESULTADOS
function finalizar() {
    if (valores.length == 0) {
        window.alert('Por favor, adicione dados à lista!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]

            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor) 
                menor = valores[pos]
        }

        media = soma / total
        
        res.innerHTML = ''
        res.innerHTML += `<p>A lista tem <strong>${total}</strong> elementos</p>`
        res.innerHTML += `<p>O maior valor informado foi: <strong>${maior}</strong></p>`
        res.innerHTML += `<p>O menor valor informado foi: <strong>${menor}</strong></p>`
        res.innerHTML += `<p>A soma de todos os valores é: <strong>${soma}</strong></p>`
        res.innerHTML += `<p>A média é: <strong>${media}</strong></p>`
    }
}

/*
    document.removeChild('res')
    let p1 = document.createElement('p')
    res.appendChild(p1)
    p1.innerText = `A lista contém números`
*/