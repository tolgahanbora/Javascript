
let buton = document.querySelector('#giris')
let eventt = buton.addEventListener("click", clicked);
function clicked() {
let option = {
        Animation : true,
        delay: 2000
      }
let toastDOM = document.querySelector("#to");
let toastElement = new bootstrap.Toast( toastDOM, option) //obje oluşturdu, 
toastElement.show();
      }
// obje oluşturup, bootstrap sağ menünde options kısımından animasyon ve delay eklenebileciğini öğrendim daha sonra methods kısımından .show eklenebileceğini öğrendim