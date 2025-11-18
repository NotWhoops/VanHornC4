const changecolorpurple = document.getElementById("change-color-purple");
const changebackgroundimage = document.getElementById("change-background-image");
const changeredptext = document.getElementById("change-red-ptext");
const textrandom = document.getElementById("text-random");
const changedivbackground = document.getElementById("change-div-background");
const changetextimage = document.getElementById("change-text-image");
const changeimagetext = document.getElementById("change-image-text");
const changepbackground = document.getElementById("change-p-background");
const activatealert = document.getElementById("activate-alert");
const playAudio = document.getElementById('play-audio');

function changeColorPurple() {
    document.body.style.background = 'purple'; 
}
    function changeBackgroundImage() {
        document.body.style.backgroundImage = "url(./assets/dog.png)";
    }
    function changeRedPText() {
        document.getElementById("ptag").style.backgroundColor = 'red';
    }
    function changeDivBackground() {
        document.getElementById("div").style.backgroundColor = 'green';
    }
    function changeTextImage() {
        document.body.style.text = "I put creative words here";
    }
    function changeImageText() {
        document.body.style.image = "url(./assets/dog.png)";
    }
    function changePBackground() {
        document.getElementById("change-p-background").style.image = "url(./assets/dog.png)";
    }
    function ActivateAlert() {
        document.body.style.activatealert = "play-alert";
    }
    function PlayAudio() {
        document.getElementById('playButton').addEventListener('click', function() {
            if (playAudio.paused) {
                playAudio.play();
                this.textContent = 'Pause';
            } else {
                playAudio.pause();
                this.textContent = 'Play';
            }
        });
    }
    
    textrandom.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.color = randomColor;
    });



    changecolorpurple.addEventListener('click', changeColorPurple);
    changebackgroundimage.addEventListener('click', changeBackgroundImage);
    changeredptext.addEventListener('click', changeRedPText);
    textrandom.addEventListener('click', textrandom);
    changedivbackground.addEventListener('click', changeDivBackground);
    changetextimage.addEventListener('click', changeTextImage);
    changeimagetext.addEventListener('click', changeImageText);
    changepbackground.addEventListener('click', changePBackground);
    activatealert.addEventListener('click', ActivateAlert);
    playAudio.addEventListener('click',PlayAudio);