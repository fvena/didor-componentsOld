---
device: true
---

# Input

### Instalación

```javascript
import { Input } from 'didor';

Vue.use(Input);
```

---

### Uso

#### Uso básico

El valor del input se obtine con `v-model`.

``` html
<az-input v-model="name" placeholder="Nombre del usuario"/>
```

#### Input personalizado

Utiliza la propiedad `type` para definir los diferentes tipos de input.

``` html
<az-input
  v-model="username"
  required
  clearable
  label="Username"
  right-icon="question-o"
  placeholder="Username"
  @click-right-icon="$toast('question')"
/>

<az-input
  v-model="password"
  type="password"
  label="Password"
  placeholder="Password"
  required
/>
```
