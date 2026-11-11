function getStartingWord() {
  const scroll_container = document.getElementById("ScrollContainer");
  const first_row = scroll_container.querySelector(".Row");
  const starting_letters = first_row.querySelectorAll(".Box")

  if (starting_letters.length !== 4) {
    console.log("Error: Starting word not found")
    return null;
  }

  let starting_word = "";
  for (let letter of starting_letters) {
    if (letter.textContent !== "") {
      starting_word += letter.textContent.trim()
    }
  }
  
  return starting_word
}

