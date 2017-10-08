// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
   // console.log("request: " + request.url)
    if (request.message === "open_new_tab"){
      request.url.forEach(function(el){
        //console.log("my url: " + el)
        chrome.tabs.create({"url": el});
      })

    }
  }
)

