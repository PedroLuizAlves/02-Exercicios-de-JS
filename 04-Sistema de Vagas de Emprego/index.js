let vagas = []

function adicionarVaga(){
    const nome=prompt("Digite o nome da vaga")
    const descricao=prompt("Digite uma descrição para esta vaga")
    const dataLimite=prompt("Digite uma data limite para esta vaga")

    const confirmacao=confirm(
        "Deseja salvar esta vaga? " + 
        "\nNome: " + nome +
        "\nDescrição: "+ descricao +
        "\nData Limite: "+ dataLimite
    )

    if(confirmacao){
        let vaga= {nome, descricao, dataLimite, candidatos: []}
        vagas.push(vaga)
        alert("Vaga adicionada!")
    }
}

function adicionarCandidato(){
    const candidato= prompt("Digite o nome do Candidato.")
    const indice=prompt("Digite o indice da vaga de interesse do candidato.")
    const vaga= vagas[indice]

    const confirmacao=confirm(
        "Deseja cadastrar o candidato " + candidato+
        " para a vaga: " + indice +
        "\nNome: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao + 
        "\nData limite: " + vaga.dataLimite
    )

    if(confirmacao){
        vaga.candidatos.push(candidato)
        alert("Candidato salvo!")
    }
}

function listarVagas(){
    const vagaEmTexto= vagas.reduce(function(textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += "\nNmr de candidatos: " + vaga.candidatos.length + "\n"
        return textoFinal
    }, "")
    alert(vagaEmTexto)
}

function exibirVaga(){
    const indice=prompt("Digite o indice da vaga.")
    const vaga=vagas[indice]

    const candidatosEmTexto= vaga.candidatos.reduce(function(textoFinal, candidato){
        textoFinal += "\n> " + candidato
        return textoFinal
    }, "")

    alert(
        "Indice da vaga: " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: "+ vaga.descricao +
        "\nData Limite: "+ vaga.dataLimite +
        "\nNumero de candidatos: "+ vaga.candidatos.length +
        "\nCandidatos: " + candidatosEmTexto
    )
}

function excluirVaga(){
    const indice=prompt("Digite o indice da vaga. ")
    const vaga= vagas[indice]

    const confirmacao= confirm(
        "Deseja deletar a vaga: "+ indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite
    )

    if(confirmacao){
        vagas.splice(indice, 1)
        alert("Vaga deletada!")
    }
}

function exibirMenu(){
    let opcao= prompt(
        "*Vagas de emprego*" +
        "\nEscolha uma das opções abaixo: " + 
        "\n\n1. Adicionar uma vaga. " +
        "\n2. Adicionar um candidato. " +
        "\n3. Listar vagas. " + 
        "\n4. Exibir vaga. " +
        "\n5. Excluir vaga. " + 
        "\n6. Sair. "
    )
    return opcao
}

function executar(){
    let opcao= ""

    do{
        opcao=exibirMenu()

        switch(opcao){
            case "1":
                adicionarVaga()
                break
            case "2":
                adicionarCandidato()
                break
            case "3":
                listarVagas()
                break
            case "4":
                exibirVaga()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Encerrando...")
                break
            default :
            alert("Opção invalida!")
        }

    }while(opcao !== "6")
}

executar()
