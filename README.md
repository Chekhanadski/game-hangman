*This project was initially developed in a private repository as part of the Rolling Scopes School JavaScript course. After the course completion, it was transferred to my personal repository.*

# Welcome to the Hangman Game

## View the Project
You can view the deployed Hangman game here: [Hangman Game](https://rolling-scopes-school.github.io/chekhanadski-JSFE2023Q4/hangman/)

## Description
The Hangman Game is a classic word guessing game where players attempt to uncover a hidden word by guessing one letter at a time. The game includes a visual representation of the gallows and updates dynamically with each guess. Users have six attempts to guess the word correctly before the game is over.

## Features

- **Question and Secret Word:** Each game starts with a random question and a secret word represented by underscores.
- **Guessing Letters:** Users can guess letters using both a virtual on-screen keyboard and their physical keyboard.
- **Correct Guesses:** Correctly guessed letters replace the corresponding underscores.
- **Incorrect Guesses:** Each incorrect guess adds a body part to the gallows, and the incorrect guesses counter is updated.
- **Game Over:** The game ends when either the word is guessed correctly or all six body parts are displayed on the gallows.
- **Modal Window:** A modal window appears at the end of the game, showing the result and the secret word. Users can click "play again" to restart the game with a new question and word.


## Technology Stack

**Frontend:**

- HTML5
- CSS3
- JavaScript

## Setting Up and Running the Project Locally

Here are the steps to get you started:

### Prerequisites
Before you begin, ensure you have met the following requirements:

- You have installed a live server extension (e.g., Live Server for VS Code).
- You have a Windows/Linux/Mac machine.

### Setting Up the Project
To set up the project, follow these steps:

**1. Clone the repository**

Open your terminal, navigate to the directory where you want to clone the repository, and run the following command:

```sh
git clone https://github.com/Chekhanadski/game-hangman.git
```

This will clone the repository to your local machine.

**2. Navigate to the project directory**

Change your current directory to the project directory:

```sh
cd hangman-game
```

**3. Open the project in your code editor**

If you are using Visual Studio Code, you can open the project with:

```sh
code .
```

**4. Run the project using a live server**

If you have the Live Server extension installed in VS Code, right-click on the index.html file and select "Open with Live Server".

Alternatively, if you are using another live server tool, start it in the directory containing the index.html file.

This will start a local development server and the project will be up and running on your local machine.
