
/**chrome.runtime.onMessage.addListener( function (message, sender, sendResponse) {
	
  if (message.clicked) {
     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": true})
  });
  }
});*/






