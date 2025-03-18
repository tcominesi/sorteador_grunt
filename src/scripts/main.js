document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(e) {
        e.preventDefault()
        const numeroMaximo = parseInt(document.getElementById('numero-maximo').value)

        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1
        
        document.getElementById('numero-sorteado').innerText = numeroAleatorio
        document.querySelector('.resultado').style.display = 'block'
    })
})