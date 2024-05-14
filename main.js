// let next = document.querySelector(".next")
// let prev = document.querySelector(".prev")
// let imgs = document.querySelectorAll("img")

// let imgsArry = Array.from(imgs)
// const slidCount = imgsArry.length

// let currentSlid = 1;

// let slideNum = document.querySelector(".slide-number")
// let indectors = document.querySelector(".indectors")


// imgsArry[currentSlid - 1].classList.add("active")
// slideNum.textContent = `#${currentSlid}`


// function currentSlidNums(slid, num) {
//     slid.textContent = `#${num}`
// }
// function movebulet() {
//     const ul = document.querySelector("ul")
//     const ulChild = ul.children

//     for (let i = 0; i < ulChild.length; i++) {
//         ulChild[i].classList.remove("active")
//         ulChild[currentSlid - 1].classList.add("active")

//     }

// }
// function nextSlid() {
//     if (currentSlid < slidCount) {
//         prev.classList.remove("disabled")
//         imgsArry[currentSlid].classList.add("active")
//         currentSlid++
//         currentSlidNums(slideNum, currentSlid)
//         if (currentSlid == slidCount) {
//             next.classList.add("disabled")
//         }
//         movebulet()
//     }
// }
// function prevSlid() {
//     if (currentSlid > 1) {
//         next.classList.remove("disabled")
//         currentSlid--
//         imgsArry[currentSlid].classList.remove("active")
//         currentSlidNums(slideNum, currentSlid)
//         if (currentSlid == 1) {
//             prev.classList.add("disabled")

//         }
//         movebulet()
//     }
// }

// next.addEventListener("click", nextSlid)

// prev.addEventListener("click", prevSlid)
// function removeAllActiveClass(els) {
//     els.forEach((el) => {
//         if (el.classList.contains("active")) {
//             el.classList.remove("active")
//         }

//     })
// }
// function buildIndectors() {
//     const ul = document.createElement("ul")
//     const fregment = document.createDocumentFragment()
//     for (i = 1; i <= slidCount; i++) {

//         const lis = document.createElement("li")
//         lis.textContent = i
//         lis.addEventListener("click", (e) => {
//             const liElment = ul.children
//             liArry = Array.from(liElment)
//             removeAllActiveClass(liArry)
//             // lis.classList.add("active")
//             e.target.classList.add("active")
//             let index = e.target.innerHTML
//             currentSlidNums(slideNum, index)
//             removeAllActiveClass(imgsArry)
//             imgsArry[index - 1].classList.add("active")
//             if (index == 1) {
//                 prev.classList.add("disabled")
//                 next.classList.remove("disabled")

//             } else if (index == slidCount) {
//                 next.classList.add("disabled")
//                 prev.classList.remove("disabled")
//             } else {
//                 prev.classList.remove("disabled")
//                 next.classList.remove("disabled")
//             }
//         })
//         fregment.append(lis)
//     }

//     ul.append(fregment)
//     indectors.append(ul)
//     ul.children[currentSlid - 1].classList.add("active")

// }
// buildIndectors()




let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
let imgs = document.querySelectorAll("img")

let imgsArry = Array.from(imgs)
const slidCount = imgsArry.length

let currentSlid = 1;

let slideNum = document.querySelector(".slide-number")
let indectors = document.querySelector(".indectors")


imgsArry[currentSlid - 1].classList.add("active")

currentSlidNums(slideNum, currentSlid)


function currentSlidNums(slid, num) {
    slid.textContent = `#${num}`
}
function movebulet() {
    const ul = document.querySelector("ul")
    const ulChild = ul.children

    for (let i = 0; i < ulChild.length; i++) {
        ulChild[i].classList.remove("active")
        ulChild[currentSlid - 1].classList.add("active")

    }

}
function checkIfPrevAndNext(checkNum) {
    if (checkNum == 1) {
        prev.classList.add("disabled")

    } else {
        prev.classList.remove("disabled")
    }
    if (checkNum == slidCount) {
        next.classList.add("disabled")
    } else {
        next.classList.remove("disabled")
    }
}
checkIfPrevAndNext(currentSlid)
function nextSlid() {

    if (currentSlid < slidCount) {
        removeAllActiveClass(imgsArry)
        imgsArry[currentSlid].classList.add("active")
        currentSlid++
        currentSlidNums(slideNum, currentSlid)
        checkIfPrevAndNext(currentSlid)
        movebulet()
    }
}


function prevSlid() {

    if (currentSlid > 1) {
        removeAllActiveClass(imgsArry)
        currentSlid--
        imgsArry[currentSlid].classList.add("active")
        currentSlidNums(slideNum, currentSlid)
        checkIfPrevAndNext(currentSlid)
        movebulet()
    }
}

next.addEventListener("click", nextSlid)

prev.addEventListener("click", prevSlid)
function removeAllActiveClass(els) {
    els.forEach((el) => {
        if (el.classList.contains("active")) {
            el.classList.remove("active")
        }

    })
}
function buildIndectors() {
    const ul = document.createElement("ul")
    const fregment = document.createDocumentFragment()
    for (i = 1; i <= slidCount; i++) {

        const lis = document.createElement("li")
        lis.textContent = i
        lis.addEventListener("click", (e) => {
            const liElment = ul.children
            lisArry = Array.from(liElment)
            removeAllActiveClass(lisArry)
            e.target.classList.add("active")
            let index = e.target.innerHTML
            currentSlid = index
            currentSlidNums(slideNum, index)
            removeAllActiveClass(imgsArry)
            imgsArry[index - 1].classList.add("active")
            checkIfPrevAndNext(index)
        })
        fregment.append(lis)
    }

    ul.append(fregment)
    indectors.append(ul)
    ul.children[currentSlid - 1].classList.add("active")

}
buildIndectors()
