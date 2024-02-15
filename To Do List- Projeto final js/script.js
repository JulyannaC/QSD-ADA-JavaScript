const listaTarefas = [];
let tarefaId = 0;

function adicionarOuEditarTarefa() {
    const titulo = document.getElementById("title").value;
    const descricao = document.getElementById("descricao").value;

    if (!titulo || !descricao) {
        alert("Por favor preencha todos os campos!");
        return;
    }

    const index = listaTarefas.findIndex((tarefa) => tarefa.id === tarefaId);

    if (index !== -1) {
        listaTarefas[index] = { id: tarefaId, titulo, descricao };
        tarefaId = null;
    } else {
        listaTarefas.push({ id: tarefaId, titulo, descricao });
        tarefaId++;
    }

    document.getElementById("title").value = "";
    document.getElementById("descricao").value = "";

    listarTarefas();
}

function removerTarefa(id) {
    const index = listaTarefas.findIndex((tarefa) => tarefa.id === id);
    listaTarefas.splice(index, 1);
    listarTarefas();
}

function listarTarefas() {
    const tarefas = document.getElementById("tarefas");
    tarefas.innerHTML = "";

    listaTarefas.forEach((tarefa) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${tarefa.titulo}<br>
            ${tarefa.descricao}<br>
            <button class="botao-editar" onclick="obterTarefa(${tarefa.id})">Editar</button>
            <button class="botao-remover" onclick="removerTarefa(${tarefa.id})">Remover</button>
        `;
        tarefas.appendChild(li);
    });
}

function obterTarefa(id) {
    const tarefa = listaTarefas.find((tarefa) => tarefa.id === id);

    if (!tarefa) {
        return null;
    }

    document.getElementById("title").value = tarefa.titulo;
    document.getElementById("descricao").value = tarefa.descricao;

    tarefaId = id;
}

listarTarefas();
