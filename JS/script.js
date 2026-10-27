import {
    cadastrar,
    editar,
    deletar,
    pesquisar
} from "./CRUD.js";

const btnCadastro = document.getElementById("btn-cadastrar");
const btnPesquisa = document.getElementById("btn-pesquisar");
const inputCpf = document.getElementById("cpf");
const inputNome = document.getElementById("nome");
const inputPesquisa = document.getElementById("input-pesquisa");
const listaUl = document.getElementById("lista");

async function mostrarLista(filtro = "") {
    listaUl.innerHTML = "";
    const snapshot = await pesquisar();

    if(!snapshot.exists()) {
        listaUl.innerHTML = "<li>Nenhum cadastro encontrado! </li>";
        return;
    }

    snapshot.forEach(function(item) {
        const id = item.key;
        const dados = item.val();
        
        if(filtro && !dados.nome.toLowerCase().includes(filtro.toLowerCase())) {
            return;
        }

        const li = document.createElement("li");
        li.textContent = dados.nome + " - " + dados.cpf;

        const btnEditarItem = document.createElement("button");
        btnEditarItem.textContent = "Editar";
        btnEditarItem.addEventListener("click", async function() {
            const novoNome = prompt("Novo nome: ", dados.nome);
            const novoCpf = prompt("Novo CPF: ", dados.cpf);

            if(novoNome && novoCpf) {
                await editar(id, novoNome, novoCpf);
                alert("Editado com sucesso! ");
                mostrarLista();
            }
        });

        const btnExcluirItem = document.createElement("button");
        btnExcluirItem.textContent = "Excluir";
        btnExcluirItem.addEventListener("click", async function() {
            const confirmar = confirm("Quer mesmo excluir " + dados.nome + "?");
            if(confirmar) {
                await deletar(id);
                alert("Deletado com sucesso! ");
                mostrarLista();
            }
        });

        li.appendChild(btnEditarItem);
        li.appendChild(btnExcluirItem);
        listaUl.appendChild(li);
    });
}

btnCadastro.addEventListener("click", async function() {
    const cpf = inputCpf.value.trim();
    const nome = inputNome.value.trim();

    if(cpf === "" || nome === "") {
        alert("Preencha todos os campos! ");
        return;
    }

    await cadastrar(nome, cpf);
    alert("Cadastrado com sucesso! ");

    inputCpf.value = "";
    inputNome.value = "";
    mostrarLista();

});

btnPesquisa.addEventListener("click", async function() {
    mostrarLista(inputPesquisa.value);
})

inputPesquisa.addEventListener("keyup", async function() {
    mostrarLista(inputPesquisa.value);
})

mostrarLista();