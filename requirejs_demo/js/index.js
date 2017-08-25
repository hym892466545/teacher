require(["config"], function(){
	require(["cookie", "jquery"], function(c,$){
		$("button").click(function(){
			$(".box").css("background", "black");
		})
		$.cookie("username", "123456")
	})
});