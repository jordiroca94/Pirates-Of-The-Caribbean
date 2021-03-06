var game = new Game();

window.addEventListener('keyup', event => {
  if (event.code === 'Enter') {
    if(game.gameIsOver){
      buildGameScreen()
      game.start()
    }
  }
})

  const buildDom = (html) => {
      const main = document.querySelector("main");
      main.innerHTML = html;
  };
  
  // WELCOME SCREEN
  const buildWelcomeScreen = () => {
    buildDom(`
    <div class="welcomescreen">
    <h1 class="gametitle">PIRATES OF THE CARIBBEAN</h1>
    <h1 class="startheader blinkme">PRESS ENTER TO START THE GAME<h1>
    <br/>
    </div>
    `);
  };
  
  // GAME SCREEN
  const buildGameScreen = () => {
    buildDom(`
    <div class="gamescreen">
    <div class="lives"></div>
    <div class="score"></div>
    <div id="game-board" class="gameboard">
    <canvas id="canvas" width="600" height="600"></canvas> 
    </div>  
    </div>
    `);
  };
  
  // GAMEOVER SCREEN
  const buildGameOverScreen = (score) => {
    buildDom(`
    <section class="gameoverscreen">
    <div class="gameoverheader">
    <h1>YOUR SCORE WAS ${score}</h1>
    <h2 class="resetblink"> PRESS ENTER TO TRY AGAIN </h2>
    </div>
    <div class= "pointer"> </div>
    </section>
    `);
  };
  
  // When the window loads, then we will run the "buildSplashScreen" function
  // "load" waits for the html and JS
  window.addEventListener("load", buildWelcomeScreen);
  