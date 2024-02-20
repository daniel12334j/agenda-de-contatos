const form = document.getElementById("ageTele");
const nomes = [];



let linhas = '';

form.addEventListener('submit',function(e){
e.preventDefault();

adicionarLinha();
atualizarTabela();
})


function adicionarLinha(){
const nomeList = document.getElementById('nomePessoa');
const numeroPessoa = document.getElementById('telefone');

if(nomes.includes(nomeList.value)){
    alert(`O nome: ${nomeList.value} já foi inserida`);
        }else{
let linha = `<tr>`
linha += `<td>${nomeList.value}</td>`
linha += `<td>${numeroPessoa.value}</td>`
linha += `</tr>`

linhas += linha
        }
        nomes.push(nomeList.value);

}

function atualizarTabela(){
    const ajax = document.querySelector('tbody');

    ajax.innerHTML = linhas;
}
