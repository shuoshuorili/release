$(document).ready(function() {
	//var _height =  window.screen.availHeight;
	var _height = window.innerHeight
				|| document.documentElement.clientHeight
				|| document.body.clientHeight;
	var _margin = _height - 469;
	if(_margin >= 0){
		$("._content").css("margin-top",_margin/2);
	}else{
		$("body").css("overflow","auto");
	}
	
	$("body").off("click","#go-apply-store").on("click","#go-apply-store",function(e){
																									   
	});
});
