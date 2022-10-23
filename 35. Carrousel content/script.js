const imgContainer = document.querySelector('#imgs');
const imgs = imgContainer.querySelectorAll('img');

const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

let imgDisplayed = 0;

let interval = setInterval(run, 2000);

function run() {
    imgDisplayed += 1;

    changeImg()
}

function changeImg() {
    if (imgDisplayed > imgs.length - 1) {
        imgDisplayed = 0;
    } else if (imgDisplayed < 0) {
        imgDisplayed = imgDisplayed.length -1;
    }

    imgContainer.style.transform = `translateX(-${imgDisplayed*500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

leftButton.addEventListener('click', ()=>{
    imgDisplayed--;
    changeImg()
    resetInterval()
})

rightButton.addEventListener('click', ()=>{
    imgDisplayed++;
    changeImg()
    resetInterval()
})