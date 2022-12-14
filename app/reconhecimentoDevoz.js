const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecongnition || //web speech api-site
webkitSpeechRecognition;//web speech api-site

const recognition = new SpeechRecognition();//web speech api-site
recognition.lang = 'pt-Br' //para recolhever nossa fala em português
recognition.start() //para ligar o microfone

recognition.addEventListener('result',onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaChuteValido(chute)

}
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>

      `
    
}

//quando ele acabar, eu quero fazer alguma coisa.Recognition.start(), ou seja, quando a nossa função acabar, ele liga mais uma vez o reconhecimento de voz
recognition.addEventListener('end', () => recognition.start())

