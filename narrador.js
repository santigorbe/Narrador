const d = document,
 w = window,
 $speechSelect = d.querySelector('#speech-select'),
 $speechTextarea = d.querySelector('#speech-text'),
 $speechBtn = d.querySelector('#speech-btn'),
 speechMessage = new SpeechSynthesisUtterance()


function speechReader(){
    let voices = [];
    d.addEventListener('DOMContentLoaded', e =>{
    speechSynthesis.addEventListener('voiceschanged',  e=>{
        voices = speechSynthesis.getVoices();
        voices.forEach(voice =>{
            const $option = d.createElement('option');
            $option.value = voice.name;
            $option.textContent = `${voice.name}`;
            $speechSelect.appendChild($option);
        });
    })
    })
    d.addEventListener("change", (e) =>{
        if(e.target === $speechSelect){
            speechMessage.voice = voices.find(voice =>voice.name === e.target.value);
        };
        console.log(speechMessage);
    });
    d.addEventListener('click', e =>{
        if(e.target === $speechBtn){
            speechMessage.text = $speechTextarea.value;
            w.speechSynthesis.speak(speechMessage);
        }
    });
};


speechReader();