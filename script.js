//1. Criando a classe Tarefa :
//Serve como um modelo para criar tarefas
//Exemplo :
//const tarefa1 = new Tarefa("Estudar javascript")
class Tarefa {
    constructor(texto) {
        //o construtor é executado automaticamente
        //quando usamos "newTarefa"
        this.texto = texto
        this.concluida = false
    }

    // Metodo toggle()
    //è uma palavra em inglês muito usada naprogramação
    //significa = Alternar/inverter estado
    //exemplo :
    //ligado -> desligado
    //aberto -> fechado
    //true -> false
    toggle() {
        //o operador ! significa "inverter"
        this.concluida = !this.concluida;
    }
}

// Classe App 
// Essa clsse controla toda a aplicação
// Ela é responsavel por :
// - Adicionar tarefas
// - Remover tarefas
// - Marcar tarefa
// - Atualizar a tela
class App {
    constructor() {
        //Array de tarefas
        //Aqui ficam amarzenados todos os objetos criados
        //Exemplo :
        //tarefa {texto: "1.Estudar, concluida : false"},
        //tarefa {texto: "2.Treinar, concluida : true"}.
        this.tarefas = [];
    }
    adicionarTarefa() {
        //pega o elemento input do html 
        const input = document.getElementById("tarefaInput");
        //pega o texto digitado pelo usuario
        const texto = input.value;
        //Verifica se o usuario deixou vazio
        //se vazio === return, encerrar o metodo imediamente

        if (texto === "") return;
        //Cria um novo objeto da classe Tarefa
        const novaTarefa = new Tarefa(texto);

        //Adiciona o objeto dentro do array tarefas
        this.tarefas.push(novaTarefa)

        //Limpa o campo input
        input.value = "";

        //Atualiza a tela
        this.render();
    }

    render() {
        //Pega a lista do html
        const lista = document.getElementById("lista");

        //Isso evita duplicações na tela 
        lista.innerHTML = "";

        this.tarefas.forEach((tarefa, index) => {
            const li = document.createElement("li");

            //innerHTML adiciona html dentro da li
            li.innerHTML = `

        <!--
          Se tarefa.concluida for TRUE:
          adiciona a classe "concluida"

          Se for FALSE:
          não adiciona nada
        -->

        <span class="${tarefa.concluida ? "concluida" : ""}">
          ${tarefa.texto}
        </span>

        <div>

          <!--
            Botão para concluir/desmarcar tarefa
          -->
          <button onclick="app.toggleTarefa(${index})">
            ✔
          </button>

          <!--
            Botão para remover tarefa
          -->
          <button onclick="app.removerTarefa(${index})">
            🗑️
          </button>

        </div>
      `;
            //adiciona a <li> dentro da lista dentro de <ul>
            lista.appendChild(li);
        });

    }
    toggleTarefa(index) {
        this.tarefas[index].toggle();
        this.render();
    }

    removerTarefa(index) {
        this.tarefas.splice(index, 1);
        this.render();
    }
}

// ------------------------
// CRIAÇÃO DO OBJETO PRINCIPAL
// Aqui estamos criando UM OBJETO da clsse App
// Esse objeto sera responsavel por controlar
// toda a aplicação.
// Depois disso podemos usar:
// app.adicionarTarefa()
// app.render)()
// app.removerTarefa()
//------------------------
const app = new App();