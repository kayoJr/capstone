var links = document.getElementById('links');
var ham = document.getElementById('ham');
var close = document.getElementById('close');
var eye = document.getElementById('eye');
var pass = document.getElementById('pass')
var conf_eye = document.getElementById('conf-eye');
var conf_pass = document.getElementById('conf-pass')

ham.addEventListener("click", ()=>{
    links.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.classList.add('blur');
})

close.addEventListener("click", ()=>{
    links.style.display = "none"
    document.body.style.overflow = 'visible';
    document.body.classList.remove('blur');
})

eye.addEventListener('click', ()=>{
    if(pass.type === "password"){
        pass.type = "text";
    }else{
        pass.type = "password";
    }
})
conf_eye.addEventListener('click', ()=>{
    if(conf_pass.type === "password"){
        conf_pass.type = "text";
    }else{
        conf_pass.type = "password";
    }
})