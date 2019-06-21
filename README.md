# React Native TicTacToe - Alex Sandro A. Souza @asasouza

## Configurando o ambiente de desenvolvimento
1. Acesse o repositório do projeto hospedado no <a href='https://github.com/asasouza/rn-tic-tac-toe'>Github</a> e clone-o para o diretório desejada através do comando <code>git clone https://github.com/asasouza/rn-tic-tac-toe.git</code>.
	- Obs: Caso opte por não realizar a operação anterior pelo <i>git</i> é possível realizar o download do projeto no formato <i>.zip</i> e descompacta-lo no diretório de preferência.
2. Com o prompt de comando de seu sistema operacional, vá a pasta onde o projeto foi salvo e execute o comando <code>npm install</code>. Este comando instalará todas as dependências listadas na aplicação.
	- Caso não possua, é necessária a instalação do npm, disponível através deste <a href="https://www.npmjs.com/get-npm">link</a>
	- <b>ATENÇÃO!</b> Este projeto utiliza React Native <b>(sem uso do Expo)</b>, portanto para testa-lo é necessário ter o ambiente básico de desenvolvimento instalado. O passo-a-passo encontra-se disponível na própria <a href='https://facebook.github.io/react-native/docs/getting-started'>documentação</a> do React Native.
3. Com as dependências instaladas e simulador Android/iOS aberto, execute o comando <code>react-native run-android / run-ios</code> dentro do diretório do projeto. Isto deve iniciar o bundle da aplicação que instalará o aplicativo e permitirá testa-lo.

## Estrutura de arquivos
A aplicação é divida na seguinte hierarquia de diretórios:

	|-android 
	|-ios
	|-app
		|- components
			|- common
		|- constants
			|- Styles.js
		|- providers
			|- StorageProvider.js
		|- screens
			|- MainScreen.js
	App.js
	package.json

## Tecnologias
Foram utilizadas as seguintes tecnologias para desenvolvimento desta aplicação de teste:

		- React Native;
		- React Native Animatable[https://github.com/oblador/react-native-animatable];
		- React Native Async Storage[https://github.com/react-native-community/async-storage]
		- Javascript ES6 + Babel;		
		- PropTypes;
		- ESLint;

## Requisitos do Teste

Obs: os requisitos do teste foram enviados em inglês, optei por não traduzir o texto e replica-lo na íntegra. <br>
Obs2: as figuras citadas durante o texto (Figure 1, 2 e 3) não foram disponibilizadas no repositório original, portanto não estão disponíveis neste repositório também.


### The game

A standard __Tic-Tac-Toe__ game is played on a __3 × 3__ grid by 2 players named Player 1 and Player 2 (where Player 1 always moves first). During gameplay, players take alternating turns in which they claim a cell by filling it with their assigned character (i.e., O or X). Player 1 is always O and Player 2 is always X. The first character to claim 3 cells that fall in a vertical, horizontal, or diagonal line wins.

### The Project

Build a Tic-Tac-Toe app using React Native with the following functionality:

- The game ends under either of the following circumstances:
- -  A player wins by claiming 3 cells that fall in a horizontal, vertical, or diagonal line.
- - The players tie if there are no more possible moves (i.e., all cells are claimed).

- It must have a button at the bottom of the screen whose function is to start a new game. If no game is currently in progress, this button must be labeled Start New Game (Figures 1 and 3); if there is a game in progress, this button must be labeled Restart Game (Figure 2). When the app is opened, it must be in the state demonstrated by Figure 1.

- When the game ends, display the result in the text box immediately above the Start New Game button (Figure 3):
- - If Player 1 wins, display Player 1 Wins.
- - If Player 2 wins, display Player 2 Wins.
- - If the players tie, display It's a Tie.

- In the right corner of the top bar, display the number of games thus user finished. 
- - When finishing 5 games, show message on the screen (alert or a toast)
- - This number should be kept if the user finishes the app and start it again

- If the user clicks on the Restart Game, a dialog box should appear with the message: Do you want to restart the game?.
- - If the user clicks OK, a new game starts. This means the game board reverts its initial state and all claimed cells are cleared.
- - If the user clicks CANCEL, the dialog box closes and the current game resumes.

You can use this (image)[https://jcrastelli.files.wordpress.com/2013/07/tictactoe.png] as reference for your app appearance, but feel free for upgrade app style and usability, but dont forget our **features** :smile:
