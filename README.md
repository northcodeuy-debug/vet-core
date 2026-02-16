# VetCore

🐾 **VetCore Ecosystem by NorthCode**

VetCore es una plataforma integral de gestión veterinaria diseñada para cerrar la brecha entre la atención clínica de pequeñas mascotas y la gestión productiva de grandes animales. Desarrollado con un enfoque en **Rigor Científico**, **Escalabilidad** y **Cumplimiento Normativo (SNIG/DILAVE)**.

Este repositorio contiene el núcleo del sistema, diseñado como una solución *White Label* para clínicas veterinarias que buscan profesionalizar su identidad digital y optimizar su flujo de caja mediante e-commerce y logística integrada.

## 🚀 Características Principales

### Fase 1: Identidad & Presencia Digital
- **Landing Page High-Performance**: Desarrollada en React + Tailwind CSS para una carga instantánea.
- **Catálogo Dinámico**: Visualización de productos vía JSON para despliegue rápido.
- **Módulo de Emergencias**: Integración directa con WhatsApp API para asistencia inmediata.

### Fase 2: E-commerce & Logística de Proximidad
- **Smart Cart**: Sistema de pedidos automatizado con cierre en WhatsApp.
- **Gestión de Stock Proactiva**: Control de inventario con soporte para lectores de códigos de barras Bluetooth.
- **Fleet Management**: Aplicación móvil (Flutter) para la organización de repartos por zona y horario.

### Fase 3: Gestión Clínica & Compliance MGAP
- **Historia Clínica Digital**: Registro cronológico detallado y trazabilidad sanitaria.
- **Módulo de Producción**: Gestión por predio (DICOSE) y seguimiento de patologías en rodeos.
- **Compliance DILAVE/SNIG**: Registro automatizado de específicos y generación de reportes ministeriales.

## 🛠 Stack Tecnológico

- **Frontend**: React.js + Tailwind CSS
- **Backend**: FastAPI (Python)
- **Mobile**: Flutter
- **Infraestructura**: Docker, Nginx Proxy Manager, PostgreSQL.
- **Comunicación**: WhatsApp Business API.

## 📈 Filosofía de Desarrollo

En **NorthCode**, creemos en la **Transparencia Total**. Este proyecto se desarrolla bajo una arquitectura de código abierto y documentado, permitiendo la auditoría técnica y garantizando que el cliente sea dueño de su activo tecnológico.

## 🛠 Instalación y Configuración (Devs)

*(Aquí puedes agregar los pasos técnicos de `npm install`, `docker-compose up`, etc., a medida que los vayas creando)*

## 📝 Licencia

Este proyecto es propiedad de **NorthCode**. Se otorga una licencia de uso perpetua a los clientes finales, manteniendo el código abierto para fines de portafolio y mejora comunitaria.

---

Desarrollado con ❤️ en Artigas/Salto, Uruguay por **NorthCode**.

---

> **💡 Tip de Senior PM para el Repo:**
>
> En la descripción corta del repo (la que sale a la derecha en GitHub): Pon algo breve como: *"Comprehensive digital management ecosystem for veterinary clinics and livestock production. Built with React, FastAPI, and Flutter."*
>
> **Topics (Etiquetas):** Agregá etiquetas como `veterinary-software`, `react`, `fastapi`, `flutter`, `snig-uruguay`, `northcode`. Esto ayuda a que el repo se posicione mejor.


### Estructura General del Proyecto

```text
/veterinaria-salto
├── apps/
│   ├── web-client/          # React (E-commerce y Portal Clientes)
│   └── admin-app/           # Flutter (Gestión interna y Médica)
├── services/
│   └── api-backend/         # FastAPI
├── shared/                  # Documentación, Assets globales, Prototipos Figma
├── infra/
│   ├── docker/              # Dockerfiles específicos y configs
│   └── nginx/               # Configuración de proxy inverso
├── docker-compose.yml       # Orquestador local
└── README.md                # Documentación técnica centralizada
```

## Estructura de proyecto sugerida para web-client

```text
/apps/web-client/src
├── assets/          # Estilos globales, imágenes de Salto/Vete
├── components/      # UI Atoms/Molecules (Botones, Inputs reutilizables)
├── config/          # Variables de entorno, instancias de Axios/Fetch
├── features/        # LÓGICA POR MÓDULO (E-commerce, Turnos, Perfil)
│   ├── shop/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── ShopPage.tsx
│   └── appointments/
├── hooks/           # Custom hooks globales
├── store/           # Manejo de estado (Zustand o Context)
└── App.tsx
```

# <!> Agregar la etructura sujerida

Estrucutra intera de Proyecto web-client
components/: Botones, inputs y UI atómica reutilizable.
features/: Lógica de negocio pesada (ej: features/ecommerce, features/appointments).
layout/: Navbar, Footer y contenedores principales.
hooks/: Lógica compartida de React.




























## Estructura de poryecto sujerida para backend

```text
/services/api-backend/app
├── api/             # Endpoints (v1, v2)
│   └── v1/
│       ├── endpoints/
│       └── api.py
├── core/            # Configuración, Seguridad (JWT), Constantes
├── db/              # Sesión de Base de Datos y Migraciones
├── models/          # Modelos de base de datos (SQLAlchemy/SQLModel)
├── schemas/         # Pydantic models (Validación de datos)
├── services/        # Lógica de negocio (Donde ocurre la "magia")
└── main.py
```