const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating"

const resultsContainer = document.querySelector(".results");

async function getGame() {
    //fetch

    const response = await fetch(url);

    const games = await response.json();

    //const facts = results;
    resultsContainer.innerHTML = "";

    for (let i = 0; i < 8; i++) {
        console.log("Name: ", games.results[i].name, " -Rating: ", games.results[i].rating);
        let noTags = Object.keys(games.results[i]).length;
        let myString = "Name: " + games.results[i].name + " Rating: " + games.results[i].rating + " Number of tags: " + noTags;

        //resultsContainer.innerHTML += `<div class="results">${"Name: ", games.results[i].name " -Rating: ", games.results[i].rating}</div > `;
        resultsContainer.innerHTML += `<div class="results">${myString}</div > `;
    }



    //console.log(games);
}

getGame();

