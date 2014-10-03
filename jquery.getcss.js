/*
 * jQuery getCSS Plugin
 * Copyright 2014, vitorhsb@gmail.com
 * MIT license.
 *
 * Dynamically load single/multiple CSS file(s)
 * see: https://github.com/vitorhsb/jquery-get-css
 */
(function($){
	$.extend({
 		getCSS: function(urls, nocache) {
 			if( Object.prototype.toString.call( urls ) !== '[object Array]' ) {
 				urls = [].concat(urls);
 			}

 			$.each(urls, function(i, url) {
 				var attr = {
	 					rel: 'stylesheet',
	 					type: 'text/css',
	 					href: typeof url === "string" ? url : (url && url.href ? url.href : '')
	 				};

 				if (!url || !attr.href) {
 					return;
 				}

 				attr = $.extend({}, attr, typeof url === "string" ? {} : url);

 				if (nocache) {
 					attr.href += (attr.href.indexOf("?") > -1 ? "&" : "?") + Math.random();
 				}

 				$('<link>')
 					.appendTo('head')
 					.attr(attr);
 			});
 		}
 	});
})(jQuery);