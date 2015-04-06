var observer = new MutationObserver(function(mutations, observer) {
  LocalMain();
});

observer.observe(document, {
  subtree: true,
  attributes: true,
  childList: true,
  characterData: true,
  attributeOldValue: true,
  characterDataOldValue: true
});

function LocalMain() {
	console.log("help");

  var selectors = ['div', 'span'];
  for (var i in selectors) {
    var selector = selectors[i];
    $(selector + ':contains("Flights")')
        .text("Ninja");
    console.log("thisran");
  }
}