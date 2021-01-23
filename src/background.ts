chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'google-enhanced-search',
    title: 'Check details of this result',
    contexts: ['selection']
  });
})

chrome.contextMenus.onClicked.addListener((info) => {
  const url = info.linkUrl;
  // TODO
})
