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
	if (mylang == "pwn") //排灣-Drusa a likuljav 兩隻老虎
		{samptxt = "izua cu a senai na kakedrian a kinicaquan a kemasi gaikuku, pizua tu makaya situlu ta kakedrian inumalj sa tjauvaliti ta tjiniukukuan a kai, “drusa a ljikuljav” aya. na maitucu a parutavak: drusa likuljav, drusa likuljav, djaljav a mekelj! djaljav a mekelj! a ita neka nu calinga, a ita neka nu iku, na semamalji! na semamalji!";}
	if (mylang == "sdq") //賽德克-Uyas mlawa 呼喚歌
		{samptxt = "Patis uyas mlawa ka nii, niqan bale ka bnarah na, slhaye ta muuyas hayan ho? Tama mnosa su inu? Kedu bale napa su camac. Bubu mnosa su inu? Kedu bale snkegan su nuqah yqeyaq hii. Riso mnosa su inu ha? Slluhe dapin ndaan rdrudan ta. Weewa mnosa su inu ha? Slhai ka tminun pala pniri ga. Laqi mnosa su inu ha? Sprui ka rdrudan ta ma slhai ka Gaya ta.";}
	if (mylang == "ssf") //邵-Lus’an a quyash 過年之歌
		{samptxt = "simaq mita wa lus’an, pashtay tunaw mashbabiar, pariqaz mita wa qali, piakakaimahan! piakakarina! yaku dai maqaquyash, ihu dai mimparaw, pashtay tunaw maqa atauduu, pariqaz mita wa qali, a~ a~ a~ a~ a~ a~ a~ a~ pashtay tunaw paqaquyash, piakakaimahan! piakakarina!";}
	if (mylang == "ssf") //太魯閣-Smbu hidaw 射太陽（節錄）
		{samptxt = "Sbiyaw balay babaw dxgal o wana keeman nanak ungat jiyan. Kiya do kndsan seejiq o mqraqil balay ni ini krana saw sgealu. Kiya do musa ptrhiq harung ni kika sprdax dha mmkay sapah ni musa mmiyak. Niqan kingal jiyax, dha hiyi snaw o musa qmpahan ni mhhiru, asi lu strung bgihur mtgnuwin ni wada pskyaun bgihur ka dha hiyi nii ni sqapah karat do maadha hidaw da. Dha hidaw nii o mssriyux mnkala ni priyax ryaxan hidaw, wada rmiyax ka kingal han o mnkala ka kingal duri. Kiya do ungat keeman ni jiyan kdjiyax da, saw nii thdagan dha hidaw kdjiyax ka babaw dxgal do mdngu mhuqil kana ka uqun ni pnegalang pnhuma seejiq. Kiya do ungat uqun dha ka seejiq ni mrana mhuqil.Duri o yasa ungat keeman ni ini tduwa msangay ka seejiq uri da.";}
	if (mylang == "sxr") //拉-auninia langica arinani? 今天天氣怎麼樣？
		{samptxt = "auninia langica arinani? tam macici arinania tahliaria. auninia langica matata? taiacuami muacʉkʉhlʉka pariavaratʉ. hliumusahlʉ i kiruvana? ausii hliruhlahlavusa hla talasululunga. tam macici arinani tam hlimurutumuhlu aku mururahlʉnga. musapuaili masinu mima iiama tamucu’ai mavacangʉ. amihla kiahlahlamulangicana miataisami umusahlʉ matata. murumita vahlita atʉhlʉngʉkia mahlavaa saunga. mauruhla matata aramasarʉmʉ. macahlia kuhlaisai maritatumuhlu kiatikuru iniciki kuaracarʉmʉ.";}
	if (mylang == "xnb") //卡-neen nganai musu? 你叫什麼名字？
		{samptxt = "macangcangarʉ soni arakukun kasua, nakai mareen, ka’aan pa ku tavarʉ’ʉ nganai musu? sua nganai maku ia, ’Akori Ka’angena, kesoni kangvang kasua, neen nganai musu? sua nganai maku ia, ’Angai, ’esi Mangacun tanasa maku. kesoni pa kasua, sua cuma mataa cina musu ia, Mu’u mataa Na’u kara? ʉʉ’ʉ, miseen kasu tavarʉ’ʉ? nimavici cu cuma mataa cima maku, mookusa tanasa musu rovʉvʉ, ’akia kasu meesua. makasoin ia, maatʉa kita Ka’angena kavangvang. ʉʉ’ʉ, cani ta’avu tanasa mita. imova! miaa mosikarʉ ku tupuru misoon ia, ’una cau makasi, capai mita makai kan kinvara. cucuru kara? tuturoo mamarang musu, ’arupacʉ’ʉra kita soni. kacangcangarʉn soni, ’apatarakanaang kita nesi.";}
	if (mylang == "xsy") //賽夏-So’o Sin hiya’en? 你叫什麼名字？
		{samptxt = "So’o kayzaeh ay! niSo’ raro:o’ Sin hiya’en? ma’an raro:o’ Sin kizawen. moyo roSa’ ’aehael ay? ’ihi’, siya minayti’ ma’an, Sin ta:inin. ’a:ay! kita’en nakhara hingha’ ka kinmae’iyaehan. moyo ’inay’ino’ ’ima mowa:i’? yami ’inay walo’ ’ima mowa:i’. niSo’ kano’ kapatawawen? ya:o homawan ray taew’an maelaehang ka korkoring, ray minaSangay rima’ ray kakiSka:atan tomortoroe’ ka ’alnoSaySiyat kapayaka:i’. So’o kin makakreng o!";}
	input.value = samptxt;
}

function lang(mylang){
	var voc;
	if (mylang == "pwn") {voc = pwn;}
	if (mylang == "sdq") {voc = sdq;}
	if (mylang == "ssf") {voc = ssf;}
	if (mylang == "trv") {voc = trv;}
	if (mylang == "sxr") {voc = sxr;}
	if (mylang == "xnb") {voc = xnb;}
	if (mylang == "xsy") {voc = xsy;}
	return voc;
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
	var voc = lang(mylang);

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

function clean(mylang){
	var input = document.getElementById("input-"+mylang);
	input.value = "";//清空input
	conv(mylang);
}

function searchKeyPress(e, mylang){
	// look for window.event in case event isn't passed in
	e = e || window.event;
	if (e.keyCode == 13)
	{
		document.getElementById('go-'+mylang).click();
		return false;
	}
	return true;
}