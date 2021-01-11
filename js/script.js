// event pada saat link di klik
$('.page-scroll').on('click', function(e){

	var tujuan = $(this).attr('href');
	// tangkap elemen
	var elemenTujuan = $(tujuan);

// pindahkan elemen
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top -59
	}, 1900, 'easeInOutExpo');

	e.preventDefault();

	

});