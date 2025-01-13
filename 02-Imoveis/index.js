let imoveis= []
let opcao=""

do{
    opcao=prompt(
        "Ola, seja bem-vindo(a)\n"+"Numero de imoveis: " + imoveis.length +"\nEscolha uma das opções abaixo: \n1.Adicionar um novo imóvel.\n2.Consultar imoveis salvos.\n3.Sair"
    )
    switch(opcao){
        case "1":
            let imovel= {}
            imovel.proprietario=prompt("Qual o nome do proprietário? ")
            imovel.quartos=prompt("Qual a quantidade de quartos no imóvel? ")
            imovel.banheiros=prompt("Qual a quantiade de banheiros no imovel? ")
            imovel.garagem=prompt("O imóvel possui garagem? (SIM/NÃO) ")

            const confirmacao= confirm(
                "Deseja salvar este imóvel? "+
                "\nProprietario: "+ imovel.proprietario + 
                "\nNumero de quartos: " + imovel.quartos + 
                "\nNumero de banheiros " + imovel.banheiros + 
                "\nPossui garagem? " + imovel.garagem
            )
            if (confirmacao){
                imoveis.push(imovel)
                alert("O imóvel foi salvo!")
            }else{
                alert("Cancelado!")
            }
            break
        case "2":
            for(let i=0 ; i < imoveis.length; i++){
                alert( "Imóvel "+ (i+1) + "\nProprietário: " + imoveis[i].proprietario +
                "\nNumero de quartos: "+ imoveis[i].quartos + 
                "\nNumero de banheiros: "+ imoveis[i].banheiros +
                "\nPossui garagem? " + imoveis[i].garagem
            )
            }
            break
        case "3":
            alert("encerrando...")
        break
        default:
            alert("Opção invalida!")
        break
    }
}while (opcao !== "3")