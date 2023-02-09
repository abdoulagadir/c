/*--------------------------------------------------------------
# Copyright (C) joomla-monster.com
# License: http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
# Website: http://www.joomla-monster.com
# Support: info@joomla-monster.com
---------------------------------------------------------------*/

var style_1, style_2, style_3;

window.addEvent("domready",function(){
 if(document.id('jm-styleswitcher')){	
	document.id('style_icon-1').addEvent('click', function(e) {
		e = e.stop(); 
 
	if (style_1) style_1.dispose();
		var file = $template_path+'/css/style1.css';
		new Asset.css(file, {id: 'style1'});
		style_1 = document.id('style1');
		new Cookie.write('jm_tropical_hotel','1',{duration: 200,path: "/"});
		
	});

	document.id('style_icon-2').addEvent('click', function(e) {
		e = e.stop(); 
 
	if (style_2) style_2.dispose();
		var file = $template_path+'/css/style2.css';
		new Asset.css(file, {id: 'style2'});
		style_2 = document.id('style2');
		new Cookie.write('jm_tropical_hotel','2',{duration: 200,path: "/"});
		
	});
	
	document.id('style_icon-3').addEvent('click', function(e) {
		e = e.stop(); 
 
	if (style_3) style_3.dispose();
		var file = $template_path+'/css/style3.css';
		new Asset.css(file, {id: 'style3'});
		style_3 = document.id('style3');
		new Cookie.write('jm_tropical_hotel','3',{duration: 200,path: "/"});
		
	});
	
 }

});

// Function to change backgrouns
function changeStyle(style){
	var file = $template_path+'/css/style'+style+'.css';
	var neww = new Asset.css(file);
	new Cookie.write('jm_tropical_hotel',style,{duration: 200,path: "/"});
}