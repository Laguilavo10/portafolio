export const languajes = {
  ES: {
    header: [
      {
        name: 'Sobre Mi',
        href: 'about'
      },
      {
        name: 'Experiencia',
        href: 'experience'
      },
      {
        name: 'Habilidades',
        href: 'skills'
      },
      {
        name: 'Proyectos',
        href: 'projects'
      },
      {
        name: 'Certificaciones',
        href: 'certifications'
      },
      {
        name: 'Contacto',
        href: 'contact'
      }
    ],
    aboutMe: {
      title: 'Sobre Mi',
      description:
        'Desarrollador de Software con enfasis en las tecnologias Web. Me interesan especialmente los temas sociales y me
gusta contribuir con soluciones a los problemas a través de la tecnología.He trabajado en proyectos tanto individuales
como en equipo, dando siempre los mejores resultados. Además de mis habilidades técnicas, también me destaco por
tener comunicacion efectiva, persona atenta al detalle, capaz de trabajar en equipo y poseer adaptabilidad a los
cambios.'
    },
    experience: {
      title: 'Experiencia',
      data: [
        {
          job: 'Desarrollador de Software',
          dates: 'Mar-2022 / May-2023',
          description: `Desarrollé un sistema de información para la lavanderia LAVAPOR 
            utilizando Next.js y TypeScript para el frontend, Tailwind CSS para el 
            diseño de la interfaz de usuario, JSON Web Tokens (JWT) para la autenticación 
            y cookies, y MySQL para la base de datos. Este sistema de información facilito a la lavanderia administrar la informacion de los clientes, empleados y ventas,  lo que les permitió concentrarse en brindar un mejor servicio y aumentar su rentabilidad.`,
          company: 'Freelance',
          current: false
        },
        {
          job: 'Aprendiz SENA - Software Developer',
          dates: 'Sept-2022 / Mar-2023',
          description:
            'Proporcioné soporte para resolver problemas tecnológicos utilizando herramientas como .NET, Javascript, Microsoft y SQL. Adquirí habilidades en herramientas de generación de informes, especialmente en JasperReports, lo que me permitió producir informes precisos y eficientes. Participé en proyectos que mejoraron la eficiencia del equipo.',
          company: 'Soporte Logico SAS',
          current: false
        }
      ]
    },
    skills: {
      title: 'Habilidades'
    },
    projects: {
      title: 'Proyectos',
      data: [
        {
          title: 'SI Lavapor',
          description:
            'Sistema de información busca mejorar la eficiencia de la lavandería mediante el tratamiento de los datos. La información procesada permitirá a la empresa identificar patrones y tendencias para optimizar su trabajo.'
        },
        {
          title: 'Yard Sale',
          description:
            'E-commerce desarrollado con NextJS y la API de Platzi Fake Store, que proporciona datos ficticios de productos para la simulacion de un tienda virtual, filtrando por cateforias de productos y más.'
        },
        {
          title: 'Cinema Data',
          description:
            'Plataforma para explorar películas, los usuarios pueden encontrar una amplia selección de películas organizadas por género, tendencias, ademas. Proyecto usando React y la API de The Movie Database.'
        },
        {
          title: 'Pokedex',
          description:
            'Pokedex hecha en React que utiliza la PokeAPI para mostrar información detallada sobre cada Pokemon en un diseño fiel al pokedex original de primera generación. La navegacion  funciona dando click a las flechas del pokedex.'
        },
        {
          title: 'BookLand',
          description:
            'Bookland es una aplicación web creada como respuesta a la prueba tecnica formulada por el creador de contenido Midudev como parte de la primera prueba del proyecto pruebastecnicas.com. La aplicación permite a los usuarios crear y gestionar sus listas de lectura.'
        },
        {
          title: 'Certificaciones',
          description:
            'Galería de diplomas obtenidos a lo largo de mi carrera profesional desempeñándome como desarrollador de software. Construido con Next.js 13 utilizando App Router y haciendo uso de la herramienta Cloudinary para el alojamiento de las imágenes.'
        }
      ]
    },
    certifications: {
      title: 'Certificaciones'
    },
    contact: {
      title: 'Contacto',
      description:
        '¡No dudes en ponerte en contacto conmigo para discutir cómo puedo contribuir a tu equipo!'
    }
  },
  EN: {
    header: [
      {
        name: 'About Me',
        href: 'about'
      },
      {
        name: 'Experience',
        href: 'experience'
      },
      {
        name: 'Skills',
        href: 'skills'
      },
      {
        name: 'Projects',
        href: 'projects'
      },
      {
        name: 'Certifications',
        href: 'certifications'
      },
      {
        name: 'Contact',
        href: 'contact'
      }
    ],
    aboutMe: {
      title: 'About Me',
      description:
        'I am passionate about technology and web development, always seeking new ways to create unique and exciting digital experiences. With my experience in programming and design, I can create visually appealing and functional websites. I am always looking for exciting new projects that allow me to continue learning and growing in my career.'
    },
    experience: {
      title: 'Experience',
      data: [
        {
          job: 'Software Developer',
          dates: 'Mar 2022 / May 2023',
          description:
            'I developed an information system for LAVAPOR laundry using Next.js and TypeScript for the frontend, Tailwind CSS for the user interface design, JSON Web Tokens (JWT) for authentication and cookies, and MySQL for the database. This information system enabled the laundry to manage customer information, employees, and sales, allowing them to focus on providing better service and increasing profitability.',
          company: 'Freelance',
          current: false
        },
        {
          job: 'SENA Apprentice - Software Developer',
          dates: 'Sept 2022 / Mar 2023',
          description:
            'I provided support in resolving technological problems using tools such as .NET, Javascript, Microsoft, and SQL. I acquired skills in report generation tools, especially JasperReports, which allowed me to produce accurate and efficient reports. I participated in projects that improved team efficiency.',
          company: 'Soporte Logico SAS',
          current: false
        }
      ]
    },
    projects: {
      title: 'Projects',
      data: [
        {
          title: 'SI Lavapor',
          description:
            'Information system aims to improve the efficiency of the laundry through data processing. The processed information will allow the company to identify patterns and trends to optimize their work.'
        },
        {
          title: 'Yard Sale',
          description:
            'E-commerce developed with Next.js and the Platzi Fake Store API, which provides fictional product data for the simulation of a virtual store, filtering by product categories and more.'
        },
        {
          title: 'Cinema Data',
          description:
            'Platform for exploring movies, where users can find a wide selection of movies organized by genre, trends, and more. This project is built using React and The Movie Database API.'
        },
        {
          title: 'Pokedex',
          description:
            'Pokedex built in React that utilizes the PokeAPI to display detailed information about each Pokemon in a design faithful to the original first-generation Pokedex. Navigation is done by clicking the arrows on the Pokedex.'
        },
        {
          title: 'BookLand',
          description:
            'Bookland is a web application created in response to the technical test formulated by the content creator Midudev as part of the first test of the project pruebastecnicas.com. The application allows users to create and manage their reading lists.'
        },
        {
          title: 'Certifications',
          description:
            'Diploma gallery obtained throughout my professional career as a software developer. Built with Next.js 13 using the App Router and making use of the Cloudinary tool for image hosting.'
        }
      ]
    },
    skills: {
      title: 'Skills'
    },
    certifications: {
      title: 'Certifications'
    },
    contact: {
      title: 'Contact',
      description:
        "Don't hesitate to get in touch with me to discuss how I can contribute to your team!"
    }
  }
}
