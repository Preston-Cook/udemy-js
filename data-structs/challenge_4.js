document.querySelector("button").onclick = () => {
    const textArea = document.querySelector("textarea").value;
    textArea.split("\n").forEach((elm, i) => {
        const camelCasedElm = toCamelCase(elm.trim());
        console.log(camelCasedElm.padEnd(20) + "✅".repeat(i + 1));
    })
}

function toCamelCase(varName) {
    const pieces = varName.toLowerCase().split("_");
    let outputStr = pieces[0];
    pieces.slice(1).forEach(piece => {
        outputStr += piece[0].toUpperCase() + piece.slice(1);
    })
    return outputStr;
}