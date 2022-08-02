# README - Live Code e Chat

Nessa live alguns aspectos básicos de HTML,CSS e Javascript.

## Materiais
Criando um arquivo html para página de um site e código javascript.

1. HTML - Introdução ao Frontend https://cursos.timtec.com.br/course/html5/intro

2. Desenvolvimento de Sites https://cursos.timtec.com.br/course/desenvolvimento-de-front-end/intro


```html
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>`substitute(Filename('', 'Page Title'), '^.', '\u&', '')`</title>
    <style>
        /*CSS code*/
        body {
            padding: 40px;
            color: black;
            margin:auto;
        }
        #name-input{
            padding:0;
        }
        
        #msg{
            display: flex;
            flex-direction: row;
            padding: 10px 0 10px 0;
        }

        .name{
        }

        .name-msg{
        }
        #name-input{
            color: black;
            width: auto;
            height: 40px;
        }
        button {
            color: black;
            background-color: whitesmoke;
            height: 40px;
            border-radius: 6px;
            border-color: none;
            width: 60px;
        }
    </style>
</head>
<body>
    <h2>Welcome</h2>
    <p>What's Your Name?</p>
    <input id="name-input">
    <button id="button-name" onclick="insert();">Send</button>
    <div id="msg">
        <div class="name">
        Name:
        </div>
        <div id="your-name" class="name-msg">
        </div>
    </div>
    <script>
        
        function insert(){
            var btn = document.querySelector('button-name');
            var inpt = document.querySelector("input");
            var output = document.getElementById("your-name")
            var reply = document.getElementById("boas-vindas");
            output.innerHTML =  " " + inpt.value;
            reply.innerHTML = " <br><p> Bem vindo" + inpt.value + "</p>" 
            console.log(inpt.value);
            console.log(reply.value);

        }
    </script>
</body>
</html>
```