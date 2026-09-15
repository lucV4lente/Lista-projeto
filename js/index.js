let counter = 0;

let input = document.getElementById('addtarefa');

let Btnadd = document.getElementById('addbtn');

let main = document.getElementById('lista');

function adicionarTar(){

    let valorInput = input.value;

    if((valorInput !=="") && (valorInput!==null) && (valorInput!==undefined)){

        ++counter;

        let novoItem = `<div id="${counter}" class="item">

            <div onclick="marcarTarefa(${counter})" class="item-icone">

                <span id="icone_${counter}" class="material-symbols-outlined">circle</span>

            </div>

            <div onclick="marcarTarefa(${counter})" class="item-nome">

                ${valorInput}

            </div>

            <div class="item-botao">

                <button onclick="deletar(${counter})" class="delete"><span class="material-symbols-outlined">delete</span>Deletar</button>

            </div>

        </div>`;

        //Adiciona novo item

        main.innerHTML += novoItem;

        //Zera o input

        input.value = "";

        input.focus();

    }

}

function deletar(id){

    var tarefa = document.getElementById(id);

    tarefa.remove();

}

function marcarTarefa(id){

    var item = document.getElementById(id);

    var classe = item.getAttribute('class');

    console.log(classe);

    if(classe=="item"){

        item.classList.add('selecionado');

        var icone = document.getElementById('icone_' + id);

        icone.textContent = 'check_circle';

    }else{

        item.classList.remove('selecionado');

        var icone = document.getElementById('icone_' + id);

        icone.textContent = 'circle';

    }

}

input.addEventListener("keyup", function(event){

    if(event.key === 'Enter'){

        event.preventDefault();

        Btnadd.click();

    }

});