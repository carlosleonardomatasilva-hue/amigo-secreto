# 🎁 Amigo Secreto

Este es un proyecto simple en JavaScript que permite agregar nombres de amigos a una lista y luego sortear aleatoriamente uno de ellos para jugar al **Amigo Secreto**.

## 📋 Descripción

La aplicación permite:
- Agregar nombres a una lista.
- Mostrar todos los nombres añadidos en pantalla.
- Sortear un nombre al azar como "Amigo Secreto".

El proyecto está orientado a practicar:
- Manipulación del DOM.
- Uso de arrays en JavaScript.
- Eventos y funciones básicas.
- Generación de números aleatorios.

## 🛠️ Tecnologías utilizadas

- **HTML5** – estructura del proyecto.
- **CSS3** – estilos básicos (puedes personalizarlo).
- **JavaScript** – lógica de la aplicación.

## 🚀 Cómo usar

1. Clona este repositorio o descarga los archivos.
2. Abre el archivo `index.html` en tu navegador.
3. Escribe el nombre de un amigo en el campo de texto y haz clic en **"Añadir"**.
4. Repite para agregar más amigos.
5. Haz clic en **"Sortear amigo"** para seleccionar uno al azar.

## 📂 Estructura del proyecto

- `index.html`: Contiene la estructura principal de la página.
- `style.css`: Contiene los estilos.
- `app.js`: Contiene la lógica en JavaScript.
- `README.md`: Documentación del proyecto.

## ✨ Funciones principales

### `agregarAmigo()`
Agrega un nombre al arreglo `nombresAmigos` y actualiza la lista en pantalla.

### `listaAmigos()`
Recorre el arreglo y muestra cada nombre como un `<li>` en el HTML.

### `sortearAmigo()`
Selecciona un nombre aleatorio de la lista y lo muestra como el amigo secreto.

## 💡 Mejoras posibles
- Validar nombres repetidos.
- Estilizar mejor la lista y el resultado.
- Guardar la lista de amigos en **LocalStorage** para no perderlos al recargar la página.

## 📄 Licencia
Este proyecto es de uso libre con fines educativos.


