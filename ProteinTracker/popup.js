$(function () {
	chrome.storage.sync.get('total', function(items) {
		$('#total').text(items.total);
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