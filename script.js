//References to HTML elements.
const games = document.getElementById('fs-games');
const gameImage = document.getElementById('detail-image');
const gameTitle = document.getElementById('game-title');
const gameRating = document.getElementById('game-rating');
const gameRelease = document.getElementById('game-release');
const gamePlatforms = document.getElementById('game-platforms');
const gameSetting = document.querySelector('#setting-image');
const gameDescription = document.getElementById('description');
const body = document.querySelector('body');

//Function that creates a random color. The rgb values are set to 85 to eliminate brighter colors.
function randomColor() {
    const randomRed = Math.floor(Math.random() * 85) + 1;
    const randomGreen = Math.floor(Math.random() * 85) + 1;
    const randomBlue = Math.floor(Math.random() * 85) + 1;
    const colorGenerator = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    body.style.backgroundColor = colorGenerator;
}

//Function that creates the pictures for each game and grabs the details from db.json to change the details for each game.
function gameDetails(game) {
    const img = document.createElement('img');
    img.setAttribute('class', 'game-images');
    img.src = game.image;

    //Event listener that changes the game details when you click on each game.
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
}

//Function that sets the game picture and game details to the first game in the list.
function demonsSoulsContent(data) {
    gameImage.src = data[0].image;
    gameTitle.textContent = data[0].title;
    gameRating.textContent = data[0].rating;
    gameRelease.textContent = data[0].release;
    gamePlatforms.textContent = data[0].platforms;
    gameSetting.src = data[0].setting;
    gameDescription.textContent = data[0].description;

    data.forEach(game => gameDetails(game));
}

//GET request to get the details from db.json.
fetch('http://localhost:3000/games')
.then(response => response.json())
.then(data => demonsSoulsContent(data))

//Event listener that changes the background color of the entire page when your mouse enters the setting image.
gameSetting.addEventListener('mouseenter', randomColor);

//Event listener that changes the background color of the entire page back to black.
gameSetting.addEventListener('mouseleave', () => {
    body.style.backgroundColor = 'black';
})
