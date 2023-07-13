const button = document.getElementById('submit');
let tname = "";
let pass = "";
button.addEventListener("click", ()=>{
    tname = document.getElementById('textname').value;
    tpass = document.getElementById('textpass').value;
    console.log(tname);
    console.log(tpass);
    document.getElementById('textname').value = "";
    document.getElementById('textpass').value = "";
    
});