const container = document.querySelector('.container');
const input = document.querySelector('input')
const unsplashURL = 'https://source.unsplash.com/random/';
let rows = 5;

function showImages() {
    for (let i = 0; i < rows * 3; i++) {
        const img = document.createElement('img');
        img.src = `${unsplashURL}30${i}x300`;
    
        container.appendChild(img)    
    }    
}

input.addEventListener('keyup', ({keyCode, target})=> {
    if (keyCode === 13) {
        const { value } = target;
        if (isNaN(value)) return;

        rows = value;
    }

    container.innerHTML = ''   
    showImages()
})

showImages();



