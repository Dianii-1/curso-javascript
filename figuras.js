// codigo del cuadrado

console.group("Cuadrados");

function perimetroCuadrado (lado){
    return lado * 4;
} 

function areaCuadrado (lado){
    return lado * lado;
} 

console.groupEnd();

// codigo del triangulo

console.group("Triangulos");

function perimetroTriangulo (lado1, lado2, base){
    return (Number(lado1) + Number(lado2) + Number(base));
} 

function areaTriangulo (base, altura){
    return (base*altura)/2
}

console.groupEnd();

// codigo del circulo

console.group("Circulos");

function diametroCirculo (radio){
    return radio*2;
} 

const pi = Math.PI;
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
} 

function areaCirculo (radio){
    return (radio * radio)*pi;
}

console.groupEnd();

// aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function trianguloIsoseles(lado1, lado2, base) {
    if (lado1 === lado2 && lado1 != base){
        const altura = Math.sqrt(lado1**2 - (base**2/4));
        return altura;
    }else{
        alert("no es triangulo isoseles");
    }
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputLado1");
    const input2 = document.getElementById("inputLado2");
    const inputBa = document.getElementById("inputBase");
    const lado1 = input1.value;
    const lado2 = input2.value;
    const base = inputBa.value;
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAlturaTriangulo(){
    const input1 = document.getElementById("inputLado1");
    const input2 = document.getElementById("inputLado2");
    const inputBa = document.getElementById("inputBase");
    const lado1 = input1.value;
    const lado2 = input2.value;
    const base = inputBa.value;
    const altura = trianguloIsoseles(lado1, lado2, base);
    alert(altura);
    return altura;
}

function calcularAreaTriangulo(){
    const altura = calcularAlturaTriangulo();
    const inputBa = document.getElementById("inputBase");
    const base = inputBa.value;
    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcularDiametroCirculo(){
    const inputRa = document.getElementById("inputRadio");
    const radio = inputRa.value;
    const diametro = diametroCirculo(radio);
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const inputRa = document.getElementById("inputRadio");
    const radio = inputRa.value;
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const inputRa = document.getElementById("inputRadio");
    const radio = inputRa.value;
    const area = areaCirculo(radio);
    alert(area);
}