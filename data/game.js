var image1 = document.getElementById("card1");
var image2 = document.getElementById("card2");
var image3 = document.getElementById("card3");
var text = document.getElementById("alert");
var condition = true ;
var goodLuck = 0;
var badLuck = 0;
var gL = document.getElementById("gl");
var bL = document.getElementById("bl");
function reloadPage() {
    image1.src = "data/Untitled design/1.svg";
    image2.src = "data/Untitled design/1.svg";
    image3.src = "data/Untitled design/1.svg";
    image1.className = "";
    image2.className = "";
    image3.className = "";
    text.innerHTML = "Find Ace";
    condition = true;
    text.className = "alert";
}
function game(param) {
    var randomNumber = Math.ceil(Math.random() * 3);
    if (param === 1 && randomNumber === 1 && condition === true) {
        image1.className = "imgan";
        text.innerHTML = "";
        goodLuck++
        setTimeout(() => {
            image1.src = "data/Untitled design/2.svg";
            text.innerHTML = "You Won";
            gL.innerHTML = "Good Luck : " + goodLuck;
        }, 2000);
        condition = false;
        setTimeout(() => {
            text.innerHTML = "Reset Game And Try Again Your Luck";
            text.className = "last";
        }, 4000);
    }
    else if (param === 1 && randomNumber === 2 && condition === true) {
        image1.className = "imgan";
        text.innerHTML = "";
        badLuck++
        setTimeout(() => {
            image1.src = "data/Untitled design/3.svg";
            text.innerHTML = "You Lose";
            bL.innerHTML = "bad Luck : " + badLuck;
        }, 2000);
        condition = false;
        setTimeout(() => {
            text.innerHTML = "Reset Game And Try Again Your Luck"
            text.className = "last"
        }, 4000);
    }
    else if (param === 1 && randomNumber === 3 && condition === true) {
        image1.className = "imgan";
        text.innerHTML = "";
        badLuck++
        setTimeout(() => {
            image1.src = "data/Untitled design/4.svg";
            text.innerHTML = "You Lose";
            bL.innerHTML = "bad Luck : " + badLuck;
        }, 2000);
        condition = false;
        setTimeout(() => {
            text.innerHTML = "Reset Game And Try Again Your Luck"
            text.className = "last"
        }, 4000);
    }
    else if (param === 2 && randomNumber === 1 && condition === true) {
        image2.className = "imgan";
        text.innerHTML = "";
        goodLuck++
        setTimeout(() => {
            image2.src = "data/Untitled design/2.svg";
            text.innerHTML = "You Won";
            gL.innerHTML = "Good Luck : " + goodLuck;
        }, 4000);
        condition = false;
        setTimeout(() => {
            text.innerHTML = "Reset Game And Try Again Your Luck";
            text.className = "last";
        }, 4000);
    }
    else if (param === 2 && randomNumber === 2 && condition === true) {
        image2.className = "imgan";
        text.innerHTML = "";
        badLuck++
        setTimeout(() => {
            image2.src = "data/Untitled design/4.svg";
            text.innerHTML = "You Lose";
            bL.innerHTML = "bad Luck : " + badLuck;
        }, 2000);
        condition = false;
        setTimeout(() => {
            text.innerHTML = "Reset Game And Try Again Your Luck"
            text.className = "last"
        }, 4000);
    }
    else if (param === 2 && randomNumber === 3 && condition === true) {
        image2.className = "imgan";
        text.innerHTML = "";
        badLuck++
        setTimeout(() => {
            image2.src = "data/Untitled design/4.svg";
            text.innerHTML = "You Lose";
            bL.innerHTML = "bad Luck : " + badLuck;
        }, 2000);
        condition = false;
        setTimeout(() => {
            text.innerHTML = "Reset Game And Try Again Your Luck"
            text.className = "last"
        }, 4000);
    }
    else if (param === 3 && randomNumber === 1 && condition === true) {
        image3.className = "imgan";
        text.innerHTML = "";
        goodLuck++
        setTimeout(() => {
            image3.src = "data/Untitled design/2.svg";
            text.innerHTML = "You Won";
            gL.innerHTML = "Good Luck : " + goodLuck;
        }, 2000);
        condition = false;
        setTimeout(() => {
            text.innerHTML = "Reset Game And Try Again Your Luck";
            text.className = "last";
        }, 4000);
    }
    else if (param === 3 && randomNumber === 2 && condition === true) {
        image3.className = "imgan";
        text.innerHTML = "";
        badLuck++
        setTimeout(() => {
            image3.src = "data/Untitled design/4.svg";
            text.innerHTML = "You Lose";
            bL.innerHTML = "bad Luck : " + badLuck;
        }, 2000);
        condition = false;
        setTimeout(() => {
            text.innerHTML = "Reset Game And Try Again Your Luck"
            text.className = "last"
        }, 4000);
    }
    else if (param === 3 && randomNumber === 3 && condition === true) {
        image3.className = "imgan";
        text.innerHTML = "";
        badLuck++
        setTimeout(() => {
            image3.src = "data/Untitled design/4.svg";
            text.innerHTML = "You Lose";
            bL.innerHTML = "bad Luck : " + badLuck;
        }, 2000);
        condition = false;
        setTimeout(() => {
            text.innerHTML = "Reset Game And Try Again Your Luck"
            text.className = "last"
        }, 4000)
    }
}3