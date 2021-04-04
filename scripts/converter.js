const ttm_button = document.getElementById('ttm');
const mtt_button = document.getElementById('mtt');
const inputbox = document.getElementById('inputbox');
const outputbox = document.getElementById('outputbox')
ttm_button.addEventListener('click', () => {
    outputbox.value = TextToMorse(inputbox.value);
})
mtt_button.addEventListener('click', () => {
    inputbox.value = MorseToText(outputbox.value);
})