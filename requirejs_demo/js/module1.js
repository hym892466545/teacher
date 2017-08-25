define(function(){
	console.log("module1.js");
	function test(){
		console.log("第一个用户定义的 test() 函数");
	}

	return {
		t : test
	}
});