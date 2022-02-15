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

    const mitadLista = parseInt(lista.length/2);

    function esPar(numero){
        if (numero % 2 ===0){
            return true;
        }else{
            return false;
        }
    }

    let mediana;

    if (esPar(lista.length)){
        elemento1 = lista[mitadLista - 1];
        elemento2 = lista[mitadLista];

        const promedioelemento = calcularMediaAritmetica([elemento1,elemento2]);

        mediana = promedioelemento;

    }else{
        mediana = lista[mitadLista];
    }

    return mediana;
}