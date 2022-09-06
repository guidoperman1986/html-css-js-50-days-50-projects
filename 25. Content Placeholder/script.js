const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const nameProfile = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(() => {
   getData() 
}, 2500);

function getData() {
    header.innerHTML = `
        <img src="https://picsum.photos/200/300" alt="">
    `
    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, sapiente!'

    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';

    nameProfile.innerHTML = 'John Doe';

    date.innerHTML = 'Sept 06, 2022'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg'))
}