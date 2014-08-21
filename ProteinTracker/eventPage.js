//run as soon as something loads up
//gets callback when something changes in storage
chrome.storage.onChanged.addListener(function (changes) {
	chrome.browserAction.setBadgeText({"text":changes.total.newValue.toString() });
	
});