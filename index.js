(()=>{


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recog = new window.SpeechRecognition();

recog.interimResults = true;


recog.addEventListener("result",(e)=>{
    
    console.log(e.results[0][0].transcript);

    if(e.results[0][0].transcript == "listen"){
        document.getElementsByClassName("yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--overlay-touch-response")[0].click();
       
    }

});



setInterval(() => {
    recog.start();


}, 1000);

})();