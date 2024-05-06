console.log("--------------------------------")
console.log("Level 7")

const NEM_ER_CSALNI = ["13733320","7A93","4B43","BCCB","EC06D6BECA6C"];

function submitKeys() {
    for (i=0;i<5;i++) {
        if (String(document.querySelectorAll('#div-input input')[i].value) == NEM_ER_CSALNI[i]) {
            
        } else {
            document.getElementById('p-out').innerHTML = "";
            return null;
        }
    }
    document.getElementById('p-out').innerHTML = "23pST_____"
}

function toggleQr(p) {
    if (p) {
        document.getElementById('rect').setAttribute('src','bg00.png');
    } else {
        document.getElementById('rect').setAttribute('src','https://hrthyy.github.io/gerasz/standard/bg0.png');
    }
}