const changecolorpurple = document.getElementById("change-color-purple");
const changebackgroundimage = document.getElementById("change-background-image");
const changeredptext = document.getElementById("change-red-ptext");
const textrandom = document.getElementById("text-random");
const changedivbackground = document.getElementById("change-div-background");
const makeacard = document.getElementById("make-a-card");
const cardsContainer = document.getElementById("cards-container");
const changewebsitetitle = document.getElementById("change-website-title");
const changepbackground = document.getElementById("change-p-background");
const activatealert = document.getElementById("activate-alert");
const showimage = document.getElementById("show-image")

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
    function makeACard(text) {
        const card = document.createElement("div");
        card.className = "card";
        const content = document.createElement("p");
        content.innerText = text;
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete Card'";
        deleteBtn.addEventListener("click",() => {
        card.remove();
    });
        card.appendChild(content);
        card.appendChild(deleteBtn);
        return card;
    }
    function changeWebsiteTitle() {
        document.title = "You changed the title!";
    }
    function changePBackground() {
        document.getElementById("ptag").style.backgroundImage = "url(./assets/dog.png)";
    }
    function ActivateAlert() {
        document.getElementById("activate-alert").style.alert = alert("YaY! Alert Time!");
    }
    function ShowImage() {
        document.getElementById("cat-image").style.backgroundImage = "url(./assets/cat.jpg)";
    }


    makeacard.addEventListener("click", () => {
    const card = makeACard("You have a card now!");
    cardsContainer.appendChild(card);
    });


    textrandom.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.color = randomColor;
    });


    changecolorpurple.addEventListener('click', changeColorPurple);
    changebackgroundimage.addEventListener('click', changeBackgroundImage);
    changeredptext.addEventListener('click', changeRedPText);
    textrandom.addEventListener('click', textrandom);
    changedivbackground.addEventListener('click', changeDivBackground);
    makeacard.addEventListener('click', makeACard);
    changewebsitetitle.addEventListener('click', changeWebsiteTitle);
    changepbackground.addEventListener('click', changePBackground);
    activatealert.addEventListener('click', ActivateAlert);
    showimage.addEventListener('click', ShowImage);