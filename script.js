const robot = document.querySelector('.robot')

const bulb = document.querySelector('.bulb')
const antenna = document.querySelector('.antenna')
const head = document.querySelector('.head')
const eyes = document.querySelectorAll('.eyes')
const mask = document.querySelector('.mask')
const torso = document.querySelector('.torso')
const speech = document.querySelector('.speech-bubble')




function activate() {
        bulb.classList.toggle("glow");
        
        head.classList.toggle("head-awaken");
        
        antenna.classList.toggle("antenna-awaken");
        
        for (let i = 0; i < eyes.length; i++) {
            let eye = eyes[i];
            eye.classList.toggle("eyes-awaken");
        }
        
        torso.classList.toggle("torso-awaken")    
        
            if (speech.style.display === "block") {
                speech.style.display = "none";
        } else {
                speech.style.display = "block";
        }
                
}

robot.addEventListener('click', activate)







