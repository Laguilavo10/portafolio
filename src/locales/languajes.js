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
        'Soy un apasionado de la tecnología y el desarrollo web, siempre buscando nuevas formas de crear experiencias digitales únicas y emocionantes. Con mi experiencia en programación y diseño, puedo crear sitios web que sean tanto visualmente atractivos como funcionales. Siempre estoy buscando nuevos proyectos emocionantes que me permitan seguir aprendiendo y creciendo en mi carrera.'
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
          title: 'Gestor de Gastos',
          description:
            'Sistema de gestor de gastos hecho en React y que utiliza localStorage para almacenar los datos del usuario en su dispositivo local. Herramienta para ayudar a los usuarios a administrar sus finanzas personales y hacer un seguimiento de sus gastos diarios.'
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
          title: 'Periodic Table',
          description:
            'Tabla periódica interactiva que muestra información detallada de los elementos químicos obtenidos a través de una API. Está construido con el framework React y ofrece una experiencia de usuario intuitiva y atractiva. Al igual, con una correcta funcionalidad en mobile.'
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
          title: 'Expense Manager',
          description:
            'Expense management system built in React that uses localStorage to store user data on their local device. A tool to help users manage their personal finances and track their daily expenses.'
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
          title: 'Periodic Table',
          description:
            'Interactive periodic table that provides detailed information about chemical elements obtained through an API. It is built with the React framework and offers an intuitive and attractive user experience, with proper mobile functionality as well.'
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
