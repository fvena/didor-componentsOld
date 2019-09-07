---
device: true
---

# Avatar

### Instalación

```javascript
import { Avatar } from 'didor';

Vue.use(Avatar);
```

---

### Uso

#### Uso básico

``` html
<az-avatar src="path/to/image.jpg"/>
<az-avatar name="John Doe"/>
<az-avatar/>
```

#### Fallbacks

Si el link de la imagen está roto, se muestran las iniciales (si se ha pasado un nombre), o se muestra el icono de fondo.

``` html
<az-avatar src="/image-not-found.jpg" name="John Doe"/>
<az-avatar src="/image-not-found.jpg"/>
```

#### Clickable

Si queremos tener un feedback cuando hacemos click sobre la imagen.

``` html
<az-avatar name="John Doe" is-link/>
<az-avatar is-link/>
```

#### Tamaños

``` html
<az-avatar src="path/to/image.jpg" size="7rem"/>
<az-avatar src="path/to/image.jpg"/>
<az-avatar src="path/to/image.jpg" size="3rem"/>


<az-avatar name="John Doe" size="7rem"/>
<az-avatar name="John Doe"/>
<az-avatar name="John Doe" size="3rem"/>
```

#### Personalizar colores

Si queremos tener un feedback cuando hacemos click sobre la imagen.

``` html
<az-avatar
  name="John Doe"
  background-color="var(--color-brand)"
  text-color="var(--color-brand-darker)"
  is-link/>
<az-avatar
  background-color="var(--color-brand)"
  text-color="var(--color-brand-darker)"
  is-link/>
```

#### Personalizar icono

Si queremos tener un feedback cuando hacemos click sobre la imagen.

``` html
<az-avatar icon-name="palm" is-link/>
```


---

### API

| Attribute   | Description                                | Type      | Default   |
| ----------- | ------------------------------------------ | --------- | --------- |
| src | Ruta de la imagen | `String` | -- |
| name | Nombre del usuario | `String` | -- |
| size | Tamaño del avatar | `String` | `5rem` |
| backgroundColor | Color de fondo | `String` | `var(--color-white)` |
| textColor | Color del texto | `String` | `var(--color-gray4)` |
| iconName | Nombre del icono | `String` | `user` |
| isLink | Indica si se puede hacer click sobre el | `Boolean` | `false` |

### Eventos

| Evento | Descripción                                             | Argumento |
| ------ | ------------------------------------------------------- | --------- |
| click | Se lanza cuando cambia hacemos click en el avatar | -         |
