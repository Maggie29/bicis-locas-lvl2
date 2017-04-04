function validateForm(){
  var letras = ^[a-zA-Z_áéíóúñ\s]*$;

  function validateName(){
    var name = document.getElementById("name").value;
    if(name== null || name.length==0 || /^\s+$/.test(name) ){
      alert("Este campo es obligatorio");
      return false
    }else if(!letras.test(name)){
      alert("Este campo solo acepta letras");
      return true;
    }else if(name.chartAt(0) != name.chartAt(0).toUpperCase()){
      alert("El primer caracter con mayúscula")
    }
  }
  validateName();

  function validateLastName(){
    var lastname = document.getElementById("lastname").value;
    if(lastname== null || lastname.length==0 || /^\s+$/.test(lastname) ){
      alert("Este campo es obligatorio");
      return false
    }else if(!letras.test(lastname)){
      alert("Este campo solo acepta letras");
      return true;
    }else if(lastname.chartAt(0) != lastname.chartAt(0).toUpperCase()){
    alert("El primer caracter con mayúscula")
    }
  }
  validateLastName();

  function validateEmail(){
    var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var email = document.getElementById("input-email").value;
    if(email== null || email.length==0 ){
      alert("Este campo es obligatorio");
      return false
    }  else if(emailRegex.test(email)){
      return true;
    }else{
      alert("Este campo debe tener el siguiente formato: name@domain.com")
    }
  }
  validateEmail();

  function validatePassword(){
    var password = document.getElementById("input-password").value;
    if(password== null || password.length==0 ){
      alert("Este campo es obligatorio");
      return false
    }else if(password.length<6){
      alert("Este campo debe tener seis o más caracteres");
    }else if(password=="password" ||password= "123456" ||password= "098754"){
      alert("La contraseña ingresada no es válida");
    }
  }
  validatePassword()

  function functionBike() {
    var bike = document.getElementsByClassName("form-control").selectedIndex;
    if(bike == null || bike == 0 ){
      alert("Debe elegir una opción")
      return false;
    }
  }
  functionBike()
}
validateForm()
