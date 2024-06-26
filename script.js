document.getElementById('speak-button').addEventListener('click', () => {
    const textInput = document.getElementById('text-input').value;

    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(textInput);
        speechSynthesis.speak(speech);
    } else {
        alert('Sorry, your browser does not support text to speech!');
    }
});
