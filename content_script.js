
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  var linkdetails = {
			validlinks: "0",
			invalidlinks: "0",
			externallinks: "0",
			internallinks: "0"
			
		}
	 
    if( request.message ) {
		var links = document.querySelectorAll("a");
	var domain = document.domain;
			var validlinks = 0;
		var invalidlinks = 0;
		var internallinks = 0;
		var externallinks = 0;
		for (k=0;k<links.length;k++)
		{
			console.log("my link is " + links[k].href)
			console.log("my text is " + links[k].text)
			
				var el = links[k].href
			if (el.indexOf("javascript"))
			{
				if (el.includes(domain))
				{
					internallinks = internallinks + 1;
				}
				else
				{
						externallinks = externallinks + 1 ;
				}
				var xhr = new XMLHttpRequest();
				xhr.open("HEAD", el, false);
				xhr.send();
				//xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200 ) {
			
					validlinks=validlinks+1;
					console.log("working link " + el);
				}
				else if (xhr.readyState == 4 && xhr.status == 404 )
				{
					invalidlinks=invalidlinks+1;
					console.log("Not working link " + el);
				}
				else
				{
					console.log("Some error " + xhr.status);
				}
				}
		}
		//console.log(validlinks);
		linkdetails.validlinks = validlinks;
		linkdetails.invalidlinks= invalidlinks;
		linkdetails.externallinks= externallinks;
		linkdetails.internallinks= internallinks;
			
			
      };
	 sendResponse(linkdetails);
     
    });
  
