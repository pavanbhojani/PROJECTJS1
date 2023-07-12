let userlogin = JSON.parse(localStorage.getItem('checkUserLogin'));
if(!userlogin)
    {
        //user login nathi to index (login) na page ma mokli appo
        window.location.href = "index.html";
    }