# Accesorios gamer y articulos electronicos en valparaiso.

## Visión General del Proyecto
Creación de una plataforma e-commerce moderna, dinámica y atractiva orientada al nicho de jugadores (gamers) y entusiastas de la tecnología, con un enfoque local en la región de Valparaíso.

## 1. Definición de Requerimientos
* **Público Objetivo:** Gamers, streamers, y entusiastas de hardware en Valparaíso y alrededores.
* **Catálogo de Productos:** 
  * Periféricos (Mouse, Teclados mecánicos, Audífonos, Microfonos).
  * Componentes de PC (Tarjetas gráficas, Procesadores, Memoria RAM, Almacenamiento).
  * Monitores de alta tasa de refresco y Sillas Gamer.
  * Artículos electrónicos variados.
* **Funcionalidades Clave:**
  * Catálogo de productos interactivo con filtros por categoría, marca y rango de precio.
  * Carrito de compras funcional y sistema de checkout.
  * Sistema de usuarios (Registro, inicio de sesión, historial de compras, lista de deseos).
  * Diseño 100% Responsive (Mobile First).
  * Interfaz de usuario con estética "Gamer" premium: Modo oscuro, colores acentuados vibrantes (neón), glassmorphism y micro-animaciones fluidas.

## 2. Stack Tecnológico Recomendado
* **Frontend:** React (Vite) para un rendimiento óptimo.
* **Estilos:** CSS Vanilla estructurado o Tailwind CSS para utilidades rápidas, priorizando un diseño visualmente impactante.
* **Animaciones:** Framer Motion o CSS Animations para interacciones de usuario (hover, transiciones de página).
* **Backend:** Dependiendo de la preferencia (puede ser Spring Boot como en proyectos anteriores, o Node.js/Express).
* **Base de Datos:** MySQL o PostgreSQL.

## 3. Fases de Desarrollo

### Fase 1: Planificación y Diseño (UI/UX)
* Definir la identidad visual: paleta de colores oscuros con detalles contrastantes, tipografía moderna (ej. Inter, Roboto o fuentes estilo "Tech").
* Diseñar la arquitectura de la información y flujos de usuario.
* Identificar requisitos de imágenes y banners promocionales.

### Fase 2: Construcción del Frontend (Estructura y UI)
* Inicializar el proyecto base (actualmente en progreso con `vite`).
* Crear la estructura de directorios (components, pages, assets, hooks, context).
* Desarrollar los componentes base: `Navbar`, `Footer`, `ProductCard`, `Button`.
* Implementar la página principal (Home) mostrando productos destacados y ofertas.

### Fase 3: Lógica y Gestión de Estado
* Implementar el enrutamiento (ej. React Router).
* Crear el contexto global para gestionar el estado del carrito de compras y la sesión del usuario.
* Conectar componentes a datos simulados (Mock data) para validar la interfaz.

### Fase 4: Desarrollo e Integración Backend
* Configurar la base de datos y modelos.
* Desarrollar los endpoints de la API (Productos, Usuarios, Órdenes).
* Integrar el frontend con la API real mediante llamadas HTTP (Fetch/Axios).

### Fase 5: Optimización SEO y Despliegue
* Asegurar buenas prácticas SEO: etiquetas meta, descripciones claras, estructura semántica de HTML (uso correcto de H1, H2, etc.).
* Pruebas de rendimiento (Lighthouse).
* Despliegue en producción (Vercel/Netlify para Front, nube para Back).

## 4. Próximos Pasos (Acciones Inmediatas)
1. Esperar a que finalice la instalación de Vite.
2. Limpiar el proyecto generado por defecto (eliminar estilos no necesarios).
3. Configurar el archivo de estilos globales (`index.css`) con variables de colores temáticos.
4. Crear el primer componente visual.
