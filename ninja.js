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
var hasAdded = 0;
function LocalMain() {
	console.log("help");

  var selectors = ['div', 'span'];
  for (var i in selectors) {
    var selector = selectors[i];
    // $(selector + ':contains("Flights")')
    //     .text("Ninja");
    // console.log("thisran");
  }

  var node = document.createElement('li');
// <li travel_mode="2" jsaction="toggleTravelMode;focus:focusTravelMode;blur:blurTravelMode" jsinstance="*3" class="travel-mode selected" jsvs="false;" jsan="7.travel-mode,7.selected,0.travel_mode,0.ved,0.jsaction" jstcache="105" ved="0CAUQ6CYoAjAA">
//                                                 <button tabindex="2" jsan="0.tabindex" jstcache="106">
//                                                    <div class="directions-travel-mode-button" jstcache="0">
//                                                       <div aria-label="Walking" tooltip="Walking" class="directions-travel-mode-icon directions-walk-icon" jsan="t-r5wgmuI8U-U,7.directions-travel-mode-icon,7.directions-walk-icon,0.aria-label,0.tooltip" jstcache="107"></div>
//                                                       <div jstcache="108" style="display: none;"></div>
//                                                    </div>
//                                                    <div class="directions-travel-mode-breadcrumb" style="display: none;" jstcache="109"></div>
//                                                    <div class="directions-travel-mode-underline" jstcache="0"></div>
//                                                 </button>
//                                              </li>

  node.setAttribute('travel_mode', "2");
  node.setAttribute('jsaction', "toggleTravelMode;focus:focusTravelMode;blur:blurTravelMode");
  node.className = "travel-mode";
  node.setAttribute('jsinstance', "*3");
  node.setAttribute('jsvs', "false;");
  node.setAttribute('jsan', "7.travel-mode,0.travel_mode,0.ved,0.jsaction");
  node.setAttribute('jstcache', "105");
  node.setAttribute('ved', "0CAUQ6CYoAjAA");

  var d4Node = document.createElement('div');
  var d5Node = document.createElement('div');
  d4Node.setAttribute('style', 'display: none;');
  d4Node.className = 'directions-travel-mode-breadcrumb';
  d5Node.className = 'directions-travel-mode-underline';
  
  var d1Node = document.createElement('div');
  d1Node.className = 'directions-travel-mode-button';
  d1Node.setAttribute('jstcache', '0');

  var d2Node =  document.createElement('div');
  var d3Node =  document.createElement('div');

  d2Node.setAttribute("aria-label", "Ninja");
  d2Node.setAttribute("tooltip", "Ninja");
  d2Node.className = 'directions-travel-mode-icon directions-ninja-icon';
  // d2Node.setAttribute("jsan", "t-CxKxTMoc_RM,7.directions-travel-mode-icon,7.directions-fly-icon,0.aria-label,0.tooltip");
  d2Node.setAttribute("jstcache", "107");
  
  d3Node.setAttribute('style', 'display: none;');
  d3Node.setAttribute('jstcache', '108');

  var butNode = document.createElement('button');
  butNode.setAttribute("tabindex", "2");
  butNode.setAttribute("jsan", "0.tabindex");
  butNode.setAttribute("jstcache", "0");

  d1Node.appendChild(d2Node);
  d1Node.appendChild(d3Node);

  butNode.appendChild(d1Node);
  butNode.appendChild(d4Node);
  butNode.appendChild(d5Node);
  node.appendChild(butNode);
  var uls = document.getElementsByTagName('ul');
  var i = 0;
  for (i = 0; i < uls.length; i++) {
  	var cid = uls[i].getAttribute('jstcache');
  	// console.log(cid);
  	if (hasAdded == 0) {

	  	if (cid == '101') {
	  		console.log('adding new element!');
	  		uls[i].insertBefore(node, uls[i].childNodes[4]);
	  		hasAdded = 1;
	  	}
  	}
  	// $('ul' + ':contains("103")').appendChild(node);
	}
}