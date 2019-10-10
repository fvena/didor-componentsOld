---
device: true
---

# Dialog

### Instalación

```javascript
import { Dialog } from 'didor';

Vue.use(Dialog);
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
<az-popup v-model="show" @hide="show = false">
  ...
</az-popup>

<!-- Animación fade -->
<az-popup v-model="show" animation="fade" @hide="show = false">
  ...
</az-popup>
```


---

### API Popup

| Attribute   | Description                                | Type      | Default   |
| ----------- | ------------------------------------------ | --------- | --------- |
| v-model | Identifica si se muestra el popup | `Boolean` | `false` |
| width | Indica la anchura del modal | `String` | `90%` |
| height | Indica la altura del modal | `String` | `initial` |
| duration | Indica la duración de la animación en milisegundos | `Number` | `300` |
| animation | Indica el tipo de animación<br>`zoom` `fade` `flip` `door` `slideDown` `slideUp` | `String` | `zoom` |
| mask | Indica si se muestra una máscara de fondo | `Boolean` | `false` |
| closeButton | Indica si se muestra el botón de cerrar | `Boolean` | `true` |
| closeOnEsc | Indica si el popup se cierra al pulsar la tecla `esc` | `Boolean` | `false` |
| closeOnClickMask | Indica si se cierra el popup al hacer click en la máscara | `Boolean` | `fatruese` |
| className | Permite añadir una clase al modal para editarlo | `String` | -- |

### Eventos Popup

| Evento | Descripción                                             | Argumento |
| ------ | ------------------------------------------------------- | --------- |
| hide | Se lanza cuando se cierra el Popup y cuando se hace click sobre la máscara |          |
| clickMask | Se lanza cuando se hace click en la máscara |          |

### Slots

| Nombre | Descripción                                             |
| ------ | ------------------------------------------------------- |
| default | Contenido del modal |
