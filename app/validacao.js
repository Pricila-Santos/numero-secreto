function verificaChuteValido(chute) {
   const numero = +chute
   if(chuteinvalido(numero)) {
    elementoChute.innerHTML+='<div>Inválido</div>'

    return
   }
   if (numeroForaDoPermitido(numero)) {
    elementoChute.innerHTML+=`<div>Inválido : Fale o número entre ${menorValor} e ${maiorValor}</div>`

    return
   }
   if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou ! Parabéns </h2>
    <h3>O número secreto era ${numeroSecreto}</h3>   
      <button id="jogar-novamente"class="btn-jogar">Jogar Novamente </button>

     `
   
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">!<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M318 334.5c3.8 8.8 2 19-4.6 26l-136 144c-4.5 4.8-10.8 7.5-17.4 7.5s-12.9-2.7-17.4-7.5l-136-144c-6.6-7-8.4-17.2-4.6-26S14.4 320 24 320h88l0-288c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32l0 288h88c9.6 0 18.2 5.7 22 14.5z"/></svg></div> `
  }
   else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. <path d="M318 177.5c3.8-8.8 2-19-4.6-26l-136-144C172.9 2.7 166.6 0 160 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26S14.4 192 24 192h88l0 288c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32l0-288h88c9.6 0 18.2-5.7 22-14.5z"/></svg></div>
    `

  }

   
} 

function chuteinvalido(numero) {
        return Number.isNaN(numero)
    }

function numeroForaDoPermitido(numero) {
        return numero > maiorValor || numero < menorValor
    }

    document.body.addEventListener('click', e => {
      if(e.target.id =='jogar-novamente') {
        window.location.reload()
      }//então, quando eu clicar, eu quero que alguma coisa aconteça. Vou utilizar um evento, e embaixo vamos colocar as nossas funções, então vou falar que se eu tiver um clique no botão “Jogar novamente”, como eu consigo acessar aquele botão? Posso usar if (e.target.id == ‘jogar-novamente’) {, então, se eu tiver um clique no ID que seja igual ao jogar-novamente, eu quero reiniciar a minha tela, então, eu coloco window.location.reload().
    })

    
  