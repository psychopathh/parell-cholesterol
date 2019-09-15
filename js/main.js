//slider
var slideIndex = 1;

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
		   var i;
		   var slides = document.getElementsByClassName("item_slide");
		   var dots = document.getElementsByClassName("dot");
		   if (n > slides.length) {
		     slideIndex = 1
		   };
		   if (n < 1) {
		     slideIndex = slides.length
		   };
		   for (i = 0; i < slides.length; i++) {
		     slides[i].style.display = "none";
		   };
		   for (i = 0; i < dots.length; i++) {
		     dots[i].className = dots[i].className.replace(" active", "");
		   };
		   slides[slideIndex-1].style.display = "block";
		   dots[slideIndex-1].className += " active";
} 

function returnTable() {
	var slides = document.getElementsByClassName("item_slide");
		var dots = document.getElementsByClassName("dot");
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		};
		for (i = 0; i < slides.length; i++) {
			slides[i].className = slides[i].className.replace(" none", "");
		};
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "block";
		};
}

 $(window).on("load resize", function () { 
	var windows_height = window.innerWidth;
	if (windows_height<768) {
	    showSlides(slideIndex);
	} else {
		returnTable();
	}
});