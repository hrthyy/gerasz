console.log("--------------------------------")
console.log("Level 4")
var ans;

function ask() {
    ans = Number(prompt('melyik busz jar erre joci?',''));
    if ((ans == null) || (typeof ans != 'number') ) {
        alert('figyelj mar ide joci');
        return null;
    } else {}
    if (ans == 33) {
        alert('nyalod a seggem telen nyaron');
        document.getElementById('page').innerHTML += '<p>0UAptGWKxO</p>';
    } else {
        alert('nem ez megy a gombocleso utcaba joci');
    }
    return null;
}