function handleMessage(e) {
	var el = document.getElementsByClassName('playControl')[0];
	if( typeof el !== 'undefined' ) {
		el.click();
	}
}
safari.self.addEventListener("message", handleMessage, false);