function myFunction(containerid) {
if (document.selection) { 
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy"); 

} else if (window.getSelection) {
    var range = document.createRange();
     range.selectNode(document.getElementById(containerid));
     window.getSelection().addRange(range);
     document.execCommand("copy");

//    Show "Copied" message
    
//    var d = document.getElementById("copy-result");
//    d.className += " show";
//    d.removeAttribute('id');
}}