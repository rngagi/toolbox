// 語言名稱對應表
const languageNames = {
    "ata_sq": "賽考利克泰雅語",
    "ata_su": "澤敖利泰雅語",
    "ata_ml": "汶水泰雅語",
    "ata_pl": "萬大泰雅語",
    "ata_sk": "四季泰雅語",
    "ata_kl": "宜蘭澤敖利泰雅語",
    "sed_to": "都達賽德克語",
    "sed_tg": "德固達雅賽德克語",
    "sed_tr": "德鹿谷賽德克語",
    "trv": "太魯閣語",
    "say": "賽夏語",
    "tha": "邵語",
    "bun_td": "卓群布農語",
    "bun_bh": "卡群布農語",
    "bun_vt": "丹群布農語",
    "bun_bn": "巒群布農語",
    "bun_ib": "郡群布農語",
    "tso": "鄒語",
    "knv": "卡那卡那富語",
    "hla": "拉阿魯哇語",
    "ruk_es": "東魯凱語",
    "ruk_bd": "霧台魯凱語",
    "ruk_tw": "大武魯凱語",
    "ruk_tn": "多納魯凱語",
    "ruk_mg": "茂林魯凱語",
    "ruk_mn": "萬山魯凱語",
    "pai_es": "東排灣語",
    "pai_nt": "北排灣語",
    "pai_ct": "中排灣語",
    "pai_st": "南排灣語",
    "puy_py": "南王卑南語",
    "puy_tp": "知本卑南語",
    "puy_ws": "西群卑南語",
    "puy_ks": "建和卑南語",
    "kav": "噶瑪蘭語",
    "sak": "撒奇萊雅語",
    "ami_nt": "南勢阿美語",
    "ami_hk": "秀姑巒阿美語",
    "ami_ha": "海岸阿美語",
    "ami_ml": "馬蘭阿美語",
    "ami_hc": "恆春阿美語",
    "yam": "雅美語"
};

// 儲存載入的 CSV 資料
let vocData = {};

// 載入 CSV 資料
async function loadVocabulary(langCode) {
    if (vocData[langCode]) {
        return vocData[langCode];
    }
    
    try {
        const response = await fetch(`assets/csv/${langCode}.csv`);
        const csvText = await response.text();
        const data = parseCSV(csvText);
        vocData[langCode] = data;
        return data;
    } catch (error) {
        console.error(`無法載入 ${langCode} 詞彙資料:`, error);
        return [];
    }
}

// 解析 CSV 資料
function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    const data = [];
    
    for (let line of lines) {
        const fields = parseCSVLine(line);
        if (fields.length >= 7) {
            let lexField = fields[4].trim();
            let zhField = fields[3].trim();
            
            // 移除引號
            if (lexField.startsWith('"') && lexField.endsWith('"')) {
                lexField = lexField.slice(1, -1);
            }
            if (zhField.startsWith('"') && zhField.endsWith('"')) {
                zhField = zhField.slice(1, -1);
            }
            
            data.push({
                lex: lexField,
                zh: zhField,
                lv: fields[6].trim()
            });
        }
    }
    
    return data;
}

// 解析 CSV 行，正確處理引號
function parseCSVLine(line) {
    const fields = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
            inQuotes = !inQuotes;
            current += char;
        } else if (char === ',' && !inQuotes) {
            fields.push(current);
            current = '';
        } else {
            current += char;
        }
    }
    
    fields.push(current);
    return fields;
}

async function conv(mylang){
    var input = document.getElementById("input-"+mylang);
    var output = document.getElementById("output-"+mylang);
    var newinput = glot(input.value);
    
    // 載入詞彙資料
    const voc = await loadVocabulary(mylang);
    var result = splitwords(newinput, mylang, voc);
    output.innerHTML = result;
}

function glot(myinput){
	var newinput = myinput.replaceAll("'","’");
	newinput = newinput.replaceAll("‘","’");
	return newinput;
}

// function samp(mylang){
// 	var input = document.getElementById("input-"+mylang);
// 	var samptxt;
    
//     // 根據新的語言代碼提供樣例文字
//     if (mylang == "tso") //鄒語
// 		{samptxt = "mio mʉchʉ ne yofna? 'a mio topeasmu ne yofna. isi yainca to televi tee ausuhcu smʉnʉ'ʉ ho hucma.";}
//     else if (mylang == "say") //賽夏語
// 		{samptxt = "So'o kayzaeh ay! niSo' raro:o' Sin hiya'en? ma'an raro:o' Sin kizawen.";}
//     else if (mylang == "yam") //雅美語
// 		{samptxt = "akokey! si Manidong ko, sino o ngaran mo? ngaran ko si Keysodan.";}
//     else if (mylang == "tha") //邵語
// 		{samptxt = "simaq mita wa lus'an, pashtay tunaw mashbabiar, pariqaz mita wa qali.";}
//     else if (mylang == "kav") //噶瑪蘭語
// 		{samptxt = "naquni ya dedan setangi? mipil iku nani qaRaya sezang.";}
//     else if (mylang == "trv") //太魯閣語
// 		{samptxt = "Sbiyaw balay babaw dxgal o wana keeman nanak ungat jiyan.";}
//     else if (mylang == "sak") //撒奇萊雅語
// 		{samptxt = "mahica tu, ci Kawpil kaku, cima ku ngangan nu misu?";}
//     else if (mylang == "sed_tg") //德固達雅賽德克語
// 		{samptxt = "Patis uyas mlawa ka nii, niqan bale ka bnarah na.";}
//     else if (mylang == "sed_to") //都達賽德克語
// 		{samptxt = "Patis uyas mlawa ka nii, niqan bale ka bnarah na.";}
//     else if (mylang == "sed_tr") //德鹿谷賽德克語
// 		{samptxt = "Patis uyas mlawa ka nii, niqan bale ka bnarah na.";}
//     else if (mylang == "hla") //拉阿魯哇語
// 		{samptxt = "auninia langica arinani? tam macici arinania tahliaria.";}
//     else if (mylang == "knv") //卡那卡那富語
// 		{samptxt = "macangcangarʉ soni arakukun kasua, nakai mareen.";}
//     else {
//         samptxt = "請輸入" + (languageNames[mylang] || mylang) + "文字進行測試。";
//     }
    
// 	input.value = samptxt;
// }

// 這個函數已被 loadVocabulary 取代，但保留以維持向後相容性
function lang(mylang){
    // 不再使用，現在直接從 CSV 載入資料
    return [];
}

function wordlist(mystr,mylang){
	var wlist = [];
	var myword = '';
	for(var i=0;i<mystr.length;i++){
		var regex = /^[a-z0-9^éṟɨʉ']+$/i; //define regular expression
		
		/*added the symbol : for SaiSiyat*/
		if(mylang == "say" || mylang == "xsy")
			{regex = /^[a-z0-9^éṟɨʉ'\:]+$/i;}
		
		if(mystr[i].match(regex))
			{myword+=mystr[i];}
		else
			{wlist.push(myword); wlist.push(mystr[i]); myword='';}
	}
	wlist.push(myword);
	return wlist;
}

function splitwords(mystr, mylang, voc){
	// 先嘗試匹配多詞詞組，再處理單詞
	var result = '';
	var matchedWords = [];
	var processedText = mystr;
	
	// 按詞彙長度排序，先匹配長詞組
	var sortedVoc = voc.slice().sort(function(a, b) {
		return b.lex.length - a.lex.length;
	});
	
	// 記錄已匹配的位置
	var matchedPositions = [];
	
	// 先進行詞組匹配
	for(var j = 0; j < sortedVoc.length; j++){
		var vocab = sortedVoc[j];
		var regex = new RegExp('\\b' + vocab.lex.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
		var match;
		
		while((match = regex.exec(mystr)) !== null) {
			// 檢查是否與已匹配的位置重疊
			var hasOverlap = false;
			for(var k = 0; k < matchedPositions.length; k++){
				if(!(match.index + match[0].length <= matchedPositions[k].start || 
					 match.index >= matchedPositions[k].end)) {
					hasOverlap = true;
					break;
				}
			}
			
			if(!hasOverlap) {
				matchedPositions.push({
					start: match.index,
					end: match.index + match[0].length,
					vocab: vocab,
					text: match[0]
				});
				matchedWords.push(vocab);
			}
		}
	}
	
	// 按照在文本中的位置排序
	matchedPositions.sort(function(a, b) {
		return a.start - b.start;
	});
	
	// 建構結果
	var lastEnd = 0;
	for(var i = 0; i < matchedPositions.length; i++){
		var pos = matchedPositions[i];
		
		// 添加未匹配的文本
		if(pos.start > lastEnd) {
			result += mystr.substring(lastEnd, pos.start);
		}
		
		// 添加匹配的詞彙（帶標記）
		let levelNum = getLevelNumber(pos.vocab.lv);
		result += '<span class="lv' + levelNum + '">' + pos.text + '</span>';
		
		lastEnd = pos.end;
	}
	
	// 添加剩餘的文本
	if(lastEnd < mystr.length) {
		result += mystr.substring(lastEnd);
	}
	
	// 去重
	var tlist = matchedWords.filter(function(element, index, arr){
		return arr.findIndex(function(item) {
			return item.lex === element.lex;
		}) === index;
	});

	//console.log(tlist);
	wordlisttable(tlist, mylang);
	return result;
}

// 將中文分級轉換為數字
function getLevelNumber(level) {
    switch(level) {
        case '初級': return 1;
        case '中級': return 2;
        case '中高級': return 3;
        case '高級': return 4;
        default: return 1;
    }
}

// 進入選擇的語言
function enterLanguage() {
    const dropdown = document.getElementById('language-dropdown');
    const selectedLanguage = dropdown.value;
    
    if (selectedLanguage) {
        // 直接跳轉到對應的語言頁面（靜態 article）
        window.location.hash = '#' + selectedLanguage;
    } else {
        alert('請先選擇一個語言！');
    }
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
	//tlist 按照 lex 字母排序
	tlist.sort(function(a, b) {
    // boolean false == 0; true == 1
    return a.lex > b.lex ? 1 : -1;
	});
	//生出表格
	var content = '';
	for (i=0;i<tlist.length;i++){
		content += "<tr><td>"+ tlist[i].lex +"</td><td>"+ tlist[i].zh +"</td><td>"+ tlist[i].lv +"</td></tr>";
	}

	tableoutput.innerHTML = content;
}
