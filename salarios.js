const salarioCol = salario.map(
    function(persona){
        return persona.salary;
    }
)

const salarioColombia = salarioCol.sort(
    function(salarioA, salarioB){
        return salarioA - salarioB;
    }
)

function esPar (numero){
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function calcularMediana(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const mitad1= lista[mitad - 1];
        const mitad2= lista[mitad];

        const mediana = calcularMediaAritmetica([mitad1,mitad2]);
        return mediana;
    }else{
        const mediana = lista[mitad];
        return mediana;
    }
}