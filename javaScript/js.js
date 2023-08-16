document.addEventListener("DOMContentLoaded", function() {

    function validarNumero(numero, inputId) {
        const mensajeError = document.getElementById(`error${inputId}`);
        if (numero   < 0 || numero > 45 || String(numero).length > 2) {
            mensajeError.innerHTML = `<box-icon name='error-circle' type='solid' color='#bb1212'></box-icon><p>Error el numero: ${numero} debe estar entre 0 y 45</p>`;
            mensajeError.style.display = "flex";
            return false;
        }
        mensajeError.style.display = "none";
        return true;
    }

    function mostrarMensajeError(mensaje) {
        const mensajeErrorContainer = document.getElementById("mensajeErrorContainer");
        mensajeErrorContainer.innerHTML = `<h1>${mensaje}</h1>`;
    }

    function ocultarMensajeError() {
        const mensajeErrorContainer = document.getElementById("mensajeErrorContainer");
        mensajeErrorContainer.innerHTML = "";
    }

    function inputVacio(input) {
        return input.value === '';
    }
    
    function verificarInputsVacios() {
        const inputs = document.querySelectorAll('.input');
        for (const input of inputs) {
            if (inputVacio(input)) {
                mostrarMensajeError('Error: Por favor, ingresa un número en todos los campos.');
                return false;
            }
        }
        ocultarMensajeError(); 
        return true;
    };

    function numerosUsuario(){  

        const mensajeError = document.getElementsByClassName("mensajeError");

        mensajeError.innerHTML = ""; 
        if (!verificarInputsVacios()) {
            return;
        }
        const numero1 = parseInt(document.getElementById('number1').value);

        if (!validarNumero(numero1,"Number1")){
            return;
        }
        if (inputVacio(document.getElementById('number1'))) {
            return;
        }
        const numero2 = parseInt(document.getElementById('number2').value);
        if (!validarNumero(numero2,"Number2")) {
            return;
        }   
        const numero3 = parseInt(document.getElementById('number3').value);
        if (!validarNumero(numero3,"Number3")) {
            return;
        }
        const numero4 = parseInt(document.getElementById('number4').value);
        if (!validarNumero(numero4,"Number4")) {
            return;
        }
        const numero5 = parseInt(document.getElementById('number5').value);
        if (!validarNumero(numero5,"Number5")) {
            return;
        }
        const numero6 = parseInt(document.getElementById('number6').value);
        if (!validarNumero(numero6,"Number6")) {
            return;
        }

        console.log(numero1, numero2, numero3, numero4, numero5, numero6);

        const numerosJugados=[numero1,numero2,numero3,numero4,numero5,numero6];

        const containerNumerosJugados = document.getElementById("containerNumerosJugados");
        containerNumerosJugados.innerHTML = "";

        const h1=document.createElement("h1");
        h1.textContent="Numeros elegidos ";
        h1.classList="tituloContainerNumerosJugados";
        containerNumerosJugados.appendChild(h1);

        numerosJugados.forEach(numero => {
            const h2 = document.createElement("h2");
            h2.textContent = numero;

            containerNumerosJugados.appendChild(h2);
        });
    
        console.log(numerosJugados);
    };

    function mostrarNumerosElegidos(numerosElegidos) {
        const containerNumerosJugados = document.getElementById("containerNumerosJugados");
        containerNumerosJugados.innerHTML = "";

        const h1NumerosElegidos = document.createElement("h1");
        h1NumerosElegidos.textContent = "Números elegidos:";
        h1NumerosElegidos.classList = "tituloContainerNumerosJugados";
        containerNumerosJugados.appendChild(h1NumerosElegidos);
    
        numerosElegidos.forEach(numero => {
            const h2 = document.createElement("h2");
            h2.textContent = numero;
            containerNumerosJugados.appendChild(h2);
        });
    };

    function generarYMostrarNumerosAzar () { 
        const containerNumerosGenerados = document.getElementById("containerNumerosGenerados");

        const numerosGeneradosAlAzar = [];
        for (let i = 0; i < 6; i++) {
            const numeroAleatorio = Math.floor(Math.random() * 46);
            numerosGeneradosAlAzar.push(numeroAleatorio);
        }
        const divContainerNumerosAlAzar = document.createElement("div");
        divContainerNumerosAlAzar.className = "divContainerNumerosAlAzar";
    
        const h1NumerosGenerados = document.createElement("h1");
        h1NumerosGenerados.textContent = "Números generados al azar:";
        h1NumerosGenerados.classList = "tituloContainerNumerosJugados";
        divContainerNumerosAlAzar.appendChild(h1NumerosGenerados);
    
    
        numerosGeneradosAlAzar.forEach(numero => {
            const h2 = document.createElement("h2");
            h2.textContent = numero;
            divContainerNumerosAlAzar.appendChild(h2);
        });
        containerNumerosGenerados.appendChild(divContainerNumerosAlAzar);
    };



    const buttonGenerar = document.getElementById("button-generar");
    buttonGenerar.addEventListener("click", () => {
        const numerosElegidos = [];
        for (let i = 1; i <= 6; i++) {
            const input = document.getElementById(`number${i}`);
            const numero = parseInt(input.value);
            numerosElegidos.push(numero);
        }

        generarYMostrarNumerosAzar();
        mostrarNumerosElegidos(numerosElegidos);
    });
});
