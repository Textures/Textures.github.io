$("#introduction").click(function() {
	$("#back").addClass('hidden');
    $('html,body').animate({
        scrollTop: $("body").offset().top},
        'slow');
});
$("#education").click(function() {
	$("#back").removeClass('hidden');
	$('html,body').animate({
		scrollTop: $("#edu").offset().top},
        'slow');
});
$("#experience").click(function() {
	$("#back").removeClass('hidden');
	$('html,body').animate({
        scrollTop: $("#exp").offset().top},
        'slow');
});
$("#portfolio").click(function() {
	$("#back").removeClass('hidden');
	$('html,body').animate({
        scrollTop: $("#port").offset().top},
        'slow');
});