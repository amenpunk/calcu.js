function insertar(num){
    document.form.textview.value = document.form.textview.value+num;
}

function igual(){
    var exp = document.form.textview.value;
    
    if(exp){
        document.form.textview.value = eval(exp);
    }
}

function limp(){
    document.form.textview.value ="";
}

function playSound() {
    var sound = document.getElementById("audio");
    sound.play();
}