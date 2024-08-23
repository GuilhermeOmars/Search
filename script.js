const search = () => {
    string = document.getElementById('Search').value.toUpperCase()
    text = document.textContent
    console.log(string)
    console.log( text)
    for (let i = 0; i < string.length; i++) {
        if (string[i] == text[i]) {
            console.log('sla')
        }
    }
}