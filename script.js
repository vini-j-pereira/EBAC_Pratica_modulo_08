const form = document.getElementById('formContatos');
const contatos = [];
const contatosNum = [];

let linhas  = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarContato();
    atualizarTabela();

});

function adicionarContato() {
    const inputNomeContato = document.getElementById('NomeContato');
    const inputNumeroContato = document.getElementById('NumeroContato');

    if(contatos.includes(inputNomeContato.value) || contatosNum.includes(parseInt(inputNumeroContato.value))){
        alert('Contato ou Numero ja existente!');
    } else {
        contatos.push(inputNomeContato.value);
        contatosNum.push (parseInt(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `<tr>`;

        linhas += linha; 
    }

    

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizarTabela() {

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}