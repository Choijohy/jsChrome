const photos =[
    'img/0.jpg',
    'img/1.jpg',
    'img/3.jpg',
    'img/4.jpg'
]

const photo = photos[Math.floor(Math.random()*photos.length)];

//1
document.body.style.backgroundImage = `url(${photo})`;
document.body.style.backgroundSize="cover";

//2
// const setImage = document.createElement("img");
// setImage.src = `${photo}`;
// document.body.appendChild(setImage);
;