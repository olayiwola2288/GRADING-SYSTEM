let songFail = new Audio('Audio/audio_AUD-20200714-WA0013-F9.m4a')
let songPass = new Audio('audio/audio_AUD-20200621-E8.m4a')
let  songAverage = new Audio('audio/audio_AUD-20200616-D7.mp3')
let  songCredit = new Audio ('audio/audio_AUD-20200617-C6.mp3')
let songGood = new Audio('audio/audio_mixkit-crowd-in-church-applauding-484-B2.wav')
let songExcellent = new Audio('audio/audio_mixkit-ending-show-audience-clapping-478-A1.wav')
function gradeMe() {
    const sala = document.getElementById('sala')
    
    if (Score.value == "") {
        sala.value = "INVALID"
    }
    else if (Score.value >=0 && Score.value<=40) {
        sala.value ="F - Fail🥴"
        songFail.play()
    }
    else if (Score.value >=41 && Score.value<=44) {
        sala.value ="E - Pass😔"
        songPass.play()
    }
    else if (Score.value >=45 && Score.value<=49) {
        sala.value ="D - Average😬"
        songAverage.play()
    }
    else if (Score.value >=50 && Score.value<=59) {
        sala.value ="C - Credit🤔"
        songCredit.play()
    }
    else if (Score.value >=60 && Score.value<=69) {
        sala.value = "B - Good🙂"
        songGood.play()
    }
    else if (Score.value >=70 && Score.value<=100) {
        sala.value ="A - Excellent😀"
        songExcellent.play()
    }
    else{
        J.value = "Not recognised"
    }

}


