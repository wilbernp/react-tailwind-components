# Components React

## InputAdornment

### Ejemplo

```js
<Input leftAdornment={<InputAdornment position="left">...</InputAdornment>} />
```

### Props

| Prop name | Type                 | Default   | Description                     |
| --------- | -------------------- | --------- | ------------------------------- |
| position  | `"left"` o `"right"` | `"right"` | Define el tamaño del iconButton |

## IconButton

### Ejemplo

```js
<IconButton size="lg">
  <div className="h-6 w-6 rounded-full bg-gray-700"></div>
</IconButton>
```

### Props

| Prop name | Type                     | Default | Description                     |
| --------- | ------------------------ | ------- | ------------------------------- |
| size      | `"sm"` o `"md"` o `"lg"` | `"md"`  | Define el tamaño del iconButton |

## Input

### Customización

El padding del input en el eje X para cada uno de los tamaños debe ser `width` del componente `InputAdornment` mas `8px`.
Ejemplo:

```js
const inputAdornmentVariants = cva(
  ...,
  {
    ...
    variants: {
      ...
      size: {
        lg: 'h-10 w-10',
      },
    },
  },
);
```

En el ejemplo de arriba el componente `InputAdornment` con un `size` en `lg` tiene un width que corresponde a `40px`, por lo que el paddin del componente `Input` con el `size` en `lg` debe ser de `48px` segun el lado que corresponda:

```js
const inputVariants = cva(
  ...,
  {
    ...
    compoundVariants: [
      { size: 'lg', withLeftAdornment: true, className: 'pl-12' },
      { size: 'lg', withRightAdornment: true, className: 'pr-12' },
    ],
  },
);

```

La propiedad `className` aplicará los estilos segun se cumplan las condiciones de las otras propiedades

### Ejemplo

```js
<Input
  placeholder="Input lg"
  size="lg"
  leftAdornment={
    <InputAdornment position="left">
      <IconButton size="lg">
        <div className="h-6 w-6 rounded-full bg-gray-700"></div>
      </IconButton>
    </InputAdornment>
  }
  rightAdornment={
    <InputAdornment position="right">
      <IconButton size="lg">
        <div className="h-6 w-6 rounded-full bg-gray-700"></div>
      </IconButton>
    </InputAdornment>
  }
/>
```

### Props

| Prop name      | Type                     | Default   | Description                                                                                                                                                                               |
| -------------- | ------------------------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| size           | `"sm"` o `"md"` o `"lg"` | `"md"`    | Define el tamaño del input                                                                                                                                                                |
| fullWidth      | boolean                  | false     | Si es true el input ocupará todo el ancho disponible                                                                                                                                      |
| leftAdornment  | component                | undefined | Elemento que se posicionará en la parte izquierda del input, or ejemplo un icono. Se debe utilizar el componente `InputAdornament` para envolver todo el contenido que se quiera utilizar |
| rightAdornment | component                | undefined | Elemento que se posicionará en la parte derecha del input, or ejemplo un icono. Se debe utilizar el componente `InputAdornament` para envolver todo el contenido que se quiera utilizar   |
