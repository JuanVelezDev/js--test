# 📚 Gestion de Eventos Spa - SPA

**** es una aplicación de una sola página (SPA) diseñada para facilitar el agendamiento de eventos a usuarios con role de Admin y User
## ⭐ Características principales

-Poder Agendar diferentes eventos
-Eliminar eventos
-Editar eventos

---

## 📂 Estructura del proyecto

El proyecto está organizado para ser limpio y fácil de navegar:
project
├── 
├── project-root/
│ ├── node_modules/ # Dependencias instaladas con npm
│ ├─
├── .gitignore # Archivos/carpetas que Git debe ignorar
├── index.html # Archivo HTML principal para la app
├── login.html # Página de inicio de sesión
├── package.json # Configuración y dependencias del proyecto
├── package-lock.json # Gestión detallada de versiones de dependencias
├── README.md # Documentación del proyecto (este archivo)

### 📁 Descripción breve de carpetas y archivos


- **`project-root/`**: Carpeta principal del proyecto que contiene:
    - **`node_modules/`**: Contiene todas las dependencias necesarias instaladas con npm.
  
- **`.gitignore`**: Indica los archivos y carpetas que deben ser ignorados por Git.
- **`index.html`**: Archivo de entrada principal para la aplicación (página raíz).
- **`login.html`**: Página de inicio de sesión para los usuarios.
- **`package.json`**: Contiene la configuración del proyecto, scripts disponibles y una lista de las dependencias usadas.
- **`package-lock.json`**: Archivo generado automáticamente por npm para asegurar consistencia en las dependencias del proyecto.
- **`README.md`**: Archivo que describe el propósito, instalación y uso del proyecto.

---

## 🔧 Instalación y configuración

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

1. Clona este repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd bibliotecary
   ```

2. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre tu navegador y accede a la URL proporcionada (por defecto: `http://localhost:5173`).

---

## ⚙️ Scripts disponibles

Los siguientes scripts están configurados en el archivo `package.json` para ayudarte a administrar el proyecto:

- **`npm run dev`**: Inicia el servidor de desarrollo.
- **`npm run build`**: Genera los archivos optimizados para producción.
- **`npm run preview`**: Previsualiza los archivos generados de producción.

---

## 📜 Contribución

Estamos encantados de recibir contribuciones. Sigue estos pasos para contribuir al proyecto:

1. Haz un **fork** del repositorio.
2. Crea una rama para tu funcionalidad o corrección de errores:

   ```bash
   git checkout -b nombre-de-tu-rama
   ```

3. Realiza los cambios y crea un commit:

   ```bash
   git commit -m "Agrega descripción del cambio"
   ```

4. Envía tus cambios al repositorio remoto:

   ```bash
   git push origin nombre-de-tu-rama
   ```

5. Abre un **Pull Request** para la revisión de tus cambios.

---
