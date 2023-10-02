let login = [
    {
        login: "teste@gmail.com",
        senha: "teste@123"
    }
]

let email = document.getElementById ("email");
let senha = document.getElementById ("password");

let buttom = document.getElementById ("buttom-login")

buttom.addEventListener ("click", function() {
    if (email.value == login[0].login && senha.value == login[0].senha) {
        alert ('Bem vindo')
    } else {
        alert ("Senha Incorreta, tente novamente")
    }
} )