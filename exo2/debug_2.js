let main = document.getElementById("main");
document.getElementById("main").innerHTML = "Mon nouveau texte !";

main.id = "main2";

main.style.visibility = "hidden";
main.style.display = "block";

let html = main.innerHTML;
alert(html);

if (html) {
    console.log(html);
}
else {
    let test = document.getElementById('test');
    if(test) {
        alert(test);
    }
}




