document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const speakButton = document.getElementById('speak-button');
    const voiceSelect = document.getElementById('voice-select');

    let voices = [];

    function populateVoiceList() {
        voices = window.speechSynthesis.getVoices();

        voiceSelect.innerHTML = '';
        voices.forEach((voice, index) => {
            const option = document.createElement('option');
            option.textContent = `${voice.name} (${voice.lang})`;
            option.value = index;
            voiceSelect.appendChild(option);
        });
    }

    if ('speechSynthesis' in window) {
        populateVoiceList();
        if (typeof speechSynthesis.onvoiceschanged !== 'undefined') {
            speechSynthesis.onvoiceschanged = populateVoiceList;
        }

        speakButton.addEventListener('click', () => {
            const text = textInput.value;
            const selectedVoiceIndex = voiceSelect.value;

            if (text !== '') {
                const speech = new SpeechSynthesisUtterance(text);
                if (voices.length > 0) {
                    speech.voice = voices[selectedVoiceIndex];
                }
                speechSynthesis.speak(speech);
            } else {
                alert('Please enter some text to speak!');
            }
        });
    } else {
        alert('Sorry, your browser does not support text to speech!');
    }
});
