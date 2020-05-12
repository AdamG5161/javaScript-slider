const rightButton = document.querySelector('.right');
const leftButton = document.querySelector(".left");
const frameNumber = document.querySelector('.number p');
let index = 1;
const img = document.createElement('img');
const kontener = document.querySelector('.kontener');

 
frameNumber.textContent = index+ "/5";
img.setAttribute('src', `images/1.jpg`);
kontener.appendChild(img);

leftButton.addEventListener("click", function() {
    if (index <= 5) {
        rightButton.classList.remove('disable');
        index--;
        img.setAttribute('src', `images/${index}.jpg`);
        frameNumber.textContent = index+ "/5";
    }
    if (index === 1) {
        leftButton.classList.add('disable');
        img.setAttribute('src', `images/1.jpg`);
    }
});
rightButton.addEventListener("click", function() {
    if (index >= 0) {
        leftButton.classList.remove('disable');
        index++;
        img.setAttribute('src', `images/${index}.jpg`);
        frameNumber.textContent = index+ "/5";
        if (index === 5) {
            rightButton.classList.add('disable');
            img.setAttribute('src', `images/5.jpg`);
        }
    }

});
