// Tela 1 

const InputAltura = document.querySelector("#Altura");
const InputPeso = document.querySelector("#Peso");

const BtnCalcular = document.querySelector("#Calcular");
const BtnLimpar = document.querySelector("#Limpar");

const TelaOne = document.querySelector("#Tela-1");
const Digite = document.querySelector("#Digite")

// Tela 2 

const TelaTwo = document.querySelector("#Tela-2");

const BtnVoltar =document.querySelector("#Voltar");

const TituloResultado = document.querySelector(".Titulo")
const SpanSituação = document.querySelector(".SubTitulo")


CalculoIMC = (Peso, Altura) => {
    const IMC = Peso/(Altura*Altura)
    return IMC
}

function TrocarVisibilidade() {

    TelaOne.classList.toggle("hide");
    TelaTwo.classList.toggle("hide");

}

function SituaçãoAtual(Resultado) {
    if(Resultado <= 18.5) {
        SpanSituação.textContent = `Situação: Magreza`;
        console.log("1")
    } else if( Resultado <= 24.9 ){
        SpanSituação.textContent = `Situação: Normal`;
        console.log("2")
    } else if( Resultado <= 29.9 ){
        SpanSituação.textContent = `Situação: Sobrepeso`;
        console.log("3")
    } else if( Resultado <= 39.9 ){
        SpanSituação.textContent = `Situação: Obesidade`;
        console.log("4")
    } else {
        SpanSituação.textContent = `Situação: Obesidade Grave`;
        console.log("5")
    }
}

function validação(Altura, Peso) {
    const x = 0;
    if(Altura === "" || Peso === ""){
        Digite.textContent = `Digite os valores!`;
        x = 1;
    }
    return x;
}

BtnCalcular.addEventListener("click", () => {


    const Altura = InputAltura.value;
    const Peso = InputPeso.value;

    if(validação(Altura, Peso) === 1 ){
        return
    } 

    const Resultado = CalculoIMC(Peso, Altura);

    console.log(Resultado)

    TituloResultado.textContent = `Seu IMC e: ${Resultado.toFixed(2)}`;

    SituaçãoAtual(Resultado);

    TrocarVisibilidade();

})

BtnVoltar.addEventListener("click", () => {

    console.log("Voltei!")

    InputAltura.value = '';
    InputPeso.value = '';
    Digite.textContent = ``;


    TrocarVisibilidade();

})
