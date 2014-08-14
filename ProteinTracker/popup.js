$(function () {
	chrome.storage.sync.get(['total','goal'], function(items) {
		$('#total').text(items.total);
		$('#goal').text(items.goal);
	});

 $('#addAmount').click(function () {
	chrome.storage.sync.get('total', function(items) {
		var newtotal = 0;
		if(items.total) {
			newtotal += parseInt(items.total);
		}
		
		var amount = $('#amount').val();
		if(amount){
			newtotal+=parseInt(amount);
		}
		
		chrome.storage.sync.set({'total' : newtotal });
		$('#total').text(newtotal);
		$('#amount').val(' ');
	});
 });

});