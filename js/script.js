
// ----------------------------------------------------------- parent 1 ------------------------------------
var parentCart = document.querySelector(".parent")
    , btnFront = document.getElementById("goToFront")
    , btnBack = document.getElementById("goToBack")

function rotateCard() {
    parentCart.style.transform = "rotateY(180deg)"
}

function rotateCard2() {
    parentCart.style.transform = "rotateY(360deg)"
}
btnBack.addEventListener("click", rotateCard)
btnFront.addEventListener("click", rotateCard2)


var imgBtn1 = document.querySelector("#imgBtn1")
    , imgBtn2 = document.querySelector("#imgBtn2")
    , imgBtn3 = document.querySelector("#imgBtn3")
    , imgShow1 = document.querySelector("#imgShow1")
    , imgShow2 = document.querySelector("#imgShow2")
    , imgShow3 = document.querySelector("#imgShow3");

function v1() {
    imgShow1.style.visibility = "visible";
    imgShow2.style.visibility = "hidden";
    imgShow3.style.visibility = "hidden";
}

function v2() {
    imgShow1.style.visibility = "hidden";
    imgShow2.style.visibility = "visible";
    imgShow3.style.visibility = "hidden";
}

function v3() {
    imgShow1.style.visibility = "hidden";
    imgShow2.style.visibility = "hidden";
    imgShow3.style.visibility = "visible";
}

imgShow1.style.visibility = "visible";  // active image
imgBtn1.addEventListener("mouseenter", v1)
imgBtn2.addEventListener("mouseenter", v2)
imgBtn3.addEventListener("mouseenter", v3)

//-----------------------------
// heart icon effects
var heartBtn1 = document.getElementById("heartBtn")
function changeColor() {
    heartBtn1.style.color = "#fff"
    heartBtn1.style.transition = ".5s"
    heartBtn1.style.backgroundColor = " #f68b1e";
}
heartBtn1.addEventListener("click", changeColor)

// ------------------------
// Btn add to cart
var addToCartBtn = document.getElementById("addToCart")   // add to cart btn
var goToFrontBtn = document.querySelector("#goToFront")   // no thanks btn
var cartIcon = document.querySelector("#cartIcon")
function changeBgColor() {
    addToCartBtn.style.color = "#fff"
    addToCartBtn.style.backgroundColor = "green"
    addToCartBtn.style.visibility = "visible"
    goToFrontBtn.style.visibility = "visible"
    addToCartBtn.style.border = "none"
    addToCartBtn.style.transition = ".5s"
    cartIcon.innerHTML = '<i class="fas fa-check"></i>'
}
addToCartBtn.addEventListener("click", changeBgColor)

// // -----------------------------
// Btn no thanks = goToFront

function returnEffectsToPast() {
    addToCartBtn.style.backgroundColor = "#fff"
    cartIcon.innerHTML = '<i class="fas fa-cart-plus"></i>'
    addToCartBtn.style.color = "#f68b1e"
    addToCartBtn.style.border = "1px solid #f68b1e"
    // addToCartBtn.onmouseenter = function () {
    //     addToCartBtn.style.backgroundColor = "#f68b1e"
    //     addToCartBtn.style.color = "#fff"
    //     cartIcon.innerHTML = '<i class="fas fa-cart-plus"></i>'
    // }

    // addToCartBtn.onmouseleave = function () {
    //     addToCartBtn.style.backgroundColor = "#fff"
    //     addToCartBtn.style.border = "1px solid #f68b1e"
    //     addToCartBtn.style.color = "#f68b1e"
    //     cartIcon.innerHTML = '<i class="fas fa-cart-plus"></i>'
    // }

    heartBtn1.style.color = "#a39292"
    heartBtn1.style.backgroundColor = "#a0a0a751";
}

goToFrontBtn.addEventListener("click", returnEffectsToPast)

//-----------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------- parent 2 ------------------------------------

var parentCart_p2 = document.querySelector(".parent_p2")
    , btnFront_p2 = document.getElementById("goToFront_p2")
    , btnBack_p2 = document.getElementById("goToBack_p2")

function rotateCard_p2() {
    parentCart_p2.style.transform = "rotateY(180deg)"
}

function rotateCard2_p2() {
    parentCart_p2.style.transform = "rotateY(360deg)"
}
btnBack_p2.addEventListener("click", rotateCard_p2)
btnFront_p2.addEventListener("click", rotateCard2_p2)


var imgBtn1_p2 = document.querySelector("#imgBtn1_p2")
    , imgBtn2_p2 = document.querySelector("#imgBtn2_p2")
    , imgBtn3_p2 = document.querySelector("#imgBtn3_p2")
    , imgShow1_p2 = document.querySelector("#imgShow1_p2")
    , imgShow2_p2 = document.querySelector("#imgShow2_p2")
    , imgShow3_p2 = document.querySelector("#imgShow3_p2");

function v1_p2() {
    imgShow1_p2.style.visibility = "visible";
    imgShow2_p2.style.visibility = "hidden";
    imgShow3_p2.style.visibility = "hidden";
}

function v2_p2() {
    imgShow1_p2.style.visibility = "hidden";
    imgShow2_p2.style.visibility = "visible";
    imgShow3_p2.style.visibility = "hidden";
}

function v3_p2() {
    imgShow1_p2.style.visibility = "hidden";
    imgShow2_p2.style.visibility = "hidden";
    imgShow3_p2.style.visibility = "visible";
}

imgShow1_p2.style.visibility = "visible";  // active image
imgBtn1_p2.addEventListener("mouseenter", v1_p2)
imgBtn2_p2.addEventListener("mouseenter", v2_p2)
imgBtn3_p2.addEventListener("mouseenter", v3_p2)

//-----------------------------
// heart icon effects
var heartBtn_p2 = document.getElementById("heartBtn_p2")
function changeColor_p2() {
    heartBtn_p2.style.color = "#fff"
    heartBtn_p2.style.transition = ".5s"
    heartBtn_p2.style.backgroundColor = " #f68b1e";
}
heartBtn_p2.addEventListener("click", changeColor_p2)


// ------------------------
// Btn add to cart
var addToCartBtn_p2 = document.getElementById("addToCart_p2")   // add to cart btn
var goToFrontBtn_p2 = document.querySelector("#goToFront_p2")   // no thanks btn
var cartIcon_p2 = document.querySelector("#cartIcon_p2")
function changeBgColor_p2() {
    addToCartBtn_p2.style.color = "#fff"
    addToCartBtn_p2.style.backgroundColor = "green"
    addToCartBtn_p2.style.visibility = "visible"
    goToFrontBtn_p2.style.visibility = "visible"
    addToCartBtn_p2.style.border = "none"
    addToCartBtn_p2.style.transition = ".5s"
    cartIcon_p2.innerHTML = '<i class="fas fa-check"></i>'
}
addToCartBtn_p2.addEventListener("click", changeBgColor_p2)

// // -----------------------------
// Btn no thanks = goToFront

function returnEffectsToPast_p2() {
    addToCartBtn_p2.style.backgroundColor = "#fff"
    cartIcon_p2.innerHTML = '<i class="fas fa-cart-plus"></i>'
    addToCartBtn_p2.style.color = "#f68b1e"
    addToCartBtn_p2.style.border = "1px solid #f68b1e"
    // addToCartBtn_p2.onmouseenter = function () {
    //     addToCartBtn_p2.style.backgroundColor = "#f68b1e"
    //     addToCartBtn_p2.style.color = "#fff"
    //     cartIcon_p2.innerHTML = '<i class="fas fa-cart-plus"></i>'
    // }

    // addToCartBtn_p2.onmouseleave = function () {
    //     addToCartBtn_p2.style.backgroundColor = "#fff"
    //     addToCartBtn_p2.style.border = "1px solid #f68b1e"
    //     addToCartBtn_p2.style.color = "#f68b1e"
    //     cartIcon_p2.innerHTML = '<i class="fas fa-cart-plus"></i>'
    // }

    heartBtn_p2.style.color = "#a39292"
    heartBtn_p2.style.backgroundColor = "#a0a0a751";
}

goToFrontBtn_p2.addEventListener("click", returnEffectsToPast_p2)



// ----------------------------------------------------------- parent 3 ------------------------------------


var parentCart_p3 = document.querySelector(".parent_p3")
    , btnFront_p3 = document.getElementById("goToFront_p3")
    , btnBack_p3 = document.getElementById("goToBack_p3")

function rotateCard_p3() {
    parentCart_p3.style.transform = "rotateY(180deg)"
}

function rotateCard2_p3() {
    parentCart_p3.style.transform = "rotateY(360deg)"
}
btnBack_p3.addEventListener("click", rotateCard_p3)
btnFront_p3.addEventListener("click", rotateCard2_p3)


var imgBtn1_p3 = document.querySelector("#imgBtn1_p3")
    , imgBtn2_p3 = document.querySelector("#imgBtn2_p3")
    , imgBtn3_p3 = document.querySelector("#imgBtn3_p3")
    , imgShow1_p3 = document.querySelector("#imgShow1_p3")
    , imgShow2_p3 = document.querySelector("#imgShow2_p3")
    , imgShow3_p3 = document.querySelector("#imgShow3_p3");

function v1_p3() {
    imgShow1_p3.style.visibility = "visible";
    imgShow2_p3.style.visibility = "hidden";
    imgShow3_p3.style.visibility = "hidden";
}

function v2_p3() {
    imgShow1_p3.style.visibility = "hidden";
    imgShow2_p3.style.visibility = "visible";
    imgShow3_p3.style.visibility = "hidden";
}

function v3_p3() {
    imgShow1_p3.style.visibility = "hidden";
    imgShow2_p3.style.visibility = "hidden";
    imgShow3_p3.style.visibility = "visible";
}

imgShow1_p3.style.visibility = "visible";  // active image
imgBtn1_p3.addEventListener("mouseenter", v1_p3)
imgBtn2_p3.addEventListener("mouseenter", v2_p3)
imgBtn3_p3.addEventListener("mouseenter", v3_p3)

//-----------------------------
// heart icon effects
var heartBtn_p3 = document.getElementById("heartBtn_p3")
function changeColor_p3() {
    heartBtn_p3.style.color = "#fff"
    heartBtn_p3.style.transition = ".5s"
    heartBtn_p3.style.backgroundColor = " #f68b1e";
}
heartBtn_p3.addEventListener("click", changeColor_p3)


// ------------------------
// Btn add to cart
var addToCartBtn_p3 = document.getElementById("addToCart_p3")   // add to cart btn
var goToFrontBtn_p3 = document.querySelector("#goToFront_p3")   // no thanks btn
var cartIcon_p3 = document.querySelector("#cartIcon_p3")
function changeBgColor_p3() {
    addToCartBtn_p3.style.color = "#fff"
    addToCartBtn_p3.style.backgroundColor = "green"
    addToCartBtn_p3.style.visibility = "visible"
    goToFrontBtn_p3.style.visibility = "visible"
    addToCartBtn_p3.style.border = "none"
    addToCartBtn_p3.style.transition = ".5s"
    cartIcon_p3.innerHTML = '<i class="fas fa-check"></i>'
}
addToCartBtn_p3.addEventListener("click", changeBgColor_p3)

// // -----------------------------
// Btn no thanks = goToFront

function returnEffectsToPast_p3() {
    addToCartBtn_p3.style.backgroundColor = "#fff"
    cartIcon_p3.innerHTML = '<i class="fas fa-cart-plus"></i>'
    addToCartBtn_p3.style.color = "#f68b1e"
    addToCartBtn_p3.style.border = "1px solid #f68b1e"
    addToCartBtn_p3.onmouseenter = function () {
        addToCartBtn_p3.style.backgroundColor = "#f68b1e"
        addToCartBtn_p3.style.color = "#fff"
        cartIcon_p3.innerHTML = '<i class="fas fa-cart-plus"></i>'
    }

    addToCartBtn_p3.onmouseleave = function () {
        addToCartBtn_p3.style.backgroundColor = "#fff"
        addToCartBtn_p3.style.border = "1px solid #f68b1e"
        addToCartBtn_p3.style.color = "#f68b1e"
        cartIcon_p3.innerHTML = '<i class="fas fa-cart-plus"></i>'
    }

    heartBtn_p3.style.color = "#a39292"
    heartBtn_p3.style.backgroundColor = "#a0a0a751";
}

goToFrontBtn_p3.addEventListener("click", returnEffectsToPast_p3)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var allProducts = document.querySelectorAll(".btnAddToCart")
var btn = document.querySelector(".add-to-cart-btn")
var productsChoosed = document.querySelector(".products-choosed")
// var productName = document.querySelector(".offer-title")
// var totalPrice = 0, i = 1;

// allProducts.forEach(function (item) {
//     item.onclick = function () {
//         // totalPrice += +(item.getAttribute("price"))
//         totalPrice += parseInt(item.getAttribute("price"))
//         productsChoosed.innerHTML += i++ + ": " + item.getAttribute("productName") + " "
//         // if (productsChoosed != 0) { or
//         if (productsChoosed.innerHTML != 0) {
//             btn.style.display = "block"
//         }
//     }
// });
// btn.onclick = function () {
//     // document.querySelector(".numbersOfProducts").textContent = "Number of products that you choosed is " + (i - 1) + " products"
//     document.querySelector(".totalPrice").textContent = " Total Price is " + totalPrice + " EGP"
// }

var prod1 = document.querySelector(".btnAddToCart")
var productChoosed = document.querySelector(".product-choosed")
var btnPP = document.querySelector(".addToCartBtn")
var totalPricePP = 0;

prod1 = function () {
    prod1.onclick = function () {
        totalPricePP += parseInt(prod1.getAttribute("price"))
        productChoosed.innerHTML += prod1.getAttribute("productName") + " "

        if (productChoosed.innerHTML != 0) {
            btn.style.display = "block"
        }
    }
}
btnPP.onclick = function () {
    document.querySelector(".totalPrice").textContent = " Total Price is " + totalPricePP + " EGP"
}


// console.log()




////////////////////////////////////////////////////////// App 2 ///////////////////////////



var btnToDecrease = document.querySelector(".btnToDecrease")
    , btnToDecreaseTen = document.querySelector(".btnToDecreaseTen")
    , btnToIncrease = document.querySelector(".btnToIncrease")
    , btnToIncreaseTen = document.querySelector(".btnToIncreaseTen")
    , btnToReset = document.querySelector(".btnToReset")
    , numInp = document.querySelector(".numInp")

numInp.value = 0
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
var btnToIncreaseByArrow = document.querySelector(".btnToIncreaseByArrow")
var inpRange = document.querySelector(".inpRange")
var percentOfRange = document.querySelector(".percentOfRange")
var btnToResetRange = document.querySelector(".btnToResetRange")
var x = inpRange.value
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
    percentOfRange.innerHTML = " "
    percentOfRange.innerHTML += inpRange.value + "%"
    if (parseInt(percentOfRange.innerHTML) >= 65) {
        percentOfRange.style.color = "green"
    } else {
        percentOfRange.style.color = "#000"
    }
}

function ResetRange() {
    inpRange.value = 50;
    percentOfRange.innerHTML = " "
}
btnToDecreaseByArrow.addEventListener("mousedown", decreaseRange)
btnToIncreaseByArrow.addEventListener("click", increaseRange)
btnToResetRange.addEventListener("click", ResetRange)

////////////////////////////////////////////////////////// App 3 ///////////////////////////

// //////////////////// user1
// var addUserIcon1 = document.querySelector(".addUserIcon1")
// var cancelAddUser1 = document.querySelector(".cancelAddUser1")
// function changeIconUser1() {
//     addUserIcon1.style.transform = "rotate(720deg)";
//     addUserIcon1.style.transition = ".3s";
//     addUserIcon1.style.color = "green";
//     addUserIcon1.innerHTML = '<i class="fas fa-check-circle"></i>'
//     cancelAddUser1.style.visibility = "visible"
// }
// function cancelUser1() {
//     addUserIcon1.style.transform = "rotate(-720deg)";
//     addUserIcon1.style.transition = "0.1s";
//     addUserIcon1.style.color = "black";
//     addUserIcon1.innerHTML = '<i class="fas fa-user-plus"></i>'
//     cancelAddUser1.style.visibility = "hidden"
// }
// addUserIcon1.addEventListener("click", changeIconUser1)
// cancelAddUser1.addEventListener("click", cancelUser1)


// ////////////////////user2
// var addUserIcon2 = document.querySelector(".addUserIcon2")
// var cancelAddUser2 = document.querySelector(".cancelAddUser2")
// function changeIconUser2() {
//     addUserIcon2.style.transform = "rotate(720deg)";
//     addUserIcon2.style.transition = ".3s";
//     addUserIcon2.style.color = "green";
//     addUserIcon2.innerHTML = '<i class="fas fa-check-circle"></i>'
//     cancelAddUser2.style.visibility = "visible"
// }
// function cancelUser2() {
//     addUserIcon2.style.transform = "rotate(-720deg)";
//     addUserIcon2.style.transition = "0.1s";
//     addUserIcon2.style.color = "black";
//     addUserIcon2.innerHTML = '<i class="fas fa-user-plus"></i>'
//     cancelAddUser2.style.visibility = "hidden"
// }
// addUserIcon2.addEventListener("click", changeIconUser2)
// cancelAddUser2.addEventListener("click", cancelUser2)


// /////////////////user 3
// var addUserIcon3 = document.querySelector(".addUserIcon3")
// var cancelAddUser3 = document.querySelector(".cancelAddUser3")
// function changeIconUser3() {
//     addUserIcon3.style.transform = "rotate(720deg)";
//     addUserIcon3.style.transition = ".3s";
//     addUserIcon3.style.color = "green";
//     addUserIcon3.innerHTML = '<i class="fas fa-check-circle"></i>'
//     cancelAddUser3.style.visibility = "visible"
// }
// function cancelUser3() {
//     addUserIcon3.style.transform = "rotate(-720deg)";
//     addUserIcon3.style.transition = "0.1s";
//     addUserIcon3.style.color = "black";
//     addUserIcon3.innerHTML = '<i class="fas fa-user-plus"></i>'
//     cancelAddUser3.style.visibility = "hidden"
// }
// addUserIcon3.addEventListener("click", changeIconUser3)
// cancelAddUser3.addEventListener("click", cancelUser3)


// After Cleaning this code ==> ==> ==> ||
//                                      VV


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

////***************************************************** App4 ********************************/
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

////***************************************************** App4 ********************************/
