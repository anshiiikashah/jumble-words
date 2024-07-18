const boxEl = document.querySelectorAll(".box");
const unscrambleEl = document.querySelector("#unscramble")
const wordEl = document.querySelector("#word")
const buttonEl = document.querySelector("#button")
const correctEl = document.querySelector("#correct")
const nextEl = document.querySelector("#next")
const tryEl = document.querySelector("#tryAgain")
const endEl = document.querySelector("#end")

correctEl.style.display = "none"
nextEl.style.display = "none"
tryEl.style.display = "none"
endEl.style.display ="none"

let words = ["FLOWER", "MONDAY", "CRICKET"]
function randomInt(x, y) {
    return Math.floor(Math.random() * (y - x) + x)
}
function choice(array) {
    return array[randomInt(0, array.length - 1)]
}

var original;

function word() {
    let l1 = words[randomInt(0, words.length - 1)]
    original = l1;
    let l2 = l1.split('')
    let l3 = []
    let lenl2 = l2.length
    for (let i = 0; i < lenl2; i++) {
        let y = l2[randomInt(0, (l2.length - 1))]
        let indx = l2.indexOf(y)
        l3.push(y)
        l2.splice(indx, 1)
    }
    return l3
}
var l4;
function boxes() {
    l4 = word()
    let len = l4.length
    let userList = []
    for (let each of l4) {
        let elem = document.createElement('div');
        elem.innerText = each;
        elem.setAttribute("class", "div1")
        elem.style.border = "2px solid black";
        elem.style.height = "15vh";
        elem.style.width = "15vh";
        console.log(elem)
        unscrambleEl.appendChild(elem)
        elem.addEventListener('click', () => {
            let elem2 = document.createElement('div');
            elem2.innerText = each;
            elem2.setAttribute("class", "div1")
            elem2.style.border = "2px solid black";
            elem2.style.height = "15vh";
            elem2.style.width = "15vh";
            wordEl.appendChild(elem2)
            elem.style.display = "none"
            userList.push(each)
        })
    }
    return userList
}
let userListNew = boxes()

buttonEl.addEventListener('click', () => {
    console.log(l4)
    const divEl = document.querySelectorAll(".div1")
    userListNew = userListNew.join('')
    console.log(userListNew,original)

    if (original == userListNew) {
        for (let each of divEl) {
            each.style.backgroundColor = "green"
            correctEl.style.display = "flex"

        }
    }
    else {
        for (let each1 of divEl) {
            each1.style.backgroundColor = "red"
        }
        tryEl.style.display="flex"
    }
    nextEl.style.display = "flex"


})
nextEl.addEventListener('click', () => {
    
    if (words.length == 0){
        
    endEl.style.display="flex"
    buttonEl.style.display="none"
    }
    else{
    words.splice(words.indexOf(original),1)
    wordEl.innerHTML=""
    original = word()
    userListNew = boxes()
    
    
    }
    correctEl.style.display = "none"
    nextEl.style.display = "none"
    tryEl.style.display="none"
    
    
})

