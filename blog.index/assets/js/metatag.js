
var siteName;
var siteDescription;
var siteKeywords;
var siteResponsive = false;
var siteLanguage;
var siteType;
var siteCode;

function start() {

    siteName = document.getElementById('name').value;
    siteDescription = document.getElementById('description').value;
    siteKeywords = document.getElementById('keywords').value;

    siteLanguage = document.getElementById('language').value;
    siteType = document.getElementById('type').value;


          

    if (window.siteName.trim() == "") {
        alert('Hata! Site ismini boş bırakmayın!');
    }

    else if (window.siteDescription.trim() == "") {
        alert('Hata! Site açıklamasını boş bırakmayın!');
    }

    else if (window.siteKeywords.trim() == "") {
        alert('Hata! Site anahtar kelimesini boş bırakmayın!');
    }

    else {
        if (window.siteResponsive == true && window.siteLanguage != "Dil ekleme") {
            document.getElementById('code').innerHTML = '<title>' + window.siteName + '</title>' + "\n" +
                '<meta name="description" content="' + window.siteDescription + '" />' + "\n" +
                '<meta name="keywords" content="' + window.siteKeywords + '" />' + "\n" +
                '<meta content="width=device-width, initial-scale=1.0" name="viewport" />' + "\n" +
                '<meta name="language" content="' + window.siteLanguage + '" />' + "\n" +
                '<meta charset="' + window.siteType + '" />';
        }

        else if (window.siteResponsive == false && window.siteLanguage != "Dil ekleme") {
            document.getElementById('code').innerHTML = '<title>' + window.siteName + '</title>' + "\n" +
                '<meta name="description" content="' + window.siteDescription + '" />' + "\n" +
                '<meta name="keywords" content="' + window.siteKeywords + '" />' + "\n" +
                '<meta name="language" content="' + window.siteLanguage + '" />' + "\n" +
                '<meta charset="' + window.siteType + '" />'        }

        else if (window.siteResponsive == true && window.siteLanguage == "Dil ekleme") {
            document.getElementById('code').innerHTML = '<title>' + window.siteName + '</title>' + "\n" +
                '<meta name="description" content="' + window.siteDescription + '" />' + "\n" +
                '<meta name="keywords" content="' + window.siteKeywords + '" />' + "\n" +
                '<meta content="width=device-width, initial-scale=1.0" name="viewport" />' + "\n" +
                '<meta charset="' + window.siteType + '" />'        }

        else if (window.siteResponsive == false && window.siteLanguage == "Dil ekleme") {
            document.getElementById('code').innerHTML = '<title>' + window.siteName + '</title>' + "\n" +
                '<meta name="description" content="' + window.siteDescription + '" />' + "\n" +
                '<meta name="keywords" content="' + window.siteKeywords + '" />' + "\n" +
                '<meta charset="' + window.siteType + '" />'        }
    }
}


function responsiveVerify() {
    if (window.siteResponsive == false) {
        window.siteResponsive = true;

    }

    else {
        window.siteResponsive = false;

    }
}

function copy() {
    var txt = document.getElementById('code');

    txt.select();

    document.execCommand("copy");
}


