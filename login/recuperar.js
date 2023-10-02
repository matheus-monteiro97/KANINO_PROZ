let login = [
    {
        login: "teste@gmail.com",
        senha: "teste@123"
    }
]

let email = document.getElementById ("email");
let senha = document.getElementById ("password");
let senhaRecuperada = document.getElementById ("password2")

let buttomRec = document.getElementById ("buttom-rec")

buttomRec.addEventListener ("click", function() {
    if (email.value == login[0].login && senha.value == senhaRecuperada.value) {
        alert ('Nova Senha Confirmada')
        login[0].senha = senha.value
    } else {
        alert ("Senha Incorreta, tente novamente")
    }
} )