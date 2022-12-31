chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url.indexOf("google.com") > -1) {
    chrome.tabs.update(tabId, {url: "https://www.bing.com"});
    }
    });
  