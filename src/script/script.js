
function carregar(){
    agora=new Date()
    hora=agora.getHours()
    horario=document.getElementById('hora')
    horario.innerHTML=`Agora são ${hora} horas.`
    imagem=document.getElementById('img')
    corpo=document.getElementById('corpo')

    if (hora<=12 && hora>0){
        imagem.src="./src/imagens/manhã.png"
        corpo.style.background="#BDB76B"
    }else if (hora>=13 && hora<=18){
        imagem.src="./src/imagens/tarde.png"
        corpo.style.background="#1e8ad2"
    }else{
        imagem.src="./src/imagens/noite.png"
        corpo.style.background="#050528"
    }
}

