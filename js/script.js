
// images show by images icons
var showImages = document.querySelectorAll(".imgItems .groupImgShow img")
    , imgIcon = document.querySelectorAll(".imgItems .groupImgIcon img")
    , imgItems = document.querySelectorAll(".imgItems")

imgIcon.forEach(function (imgIconItem, i) {
    // active images
    showImages[0].style.visibility = "visible";   // active
    showImages[3].style.visibility = "visible";   // active
    showImages[6].style.visibility = "visible";   // active
    function imgShow() {
        if (i == 0) {
            showImages[0].style.visibility = "visible";
            showImages[1].style.visibility = "hidden";
            showImages[2].style.visibility = "hidden";
        } else if (i == 1) {
            showImages[0].style.visibility = "hidden";
            showImages[1].style.visibility = "visible";
            showImages[2].style.visibility = "hidden";
        } else if (i == 2) {
            showImages[0].style.visibility = "hidden";
            showImages[1].style.visibility = "hidden";
            showImages[2].style.visibility = "visible";
        } else if (i == 3) {
            showImages[3].style.visibility = "visible";
            showImages[4].style.visibility = "hidden";
            showImages[5].style.visibility = "hidden";
        } else if (i == 4) {
            showImages[3].style.visibility = "hidden";
            showImages[4].style.visibility = "visible";
            showImages[5].style.visibility = "hidden";
        } else if (i == 5) {
            showImages[3].style.visibility = "hidden";
            showImages[4].style.visibility = "hidden";
            showImages[5].style.visibility = "visible";
        } else if (i == 6) {
            showImages[6].style.visibility = "visible";
            showImages[7].style.visibility = "hidden";
            showImages[8].style.visibility = "hidden";
        } else if (i == 7) {
            showImages[6].style.visibility = "hidden";
            showImages[7].style.visibility = "visible";
            showImages[8].style.visibility = "hidden";
        } else {
            showImages[6].style.visibility = "hidden";
            showImages[7].style.visibility = "hidden";
            showImages[8].style.visibility = "visible";
        }
    }
    imgIconItem.onmouseenter = imgShow
})

// heartIconBtn  => effects
var heartBtn = document.querySelectorAll(".heart-icon")
heartBtn.forEach(function (hB) {
    hB.onclick = function () {
        hB.style.color = "#fff"
        hB.style.transition = ".5s"
        hB.style.backgroundColor = " #f68b1e";
    }
})

// addToCartBtn  => effects
var addToCart = document.querySelectorAll("#addToCart")
    , cartIcon = document.querySelectorAll("#cartIcon")
    , productsChoosed = document.querySelector(".products-choosed")
    , addToCartBtn = document.querySelector(".addToCartBtn")
    , numOfProduct = document.querySelector(".numbersOfProducts")
    , totalPriceContent = document.querySelector(".totalPrice")
    , totalPrice = 0
    , numProduct = 1;

addToCart.forEach(function (addCartBtn, i) {
    addCartBtn.onclick = function () {
        addCartBtn.style.color = "#fff"
        addCartBtn.style.backgroundColor = "green"
        addCartBtn.style.visibility = "visible"
        addCartBtn.style.border = "none"
        cartIcon[i].innerHTML = '<i class="fas fa-check"></i>'
        btnFront[i].style.visibility = "visible"

        totalPrice += parseInt(addCartBtn.getAttribute("price"))
        productsChoosed.innerHTML += numProduct++ + ":" + addCartBtn.getAttribute("productName") + "&nbsp;&nbsp;&nbsp;"
        if (productsChoosed.innerHTML != "") {
            addToCartBtn.style.display = "block"
        }
    }
})

addToCartBtn.onclick = function () {
    numOfProduct.textContent = "Number of products that you choosed is " + (numProduct - 1) + " products"
    totalPriceContent.textContent = " Total Price is " + totalPrice + " EGP"
}

// moving between front & back
var parentCart = document.querySelectorAll(".parent")
    , btnFront = document.querySelectorAll("#goToFront")
    , btnBack = document.querySelectorAll("#goToBack")

btnBack.forEach(function (bB, i) {
    bB.onclick = function () {
        parentCart[i].style.transform = "rotateY(180deg)"
        btnFront[i].onclick = function () {
            parentCart[i].style.transform = "rotateY(360deg)"
            cartIcon[i].innerHTML = '<i class="fas fa-cart-plus"></i>'
            addToCart[i].style.backgroundColor = null
            addToCart[i].style.color = null
            addToCart[i].style.visibility = null
            addToCart[i].style.border = null
            btnFront[i].style.visibility = null
            heartBtn[i].style.color = null
            heartBtn[i].style.backgroundColor = null
            addToCartBtn.style.display = "none"
            productsChoosed.innerHTML = ""
            numOfProduct.textContent = ""
            totalPriceContent.textContent = ""
            numProduct = 1;
            totalPrice = 0;
        }
    }
});

////////////////////////////////////////////////////////// App 2 ///////////////////////////
var btnToDecrease = document.querySelector(".btnToDecrease")
    , btnToDecreaseTen = document.querySelector(".btnToDecreaseTen")
    , btnToIncrease = document.querySelector(".btnToIncrease")
    , btnToIncreaseTen = document.querySelector(".btnToIncreaseTen")
    , btnToReset = document.querySelector(".btnToReset")
    , numInp = document.querySelector(".numInp")

var i = 0
function decreaseNumber() {
    if (true) {
        numInp.value = --i;
    }
}
function decreaseNumberByTen() {
    if (true) {
        i -= 10
        numInp.value = i;
    }
}
function increaseNumber() {
    if (true) {
        numInp.value = ++i;
    }
}
function increaseNumberByTen() {
    if (true) {
        i += 10
        numInp.value = i;
    }
}
function resetValue() {
    i = 0
    numInp.value = i;
}
btnToDecrease.addEventListener("click", decreaseNumber)
btnToDecreaseTen.addEventListener("click", decreaseNumberByTen)
btnToIncrease.addEventListener("click", increaseNumber)
btnToIncreaseTen.addEventListener("click", increaseNumberByTen)
btnToReset.addEventListener("click", resetValue)

//////////////////// app2 part2 //////////////////
var btnToDecreaseByArrow = document.querySelector(".btnToDecreaseByArrow")
    , btnToIncreaseByArrow = document.querySelector(".btnToIncreaseByArrow")
    , inpRange = document.querySelector(".inpRange")
    , percentOfRange = document.querySelector(".percentOfRange")
    , btnToResetRange = document.querySelector(".btnToResetRange")
    , x = inpRange.value
function decreaseRange() {
    if (true) {
        inpRange.value = --x;
    }
    percentOfRange.innerHTML = " "
    percentOfRange.innerHTML += inpRange.value + "%"
    if (parseInt(percentOfRange.innerHTML) <= 40) {
        percentOfRange.style.color = "red"
    } else {
        percentOfRange.style.color = "#000"
    }
}
function increaseRange() {
    if (true) {
        inpRange.value = ++x;
    }
    percentOfRange.innerHTML = ""
    percentOfRange.innerHTML += inpRange.value + "%"
    if (parseInt(percentOfRange.innerHTML) >= 65) {
        percentOfRange.style.color = "green"
    } else {
        percentOfRange.style.color = "#000"
    }
}
function ResetRange() {
    inpRange.value = 50;
    percentOfRange.innerHTML = ""
}
btnToDecreaseByArrow.addEventListener("mousedown", decreaseRange)
btnToIncreaseByArrow.addEventListener("click", increaseRange)
btnToResetRange.addEventListener("click", ResetRange)

////******************************************************** App 3 ******************************************

var addUserIcon = document.querySelectorAll(".addUserIcon")
    , cancelAddUser = document.querySelectorAll(".cancelAddUser")

addUserIcon.forEach(function (addUser, i) {
    addUser.onclick = function () {
        addUser.style.transform = "rotate(720deg)";
        addUser.style.transition = ".4s";
        addUser.style.color = "green";
        addUser.innerHTML = '<i class="fas fa-check-circle"></i>'
        cancelAddUser[i].style.visibility = "visible"
        function afterClickCancel() {
            addUser.style.transform = "rotate(-720deg)"
            addUser.style.transition = "0.1s"
            addUser.style.color = "black"
            addUser.innerHTML = '<i class="fas fa-user-plus"></i>'
        }
        if (i == 0) {
            cancelAddUser[i].onclick = function () {
                cancelAddUser[i].style.visibility = "hidden"
                afterClickCancel()
            }
        }
        else if (i == 1) {
            cancelAddUser[i].onclick = function () {
                cancelAddUser[i].style.visibility = "hidden"
                afterClickCancel()
            }
        }
        else {
            cancelAddUser[i].onclick = function () {
                cancelAddUser[i].style.visibility = "hidden"
                afterClickCancel()
            }
        }
    }
})
////***************************************************** App4 **************************************************/
var menuBtn = document.querySelector(".menuBtn")
    , menuBtnAll = document.querySelectorAll(".menuBtn span")
function afterClickMenuBtn() {
    menuBtnAll[0].style.transform = "rotate(40deg)";
    menuBtnAll[0].style.marginTop = "45px";
    menuBtnAll[0].style.height = "10px";
    menuBtnAll[0].style.width = "90%";
    menuBtnAll[0].style.backgroundColor = "#fff";
    menuBtnAll[1].style.visibility = "hidden";
    menuBtnAll[1].style.transition = "0s"
    menuBtnAll[2].style.transform = "rotate(-40deg)";
    menuBtnAll[2].style.marginTop = "-35px";
    menuBtnAll[2].style.height = "10px";
    menuBtnAll[2].style.width = "90%";
    menuBtnAll[2].style.backgroundColor = "#fff";
    menuBtn.style.backgroundColor = "red"
    menuBtn.style.borderColor = "red"
}
menuBtn.onclick = afterClickMenuBtn

////***************************************************** App5 **********************************************/
var textareaContent = document.querySelector("#textareaContent")
    , countCharaters = document.querySelector("#countCharaters")

textareaContent.onkeyup = function () {
    countCharaters.textContent = 100 - this.value.length;
    if (countCharaters.textContent < 0) {
        countCharaters.style.color = "red"
    } else {
        countCharaters.style.color = "black"
    }
}

////***************************************************** App6 **********************************************/
var passInp = document.querySelector("#passInp");
var passBtn = document.querySelector("#passBtn");

passBtn.onclick = function () {
    if (this.textContent === "show password") {
        passInp.setAttribute("type", "text")
        this.textContent = "hide password"
    } else {
        passInp.setAttribute("type", "password")
        this.textContent = "show password"
    }
}

var passInp2 = document.querySelector("#passInp2");
var iconPassBtn = document.querySelector(".iconPassBtn");

iconPassBtn.onclick = function () {
    if (this.innerHTML === '<i class="fas fa-eye-slash"></i>') {
        passInp2.setAttribute("type", "text")
        this.innerHTML = '<i class="fas fa-eye"></i>'
    } else {
        passInp2.setAttribute("type", "password")
        this.innerHTML = '<i class="fas fa-eye-slash"></i>'
    }
}

////***************************************************** App7 **********************************************/

var starsIcons = document.querySelectorAll("#starsIcons i")
starsIcons[0].onclick = function () {
    starsIcons[0].style.color = "#f68b1e"
    starsIcons[1].style.color = null
    starsIcons[2].style.color = null
    starsIcons[3].style.color = null
    starsIcons[4].style.color = null
}
starsIcons[1].onclick = function () {
    starsIcons[0].style.color = "#f68b1e"
    starsIcons[1].style.color = "#f68b1e"
    starsIcons[2].style.color = null
    starsIcons[3].style.color = null
    starsIcons[4].style.color = null
}
starsIcons[2].onclick = function () {
    starsIcons[0].style.color = "#f68b1e"
    starsIcons[1].style.color = "#f68b1e"
    starsIcons[2].style.color = "#f68b1e"
    starsIcons[3].style.color = null
    starsIcons[4].style.color = null
}
starsIcons[3].onclick = function () {
    starsIcons[0].style.color = "#f68b1e"
    starsIcons[1].style.color = "#f68b1e"
    starsIcons[2].style.color = "#f68b1e"
    starsIcons[3].style.color = "#f68b1e"
    starsIcons[4].style.color = null
}
starsIcons[4].onclick = function () {
    starsIcons[0].style.color = "#f68b1e"
    starsIcons[1].style.color = "#f68b1e"
    starsIcons[2].style.color = "#f68b1e"
    starsIcons[3].style.color = "#f68b1e"
    starsIcons[4].style.color = "#f68b1e"
}

////***************************************************** App8 p3 **********************************************/
var imgIconsBtn = document.querySelectorAll("#imgIcons img")
    , imgShow = document.querySelectorAll("#imgShow img");
imgIconsBtn.forEach(function (imgBtnItem, i) {
    imgShow[0].style.visibility = "visible"
    function changeImgShow(indexImg) {
        for (var x = 0; x <= imgShow.length; x++) {
            if (x == indexImg) {
                imgShow[x].style.visibility = "visible"
                imgShow[x].style.animation = "imgAnimate 1.5s"
            } else {
                imgShow[x].style.visibility = null
                imgShow[x].style.animation = null
            }
        }
    }
    function switchImg() {
        if (i == 0) { changeImgShow(i) }
        else if (i == 1) { changeImgShow(i) }
        else if (i == 2) { changeImgShow(i) }
        else if (i == 3) { changeImgShow(i) }
        else {
            imgShow[4].style.visibility = "visible"
            imgShow[4].style.animation = "imgAnimate 1.5s"
        }
    }
    imgBtnItem.onclick = switchImg
})

////***************************************************** App9 **********************************************/
var timeNow = document.querySelector(".timeNow")
var dateNow = document.querySelector(".dateNow")

function changeTime() {
    const timeToday = new Date();
    var sec = timeToday.getSeconds();
    var min = timeToday.getMinutes();
    var hour = timeToday.getHours();
    var day = timeToday.getUTCDate()
    var month = timeToday.getMonth() + 1
    var year = timeToday.getUTCFullYear()
    sec = checkTime(sec)
    min = checkTime(min)
    timeNow.textContent = sec + " : " + min + " : " + hour
    dateNow.textContent = day + " / " + month + " / " + year
    setTimeout(changeTime, 1000);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;

}
changeTime()
// window.onload(changeTime())   /// problem , if i use it !!

///***************************************************************** app10  ****************************/

var btnS1 = document.querySelector("#btnSound_1")
    , btnS2 = document.querySelector("#btnSound_2")
    , btnAlert = document.querySelector("#btnAlert")
    , btnClose = document.querySelector("#btnClose")
    , btnError = document.querySelector("#btnError")
    , soundButtonDown = new Audio("sounds/mixkit-fast-double-click-on-mouse-275.mp3");

function btnSoundActive(x) {
    x.style.marginTop = "10px"
    x.style.boxShadow = " 0px 1px 2px #ab5805, 0px 4px 4px black";
}

function btnSoundCancelActive(z) {
    z.style.marginTop = null
    z.style.boxShadow = null;
}
/////click btn
btnS1.onmousedown = function () {
    btnSoundActive(this)
    soundButtonDown.play()
}
btnS1.onmouseup = function () { btnSoundCancelActive(this) }
/////dbclick btn
btnS2.onmousedown = function () {
    btnSoundActive(this)
    new Audio("sounds/mixkit-fast-double-click-on-mouse-275.mp3").play()
}
btnS2.onmouseup = function () { btnSoundCancelActive(this) }
 /////Alert btn
btnAlert.onmousedown = function () {
    btnSoundActive(this)
    new Audio("sounds/mixkit-select-click-1109.mp3").play()
                 //    alert("You shoud login first")
}
btnAlert.onmouseup = function () { btnSoundCancelActive(this) }
 /////close btn
btnClose.onmousedown = function () {
    btnSoundActive(this)
    new Audio("sounds/mixkit-mouse-click-close-1113.mp3").play()
}
btnClose.onmouseup = function () { btnSoundCancelActive(this) }
/////Error btn
btnError.onmousedown = function () {
    btnSoundActive(this)
    new Audio("sounds/mixkit-click-error-1110.mp3").play()
}
btnError.onmouseup = function () { btnSoundCancelActive(this) }
