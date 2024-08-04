function gerarTabuada() {
    var res = window.document.getElementById('resultado')
    var n = Number(window.document.getElementById('numero').value)
    if (n == 0) {
        window.alert('Epa ai não né meu amigo!')
    } else {

        res.innerHTML = '';

        for (var i = 1; i <= 10; i++) {
            var linha = document.createElement('p');
            linha.textContent = `${n} x ${i} = ${n * i}`;
            res.appendChild(linha);
        }

    }
}