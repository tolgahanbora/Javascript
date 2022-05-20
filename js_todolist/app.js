let text = document.querySelector('#data')
let toast = document.querySelector('#toast')

document.querySelector('#buton').addEventListener("click", clicked);
function clicked() {
    let liste = document.querySelector('#list')
    let liDOM = document.createElement('li')
    
    liDOM.textContent = text.value;
    liste.append(liDOM)
    


    text.value = ""

}


function bos() {
    if (text.value === "") {
        alert("Listeye boş eleman eklenemez")
    }
}

document.querySelector('#reset').addEventListener("click", clicked2);
function clicked2() {
    let liste = document.querySelector('#list')
    let liDOM = document.querySelector('li')
    liste.removeChild(liDOM)
}

