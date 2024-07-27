let speech = new SpeechSynthesisUtterance();

let voice = [ ];

let voiceSelecter = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = ( )  => {
    voice = window.speechSynthesis.getVoices( );
    speech.voice = voice [0];

    voice.forEach((voice, i) => (voiceSelecter.options[i] = new Option(voice.
        name, i)));
};

voiceSelecter.addEventListener("change" , ( ) => {
    speech.voice = voice[voiceSelecter.value];
})

document.querySelector("button").addEventListener("click", ( )  =>{
speech.text = document.querySelector("textarea").value;
window.speechSynthesis.speak(speech);
})

