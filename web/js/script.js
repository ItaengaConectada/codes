/*const app = function (){
    var input_user = '';
    var Name_user = '';
}*/
const app = {
    name_user: '',
    name_bot: '',
    reply_bot: '',
    text_user: '',

    insert: function(){
        var btn = document.querySelector('button-name');
        name_user = document.querySelector("input");
        var output = document.getElementById("your-name")
        reply_bot = document.getElementById("boas-vindas");
        output.innerHTML =  '<i style="padding: 0; margin: 0; display: inline-block;">' + inpt.value + "</i>";
        reply_bot.innerHTML = " Bem vinda " + name_user.value + "" 
        
        console.log(inpt.value);
        console.log(reply_bot.value);
        console.log(output.value);
    }
}