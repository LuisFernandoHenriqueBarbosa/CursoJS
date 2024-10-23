function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else if(fano.value.length < 4) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  }else{
    var fsexo = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsexo[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'foto-bebe-m.jpg')
      } else if (idade < 21) {
        img.setAttribute('src', 'foto-jovem-m.jpg')
      } else if (idade < 50) {
        img.setAttribute('src', 'foto-adulto-m.jpg')
      } else {
        img.setAttribute('src', 'foto-idoso-m.jpg')
      }
    } else {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'foto-bebe-f.jpg')
      } else if (idade < 21) {
        img.setAttribute('src', 'foto-jovem-f.jpg')
      } else if (idade < 50) {
        img.setAttribute('src', 'foto-adulta-f.jpeg')
      } else {
        img.setAttribute('src', 'foto-idoso-f.jpg')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Seu gênero é <strong>${genero}</strong>, e sua idade é <strong>${idade}<strong> anos`
    res.appendChild(img)

  }
}
