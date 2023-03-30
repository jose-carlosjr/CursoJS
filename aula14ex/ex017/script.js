function calcular() {
    let num = document.getElementById('num')
    let mul = 1
    let res = document.querySelector("div#res")
    let tab = document.getElementById('seltab')

    if (num.value.length == '') {
        window.alert('[ERRO]')
        res.innerHTML = ''
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c = c + 1
        }
    }
}

/*
    while (mul <= 10) {
        let total = n * mul  
        res.innerHTML += `${n} x ${mul} = ${total} <br>`
        mul = mul + 1
    }
*/