function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //CRIANÇA
                img.setAttribute('src', 'bebe-macho.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'rapaz.png')
            } else if (idade < 60) {
                //ADULTO
                img.setAttribute('src', 'homem.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'bebe-femea.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'menina.png')
            } else if (idade < 60) {
                //MULHER
                img.setAttribute('src', 'mulher.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}