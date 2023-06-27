const button=document.querySelector("button");
const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
const recognition=new SpeechRecognition();

recognition.onStart=function(){
    console.log("speech recognition started");
};

recognition.onresult=function(event){
    console.log(event);

    const spokenwords=event.results[0][0].transcript;
    console.log("spoken words are",spokenwords);
    computerSpeech(spokenwords);
};

function computerSpeech(words){
    const speech=new SpeechSynthesisUtterance();
    speech.lang="en-us";
    speech.pitch=0.9;
    speech.volume=1;
    speech.rate=1;
    speech.text=words;

    determineWords(speech,words);

    window.speechSynthesis.speak(speech);
}

function determineWords(speech,words){
    if(words.includes("how are you")){
        speech.text="i am fine";
    }
    if(words.includes("what airline is this")){
        speech.text="this is a s h r airline";
    }
    if(words.includes("what are line is this")){
        speech.text="this is a s h r airline";
    }
    if(words.includes("who are you")){
        speech.text="i am customer support agent   how can i help you";
    }
    if(words.includes("can I get a refund")){
        speech.text="the refund policy for your flight depends on your ticket type and airline";
    }
    if(words.includes("Can I travel with my pet")){
        speech.text="yes you can travel with your pet on most airlines However there may be specific requirements and restrictions";
    }
    if(words.includes("what is the cost of a business class ticket")){
        speech.text="it varies based on your destination";
    }

    
}

button.addEventListener("click",()=>{

    recognition.start();
});