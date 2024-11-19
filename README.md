# Wordle Wannabe App 🎯

This app is a lightweight take on the Wordle game, built using **React**. It challenges players to guess a word while getting feedback on which letters are in the correct position or present elsewhere in the word.

### Features:
- **Random Word Generation**: Words are fetched dynamically using the [Random Words API](http://random-word-api.herokuapp.com/home).
- **Word Validation**: Ensures your guesses are real words using the [Free Dictionary API](https://dictionaryapi.dev/).
- **Interactive UI**: Responsive design and visually appealing feedback for correct and partially correct guesses.
- **Accessible**: Designed to be easy to play and navigate.
- **Custom Styles**: Styled using CSS for a clean and functional look.

---

## Demo

You can check out the live version of the app deployed on **Netlify**:  
[Wordle Wannabe App - Live Demo](https://scintillating-froyo-faa3f7.netlify.app/)

---

## Installation & Setup

### Prerequisites
- Node.js (v14 or above recommended)
- npm (Node Package Manager)

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/wordle-wannabe.git
   cd wordle-wannabe
  ```
2. **Install dependencies**
   ```bash
   npm install
    ```
3. **Start the development server**
   ```bash
   npm start
    ```
This will run the app in development mode. Open http://localhost:3000 in your browser to view it.

4. **Build for production**
   ```bash
   npm run build
    ```
This creates an optimized build of the app in the build/ directory.

---

## How to Play

1. Guess the word by typing letters into the input field.  
2. Submit your guess to receive feedback:  
   - **Green Tiles**: Letters in the correct position.  
   - **Yellow Tiles**: Letters present in the word but in the wrong position.  
   - **Gray Tiles**: Letters not in the word.  
3. Keep guessing until you find the word or run out of attempts!

---

## Responsive Design

The app is fully responsive and adapts to all device sizes, including mobile phones, tablets, and desktops.

---

## Technologies Used

- **Frontend**: React, Create React App
- **Styling**: CSS with responsive design
- **APIs**:  
  - [Random Words API](http://random-word-api.herokuapp.com/home)  
  - [Free Dictionary API](https://dictionaryapi.dev/)

---