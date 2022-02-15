
function calcularModa(array){
    const objeto = {};
    array.map(
        function (elemento){
            if (objeto[elemento]){
                objeto[elemento] += 1;
            }else{
                objeto[elemento] = 1;
            }
        }
    );
    
    const array2 = Object.entries(objeto).sort(
        function (valorAcumulado, valorNuevo){
            return valorAcumulado[1] - valorNuevo[1];
        }
    );

    const moda = array2[array2.length -1];

    return moda;
}