# Proyecto: Amigo Secreto 

Este proyecto es una aplicación interactiva que permite gestionar una lista de amigos y realizar un sorteo aleatorio para determinar el "amigo secreto". 
La interfaz está diseñada con estilos atractivos y botones funcionales para interactuar con la lista y reiniciar el juego cuando sea necesario.

---

## Tabla de Contenidos
1. [Descripción](#descripción)
2. [Características](#características)
3. [Requisitos](#requisitos)
4. [Instalación](#instalación)
5. [Uso](#uso)
6. [Estructura del Proyecto](#estructura-del-proyecto)
7. [Contribuciones](#contribuciones)
8. [Licencia](#licencia)

---

## Descripción

El proyecto tiene como objetivo fortalecer habilidades en lógica de programación y diseño web, brindando una experiencia dinámica y visualmente agradable. 
Los usuarios pueden agregar amigos, sortear uno al azar, y reiniciar el juego para comenzar de nuevo.

---

## Características

- Agregar amigos a una lista interactiva.
- Sortear un amigo secreto de manera aleatoria.
- Interfaz de usuario estilizada con colores personalizados.
- Botón para reiniciar el juego, limpiando la lista y los resultados.
- Validaciones para evitar duplicados o entradas vacías.

---

## Requisitos

- Navegador moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, etc.).
- Editor de texto o IDE (opcional para editar el código).
- Acceso a internet para cargar los iconos (si son externos).

---

## Instalación

1. **Clonar el Repositorio:**  
   ```bash  
   git clone https://github.com/MaeLynn1/Amigo_Secreto.git  
   ```  

2. **Acceder al Directorio del Proyecto:**  
   ```bash  
   cd Amigo_Secreto  
   ```  

3. **Abrir la Aplicación:**  
- Abre el archivo `index.html` en tu navegador web preferido.  

---

## Uso  

La aplicación Amigo Secreto está diseñada para ser intuitiva y fácil de usar, permitiéndote organizar sorteos de manera rápida y divertida. A continuación, te guiamos paso a paso para que aproveches al máximo todas sus funcionalidades:  

---

### 1. **Agregar Participantes**  
   - **Paso 1:** Escribe el nombre del participante en el campo de texto ubicado en la parte superior de la interfaz.  
   - **Paso 2:** Presiona el botón **"Añadir"**.  
   - **Resultado:** El nombre se añadirá automáticamente a la lista de participantes, mostrándose en una tarjeta interactiva con opciones para editar o eliminar.  

   *Consejo:* Puedes agregar tantos participantes como desees. ¡No hay límites!  

---

### 2. **Realizar el Sorteo**  
   - **Paso 1:** Una vez que hayas agregado a todos los participantes, presiona el botón **"Sortear"**.  
   - **Paso 2:** La aplicación procesará la lista de manera aleatoria y asignará un "amigo secreto" a cada participante.  
   - **Resultado:** Los resultados se mostrarán en una sección especial, con un diseño limpio y fácil de leer. Cada participante verá el nombre de su amigo secreto de forma privada (si lo deseas, puedes implementar una función de "revelación progresiva").  

   *Nota:* El algoritmo garantiza un sorteo justo y sin repeticiones.  

---

### 3. **Reiniciar el Juego**  
   - **Paso 1:** Si deseas comenzar un nuevo sorteo, simplemente presiona el botón **"Reiniciar"**.  
   - **Paso 2:** La lista de participantes y los resultados anteriores se borrarán automáticamente.  
   - **Resultado:** La aplicación estará lista para un nuevo juego, permitiéndote agregar nuevos participantes y realizar otro sorteo.  

   *Consejo:* Usa esta función si cometiste un error o si quieres repetir el juego con un grupo diferente.  

---

### 4. **Funciones Adicionales**  
   - **Eliminar Participantes:** Si alguien no puede participar, elimínalo de la lista con un solo clic.  
   - **Notificaciones:** La aplicación te alertará si intentas agregar un nombre duplicado o vacío, asegurando que los datos sean consistentes.  

---

### 5. **Experiencia Visual**  
   - **Animaciones:** Disfruta de transiciones suaves y animaciones que hacen que la experiencia sea más agradable.  
   - **Diseño Responsive:** La aplicación se adapta perfectamente a cualquier dispositivo, ya sea un ordenador, tablet o móvil.  

## Estructura del Proyecto

```
Amigo_Secreto/
│
├── index.html          # Archivo principal de la aplicación
├── styles.css          # Estilos CSS para la interfaz de usuario
├── script.js           # Lógica de la aplicación (JavaScript)
├── README.md           # Documentación del proyecto
└── assets/             # Directorio para recursos adicionales (imágenes, iconos, etc.)
```

## Contribuciones  

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, sigue estos pasos:  

1. Haz un fork del repositorio.  
2. Crea una rama para tu contribución:  
   ```bash  
   git checkout -b feature/nueva-funcionalidad  
   ```  
3. Realiza tus cambios y haz commit:  
   ```bash  
   git commit -m 'Añade nueva funcionalidad'  
   ```  
4. Haz push a la rama:  
   ```bash  
   git push origin feature/nueva-funcionalidad  
   ```  
5. Abre un Pull Request en GitHub.  

---

## Licencia   

Este proyecto está bajo la licencia [MIT](LICENSE). Para más detalles, consulta el archivo `LICENSE` en el repositorio.  

Autora
MaeLynn
Desarrolladora entusiasta de aplicaciones interactivas.
[GitHub](https://github.com/MaeLynn1)
