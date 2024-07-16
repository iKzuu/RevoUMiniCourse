let calcDisplay = "";

function btnClick(e) {
    if ( e == /^[0-9]+$/ || e == "*" || e == "-" || e == "+") {
        if (e == "AC") {
            calcDisplay = "";
        } else {
            console.log(e);
            calcDisplay = calcDisplay + e;
        }
        document.getElementById('display').value = calcDisplay;
    } else {
        console.log("input harus berupa angka atau simbol");
    }
}

document.getElementById('display').addEventListener('input',
    function displayChange() {
        console.log(this.value)
        let e = this.value;

        let chars = /^[0-9]+$/
        if (chars.test(e)) {
            console.log("digits");
        } else {
            console.log("non digits")
        }
})
