(()=>{
var downPos = 300;

window.onmouseover = func();



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
        // if( document.getElementsByClassName("yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--overlay-touch-response")[0] == undefined){
        //     document.getElementsByClassName(" yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response")[0].click();
        // }
        // else{
            document.getElementsByClassName("yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-only-default")[1].click();
            document.getElementsByClassName("yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--overlay yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-only-default")[0].click();
        // }
        
        
    }

    if(e.results[0][0].transcript == "refresh"){
        location.reload();
    }

    if(e.results[0][0].transcript == "up"){

        console.log(document.getElementsByClassName("yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--overlay yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-only-default"));
        scroll({
             top: scrollTop - downPos,
           
            behavior: "smooth"
           });
    }

    if(e.results[0][0].transcript == "skip"){
        document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0].click();
    }

});




})();

