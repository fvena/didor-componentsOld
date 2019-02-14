# Bloques de Código

Los bloques de código en Markdown están envueltos dentro de 3 comillas tipográficas. Puedes definir el lenguaje del código y resaltar algunas líneas.

Actualmente los lenguajes definidos son:

- `js` `javascript`
- `bash` `sh` `shell`
- `json`
- `pug`
- `scss`
- `markdown`
- `markup` `html`

Algunas combinaciones para resaltar el código

- `{5}` - Resalta la línea 5
- `{5,7}` - Resalta las líneas 5 y 7
- `{5-7}` - Resalta todas las líneas de la 7 a la 7
- `{2,5-7}` - Resalta la línea 2 y todas las líneas de la 5 a la 7

Podemos añadir el nombre del fichero entre corchetes

- `[filename.js]` - Muestra una barra superios con el nombre del archivo

::: customDemo

````markdown
```js{2,5-7}[server.js]
const http = require('http');
const bodyParser = require('body-parser');

http
  .createServer((req, res) => {
    bodyParser.parse(req, (error, body) => {
      res.end(body);
    });
  })
  .listen(3000);
```
````

```js{2,5-7}[server.js]
const http = require('http');
const bodyParser = require('body-parser');

http
  .createServer((req, res) => {
    bodyParser.parse(req, (error, body) => { bodyParser.parse(req, (error, body) => {bodyParser.parse(req, (error, body) => {
      res.end(body);
    });
  })
  .listen(3000);
```

:::
