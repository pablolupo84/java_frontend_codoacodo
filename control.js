var button = document.getElementById('button');
var pass = document.getElementById('pass');
var user = document.getElementById('nameUsuario');
var regext = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;


button.addEventListener('click', function(e){

    if(nameUsuario.value === ''){
        alert('El campo Usuario es obligatorio!')
          e.preventDefault();
          return false;
    }else{
        if(!regext.test(nameUsuario.value)){

            alert('Debes colocar una dirección de mail valida');
            e.preventDefault();
            return false;
        }
    }
    if(pass.value === ''){
        alert('El campo contraseña es obligatorio!');
        e.preventDefault();
        return false;
    }
    return true;
});