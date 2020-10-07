(function() {
  'use strict';

	if('serviceWorker' in navigator) {
	 	window.addEventListener('load',()=>{
	 		navigator.serviceWorker.register("/sw.js").then(reg=>{console.log("registered successfully")}).catch(err =>{console.log("registration failed")});
	 	});
	}

})();
