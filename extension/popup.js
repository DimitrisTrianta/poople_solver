document.getElementById("solveBtn").addEventListener("click", async () => {
  // Find the active tab the user is looking at
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Send the "run_solve" command to scraper.js
  chrome.tabs.sendMessage(tab.id, { command: "run_solve" }, (response) => {
    if (chrome.runtime.lastError) {
      document.getElementById("result").innerText = "Error: Refresh the page.";
      return;
    }
    if (response && response.path && response.path.length > 0) {
      document.getElementById("result").innerText = response.path.join(" ");
    } else {
      document.getElementById("result").innerText = "Word not found.";
    }
  });
});

document.getElementById("nextWord").addEventListener("click", async () => {
  // Find the active tab the user is looking at
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Send the "run_solve" command to scraper.js
  chrome.tabs.sendMessage(tab.id, { command: "run_solve" }, (response) => {
    if (chrome.runtime.lastError) {
      document.getElementById("result").innerText = "Error: Refresh the page.";
      return;
    }
    if (response && response.path && response.path.length > 0) {
      
    } else {
      
    }
  });
});