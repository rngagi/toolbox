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
    if (mylang == "ami")
		{samptxt = "這裡空空如也。";}
    if (mylang == "tay")
		{samptxt = "這裡空空如也。";}
    if (mylang == "pwn") //排灣-Drusa a likuljav 兩隻老虎
		{samptxt = "izua cu a senai na kakedrian a kinicaquan a kemasi gaikuku, pizua tu makaya situlu ta kakedrian inumalj sa tjauvaliti ta tjiniukukuan a kai, “drusa a ljikuljav” aya. na maitucu a parutavak: drusa likuljav, drusa likuljav, djaljav a mekelj! djaljav a mekelj! a ita neka nu calinga, a ita neka nu iku, na semamalji! na semamalji!";}
    if (mylang == "bnn")
		{samptxt = "這裡空空如也。";}
    if (mylang == "pyu")
		{samptxt = "這裡空空如也。";}
    if (mylang == "dru")
		{samptxt = "這裡空空如也。";}
    if (mylang == "tsu") //鄒-mʉchʉ 下雨
		{samptxt = "mio mʉchʉ ne yofna? ’a mio topeasmu ne yofna. isi yainca to televi tee ausuhcu smʉnʉ’ʉ ho hucma. tee nana a’ʉmtʉ? ma tee eno mainenu ho te’on’a mvoe to ton’u. o’a mocu mo eno oemi’mi? moc’on’a conohie ne o’u poezi. tee nana alʉ smuaveivei? asonʉ o’a tee nama na’no smuna’o. ’a tee eno ʉmnʉ honci a’ʉmtʉ maica.";}
    if (mylang == "xsy") //賽夏-So’o Sin hiya’en? 你叫什麼名字？
		{samptxt = "So’o kayzaeh ay! niSo’ raro:o’ Sin hiya’en? ma’an raro:o’ Sin kizawen. moyo roSa’ ’aehael ay? ’ihi’, siya minayti’ ma’an, Sin ta:inin. ’a:ay! kita’en nakhara hingha’ ka kinmae’iyaehan. moyo ’inay’ino’ ’ima mowa:i’? yami ’inay walo’ ’ima mowa:i’. niSo’ kano’ kapatawawen? ya:o homawan ray taew’an maelaehang ka korkoring, ray minaSangay rima’ ray kakiSka:atan tomortoroe’ ka ’alnoSaySiyat kapayaka:i’. So’o kin makakreng o!";}
    if (mylang == "tao") //達悟-sino o ngaran mo? 你叫什麼名字？
		{samptxt = "akokey! si Manidong ko, sino o ngaran mo? ngaran ko si Keysodan. kagagan mo o ya? sino o ngaran na? si kateysa oya, ya nimapo do Ilaod, ngaran na si Nozay. akokey! Tao ka? no dehdeh ka? tao ko do pongso. ko masarey a makasingkad jimo. ko pa ji atenengi (jya tenngi) o ngara mo, sino ka? si Seyten ko, saing no ngaran ko si Mapey. nimakala da o ngaran mo a ya piya (yapiya) so peypeypangayan.";}
    if (mylang == "ssf") //邵-Lus’an a quyash 過年之歌
		{samptxt = "simaq mita wa lus’an, pashtay tunaw mashbabiar, pariqaz mita wa qali, piakakaimahan! piakakarina! yaku dai maqaquyash, ihu dai mimparaw, pashtay tunaw maqa atauduu, pariqaz mita wa qali, a~ a~ a~ a~ a~ a~ a~ a~ pashtay tunaw paqaquyash, piakakaimahan! piakakarina!";}
    if (mylang == "ckv") //噶瑪蘭-naquni dedan setangi? 今天天氣怎麼樣？
		{samptxt = "naquni ya dedan setangi? mipil iku nani qaRaya sezang, wanaika taytan ta Rutuz lanem ka. pasi tutu qa nengi ti, wanaika taRenita siqawsua ka melusit. siRab qaRabi yau dimusmus uzan, tatezuma ti dedan tangi. qalaidawan muzan ti nani masebang ti lazan. ipilan ku azu qayau banged mawtu azuzina ka. en ni! qalazuk pa ita pasaia mangay qa qaitisan? qitu iku ngid qunna matiw tawian temita tu qenawang maput uu qemuni? supaRan su temawaR naquni dedan ni? qayau qaRaya uzan seRai zengzeng zinna ipilan ku.";}
    if (mylang == "trv") //太魯閣-Smbu hidaw 射太陽（節錄）
		{samptxt = "Sbiyaw balay babaw dxgal o wana keeman nanak ungat jiyan. Kiya do kndsan seejiq o mqraqil balay ni ini krana saw sgealu. Kiya do musa ptrhiq harung ni kika sprdax dha mmkay sapah ni musa mmiyak. Niqan kingal jiyax, dha hiyi snaw o musa qmpahan ni mhhiru, asi lu strung bgihur mtgnuwin ni wada pskyaun bgihur ka dha hiyi nii ni sqapah karat do maadha hidaw da. Dha hidaw nii o mssriyux mnkala ni priyax ryaxan hidaw, wada rmiyax ka kingal han o mnkala ka kingal duri. Kiya do ungat keeman ni jiyan kdjiyax da, saw nii thdagan dha hidaw kdjiyax ka babaw dxgal do mdngu mhuqil kana ka uqun ni pnegalang pnhuma seejiq. Kiya do ungat uqun dha ka seejiq ni mrana mhuqil.Duri o yasa ungat keeman ni ini tduwa msangay ka seejiq uri da.";}
    if (mylang == "ais") //撒-cima ku ngangan nu misu? 你叫什麼名字？
		{samptxt = "mahica tu, ci Kawpil kaku, cima ku ngangan nu misu? ci Tubah ku ngangan nu maku. icuwa ku niyazu’ nu misu? i Ciwidian ku niyazu’ nu maku. u canan ku binacadan nu misu? u Sakizaya kaku. u canan ku kawaw isu? u malukay kaku. u canan ku nipalumaan nu misu? u kalitang atu kubkub ku nipaluma nu maku.";}
    if (mylang == "sdq") //賽德克-Uyas mlawa 呼喚歌
		{samptxt = "Patis uyas mlawa ka nii, niqan bale ka bnarah na, slhaye ta muuyas hayan ho? Tama mnosa su inu? Kedu bale napa su camac. Bubu mnosa su inu? Kedu bale snkegan su nuqah yqeyaq hii. Riso mnosa su inu ha? Slluhe dapin ndaan rdrudan ta. Weewa mnosa su inu ha? Slhai ka tminun pala pniri ga. Laqi mnosa su inu ha? Sprui ka rdrudan ta ma slhai ka Gaya ta.";}
    if (mylang == "sxr") //拉-auninia langica arinani? 今天天氣怎麼樣？
		{samptxt = "auninia langica arinani? tam macici arinania tahliaria. auninia langica matata? taiacuami muacʉkʉhlʉka pariavaratʉ. hliumusahlʉ i kiruvana? ausii hliruhlahlavusa hla talasululunga. tam macici arinani tam hlimurutumuhlu aku mururahlʉnga. musapuaili masinu mima iiama tamucu’ai mavacangʉ. amihla kiahlahlamulangicana miataisami umusahlʉ matata. murumita vahlita atʉhlʉngʉkia mahlavaa saunga. mauruhla matata aramasarʉmʉ. macahlia kuhlaisai maritatumuhlu kiatikuru iniciki kuaracarʉmʉ.";}
    if (mylang == "xnb") //卡-neen nganai musu? 你叫什麼名字？
		{samptxt = "macangcangarʉ soni arakukun kasua, nakai mareen, ka’aan pa ku tavarʉ’ʉ nganai musu? sua nganai maku ia, ’Akori Ka’angena, kesoni kangvang kasua, neen nganai musu? sua nganai maku ia, ’Angai, ’esi Mangacun tanasa maku. kesoni pa kasua, sua cuma mataa cina musu ia, Mu’u mataa Na’u kara? ʉʉ’ʉ, miseen kasu tavarʉ’ʉ? nimavici cu cuma mataa cima maku, mookusa tanasa musu rovʉvʉ, ’akia kasu meesua. makasoin ia, maatʉa kita Ka’angena kavangvang. ʉʉ’ʉ, cani ta’avu tanasa mita. imova! miaa mosikarʉ ku tupuru misoon ia, ’una cau makasi, capai mita makai kan kinvara. cucuru kara? tuturoo mamarang musu, ’arupacʉ’ʉra kita soni. kacangcangarʉn soni, ’apatarakanaang kita nesi.";}
		if (mylang == "sdqtt") //賽德克-Uyas mlawa 呼喚歌
		{samptxt = "Patis uyas mlawa ka nii, niqan bale ka bnarah na, slhaye ta muuyas hayan ho? Tama mnosa su inu? Kedu bale napa su camac. Bubu mnosa su inu? Kedu bale snkegan su nuqah yqeyaq hii. Riso mnosa su inu ha? Slluhe dapin ndaan rdrudan ta. Weewa mnosa su inu ha? Slhai ka tminun pala pniri ga. Laqi mnosa su inu ha? Sprui ka rdrudan ta ma slhai ka Gaya ta.";}
	input.value = samptxt;
}

function lang(mylang){
	var voc;
    if (mylang == "ami"){voc = ami;}
    if (mylang == "tay"){voc = tay;}
    if (mylang == "pwn"){voc = pwn;}
    if (mylang == "bnn"){voc = bnn;}
    if (mylang == "pyu"){voc = pyu;}
    if (mylang == "dru"){voc = dru;}
    if (mylang == "tsu"){voc = tsu;}
    if (mylang == "xsy"){voc = xsy;}
    if (mylang == "tao"){voc = tao;}
    if (mylang == "ssf"){voc = ssf;}
    if (mylang == "ckv"){voc = ckv;}
    if (mylang == "trv"){voc = trv;}
    if (mylang == "ais"){voc = ais;}
    if (mylang == "sdq"){voc = sdq;}
    if (mylang == "sxr"){voc = sxr;}
    if (mylang == "xnb"){voc = xnb;}
		if (mylang == "sdqtt"){voc = sdq;}
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

	//選擇文本輸入語言之JSON
	var voc = lang(mylang);

	//詞彙儲存用 tlist
	var tlist = [];

	//查詞並產出 result
	var result = '';
	for(var i=0;i<wlist.length;i++){
		var tagged = wlist[i];
		for(var j=0;j<voc.length;j++){
			if(wlist[i].toLowerCase()==voc[j].lex.toLowerCase()){
				tagged = '<span class="lv'+voc[j].lv+'">'+tagged+'</span>';
				tlist.push(voc[j]);
				break;
			}
		}
		result += tagged;
	}

	tlist = tlist.filter(function(element, index, arr){
		return arr.indexOf(element) === index;
	});

	//console.log(tlist);
	wordlisttable(tlist,mylang);
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

function wordlisttable(tlist,mylang){
	var tableoutput = document.getElementById("tableoutput-"+mylang);

	//生出表格
	var content = '';
	for (i=0;i<tlist.length;i++){
		content += "<tr><td>"+ tlist[i].lex +"</td><td>"+ tlist[i].zh +"</td><td>"+ tlist[i].lv +"</td></tr>";
	}

	tableoutput.innerHTML = content;
}
