function conv(mylang){
	var input = document.getElementById("input-"+mylang);
	var output = document.getElementById("output-"+mylang);
	var newinput = glot(input.value);
	var result = splitwords(newinput, mylang);
	output.innerHTML = result;
}

function glot(myinput){
	var newinput = myinput.replaceAll("'","’");
	newinput = newinput.replaceAll("‘","’");
	return newinput;
}

function samp(mylang){
	var input = document.getElementById("input-"+mylang);
	var samptxt;
	if (mylang == "pwn")
		{samptxt = "izua cu a senai na kakedrian a kinicaquan a kemasi gaikuku, pizua tu makaya situlu ta kakedrian inumalj sa tjauvaliti ta tjiniukukuan a kai, “drusa a ljikuljav” aya. na maitucu a parutavak: drusa likuljav, drusa likuljav, djaljav a mekelj! djaljav a mekelj! a ita neka nu calinga, a ita neka nu iku, na semamalji! na semamalji!";}
	if (mylang == "sdq")
		{samptxt = "Patis uyas mlawa ka nii, niqan bale ka bnarah na, slhaye ta muuyas hayan ho? Tama mnosa su inu? Kedu bale napa su camac. Bubu mnosa su inu? Kedu bale snkegan su nuqah yqeyaq hii. Riso mnosa su inu ha? Slluhe dapin ndaan rdrudan ta. Weewa mnosa su inu ha? Slhai ka tminun pala pniri ga. Laqi mnosa su inu ha? Sprui ka rdrudan ta ma slhai ka Gaya ta.";}
	input.value = samptxt;
}

function wordlist(mystr,mylang){
	var wlist = [];
	var myword = '';
	for(var i=0;i<mystr.length;i++){
		if(mystr[i].match(/^[a-z0-9^éṟɨʉ’]+$/i))
			{myword+=mystr[i];}
		else
			{wlist.push(myword); wlist.push(mystr[i]); myword='';}
	}
	wlist.push(myword);
	return wlist;
}

function splitwords(mystr,mylang){
	//產出文本詞表 wlist
	wlist = wordlist(mystr,mylang);
	
	//確定文本語言
	var voc;
	if (mylang == "pwn"){voc = pwn;}
	if (mylang == "sdq"){voc = sdq;}

	//查詞並產出 result
	var result = '';
	for(var i=0;i<wlist.length;i++){
		var tagged = wlist[i];		
		for(var j=0;j<voc.length;j++){
			if(wlist[i].toLowerCase()==voc[j].lex.toLowerCase()){tagged = '<span class="lv'+voc[j].lv+'">'+tagged+'</span>';break;}
		}
		result += tagged;
	}
	return result;
}