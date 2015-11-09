/*!
 * youtubereplay.js
 * https://github.com/quannt/youtubereplay.js
 * MIT licensed
 *
 * Copyright (C) 2015 Ngo Tung Quan, http://quannt.me
 */

var target = document.querySelector('.ytp-play-button');

// create an observer instance
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.attributeName == "title"){
    	// need to double click on the play button if auto play mode is on (which it is by default)
    	document.querySelector('.ytp-play-button').click();
    	document.querySelector('.ytp-play-button').click();
    }
  });    
});


// configuration of the observer:
var config = { attributes: true, childList: false, characterData: false };

// pass in the target node, as well as the observer options
observer.observe(target, config);