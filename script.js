const search = () => {
    const string = document.getElementById('Search').value.toLowerCase()
    const titulos = document.querySelectorAll('#Titulo')
    for (let i = 0; i < titulos.length; i++) {
        const titulo = titulos[i].textContent.toLowerCase()
        if (titulo.includes(string)) {
            console.log(`O título "${titulo}" contém a string "${string}"`)
        }
    }
};
