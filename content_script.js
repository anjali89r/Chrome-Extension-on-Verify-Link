// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if( request.message === "clicked_browser_action" ) {
//       var firstHref = $("a[href^='http']");
//       var urlArr = []
//       $("body").find('a').each(function() {
//         if (this || this !== ''){
//           //console.log("this: " + this);
//           if ($(this).attr('href')){
//             if ($(this).attr('href').includes('http')){
//               urlArr.push($(this).attr('href'));
//             }
//           }

//         }
//       });
//           console.log("urlArr: " + urlArr);
//       chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
//     }
//   }
// );
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']");
      var urlArr = []
      $("body").find('a').each(function() {
        if (this || this !== ''){
          //console.log("this: " + this);
          if ($(this).attr('href')){
            if ($(this).attr('href').includes('http')){
              urlArr.push($(this).attr('href'));
            }
          }

        }
      });
          //console.log("urlArr: " + urlArr);
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": urlArr});
    }
  }
);
