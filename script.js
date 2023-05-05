const fromSoftwareGames = document.getElementById('fs-games');
const gameImage = document.getElementById('detail-image');
const gameTitle = document.getElementById('game-title');
const gameRating = document.getElementById('game-rating');
const gameRelease = document.getElementById('game-release');
const gameReview = document.getElementById('game-review');
const gamePlatforms = document.getElementById('game-platforms');

fetch('http://localhost:3000/games')
.then(response => response.json())
.then(data => {
    gameImage.src = data[0].image;
    gameTitle.textContent = data[0].title;
    gameRating.textContent = data[0].rating;
    gameRelease.textContent = data[0].release;
    gamePlatforms.textContent = data[0].platforms;

    data.forEach(game => {
        const img = document.createElement('img');
        img.setAttribute('class', 'game-images');
        img.src = game.image;

        img.addEventListener('click', e => {
            gameImage.src = game.image;
            gameTitle.textContent = game.title;
            gameRating.textContent = game.rating;
            gameRelease.textContent = game.release;
            gamePlatforms.textContent = game.platforms;
        })
        fromSoftwareGames.appendChild(img);
    });
})
