//SIMULADOR DE MENÚ DIARIO


//Saludo de bienvenida al usuario
function saludo(){
    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: ");
    console.log("¡Bienvenido/a ", nombre, " ", apellido, "!", " Este es un simulador de menúes diarios.");
}

saludo();

//Opciones para visualizar el menú
for (i = 0 ; i < 5 ; i = i + 1){

    let horarioMenu = prompt("Seleccione una opción para mostrar el menú: \n 1- Desayuno \n 2- Almuerzo \n 3- Merienda \n 4- Cena \n 5- Salir");

    if(horarioMenu == 1 || horarioMenu == "Desayuno"){
        console.log("Arrancá el día desayunando una infusión con leche y dos tostadas con mermelada y queso crema.");
    }
    else if (horarioMenu == 2 || horarioMenu == "Almuerzo"){
        console.log("Para el almuerzo te aconsejo que ingieras una proteína como pollo y una ensalada de hojas verdes y tomates");
    }
    else if (horarioMenu == 3 || horarioMenu == "Merienda"){
        console.log("A la hora de la merienda podría ser una buena idea tomar un licuado de bananas y una cazuela de frutos secos para seguir el día con mucha energía");
    }
    else if (horarioMenu == 4 || horarioMenu == "Cena"){
        console.log("Una buena opción para la cena son las verduras grilladas combinadas con hummus de garbanzos");
    }
    else if (horarioMenu == 5 || horarioMenu == "Salir"){
        console.log("¡Te espero pronto con más menús!");
        break;
    }
    else {
        console.log("La opción seleccionada es incorrecta");
        i = i - 1;
    }

}

//Función para visualizar el menú completo si el usuario lo desea
function menuCompleto (){
    console.log("Desayuno: Infusión con leche y tostadas con mermelada y queso crema \nAlmuerzo: Pollo con ensalada de hojas verdes y tomates \nMerienda: Licuado de bananas y cazuela de frutos secos \nCena: Verduras grilladas con hummus de garbanzos");
}

let visualizarTodo = prompt("Quieres visualizar el menú completo? SI o NO: ");

if (visualizarTodo == "SI" || visualizarTodo == "Si" || visualizarTodo == "si" ){

    menuCompleto();

}else if (visualizarTodo == "NO" || visualizarTodo == "No" || visualizarTodo == "no" ){

    console.log("Gracias por usar nuestro simulador")

}else{
    console.log("La opción es incorrecta");
}