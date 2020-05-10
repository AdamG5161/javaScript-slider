const leftButton = document.querySelector(".left");
const rightButton = document.querySelector('.right');
const frameNumber = document.querySelector('.number p')
let index = 0

const imagesArr = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg'
]

const img = document.createElement('img')
const kontener = document.querySelector('.kontener')
img.setAttribute('src', imagesArr[index])
kontener.appendChild(img)
leftButton.addEventListener("click", left);
rightButton.addEventListener("click", right);
frameNumber.textContent = index + 1 + '/5';


function left() {

    if (index <= imagesArr.length) {
        rightButton.classList.remove('disable')
        index--
        // let number = index;
        img.setAttribute('src', imagesArr[index])

        frameNumber.textContent = index + 1 + '/5';
    }
    if (index === 0) {
        leftButton.classList.add('disable')
    }
}

function right() {
    if (index >= 0) {
        leftButton.classList.remove('disable')
        index++

        img.setAttribute('src', imagesArr[index])
        frameNumber.textContent = index + 1 + '/5';
        if (index === imagesArr.length - 1) {
            rightButton.classList.add('disable')
        }
    }

}