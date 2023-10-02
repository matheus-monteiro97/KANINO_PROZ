const elementosBusca = [
    {
        nome: "Nome",
        logradouro: "Nome da rua ou avenida",
        numero: "000",
        complemento: "A",
        bairro: "Bairro",
        cep: "00000-000",
        cidade: "Cidade",
        uf: "UF",
        telefone: "(00) 90000-0000",
        email: "emailusuario@gmail.com",
        descricao: "Veterinário especialista em animais de pequeno porte, realizo consultas gratuitas para PET's de pessoas com baixa renda mediante agendamento"
    },

    {
        nome: "Nome",
        logradouro: "Nome da rua ou avenida",
        numero: "000",
        complemento: "A",
        bairro: "Bairro",
        cep: "00000-000",
        cidade: "Cidade",
        uf: "UF",
        telefone: "(00) 90000-0000",
        email: "emailusuario@gmail.com",
        descricao: "Veterinário especialista em animais de grande porte, realizo consultas gratuitas para PET's de pessoas com baixa renda mediante agendamento"
    },

    {
        nome: "Nome",
        logradouro: "Nome da rua ou avenida",
        numero: "000",
        complemento: "A",
        bairro: "Bairro",
        cep: "00000-000",
        cidade: "Cidade",
        uf: "UF",
        telefone: "(00) 90000-0000",
        email: "emailusuario@gmail.com",
        descricao: "Veterinário especialista em animais de pequeno porte, realizo consultas gratuitas para PET's de pessoas com baixa renda mediante agendamento"
    },

    {
        nome: "Nome",
        logradouro: "Nome da rua ou avenida",
        numero: "000",
        complemento: "A",
        bairro: "Bairro",
        cep: "00000-000",
        cidade: "Cidade",
        uf: "UF",
        telefone: "(00) 90000-0000",
        email: "emailusuario@gmail.com",
        descricao: "Veterinário especialista em animais de grande porte, realizo consultas gratuitas para PET's de pessoas com baixa renda mediante agendamento"
    }
]

for (let i = 0; i < elementosBusca.length; i++){

    let article = document.createElement("article")


    article.innerHTML = `
    <h3> ${elementosBusca[i].nome} </h3>
    <p>${elementosBusca[i].logradouro}, ${elementosBusca[i].numero}, ${elementosBusca[i].bairro}, ${elementosBusca[i].cep}. ${elementosBusca[i].cidade}/${elementosBusca[i].uf}.</p>
    <p>${elementosBusca[i].telefone} / ${elementosBusca[i].email}</p>
    <p>${elementosBusca[i].descricao}</p>
    `
    
    let main = document.querySelector('main')
    
    main.appendChild(article)

}