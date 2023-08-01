let input = document.querySelector('input');
let buttonEvent = document.querySelector('button');
let divs = document.querySelectorAll('.resultItem')

let buscarCep = async (cep) => {
    try {
        let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let json = await response.json()

        console.log(json)

        for (let div of divs) {
            document.querySelector('#estado').innerHTML = `${json.uf}`;
            document.querySelector('#cidade').innerHTML = `${json.localidade}`;
            document.querySelector('#bairro').innerHTML = `${json.bairro}`;
            document.querySelector('#logradouro').innerHTML = `${json.logradouro}`;
        }
        input.value = '';
    } catch (error) {
        return console.log(error)
    }

}

buttonEvent.addEventListener('click', () => {
    let cep = input.value;
    buscarCep(cep);
})