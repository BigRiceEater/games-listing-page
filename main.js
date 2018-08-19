
const gameTemplate = (game) =>
`
<div class="gameViewCell">
  <img src="${game.coverImageUrl}" />
  <div class="gameDetails">
    <p class="gameTitle">${game.title}</p>
    <p class="gamePrice">HK$${game.price.toFixed(2)}</p>
  </div>
</div>
`;

function onLoad(){
  getGameData().forEach((game,index) => {
    const gameLibrary = document.getElementById("gameLibrary");
    gameLibrary.innerHTML += gameTemplate(game);
  })
}

const showMoreGames = () => {
    const gameLibrary = document.getElementById("gameLibrary");
    const gameButton = document.getElementById("showGameLabel");
    const libraryState = window.getComputedStyle(gameLibrary).overflow;
    if (libraryState === 'hidden')
    {
      gameButton.innerHTML = "Hide";
      gameLibrary.setAttribute("style","height: auto; overflow: visible;");
    }
    else {
      gameButton.innerHTML = "Show All";
      gameLibrary.setAttribute("style","height: 300px; overflow: hidden;");
    }
}
