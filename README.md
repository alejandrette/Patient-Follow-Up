# 🩺 Patient Follow-Up

Bienvenido a **Patient Follow-Up**, una aplicación diseñada para gestionar la información de pacientes de manera eficiente. Esta aplicación permite agregar, editar, eliminar y realizar un seguimiento de los pacientes con una interfaz fácil de usar.

## 🚀 Demo en Vivo

Prueba la aplicación en vivo haciendo clic en el siguiente enlace:

🔗 [Demo en vivo](https://patient-alejandrette.netlify.app/)

## ⚙️ Tecnologías Utilizadas

- **React ⚛️**: Biblioteca principal para construir interfaces de usuario interactivas y dinámicas.
- **TypeScript 📝**: Tipado estático para mejorar la mantenibilidad y robustez del código.
- **Zustand 🧩**: Biblioteca de manejo de estado basada en hooks, para gestionar el estado de la aplicación de forma eficiente.
- **Tailwind CSS 🎨**: Framework de estilos para diseñar una interfaz moderna y responsive.
- **UUID 🔑**: Generador de identificadores únicos para cada paciente.

## 🌍 Características

- **Gestión de Pacientes 👨‍⚕️**:
  Permite agregar, editar y eliminar pacientes.
  Visualiza los pacientes con información detallada.
- **Estado Modal 🖥️**:
  Permite mostrar y ocultar modales para la edición de pacientes.
- **Persistencia de Estado 💾**:
  Usa `zustand` con `persist` para guardar los datos de pacientes localmente y mantenerlos entre sesiones.
- **Responsive Design 📱💻**:
  Adaptado para funcionar en móviles, tabletas y escritorios.

## 📦 Instalación y Uso

Clona el repositorio:

```bash
git clone https://github.com/alejandrette/Patient-Follow-Up.git
```

Accede al directorio del proyecto:

```bash
cd Patient-Follow-Up
```

Instala las dependencias:

```bash
npm install
```

Ejecuta la aplicación:

```bash
npm start
```

La aplicación se ejecutará en `http://localhost:3000` 🚀

## 📑 Funcionamiento de la Aplicación

1. **Agregar Pacientes**: Ingresa los detalles de los pacientes para agregar nuevos registros.
2. **Visualización**: Se muestran los pacientes con su información relevante.
3. **Editar y Eliminar**: Abre el modal para editar o eliminar un paciente.
4. **Gestión de Modal**: Usa los botones de mostrar y cerrar para manejar el modal de detalles de pacientes.

## 🧰 Hook Personalizado

`usePatientState`: Hook personalizado para manejar el estado de los pacientes utilizando `zustand` y gestionar las acciones de agregar, actualizar, eliminar, y seleccionar pacientes.

```js
const { patients, addPatient, updatePatient, deletePatient } = usePatientState();
```

## 📚 Gestión de Estado con Zustand

La gestión de estado se realiza con **Zustand**, utilizando los middlewares **`devtools`** y **`persist`** para depurar y guardar el estado entre sesiones. La tienda de Zustand contiene los siguientes métodos y propiedades:

- **`patients`**: Lista de pacientes.
- **`idPatientActive`**: ID del paciente actualmente seleccionado.
- **`addPatient`**: Función para agregar un paciente.
- **`updatePatient`**: Función para actualizar la información de un paciente.
- **`deletePatient`**: Función para eliminar un paciente.
- **`selectId`**: Función para seleccionar un paciente y mostrar su modal.
- **`stateModal`**: Estado que indica si el modal está visible o no.

## 🚀 Desarrollo Futuro

- **Autenticación de Usuarios 🔑**: Permitir a los usuarios crear una cuenta y acceder a sus datos de pacientes de manera segura.
- **Exportación de Datos 📜**: Opción para exportar la lista de pacientes a formatos como CSV o PDF.
- **Integración con APIs 🧑‍⚕️**: Conectar con servicios de salud para obtener información de pacientes de forma automática.

## 👥 Contribuciones

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3. Realiza tus cambios y haz commit (git commit -am 'Añadir nueva funcionalidad').
4. Haz push a tu rama (git push origin feature/nueva-funcionalidad).
5. Abre un Pull Request.

¡Gracias por visitar el proyecto! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue. 💬
