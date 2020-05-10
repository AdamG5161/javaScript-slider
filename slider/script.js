const rightButton = document.querySelector('.right')
const leftButton = document.querySelector(".left")
const frameNumber = document.querySelector('.number p')
let index = 0
const img = document.createElement('img')
const kontener = document.querySelector('.kontener')

const imagesArr = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
    'https://img.joemonster.org/mg/albums/052020/main_10sztuka_medytacji_ny_raul28.jpg'
]
frameNumber.textContent = index + 1 + "/" + imagesArr.length;
img.setAttribute('src', imagesArr[index])
kontener.appendChild(img)

leftButton.addEventListener("click", function() {
    if (index <= imagesArr.length) {
        rightButton.classList.remove('disable')
        index--
        img.setAttribute('src', imagesArr[index])
        frameNumber.textContent = index + 1 + "/" + imagesArr.length;
    }
    if (index === 0) {
        leftButton.classList.add('disable')
    }
});
rightButton.addEventListener("click", function() {
    if (index >= 0) {
        leftButton.classList.remove('disable')
        index++
        img.setAttribute('src', imagesArr[index])
        frameNumber.textContent = index + 1 + "/" + imagesArr.length;
        if (index === imagesArr.length - 1) {
            rightButton.classList.add('disable')
        }
    }

});