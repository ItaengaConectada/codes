# Live Hacker - Computação: Ideias e Códigos Aleatórios

## Crawler Python e Web

Pegando paginas web e extraindo lista de links do site

Módulos("ferramentas" internas da linguagem python) usados:

* re
* json
* urllib

## Extração do bloco com a tag "a" no html do site que contêm os links.


Expresão regular usada: (<a).+(</a>)

Código python usado

```python
# Importando os módulos para lidar com sites e expressões regulares e estruturas e arquivos json.
import urllib, re, json

url = "link do site aqui"
req_data = ""

with urllib.request.urlopen(url) as f:
	req_data = f.read().decode()
# Usando a expressão regular '(<a).+(</a>)' extrair bloco das tags 'a'
# contendo os links presentes no site e armazenando-os na variável 'alink'
links =  re.finditer( r'(<a).+(</a>)', req_data )

# Lista de links do site.
alink = [ i.group() for i in links ]

# Salvando links
with open('links.html', 'w') as arquivo:
	arquivo.write( '<br><br>'.join( alink ) )
```
