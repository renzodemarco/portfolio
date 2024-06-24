export const navItems = [
  { name: 'AboutMe', label: 'SOBRE MÍ' },
  { name: 'Education', label: 'EDUCACIÓN' },
  { name: 'WorkExperience', label: 'EXPERIENCIA' },
  { name: 'Projects', label: 'PROYECTOS' },
  { name: 'Contact', label: 'CONTACTO' }
];

export const experiences = {
  "Desarrollador Web": [
    {
      company: "Freelance",
      date: "Agosto 2023 - Actualidad",
      responsibilities: [
        "Diseño y desarrollo de sitios web responsivos con React.js utilizando frameworks como Bootstrap, Material-UI y Tailwind CSS, trabajando estrechamente con los clientes para entender sus necesidades y proporcionar soluciones personalizadas.",
        "Desarrollo de APIs RESTful eficientes y escalables con Node.js.",
        "Integración con bases de datos relacionales (SQL con Sequelize) y no relacionales (MongoDB con Mongoose).",
        "Comunicación y coordinación con clientes y equipos de desarrollo para establecer y cumplir plazos de entrega.",
        "Control de versiones con Git."
      ]
    },
    {
      company: "100devs",
      date: "Mayo 2023 - Agosto 2023",
      responsibilities: [
        "Desarrollo y creación de sitios web personalizados para clientes en EE.UU.",
        "Colaboración en equipos multidisciplinarios para tomar decisiones y aumentar la eficiencia del proyecto.",
        "Desarrollo web con HTML, CSS, JavaScript, React.js implementando interfaces de usuario interactivas y adaptables.",
        "Desarrollo backend e integración de bases de datos con MongoDB."
      ]
    }
  ],
  "Veterinario": [
    {
      company: "Hospital Veterinario La Granja",
      date: "Septiembre 2020 - Actualidad",
      responsibilities: [
        "Responsable de supervisar el área de hospitalización, liderando un equipo de asistentes veterinarios y diseñando/implementando planes de diagnóstico y tratamiento.",
        "Interacción con clientes para proporcionar información y responder preguntas sobre servicios y procedimientos veterinarios."
      ]
    },
    {
      company: "Laboratorio Microdiag",
      date: "Febrero 2021 - Febrero 2023",
      responsibilities: [
        "Realización de pruebas hematológicas, bioquímica sanguínea y análisis de orina.",
        "Procesamiento, organización y administración de muestras de principio a fin.",
        "Entrada de datos y control posterior, asegurando precisión y fiabilidad.",
        "Mantenimiento de inventario y equipos, asegurando el funcionamiento eficiente del laboratorio."
      ]
    }
  ],
  "Docente Universitario e Investigador": [
    {
      company: "Laboratorio de Patología, Facultad de Ciencias Veterinarias, Universidad Nacional de La Plata",
      date: "Febrero 2017 - Marzo 2020",
      responsibilities: [
        "Enseñanza de cursos de Patología Veterinaria, supervisión de estudiantes y contribución a grupos interdisciplinarios de enseñanza e investigación.",
        "Participación en proyectos de investigación enfocados en enfermedades pulmonares en bovinos, incluyendo diagnósticos citológicos e histopatológicos, entrada de datos, análisis estadístico y publicación de resultados.",
        "Análisis estadístico de resultados de investigación y contribución a publicaciones científicas con la presentación de datos.",
        "Organización de eventos educativos y talleres dentro de la comunidad veterinaria."
      ]
    }
  ]
};

export const projects = [
  {
    title: "MyVetHub",
    description: "Esta aplicación web única simplifica la gestión de clínicas veterinarias permitiendo a los usuarios crear, modificar y eliminar registros de pacientes, incluyendo características detalladas e historial médico. Soporta la actualización fácil de historiales clínicos y ofrece filtros avanzados para búsquedas eficientes de pacientes.",
    technologies: [
      "React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Bootstrap"
    ],
    imgSrc: "https://i.imgur.com/r1XQANP.png",
    url: "https://myvethub.onrender.com/"
  },
  {
    title: "CDCommerce",
    description: "Esta aplicación móvil ofrece una experiencia de comercio electrónico simplificada para los entusiastas de los discos. Los usuarios pueden navegar, comprar y gestionar artículos en su carrito. Incluye un perfil de usuario con carga de fotos y configuración de ubicación, mejorando la personalización y la conveniencia durante las compras.",
    technologies: [
      "React Native", "Expo", "Redux", "Firebase Auth", "SQLite"
    ],
    imgSrc: "https://imgur.com/ZO0WYer.png",
    url: "https://cdcommerce-app.netlify.app/"
  },
  {
    title: "Diagnovet Lab",
    description: "Esta aplicación móvil ofrece una experiencia de comercio electrónico simplificada para los entusiastas de los discos. Los usuarios pueden navegar, comprar y gestionar artículos en su carrito. Incluye un perfil de usuario con carga de fotos y configuración de ubicación, mejorando la personalización y la conveniencia durante las compras.",
    technologies: [
      "HTML", "CSS", "JavaScript", "Bootstrap"
    ],
    imgSrc: "https://i.imgur.com/3i4PmFX.png",
    url: "https://laboratoriodiagnovet.netlify.app/"
  }
];
