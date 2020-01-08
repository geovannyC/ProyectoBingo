const http = new XMLHttpRequest();

const API_URL = "http://localhost:8001/server/bingo";

getDataLogin = () => {
  http.open("GET", API_URL + "?tabla=persona");

  http.responseType = "json";

  http.onload = () => {
    let datos = http.response.datos;

    let correo = document.getElementById("persona_email").value;
    let contraseña = document.getElementById("persona_clave").value;

    console.log(correo);

    datos.forEach(element => {
      if (element.persona_email == correo) {
        console.log(element.persona_email);
      } else {
        return false;
      }
    });
    // for (let i = 0; i<=datos.length; i++){
    //     let correoBD = (http.response).datos[i].persona_email
    //     console.log(correoBD);
    // }
    //let contraseñaBD = http.response.datos[0].persona_clave;

    //   console.log(contraseñaBD);
    //   console.log(correo);
    //   console.log(contraseña);

    // if( correo === correoBD ){
    //     if( contraseña === contraseñaBD ){
    //         alert(correo+contraseña)
    //     }else{
    //         alert("Contraseña incorrecta")
    //     }
    // }else{
    //     alert("Datos incorrectos, intentelo nuevamente")
    // }
    //   document.getElementById('test').innerHTML = usuarioBD;
  };

  http.send();
};
