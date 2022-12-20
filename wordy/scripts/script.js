const title = document.getElementById('title');
const partOfSpeech = document.getElementById('part-of-speech');
const pronunciation = document.getElementById('pronunciation');
const definiton = document.getElementById('definition');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '98bf131b2amsh360c9ec134e7dccp1ea162jsn51375a249f9b',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};

function randomWord() {
    const json = fetch('https://wordsapiv1.p.rapidapi.com/words/?random=true', options).then(r => r.json());
   
    return json;
}

async function displayText() {
    const word = await randomWord();

        var titleText = document.createTextNode(`${word.word}`);
        title.appendChild(titleText);
        var partOfSpeechText = document.createTextNode(`${word.results[0].partOfSpeech}`);
        partOfSpeech.appendChild(partOfSpeechText);
        var pronunciationText = document.createTextNode(`${word.pronunciation.all}`);
        pronunciation.appendChild(pronunciationText);
        var definitionText = document.createTextNode(`${word.results[0].definition}`);
        definiton.appendChild(definitionText);
}

displayText()