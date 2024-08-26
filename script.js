let speech = new SpeechSynthesisUtterance();
// this object is web speech api which helps to
// convert text into spoken words.

let button = document.querySelector("button");
button.addEventListener("click", function (e) {
  speech.text = document.querySelector("textarea").value;
  //   speech ke text me textarea ka likha text bhej dia
  window.speechSynthesis.speak(speech);
  // window mera global object hai speechsynthesis property hai jo text ko speech me convert krta hai and speak uka method hai jo bolne ke liye use hua hai .
});

let voices = [];
let voiceselect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = function () {
  voices = window.speechSynthesis.getVoices();
  // voices me windows ki sari voices daal dega getvoices method of web speech api speechsynthesis

  speech.voice = voices[0]; // inital first voice chlegi

  //   to display each voice in a dropbox

  voices.forEach(function (voice, i) {
    voiceselect.options[i] = new Option(voice.name, i);
  });
};

voiceselect.addEventListener("change", function () {
  speech.voice = voices[voiceselect.value];
});
