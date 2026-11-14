async function sendCommand(commandName) {
  console.log("Executing...");
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.tabs.sendMessage(tab.id, { command: commandName }, (response) => {
    if (chrome.runtime.lastError) {
      console.error("Error: Refresh the page.");
      return;
    }
    if (response && response.success) {
      console.log("Task completed");
    } else if (response && response.error) {
      console.error(response.error);
    }
  });
}

document.getElementById("solveBtn").addEventListener("click", () => sendCommand("run_solve"));
document.getElementById("nextWordBtn").addEventListener("click", () => sendCommand("run_next"));