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
var counter = 0;
var scriptStr = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=drawing';
var scriptNode = document.createElement('script');
scriptNode.setAttribute('type', "text/javascript");
scriptNode.setAttribute('src', scriptStr);
console.log(scriptNode);
function LocalMain() {


	console.log("help");
// var map = document.getElementsByTagName("canvas")[0];  var drawingManager = new google.maps.drawing.DrawingManager({
//     drawingMode: google.maps.drawing.OverlayType.MARKER,
//     drawingControl: true,
//     drawingControlOptions: {
//     },
//   });alert("test");
//   drawingManager.setMap(map);alert(lemon);console.log(lemon);'

  var st=  'var google_tile = "https://maps.google.com/maps/api/staticmap?sensor=false&center=-34.397,150.644&zoom=8&size=300x400"; var canvas = document.getElementsByTagName("canvas")[0];var context = canvas.getContext("2d");   var imageObj = new Image();imageObj.src = google_tile;imageObj.onload = function(){context.drawImage(imageObj, 0, 0);}'
  var selectors = ['div', 'span'];

  var node = document.createElement('li');

  node.setAttribute('jsaction', "toggleTravelMode;focus:focusTravelMode;blur:blurTravelMode");
  node.className = "travel-mode";
  // node.setAttribute('jsinstance', "8");
  node.setAttribute('jsvs', "false;");
  node.setAttribute('jsan', "7.travel-mode,0.travel_mode,0.ved,0.jsaction");
  // node.setAttribute('jstcache', "105");
  // node.setAttribute('ved', "4968");

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
  // d2Node.setAttribute("jstcache", "107");
  
  d3Node.setAttribute('style', 'display: none;');
  d3Node.setAttribute('jstcache', '108');

  var butNode = document.createElement('button');
  butNode.setAttribute("tabindex", "2");
  butNode.setAttribute("jsan", "0.tabindex");
  butNode.setAttribute("jstcache", "106");

  butNode.setAttribute("onclick", st);

  d1Node.appendChild(d2Node);
  d1Node.appendChild(d3Node);

  butNode.appendChild(d1Node);
  butNode.appendChild(d4Node);
  butNode.appendChild(d5Node);
  node.appendChild(butNode);
  
  var uls = document.getElementsByTagName('ul');
  var i = 0;
  for (i = 0; i < uls.length; i++) {
  	var cid = uls[i].childNodes;

  	// console.log(cid.length);
  	if (cid.length == 4 && counter++ > 2) {
      if (hasAdded == 0) {

        hasAdded = 1;
        // document.head.appendChild(ascriptNode);
        document.head.appendChild(scriptNode);

	  	  node.setAttribute('travel_mode', "18");
	  		console.log('adding new element!');
        console.log(node);
        console.log(butNode);
        console.log(d1Node);
        console.log(d2Node);
        console.log("length "+ uls[i].length);
	  		uls[i].insertBefore(node,  uls[i].childNodes[2]);
        console.log('added node');
        console.log(node);
	  	}
  	}
  	// $('ul' + ':contains("103")').appendChild(node);
	}
}