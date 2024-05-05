console.log("--------------------------------")
console.log("Level 6")

var disableRevealQr = false;
function revealQr() {
    if (disableRevealQr) {
        return null;
    } else {
        disableRevealQr = false;
    }
    document.getElementById('qr-input').removeAttribute('style');
}

function secret() {
    document.getElementById('sphere').removeAttribute('onclick');
    alert('valami megvaltozott az oldalon joci')
    document.getElementsByTagName('title')[0].innerHTML = '?v=cdNuaIEsiYs';
}

function testForQr() {
    let box = document.getElementsByTagName('textarea')[0].value;
    if (box.includes("Ý}j") && (box).includes("±") && (box).length>=4) {
        window.open('https://oltonyborze.tata-refi.hu/?page=fP0NBrvvum','_blank');
    }
}