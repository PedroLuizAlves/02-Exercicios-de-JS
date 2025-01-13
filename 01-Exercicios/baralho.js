let baralho = []
let opcao = ""

do{
    opcao=prompt("Quantidades de cartas: "+ baralho.length + "\n\nEscolha uma das opções abaixo: \n1.Adicionar carta. \n2.Puxar uma carta. \n3.Sair.")

    switch(opcao){
        case "1":
            let carta=prompt("Digite qual carta está adicionando: ")
            baralho.push(carta)
            break
        case "2":
            let puxar= baralho.pop()
            if(puxar){
                alert(puxar + " foi removida do baralho!")
            }else{
                alert("Não tem cartas no baralho!")
            }
            break
        case "3":
            alert("Finalizando!")
            break
        default:
            alert("Opção invalida! ")
            break
    }
}while (opcao!=="3")