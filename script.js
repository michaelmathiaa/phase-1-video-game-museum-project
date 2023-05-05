const fromSoftwareGames = document.getElementById('fs-games');
const detailImage = document.getElementById('detail-image');
const gameTitle = document.getElementById('game-title');
const gameRating = document.getElementById('game-rating');
const gameRelease = document.getElementById('game-release');

fetch('http://localhost:3000/games')
.then(response => response.json())
.then(data => {
    detailImage.src = data[0].image;

    data.forEach(game => {
        const img = document.createElement('img');
        img.setAttribute('class', 'game-images');
        img.src = game.image;

        img.addEventListener('click', e => {
            detailImage.src = game.image;
            gameTitle.textContent = game.title;
            gameRating.textContent = game.rating;
            gameRelease.textContent = game.release;
        })

        fromSoftwareGames.appendChild(img);
    });
})
