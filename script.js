const games = document.getElementById('fs-games');
const gameImage = document.getElementById('detail-image');
const gameTitle = document.getElementById('game-title');
const gameRating = document.getElementById('game-rating');
const gameRelease = document.getElementById('game-release');
const gamePlatforms = document.getElementById('game-platforms');
const gameSetting = document.querySelector('#image-setting');
const gameDescription = document.getElementById('description');

fetch('http://localhost:3000/games')
.then(response => response.json())
.then(data => {
    gameImage.src = data[0].image;
    gameTitle.textContent = data[0].title;
    gameRating.textContent = data[0].rating;
    gameRelease.textContent = data[0].release;
    gamePlatforms.textContent = data[0].platforms;
    gameSetting.src = data[0].setting;
    gameDescription.textContent = data[0].description;


    data.forEach(game => {
        const img = document.createElement('img');
        img.setAttribute('class', 'game-images');
        img.src = game.image;

        img.addEventListener('click', () => {
            gameImage.src = game.image;
            gameTitle.textContent = game.title;
            gameRating.textContent = game.rating;
            gameRelease.textContent = game.release;
            gamePlatforms.textContent = game.platforms;
            gameSetting.src = game.setting;
            gameDescription.textContent = game.description;
        })
        games.appendChild(img);
    });
})

gameSetting.addEventListener('mouseover', () => {
    const body = document.querySelector('body');
    const randomRed = Math.floor(Math.random() * 255) + 1;
    const randomGreen = Math.floor(Math.random() * 255) + 1;
    const randomBlue = Math.floor(Math.random() * 255) + 1;
    const colorGenerator = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    body.style.backgroundColor = colorGenerator;
});

gameSetting.addEventListener('mouseleave', () => {
    const body = document.querySelector('body');
    body.style.backgroundColor = 'black';
})
