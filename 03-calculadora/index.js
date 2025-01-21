function calcularTriangulo(){
    const altura =parseFloat(prompt("Digite a ALTURA do triangulo."))
    const base= parseFloat(prompt("Digite a BASE do triangulo."))
    return altura * base /2
}

function calcularRetangulo(){
    const base=parseFloat(prompt("Digite a BASE do retangulo."))
    const altura=parseFloat(prompt("Digite a ALTURA do retangulo."))
    return base * altura
}

function calcularQuadrado(){
    const lado=parseFloat(prompt("Digite o tamanho dos LADOS do quadrado."))
    return lado * lado 
}

function calcularTrapezio(){
    const maior=parseFloat(prompt("Digite o tamanho da  BASE MAIOR do trapézio."))
    const menor=parseFloat(prompt("Digite o tamanho da BASE MENOR do trapézio."))
    const altura=parseFloat(prompt("Digite a ALTURA do trapézio."))
    return (maior * menor) * altura /2
}

function calcularCirculo(){
    const raio=parseFloat(prompt("Digite o RAIO da circunferência."))
    return 3.14 * raio * raio
}

function exibirMenu(){
    return prompt(
        "CALCULADORA GEOMÉTRICA!" +
        "\nEscolha uma das opções abaixo:" +
        "\n1.Para calcular a area do TRIÂNGULO."+
        "\n2.Para calcular a area do RETÂNGULO." +
        "\n3.Para calcular a area do QUADRADO." +
        "\n4.Para calcular a área do TRAPÉZIO." +
        "\n5.Para calcular a área da CIRCUNFERÊNCIA." +
        "\n6.SAIR..."
    )
}

function executar(){
    let opcao= ""
    
    do {
        opcao= exibirMenu()
        let resultado

        
        switch(opcao){
            case "1":
                resultado= calcularTriangulo()
            break
            case "2":
                resultado= calcularRetangulo()
            break
            case "3":
                resultado= calcularQuadrado()
            break
            case "4":
                resultado= calcularTrapezio()
            break
            case "5":
                resultado= calcularCirculo()
            break
            case "6":
                alert("Saindo...")
            break
            default:
                alert("Opção inválida!")
            break
        }

        if(resultado){
            alert("Resultado do calculo da area é: " + resultado)
        }

    }while (opcao !== "6")
}

executar()