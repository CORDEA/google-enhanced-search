chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'google-enhanced-search',
    title: 'Check details of this result',
    contexts: ['selection']
  });
})

chrome.contextMenus.onClicked.addListener((info) => {
  const url = info.linkUrl;
  if (!url) {
    return;
  }
  chrome.browserAction.openPopup(window => {
    window.render(url);
  });
})
