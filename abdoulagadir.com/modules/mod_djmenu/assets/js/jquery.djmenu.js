/**
 * @version $Id: jquery.djmenu.js 4 2014-05-07 18:42:25Z szymon $
 * @package DJ-Menu
 * @copyright Copyright (C) 2012 DJ-Extensions.com, All rights reserved.
 * @license DJ-Extensions.com Proprietary Use License
 * @author url: http://dj-extensions.com
 * @author email contact@dj-extensions.com
 * @developer Szymon Woronowski - szymon.woronowski@design-joomla.eu
 */
(function($){this.afterDJMenuHide=function(){};var i=this.DJMenu=function(a,b){this.options={delay:500,animIn:'fadeIn',animOut:'fadeOut',animSpeed:'normal',duration:450,wrap:null,direction:'ltr',touch:(('ontouchstart'in window)||(navigator.MaxTouchPoints>0)||(navigator.msMaxTouchPoints>0))};this.init(a,b)};i.prototype.init=function(c,d){var e=this;jQuery.extend(e.options,d);if(!c.length)return;e.options.direction=window.getComputedStyle(document.body).getPropertyValue('direction');switch(e.options.animSpeed){case'fast':e.options.duration=250;break;case'slow':e.options.duration=650;break}c.addClass(e.options.animSpeed);var f=c.find('li.dj-up');e.kids=[];if(!e.options.wrap)e.options.wrap=c;else e.options.wrap=$('#'+e.options.wrap);f.each(function(a){var b=$(this);e.kids[a]=new j(b,0,e,e.options)})};var j=function(a,b,c,d){this.options={};this.init(a,b,c,d)};j.prototype.init=function(a,b,c,d){var f=this;jQuery.extend(f.options,d);f.menu=a;f.level=b;f.parent=c;f.timer=null;f.sub=a.find('> ul').first();var g='mouseenter';if(f.options.touch){g='click';var h=a.find('> a').first();if(h.length)h.on('click',function(e){if(f.sub.length&&!f.menu.hasClass('hover'))e.preventDefault()})}f.menu.on(g,f.showSubmenu.bind(f));f.menu.on('mouseleave',f.hideSubmenu.bind(f));if(f.sub.length){f.kids=[];f.initKids()}};j.prototype.showSubmenu=function(){var a=this;clearTimeout(a.timer);if(a.menu.hasClass('hover')&&!a.sub.hasClass(a.options.animOut)){return}clearTimeout(a.animTimer);a.menu.addClass('hover');if(a.sub.length&&!a.DirDone)a.checkDir();a.hideOther();if(a.sub.length){a.sub.removeClass(a.options.animOut);a.sub.addClass(a.options.animIn)}};j.prototype.hideSubmenu=function(){var a=this;if(a.sub.length){a.timer=setTimeout(function(){a.sub.removeClass(a.options.animIn);a.sub.addClass(a.options.animOut);a.animTimer=setTimeout(function(){a.menu.removeClass('hover');if((afterDJMenuHide))afterDJMenuHide()},a.options.duration)},a.options.delay)}else{a.menu.removeClass('hover')}};j.prototype.checkDir=function(){var a=this;a.DirDone=true;var b=a.sub.offset().left;var c=a.options.wrap.offset().left;if(a.options.direction=='ltr'){var d=b+a.sub.outerWidth()-a.options.wrap.outerWidth()-c;if(d>0){if(a.level){a.sub.css('right',a.sub.css('left'));a.sub.css('left','auto')}else{a.sub.css('margin-left',-d)}}}else if(a.options.direction=='rtl'){var d=b-c;if(d<0){if(a.level){a.sub.css('left',a.sub.css('right'));a.sub.css('right','auto')}else{a.sub.css('margin-right',d)}}}};j.prototype.initKids=function(){var c=this;var d=c.sub.find('> li');d.each(function(a){var b=$(this);c.kids[a]=new j(b,c.level+1,c,c.options)})};j.prototype.hideOther=function(){var b=this;b.parent.kids.each(function(a){if(a.menu.hasClass('hover')&&a!=b){if(a.sub.length){a.hideOtherSub();a.sub.removeClass(a.options.animIn);a.sub.addClass(a.options.animOut);a.animTimer=setTimeout(function(){a.menu.removeClass('hover');if((afterDJMenuHide))afterDJMenuHide()},b.options.duration)}else{a.menu.removeClass('hover')}}})};j.prototype.hideOtherSub=function(){var b=this;b.kids.each(function(a){if(a.sub.length){a.hideOtherSub();a.sub.removeClass(a.options.animIn);a.sub.removeClass(a.options.animOut)}a.menu.removeClass('hover')})}})(jQuery);