agora=new Date()
hora=agora.getHours()

horario=document.getElementById('hora')
horario.innerHTML=`Agora são ${hora} horas.`
imagem=document.getElementById('img')
if (hora<=12){
    imagem.src="manhã.png"
}else if (hora>=13 && hora<=18){
    imagem.src="tarde.png"
}else{
    imagem.src="noite.png"
}