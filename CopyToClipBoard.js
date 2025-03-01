function myFunction(id) {
    var copyText = document.getElementById(id);
    var value = copyText.getAttribute("value");
    navigator.clipboard.writeText(value).then(function() {
        alert("Copied to clipboard: " + value);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}