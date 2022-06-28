function acesso(fomr) {

    if (form.nome.value == "diogobandeira" && form.senha.value == "12345678" ||
        form.nome.value == "victorjose" && form.senha.value == "12345678"
    ) {
        location = "home.html"
    }
    else {
        form.nome.velue == ""
        form.senha.value == ""
        alert("Dados incorretos!")
    }
}