// Adding Prism to The Code Tags
var addPrismToCodeTag = document.querySelectorAll("code");
function fAddPrismToCodeTag(x) {
    x.classList.toggle("language-py");
}
addPrismToCodeTag.forEach(fAddPrismToCodeTag);

// Changing the font of Each H1 & H2 &  H3 elements
var Hs = ["h1", "h2", "h3"];
for (let i = 0; i < Hs.length; i++) {
    var hs = Hs[i];
    var h = document.querySelectorAll(hs);

    function colorRed(element) {
        element.classList.toggle("oswald-font");
        element.classList.toggle("green");
    }
    h.forEach(colorRed);
}

// Changing the color of the code block if the inner HTML contains Output
var changeOutputColor = document.querySelectorAll("code");
for (let i = 0; i < changeOutputColor.length; i++) {
    let x = changeOutputColor[i];
    for (let j = 0; j < x.length; j++) {
        let y = x[j];
        console.log(y);
    }
}
