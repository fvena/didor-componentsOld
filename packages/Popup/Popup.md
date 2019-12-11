---
device: true
---

# Popup

### Instalación

```javascript
import { Popup } from 'didor';

Vue.use(Popup);
```

---

### Uso

#### Uso básico

``` html
<az-button @click="show = true">Mostrar modal</az-button>

<az-popup v-model="show" @hide="show = false">
  | Un modal vue con animación.
</az-popup>
```

``` js
export default {
  data() {
    return {
      show: false
    }
  }
}
```

#### Animaciones

``` html
<!-- Animación zoom - Default -->
<az-popup v-model="show" @hide="show = false" bounce>
  ...
</az-popup>

<!-- Animación fade -->
<az-popup v-model="show" transition="fade" @hide="show = false">
  ...
</az-popup>

<!-- Animación door -->
<az-popup v-model="show" transition="door" @hide="show = false" bounce>
  ...
</az-popup>
```

#### Posición

``` html
<az-popup v-model="show" position="top" @hide="show = false">
  ...
</az-popup>
```

#### Pantalla completa

``` html
<az-popup v-model="show" @hide="show = false" full>
  ...
</az-popup>
```

#### Abrir en el body

``` html
<az-popup v-model="show" container="body" @hide="show = false">
  ...
</az-popup>
```

---

### API Popup

| Attribute   | Description                                | Type      | Default   |
| ----------- | ------------------------------------------ | --------- | --------- |
| v-model     | Identifica si se muestra el popup          | `Boolean` | `false`   |
| mask        | Indica si se muestra una máscara de fondo  | `Boolean` | `false`   |
| closeButton | Indica si se muestra el botón de cerrar    | `Boolean` | `true`    |
| closeOnEsc  | Indica si el popup se cierra al pulsar la tecla `esc` | `Boolean` | `false` |
| closeOnClickMask | Indica si se cierra el popup al hacer click en la máscara | `Boolean` | `fatruese` |
| z-index     | Permite el valor del z-index               | `Number`  | `100`     |
| lockScroll  | Bloquea el scroll en el body               | `Boolean` | `true`    |
| container   | Indica el bloque html donde se incluirá el modal | `String`  | -- |
| position    | Indica en que lado se renderizará el modal, por defecto en el centro de la pantalla<br>`top` `right` `bottom` `left` | `String` | -- |
| full        | Indica si el modal debe ocupar toda la pantalla | `Boolean` | `false` |
| duration    | Indica la duración de la animación en milisegundos | `Number` | `300` |
| transition  | Indica el tipo de animación<br>`zoom` `fade` `flip` `door` `slideDown` `slideUp` | `String` | `zoom` |
| bounce      | Indica si la animación debe tener rebote   | `Boolean` | `false` |

### Eventos Popup

| Evento | Descripción                                             | Argumento |
| ------ | ------------------------------------------------------- | --------- |
| hide   | Se lanza cuando se cierra el Popup y cuando se hace click sobre la máscara |          |
| clickMask | Se lanza cuando se hace click en la máscara          |          |

### Slots

| Nombre | Descripción                                             |
| ------ | ------------------------------------------------------- |
| default | Contenido del modal |
