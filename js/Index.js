let len = document.querySelectorAll(".mybutton").length;
for(let i = 0; i < len; i++){
    document.querySelectorAll(".mybutton")[i].addEventListener("click",function(){
        let text = this.innerHTML;
        document.getElementById("h1").innerHTML = text + " is number";
    sounee(text);
    animeson(text)
    controll(text)
    })
}


function sounee (text){
    console.log(text);
  audio.pause();
  audio.currentTime = 0.0;
    switch(text){
        case "a":
             audio = new Audio("../sound/do-labzo-ki-hai-old-movie-instrumental-the-great-gambler-1979-22680.mp3");
             
                break;
        case "b":
             audio = new Audio("../sound/lovedialog-43j8pash-4974.mp3");
           
                break;
        case "c":
             audio = new Audio("../sound/azhagiya-asura-bgm-60720.mp3");
             
                break;
        case "d":
             audio = new Audio("../sound/sonu-saathiya-2768.mp3");
           
                break;
    }
    audio.play();
}
function animeson(text){
    let demo = document.querySelector("."+text);
    demo.classList.add("anim");
    setTimeout(function(){
        demo.classList.remove("anim");
    }, 5000);
}
document.addEventListener("keypress", function(event){
    let texts = event.key;
    animeson(texts);
    sounee(texts);
})
function controll(text){
    const audios = document.querySelector("."+text);

    audios.addEventListener("pause", function (){
    
    });
}
const form = document.querySelector("#form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");
form.addEventListener("submit", formHendler);
function formHendler(e){
    e.preventDefault();
    const userInfo = {
        name : name.value,
        email : email.value,
        password : password.value,
    }
    console.log(userInfo);
    name.value = "";
    email.value = "";
    password.value = "";
}

