const mySong = document.querySelector("#mySong")
const icon = document.querySelector("#icon")

function playMusic(){
    if(mySong.paused){
        mySong.play();
        icon.src = "media/pause.png"
    }else{
        mySong.pause();
        icon.src = "media/play.png"
    }
}


icon.addEventListener("click", playMusic)