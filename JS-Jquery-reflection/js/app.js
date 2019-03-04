
				//------- carousel code ---------//

var snapper = new Snap({
	element: document.getElementById('content')
});

var addEvent = function addEvent(element, eventName, func) {
	if (element.addEventListener) {
    	return element.addEventListener(eventName, func, false);
    } else if (element.attachEvent) {
        return element.attachEvent("on" + eventName, func);
    }
};


$(document).ready(function(){

	$('.slider').slick({
		dots: true,
		arrows:false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		draggable: true,
		autoplay: true,
		autoplaySpeed: 5000
	});

	// Side menu functions

	$('.contactUs').mouseover(function(){
		$('.contactHeading').css('background-color', '#3d404e');
	});
	$('.contactUs').mouseout(function(){
		$('.contactHeading').css('background-color', '#333645');
	});

	$('.webDesign').mouseover(function(){
		$('.sideWeb').css('background-color', '#3d404e');
	});
	$('.webDesign').mouseout(function(){
		$('.sideWeb').css('background-color', '#333645');
	});

	$('.itSupport').mouseover(function(){
		$('.itSide').css('background-color', '#3d404e');
	});
	$('.itSupport').mouseout(function(){
		$('.itSide').css('background-color', '#333645');
	});

	$('.teleServices').mouseover(function(){
		$('.teleSide').css('background-color', '#3d404e');
	});
	$('.teleServices').mouseout(function(){
		$('.teleSide').css('background-color', '#333645');
	});

	$('.bespokeSoftware').mouseover(function(){
		$('.bespokeSide').css('background-color', '#3d404e');
	});
	$('.bespokeSoftware').mouseout(function(){
		$('.bespokeSide').css('background-color', '#333645');
	});

	$('.digitalMarketing').mouseover(function(){
		$('.digitalSide').css('background-color', '#3d404e');
	});
	$('.digitalMarketing').mouseout(function(){
		$('.digitalSide').css('background-color', '#333645');
	});

	$('.cyberSecurity').mouseover(function(){
		$('.cyberSide').css('background-color', '#3d404e');
	});
	$('.cyberSecurity').mouseout(function(){
		$('.cyberSide').css('background-color', '#333645');
	});

	$('.activeOne').mouseover(function(){
		$('.headingOne').css('background-color', '#3d404e');
	});
	$('.activeOne').mouseout(function(){
		$('.headingOne').css('background-color', '#333645');
	});
	$('.activeTwo').mouseover(function(){
		$('.headingTwo').css('background-color', '#3d404e');
	});
	$('.activeTwo').mouseout(function(){
		$('.headingTwo').css('background-color', '#333645');
	});
	$('.activeThree').mouseover(function(){
		$('.headingThree').css('background-color', '#3d404e');
	});
	$('.activeThree').mouseout(function(){
		$('.headingThree').css('background-color', '#333645');
	});
	$('.activeFour').mouseover(function(){
		$('.headingFour').css('background-color', '#3d404e');
	});
	$('.activeFour').mouseout(function(){
		$('.headingFour').css('background-color', '#333645');
	});

	$('.homeSide').mouseover(function(){
		$('.homeLink').css('background-color', '#3d404e');
	});
	$('.homeSide').mouseout(function(){
		$('.homeLink').css('background-color', '#333645');
	});

	$('.supportSide').mouseover(function(){
		$('.supportLink').css('background-color', '#3d404e');
	});
	$('.supportSide').mouseout(function(){
		$('.supportLink').css('background-color', '#333645');
	});

	// cookies popup
	$( ".closebtn" ).click(function() {
		$( ".alertCont" ).fadeOut("slow");
		$(this).parent().slideUp('slow');
	});

	// side menu!!!
	addEvent(document.getElementsByClassName('side-menu-btn')[0], 'click', function(){
		snapper.open('right');
	});

	snapper.on('open', function(){
		$('.burger').css('display', 'none');
		$('.fa-times').css('display', 'inline');
		$('.outerCont').css('height', '100%');
		$('.outerCont').css('width', '100%');
		$('.outerCont').css('display', 'unset');
		$('.outerCont').css('z-index', '11');

	});

	snapper.on('close', function(){
		$('.outerCont').css('display', 'none');
		$('.fa-times').css('display', 'none');
		$('.burger').css('display', 'inline');
	});

	setTimeout(function () {
    	$("#cookie").fadeIn(200);
 	}, 1000);
	$("#closeCookieConsent, .cookieConsentOK").click(function() {
    	$("#cookieConsent").fadeOut(200);
	});

	$(document).ready(function(){
 		if (typeof(Storage) !== "undefined") {
   			let test = sessionStorage.getItem("cookie");
   			if (!test) {
     			$('#cookies').append("<div id='cookie'> <span id='closeCookieConsent'>x</span> This website is using cookies. <a href='#' target='_blank'>More info</a>. <button class='cookieConsentOK'>Accept Cookies</button></div>"); ;
   			} else {
     			document.getElementById("cookies");
   			}
 		}
	})

	$(document).ready(function(){
 		$(".cookieConsentOK").click(function(){
   			sessionStorage.setItem("cookie", "true");
   			$("#cookie").remove();
 		});
	});

});




//dsc
