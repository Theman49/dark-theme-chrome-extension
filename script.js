document.getElementById("dark1").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["scripts/dark1.js"]
  });
  // chrome.scripting.insertCSS({
  //     target: {tabId: tab.id},
  //     files: ["style.css"]
  //   })
});

document.getElementById("dark2").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["scripts/dark2.js"]
  });
});

document.getElementById("reset").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["scripts/reset.js"]
  });
});
