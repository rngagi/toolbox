function conv(){
	var input = document.getElementById("input");
	var output = document.getElementById("output");
	var newinput = glot(input.value);
	var result = newinput;
	output.innerHTML = result;
}

function clean(){
	var input = document.getElementById("input");
	input.value = "";//清空input
	conv();
}

function glot(myinput){
	var newinput = myinput.replaceAll("x","ʉ");
	return newinput;
}

function searchKeyPress(e){
	// look for window.event in case event isn't passed in
	e = e || window.event;
	if (e.keyCode == 13)
	{
		document.getElementById('go').click();
		return false;
	}
	return true;
}
