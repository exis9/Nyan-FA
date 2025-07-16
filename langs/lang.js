const g_ver = '1.03';
// 1.02とかを1.0.2、みたいに、１桁ごとにドットを入れて変換する
const g_dVer = g_ver.replace('.', '').split('').join('.');
const winLink = `https://github.com/exis9/Nyan-FA/releases/download/v${g_ver}(Windows)/Nyan-FA.${g_dVer}.exe`;
const macLink = `https://github.com/exis9/Nyan-FA/releases/download/v${g_ver}(Mac)/Nyan-FA-${g_dVer}.dmg`;

const elVWin = document.getElementById('idV_win'), elVMac = document.getElementById('idV_mac');
let h_vWin = elVWin.innerHTML.replace('1.03', g_ver), 
    h_vMac = elVMac.innerHTML.replace('1.03', g_ver);
elVWin.innerHTML = h_vWin
elVMac.innerHTML = h_vMac

elVWin.querySelector('a').href = winLink; //elVWinのhrefをwinLinkに置き換える
elVMac.querySelector('a').href = macLink; //elVMacのhrefをmacLinkに置き換える

let h = `
<div class="cLangSelCont">
<select class="cSelLang">
<option value="en">English</option>
<option value="ja">Japanese - 日本語</option>
<option value="zh">Simplified Chinese - 简体中文</option>
<option value="zh-tw">Traditional Chinese - 繁體中文</option>
<option value="ko">Korean - 한국어</option>
<option value="es">Spanish - Español</option>
<option value="pt">Portuguese - Português</option>
<option value="fr">French - Français</option>
<option value="de">German - Deutsch</option>
<option value="nl">Dutch - Nederlands</option>
<option value="ar">Arabic - عربي</option>
<option value="ru">Russian - Русский</option>
<option value="sv">Swedish - Svenska</option>
<option value="fi">Finnish - Suomi</option>
<option value="pl">Polish - Polski</option>
<option value="it">Italian - Italiano</option>
<option value="el">Greek - Ελληνικά</option>
<option value="tr">Turkish - Türkçe</option>
<option value="hi">Hindi - हिन्दी</option>
<option value="id">Indonesian - Bahasa Indonesia</option>
<option value="ms">Malay - Bahasa Melayu</option>
<option value="vi">Vietnamese - Tiếng Việt</option>
<option value="th">Thai - ไทย</option>
<option value="tl">Tagalog - Tagalog</option>
<option value="cs">Czech - Čeština</option>
<option value="ro">Romanian - Română</option>
<option value="hu">Hungarian - Magyar</option>
<option value="bg">Bulgarian - Български</option>
<option value="da">Danish - Dansk</option>
<option value="no">Norwegian - Norsk</option>
<option value="sk">Slovak - Slovenčina</option>
<option value="sl">Slovenian - Slovenščina</option>
<option value="hr">Croatian - Hrvatski</option>
<option value="sr">Serbian - Српски</option>
<option value="lt">Lithuanian - Lietuvių</option>
<option value="lv">Latvian - Latviešu</option>
<option value="et">Estonian - Eesti</option>
<!--option value="bn">Bengali - বাংলা</option>
<option value="ur">Urdu - اردو</option>
<option value="he">Hebrew - עברית</option>
<option value="sw">Swahili - Kiswahili</option>
<option value="am">Amharic - አማርኛ</option>
<option value="yo">Yoruba - Yorùbá</option>
<option value="zu">Zulu - isiZulu</option>
<option value="af">Afrikaans - Afrikaans</option>
<option value="ca">Catalan - Català</option-->
</select>
</div>`
// prepend h to the body
document.body.insertAdjacentHTML('afterbegin', h);

// 現在のURLで、ファイル名がja.htmlとかならcSelLangのvalueはjaにする
let currentLang = window.location.pathname.split('/').pop().split('.')[0];
// クエリーがあれば、無視
if (currentLang.includes('?'))
    currentLang = currentLang.split('?')[0];
document.querySelector('.cSelLang').value = currentLang;


// append hoomepage link
let h_hp = `<div class="cHomeLink"><a href="https://beta-japan.com/exis/">TOP</a></div>`;
document.getElementById('idCont').insertAdjacentHTML('beforeend', h_hp);


// クエリーfがあれば取得
let bForceLang = false
let urlParams = new URLSearchParams(window.location.search)
if (urlParams.has('f'))
    bForceLang = true;

// localStorageに、lang値が保存されていたらそのページにリダイレクト。
// されていないならブラウザの言語設定を取得して、cSelLang内に存在すれば対応する言語ページにリダイレクト
let _lang = localStorage.getItem('lang') || (navigator.language || navigator.userLanguage)
if ( !bForceLang && _lang )
{
    // langがen-USとかならenに変換。ただし、zh-TWとかzh-CNはzh-tw、zh-cnに変換
    if (_lang.startsWith('zh-'))
        _lang = _lang.toLowerCase();
    else
        _lang = _lang.split('-')[0].toLowerCase();

    console.log(`Redirecting to ${_lang} page...`);
    // cSelLangのvalueに_langがあれば、そのページにリダイレクト
    if (document.querySelector(`.cSelLang option[value="${_lang}"]`))
    {
        // 現在のページの言語と同じなら何もしない
        if (currentLang !== _lang)
            window.location.href = `https://exis9.github.io/Nyan-FA/langs/${_lang}.html`;
    }
}


// envents
{
    document.querySelector('.cSelLang').addEventListener('change', function() {
        let lang = this.value
        // langをlocalStorageに保存
        localStorage.setItem('lang', lang);
        window.location.href = `https://exis9.github.io/Nyan-FA/langs/${lang}.html`
    })
}