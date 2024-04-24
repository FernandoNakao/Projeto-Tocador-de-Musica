const nomemusica= document.getElementById('nome')
const autor=document.getElementById('autor')
const capa= document.getElementById('foto')
const fundo=document.querySelector('html')
const audio= document.getElementById('audio')
const botaoplay= document.getElementById('botaoplay')
let lista= ['musics/Creep (Acoustic).mp3','musics/hooked.mp3', 'musics/naquelamesa.mp3','musics/meantime.mp3']
let imagens= ['../images/creep.png','../images/hooked.jpeg','../images/naquelamesa.jpeg','../images/meantime.jpeg']
let nomes= ['Creep - Acoustic','Hooked On A Feeling','Naquela Mesa','In the Meantime']
let lautor= ['Radiohead','Blue Swede, Björn Skifs','Nelson Gonçalves','Spacehog']

function tocar() {
    if (botaoplay.getAttribute('class')=="bi bi-pause-circle-fill") {
        botaoplay.setAttribute('class',"bi bi-play-circle-fill")
        audio.pause()
    } else {
        botaoplay.setAttribute('class',"bi bi-pause-circle-fill")
        audio.play()
    }


}

c=0

function avancar() {
    if (c==3) {
        c=-1
    }
    c+=1

 
    audio.setAttribute('src', lista[c])
    capa.setAttribute('src', imagens[c])
    nomemusica.innerHTML= nomes[c]
    autor.innerHTML= lautor[c]
    switch (c) {
        case 0:
            fundo.style.background= 'linear-gradient(#7e3038, rgb(12, 10, 10))'; 
            break;
        case 1:
            fundo.style.background= 'linear-gradient(#49677F, rgb(12, 10, 10))';
            break;
        case 2:
            fundo.style.background= 'linear-gradient(#673632, rgb(12, 10, 10))';
            break;
        case 3:
            fundo.style.background= 'linear-gradient(#992A4A, rgb(12, 10, 10))';
            break;
    }

    botaoplay.setAttribute('class',"bi bi-pause-circle-fill")
    audio.play()
}

function voltar() {
    c-=1
    if (c<0) {
        c=3
    }
    audio.setAttribute('src', lista[c])
    capa.setAttribute('src', imagens[c])
    nomemusica.innerHTML= nomes[c]
    autor.innerHTML= lautor[c]
    switch (c) {
        case 0:
            fundo.style.background= 'linear-gradient(#7e3038, rgb(12, 10, 10))'; 
            break;
        case 1:
            fundo.style.background= 'linear-gradient(#49677F, rgb(12, 10, 10))';
            break;
        case 2:
            fundo.style.background= 'linear-gradient(#673632, rgb(12, 10, 10))';
            break;
        case 3:
            fundo.style.background= 'linear-gradient(#992A4A, rgb(12, 10, 10))';
            break;
    }


    botaoplay.setAttribute('class',"bi bi-pause-circle-fill")
    audio.play()
}