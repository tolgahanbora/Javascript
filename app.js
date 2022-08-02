import axios from 'axios'
let getData = async (num) => { //promise ile yaptığımda pek çok kez pending ve unexcepted error aldım, bu şekilde çalışıyor.

    const user = await axios (`https://jsonplaceholder.typicode.com/users/${num}`)
    const user1 =  user.data //axios kütüphanesinde bu şekilde yazılıyor. data ile string formatta yazıyorsun. aksi takdirde stringe çevirmiyor.
    const post = await axios (`https://jsonplaceholder.typicode.com/posts?userId=${num}`)
    const post1 =  post.data
    
    return  user1, post1    //return ederkende await denedim fakat bekleme birşey ifade etmedi.
    

}
console.log(await getData(5)) //konsola yazdırırken await koydum, bu şekilde pendinge düşmedi.bekledikten sonra yazdırdı.
