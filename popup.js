
function setdata(countdetails)
{
	//console.log(countdetails.validlinks);
	document.getElementById('validlink').textContent   = countdetails.validlinks;
	document.getElementById('invalidlink').textContent   = countdetails.invalidlinks;
	document.getElementById('intlink').textContent  = countdetails.internallinks;
	document.getElementById('extlink').textContent = countdetails.externallinks;	 
}


document.addEventListener('DOMContentLoaded', () => {
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": true},setdata);
	});
	//chrome.runtime.sendMessage({clicked : true},setdata);
	
});
