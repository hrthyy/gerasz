console.log("--------------------------------")
console.log("Level 8")

function zoom() {
    document.getElementById('he1').innerHTML = '/tn2uhJemYA';
    document.getElementById('he1').setAttribute('style','font-weight: bold;')

    console.log('zoom')
    document.getElementById("au").play();
    var xerxes = document.getElementById('ud-rea');
    var pos = 150;
    var timer = setInterval(frame, 10);
    function frame() {
        if (pos < 0) {
            clearInterval(timer);
        }
        xerxes.style.backgroundSize = pos.toString() + "%";
        pos = pos - 0.2;
    }

}

var clicks = 0;
function chain(i) {
    switch (i) {
        case 0:
            console.log('chain0')
            document.getElementById('he1').removeAttribute('onclick');
            document.getElementById('he1').innerHTML = "24/04/13";
            document.getElementById('ud-rea').removeAttribute('style');
        case 1:
            console.log('chain1')
            if (clicks==0) {
                alert('ne nyomkodj engem joci');
            }
            if (clicks > 8) {
                document.getElementById('sphere').setAttribute('onclick','chain(2);');
                document.getElementById('sphere').setAttribute('title','fejezd be joci');
                alert('fejezd be joci');
            }
            clicks++;
        case 2:
            console.log('chain2')
            if (clicks>24) {
                alert('vegeztunk joci');
                document.getElementById('sphere').style.display = 'none';
                zoom();
            }
            clicks++;

    }
}

