(()=>{
var downPos = 300;


window.onload = func();

function func(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recog = new window.SpeechRecognition();

recog.interimResults = true;


var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;


 setInterval(() => {

   
    recog.start();

   
      
     

}, 1000);



recog.addEventListener("result",(e)=>{
    
    console.log(e.results[0][0].transcript);
    scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if(e.results[0][0].transcript == "scroll"){
        console.log(e.results[0][0].transcript);
     scroll({
            top: scrollTop + downPos,
           
            behavior: "smooth"
           });

    }

    if(e.results[0][0].transcript == "listen"){
        document.getElementsByClassName("yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--overlay-touch-response")[0].click();
       
    }

    

});








})();

