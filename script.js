const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.elements['nome'].value;
    const sobrenome = form.elements['sobrenome'].value;
    const email = form.elements['email'].value;
    const idade = form.elements['idade'].value;

    const result = `Dados obrigatórios completos! 
Nome: ${name}\nSobrenome: ${sobrenome}\nE-mail: ${email}\nIdade: ${idade}`;
    alert(result);

});

