console.log("--------------------------------")
console.log("Level 3")
function draw(numberOfSides) {
    document.getElementById('div-canvas').innerHTML = '<canvas id="myCanvas" width="600" height="400">Your browser does not support the HTML5 canvas tag. </canvas>'
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (numberOfSides > 63) {
        numberOfSides = 64;
    } else if (numberOfSides < 3) {
        return null;
    }
    var radius=100;
    var x = 125;
    var y = 125;
    var angle = 2*Math.PI/numberOfSides;
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.moveTo (radius*Math.cos(0), radius*Math.sin(0));          
    for (var i = 1; i <= numberOfSides; i++) {
        ctx.lineTo (radius*Math.cos(i * angle), radius*Math.sin(i * angle));
    }
    ctx.stroke();
}

function calc() {
    var n = Number(document.getElementById('sides').value);
    var a = Number(document.getElementById('sideLength').value);
    if (a==129474 && n==71) {
        document.getElementById('kerulet').innerHTML = '<b>verekedtem a sátánnal</b>';
        document.getElementById('terulet').innerHTML = '<b>xS8OfLBJkj</b>';
        return null;
    }
    if ((isNaN(a) || isNaN(n)) || (n<3 || a <= 0)) {
        document.getElementById('kerulet').innerHTML = '';
        document.getElementById('terulet').innerHTML = '';
        return null;
    }
    var area = (1 - 2/n)*Math.PI*0.5;
    area = a/(2*Math.tan(area));
    area = 0.5*n*a*area;
    document.getElementById('kerulet').innerHTML = n*a;
    document.getElementById('terulet').innerHTML = Math.round(1000*area)/1000;
}