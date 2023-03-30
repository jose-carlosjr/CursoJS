function contar() {

let beg = document.getElementById('ini')
let end = document.getElementById('fim')
let st3p = document.getElementById('pass')
let res = document.querySelector('div#res')

    if (beg.value.length == 0 || end.value.length == 0 || st3p.value.length == 0) {
        window.alert('[ERRO}')
    } else {
        res.innerHTML = 'Contando... <br>'
        let b = Number(beg.value)
        let e = Number(end.value)
        let s = Number(st3p.value)

        if (s <= 0) {
            window.alert('Impossível contar! Considerando passo 1')
            s = 1
        }

        if (b < e) {
            //CONTAGEM CRESCENTE
            for (let c = b; c <= e; c = c + s) {
                res.innerHTML += `\u{1F449} ${c} `
            }
        } else {
            //CONTAGEM REGRESSIVA
            for (let c = b; c >= e; c = c - s) {
                res.innerHTML += `\u{1F449} ${c}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}







/*
while (beg <= end) {
    beg = beg + st3p
}

res.innerText = beg.innerHTML

*/