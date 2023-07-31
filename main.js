const form = document.getElementById('form-numeros');

function validaNumero( numeroA, numeroB) {
    if (numeroB > numeroA) {
        return true
    }
    else {
        return false
    }
}

form.addEventListener('submit',function(e) {
    e.preventDefault();
    const numeroA = document.getElementById('numeroA');
    const numeroB = document.getElementById('numeroB');
    
    formEValido = validaNumero(numeroA.value, numeroB.value)
    if (formEValido) {
        alert("Número B maior que Número A. Está correto.");
        
        numeroA.value = '';
        numeroB.value = '';
        return true;
    } else {
        alert("Número B menor que Número A. Informe novamente");
        return false; 
    }
})

console.log(form);
