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
</select>
</div>`
// append h to the body
document.body.insertAdjacentHTML('beforeend', h)

document.querySelector('.cSelLang').addEventListener('change', function() {
  let lang = this.value
  window.location.href = `https://nyan-fa.com/langs/${lang}.html`
});