# 💩 Poople Solver

A Chrome extension that automatically solves the [Poople.io](https://poople.io/) word game. It reads the live game board and types out the quickest winning path for you.

## How it works

* **Reads Word:** The extension reads the last word on the board
* **Calculates Quickest Path:** It calculates the quickest path towards the solution, and saves it
* **Gets User Input:** The extension's pop up window contains two buttons. One solves the whole puzzle at once typing every word, and the other only types the next word towards the solution

## Technologies Used

* **Rust:** Core path-finding and solving logic.
* **WebAssembly (WASM):** Compiles the Rust code to run in the browser.
* **JavaScript:** Interacts with the webpage to read the board and simulate key presses.
* **HTML & CSS:** Builds the custom popup interface.

## Installation

**For Players:**
Download the official extension directly from the [Chrome Web Store](https://chromewebstore.google.com/detail/poople-solver/ohnehjfhjkadbpldfeldkcheimbdendo).

**For Developers (Local Install):**
1. Clone this repository to your computer.
2. Open Chrome (or any browser based on chromium) and navigate to `chrome://extensions/`.
3. Toggle on **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the folder containing these files.