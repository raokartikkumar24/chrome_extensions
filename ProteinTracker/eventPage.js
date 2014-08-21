


//adding an item to the context menu. When we select some number and right click,
//we should be able to see "Add Protein". This value gets added to the storage
var menuItem = {
	"id":"addProtein",
	"title":"Add Protein",
	"contexts":["selection"]

}

chrome.contextMenus.create(menuItem);//add it to the chrome menus


//add eventhandler or subscribe to the events.
chrome.contextMenus.onClicked.addListener( function( clickData ) {//check the API documentation for more information

	if( clickData.menuItemId =="addProtein" && clickData.selectionText) {
		var intRegex = /^\d+$/;//regex to see if its a number
		if( intRegex.test(clickData.selectionText)) {
			chrome.storage.sync.get('total',function(items) {
				var newTotal = 0;
				if(items.total) {
					newTotal +=parseInt(items.total);
				}
				
				newTotal +=parseInt(clickData.selectionText);
				chrome.storage.sync.set({'total':newTotal});//save the new total
			});
		}
	}

});
//run as soon as something loads up
//gets callback when something changes in storage
chrome.storage.onChanged.addListener(function (changes) {
	chrome.browserAction.setBadgeText({"text":changes.total.newValue.toString() });
	
});

