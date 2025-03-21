# Gestión de Pacientes - React/TypeScript App

## Cómo correr la aplicación en local

1. Asegúrate de tener instalado **Node.js** y un gestor de paquetes como **npm** o **yarn**.

   - Puedes descargar **Node.js** desde [nodejs.org](https://nodejs.org/).
   - Verifica la instalación ejecutando `node -v` y `npm -v` en tu terminal.

2. Clona el repositorio en tu máquina local:

   ```bash
   git clone [URL-del-repositorio]
   cd nombre-del-proyecto
   ```

3. Instala las dependencias necesarias:

   - Con **npm**:
     ```bash
     npm install
     ```

4. Crea una copia del archivo .env.example, nombralo como .env y completa la variable VITE_API_URL con la URL de la API.

   ```bash
   VITE_API_URL=[URL de la API]
   ```

5. Corre la aplicación en modo de desarrollo:

   - Con **npm**:
     ```bash
     npm run dev
     ```

6. Abre la URL disponibilizada por Vite en tu terminal para ver la aplicación en ejecución.

## Documentación de diseño y herramientas utilizadas

### **1. Diseño general**

El objetivo de esta aplicación era desarrollar una experiencia interactiva, organizada y fácil de usar para la gestión de pacientes. La estructura modular asegura un código limpio, reutilizable y fácil de mantener.

A continuación, se explican las decisiones clave sobre herramientas y diseño:

---

### **2. Herramientas utilizadas y decisiones técnicas**

#### **a. Framework y lenguaje: React con TypeScript**

- **¿Por qué React?**  
  React permite crear interfaces de usuario modernas e interactivas con un manejo eficiente del estado. Es flexible y ampliamente soportado por la comunidad.
- **¿Por qué TypeScript?**  
  Proporciona tipado estático para mejorar la robustez del código, ayuda a prevenir errores comunes y facilita el mantenimiento en proyectos de mediana o gran escala.

---

#### **b. Manejo de estado global: Context API**

- **Decisión:** Se utilizó Context API para manejar el estado global con la intención de mantener la aplicación preparada para su escalabilidad futura.
- **Motivo:** Aunque el estado actual podria manejarse como estado local en App.tsx, esta configuración facilita la reutilización del estado y asegura que la aplicación pueda evolucionar sin necesidad de refactorizaciones grandes.

---

#### **c. Estilos: Tailwind CSS**

- **Decisión:** Se utilizó **Tailwind CSS** para el diseño de la interfaz.
- **Motivo:** Tailwind CSS permite un prototipado rápido gracias a sus clases de utilidad predefinidas. Es excelente para lograr un diseño consistente, responsivo e interactivo.

---

#### **d. Manejo de formularios: React Hook Form**

- **Decisión:** Se usó **React Hook Form** para manejar formularios.
- **Motivo:** Facilita la validación de formularios y la gestión de su estado. Su integración con TypeScript permite definir tipos claros y mejorar la experiencia del desarrollador.

---

#### **e. Notificaciones: React Toastify**

- **Decisión:** Se utilizó **React Toastify** para proporcionar notificaciones amigables al usuario.
- **Motivo:** Es una solución fácil de usar para mostrar mensajes de éxito, error u otros eventos, mejorando la experiencia de usuario.

---

#### **f. Manejo de datos desde la API: Axios**

- **Decisión:** Se usó **Axios** para realizar llamadas HTTP.
- **Motivo:** Proporciona una interfaz intuitiva para la interacción con APIs y permite la configuración avanzada (como interceptores), útil en proyectos más grandes.

---

### **3. Organización del proyecto**

La estructura del proyecto sigue un enfoque modular, que facilita la escalabilidad y el mantenimiento del código. Esta es la estructura utilizada:

- **`components/`**: Contiene los componentes de la interfaz de usuario, organizados para una fácil reutilización. Ejemplo: `PatientCard`, `PatientForm`, y `Modal`.
- **`contexts/`**: Gestiona el estado global de la aplicación mediante el uso de Context API.
- **`services/`**: Se encarga de la lógica de interacción con la API (por ejemplo, `fetchPatients.ts`).
- **`styles/`**: Carpeta destinada a los estilos globales complementarios a Tailwind CSS.
- **`App.tsx`**: Componente principal que organiza las pantallas y la funcionalidad base.
- **`main.tsx`**: Configura e inicia React, incluyendo el `PatientProvider`.
