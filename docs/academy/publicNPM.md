---
device: false
---

# Como crear y publicar un módulo NPM

Para crear y publicar un módulo NPM solo es necesario un archivo package.json con las propiedades name y version. En este tutorial añadiremos algunos elementos más para hacerlo más real:

@[toc]

## Paso 1: Cuenta en npm

Necesitas tener una. Si aun no la tienes, [registrate](https://www.npmjs.com/signup).

## Paso 2: Loguearte

Para poder publicar desde tu equipo, necesitas loguearte. Ve al terminal y introduce el siguiente comando para loguearte:

```bash
npm add user
```

También puedes utilizar el siguiente comando:

```bash
npm login
```

Introduce tu nombre de usuario, contraseña y correo electrónico cuando te lo pregunte, si has introducido los datos correctamente verás el siguiente mensaje:

```bash
Logged in as fvena32 on https://registry.npmjs.org/.
```

## Paso 3: Crear un paquete

Primero crearemos un directorio donde guardar nuestro código y una vez dentro crearemos un archivo **package.json**. Si sueles utilizar [Node.js](https://en.wikipedia.org/wiki/Node.js) estarás familiarizado con el. Es un archivo [JSON](https://en.wikipedia.org/wiki/JSON) con información de nuestro proyecto. Por ahora nos vamos a centrar en dos de ellos.

> npm incorpora un generador de paquetes que crea y configura nuestro archivo **package.json**. Para hacer el tutorial más didactico lo haremos a mano, pero en un futuro te recomiendo utilizar el siguiente comando: `npm init`

```bash
# Creamos un directorio
mkdir tiny

# Entramos en el directorioy creamos el archivo package.json
cd tiny && touch package.json
```

## Paso 4: Publicar nuestro paquete

Para publicar un paquete, solo es necesario añadir un par de propiedades a nuestro archivo packaje.json. Abrelo con tu [IDE](https://es.wikipedia.org/wiki/Entorno_de_desarrollo_integrado) favorito y añade el siguiente código:

> **Anotación:** Estamos viendo como publicar un paquete con la configuración mínima. Para que sea realmente útil, necesitaría algunos parámetros más que veremos más adelante.

```json
{
  "name": "@fvena32/tiny",
  "version": "1.0.0"
}
```

En primer lugar hemos añadido el nombre del proyecto, al utilizar **@fvena32/tiny** en lugar de solo **tiny**, hemos creado un paquete bajo el **scope** de nuestro nombre de usuario. También podríamos hacerlo con el nombre de nuestra organización **@didor/tiny**. Esto nos permite poder utilizar cualquier nombre para nuestro paquete sin tener problemas porque ya esté cogido, por ejemplo el paquete **[tiny](https://www.npmjs.com/package/tiny)** ya existe en npm.

En segundo lugar hemos añadido la versión de nuestro paquete. Todos los paquetes deberían seguir un sistema de versionado semántico **[SemVer](https://semver.org/)**, de esta forma los desarrolladores que utilicen nuestro paquete sabran si pueden actualizarlo de forma segura.

<!-- markdownlint-disable MD001-->

> ##### v.1.3.7 (v.Mayor.Menor.Parche)
>
> - **Mayor** - Versión cuando los cambios son incompatibles con versiones anteriores.
> - **Menor** - Versión cuando añades nueva funcionalidad y es compatible con versiones anteriores.
> - **Parche** - Versión cuando se corrijen errores.

<!-- markdownlint-disable MD031-->

Por último publicamos el paquete:

```bash{2,5}
### Publicar un paquete privado
npm publish

### Publicar un paquete público
npm publish --access=public
```

Por defecto todos los paquetes se publican como privados, aunque necesitas una cuenta de pago para poder tener paquetes privados. Si intentas publicar tu paquete como privado pero no tienes licencia te dará el siguiente error:

```bash
npm ERR! publish Failed PUT 402
npm ERR! code E402
npm ERR! You must sign up for private packages : @fvena/tiny
```

> **Nota:** Solo es necesario indicar que el paquete es público la primera vez que se publica, el resto de las publicaciones bastará con poner **npm publish**

Si todo ha ido bien, nuestro paquete se ha publicado y veremos un mensaje similar a este:

```bash
+ @fvena/tiny@1.0.0
```

También recibirás un email indicando que has subido una nueva versión.

## Paso 4: Añadir un repositorio

Creamos un nuevo repositorio vacio para nuestro proyecto, para este tutorial utilizaré github:

![Crear repositorio](/docs/academy/assets/images/newRepo.png)

Seguimos las indicaciones y realizamos nuestro primer commit:

```bash {3,5}
git init
git add package.json
git commit -m "first commit"
git remote add origin https://github.com/fvena/tiny.git
git push -u origin master
```

## Paso 5: Añadir un README

Tanto si vamos a usar nuestro paquete nosotros solos, como si vamos a compartirlo, deberiamos de documentar como se utiliza nuestro paquete. Por convenio, se suele utilizar el archivo README.md con este fin, y por defecto los repositorios lo muestran como página de inicio.

Creamos el archivo README.md y añadimos el siguiente código.

````markdown
# @fvena/tiny

Removes all spaces from a string.

## Install

```
$ npm install @fvena/tiny
```

## Usage

```js
const tiny = require('@fvena/tiny');

tiny('So much space!');
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
````

## Paso 6: Badges

Mediante los badges podemos mostrar información relevante sobre nuestro proyecto de una forma cool. En la página [shields.io](https://shields.io/) podremos crear nuestros badges, existen multitud diferentes y con muchas opciones de personalización.

En principio vamos añadir un par de ellos, pero eres libre de elegir y personalizar los que consideres más interesantes para tu proyecto.

El primer badge que vamos a añadir es el de la versión de nuestro paquete

[article](https://medium.freecodecamp.org/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78)
