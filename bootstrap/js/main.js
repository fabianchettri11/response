	$(".subimg").click(function(){
		console.log("Hello");
		$("#mainimg").attr("src", $(this).attr("src"));
	})