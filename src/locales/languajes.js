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
      description: [
        'Soy un tecnólogo en Análisis y Desarrollo de sistemas de información. Me interesan especialmente los temas sociales y me gusta contribuir con soluciones a los problemas a través de la tecnología.',
        'He trabajado en proyectos tanto individuales como en equipo, siempre obteniendo los mejores resultados. Además de mis habilidades técnicas, también me destaco por tener una comunicación efectiva, ser una persona atenta al detalle, capaz de trabajar en equipo y de adaptarme a los cambios.'
      ]
    },
    experience: {
      title: 'Experiencia',
      data: [
        {
          job: 'Summer Student - Programador',
          dates: 'Mar-2025',
          description: [
            'Implemento automatizaciones para optimizar procesos internos mediante el uso de Python. Estas soluciones han permitido reducir tiempos operativos y mejorar la precisión en tareas repetitivas relacionadas con el manejo de datos.',
            'Apoyo la gestión de información mediante herramientas como Excel, Power BI y scripts que extraen, procesan y consolidan datos de diversas plataformas, aportando a una toma de decisiones más ágil y eficiente.'
          ],
          company: 'Scotiabank',
          current: true
        },
        {
          job: 'Desarrollador Frontend',
          dates: 'Ene-2024 / Feb-2025',
          description: [
            'Desarrollé e implementé soluciones tecnológicas para proyectos de alto nivel y clientes a nivel mundial, utilizando un stack tecnológico centrado en el desarrollo web con React, NextJS, Tailwind, Node y PostgreSQL.',
            'Trabajé en estrecha colaboración con el equipo de de backend y diseño para asegurar un correcto enfoque y distribución de responsabilidades. He participado en proyectos destacados como: <a href="https://www.bodaszeta.com/" class="underline text-blue-500 visited:text-purple-500">Bodas Zeta</a>, <a href="https://fitness-uy.vercel.app/" class="underline text-blue-500 visited:text-purple-500">FitnessUY</a>, <a href="https://www.paydrinkapp.com/" class="underline text-blue-500 visited:text-purple-500">Paydrink</a>, <a href="https://www.barilocherentaboat.com/" class="underline text-blue-500 visited:text-purple-500">Rent-a-boat</a>, etc...'
          ],
          company: 'LIKA Software',
          current: false
        },
        {
          job: 'Desarrollador ReactJs',
          dates: 'Aug-2023 / Nov-2023',
          description: [
            'Desarrollé una aplicación web basada en la plantilla de diseño Minimals.cc, adaptándola a las necesidades específicas de los clientes. Implemento la lógica y la interfaz de usuario con React y Material-UI.',

            'Integro distintas características al sistema de información que son requeridas desde un dahboard de tareas, utilizando buenas prácticas para obtener un código mantenible con el tiempo.'
          ],
          company: 'GMO Solutions',
          current: false
        },
        {
          job: 'Desarrollador de Software',
          dates: 'Mar-2022 / May-2023',
          description: [
            'Desarrollé un sistema de información para la lavanderia LAVAPOR         utilizando Next.js y TypeScript para el frontend, Tailwind CSS para el diseño de la interfaz de usuario, JSON Web Tokens (JWT) para la autenticación y cookies, y MySQL para la base de datos.',
            'Este sistema de información facilito a la lavanderia administrar la informacion de los clientes, empleados y ventas,  lo que les permitió concentrarse en brindar un mejor servicio y aumentar su rentabilidad.'
          ],
          company: 'Freelance',
          current: false
        },
        {
          job: 'Aprendiz SENA - Software Developer',
          dates: 'Sept-2022 / Mar-2023',
          description: [
            'Resolví problemas tecnológicos utilizando herramientas como .NET, Javascript, Microsoft y SQL. Adquirí habilidades en herramientas de generación de informes, especialmente en JasperReports, lo que me permitió producir informes precisos y eficientes. Participé en proyectos que mejoraron la eficiencia del equipo.'
          ],
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
            'Sistema de información busca mejorar la eficiencia de la lavandería mediante el tratamiento de los datos. </br></br> La información procesada permitirá a la empresa identificar patrones y tendencias para optimizar su trabajo.'
        },
        {
          title: 'Yard Sale',
          description:
            'E-commerce desarrollado con NextJS y la API de Platzi Fake Store. </br></br>Proporciona datos ficticios de productos para la simulacion de un tienda virtual, filtrando por cateforias de productos y más.'
        },
        {
          title: 'Compuertas Lógicas',
          description:
            'Herramienta interactiva para el aprendizaje  de compuertas lógicas y sus tablas de verdad. </br></br> La aplicación permite a los usuarios ingresar ecuaciones lógicas, generar tablas de verdad, y visualizar mapas de Karnaugh.'
        },
        {
          title: 'Pokedex',
          description:
            'Pokedex hecha en React que utiliza la PokeAPI para mostrar información detallada sobre cada Pokemon en un diseño fiel al pokedex original de primera generación.</br></br> La navegacion  funciona dando click a las flechas del pokedex.'
        },
        {
          title: 'Cake-Shop',
          description:
            'Cake-Shop esta diseñada para la exhibición y venta de pasteles.</br></br> Los usuarios pueden explorar una variedad de pasteles únicos y personalizados, realizar pedidos por medio de WhatsApp y contactar para solicitar un pastel de acuerdo a sus necesidades.'
        },
        {
          title: 'Certificaciones',
          description:
            'My-Certifications es una plataforma desarrollada para facilitar el almacenamiento y la exhibición de  certificados. </br></br>Galería elegante y profesional para dar a conocer los reconocimientos a lo largo de la carrera profesional.'
        },
        {
          title: 'Cost-Manager',
          description:
            'Plataforma desarrollada para simplificar el seguimiento de gastos diarios. </br></br>El usuario puede registrar sus gastos y visualizarlos en una tabla y gráficos para poder llevar un registro de sus ingresos y egresos permitiendo mejorando su vida financiera.'
        }
      ]
    },
    certifications: {
      title: 'Certificaciones',
      footer: 'Ver Más Certificaciones'
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
      description: [
        'I am a technologist in Information Systems Analysis and Development. I am particularly interested in social issues and I enjoy contributing solutions to problems through technology.',
        'I have worked on both individual and team projects, always achieving the best results. In addition to my technical skills, I also stand out for my effective communication, attention to detail, ability to work in teams, and adaptability to changes.'
      ]
    },
    experience: {
      title: 'Experience',
      data: [
        {
          job: 'Summer Student - Developer',
          dates: 'Mar-2025',
          description: [
            'I implement automations to optimize internal processes using Python. These solutions have helped reduce operational times and improve accuracy in repetitive tasks related to data handling.',
            'I support information management through tools like Excel, Power BI, and scripts that extract, process, and consolidate data from various platforms, contributing to faster and more efficient decision-making.'
          ],
          company: 'Scotiabank',
          current: true
        },
        {
          job: 'Frontend Developer',
          dates: 'Jan-2024 / Feb-2025',
          description: [
            'I developed and implemented technological solutions for high-level projects and clients worldwide, using a technology stack focused on web development with React, NextJS, Tailwind, Node, and PostgreSQL',
            'I worked closely with the backend and design team to ensure a proper approach and distribution of responsibilities. I have participated in prominent projects such as: <a href="https://www.bodaszeta.com/" class="underline text-blue-500 visited:text-purple-500">Bodas Zeta</a>, <a href="https://fitness-uy.vercel.app/" class="underline text-blue-500 visited:text-purple-500">FitnessUY</a>, <a href="https://www.paydrinkapp.com/" class="underline text-blue-500 visited:text-purple-500">Paydrink</a>, <a href="https://www.barilocherentaboat.com/" class="underline text-blue-500 visited:text-purple-500">Rent-a-boat</a>, etc...'
          ],
          company: 'LIKA Software',
          current: false
        },
        {
          job: 'ReactJs Developer',
          dates: 'Aug 2023 - Nov 2023',
          description: [
            'Developed a web application based on the Minimals.cc design template, adapting it to the specific needs of clients. Implemented logic and user interface using React and Material-UI.',
            'Integrated various features into the information system required from a task dashboard, utilizing best practices to achieve maintainable code over time.'
          ],
          company: 'GMO Solutions',
          current: false
        },
        {
          job: 'Software Developer',
          dates: 'Mar 2022 / May 2023',
          description: [
            'I developed an information system for LAVAPOR laundry using Next.js and TypeScript for the frontend, Tailwind CSS for the user interface design, JSON Web Tokens (JWT) for authentication and cookies, and MySQL for the database.',
            'This information system enabled the laundry to manage customer information, employees, and sales, allowing them to focus on providing better service and increasing profitability.'
          ],
          company: 'Freelance',
          current: false
        },
        {
          job: 'SENA Apprentice - Software Developer',
          dates: 'Sept 2022 / Mar 2023',
          description: [
            'I resolved technological problems using tools such as .NET, Javascript, Microsoft, and SQL. I acquired skills in report generation tools, especially JasperReports, which allowed me to produce accurate and efficient reports. I participated in projects that improved team efficiency.'
          ],
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
            'Information system aims to improve the efficiency of the laundry through data processing.</br></br> The processed information will allow the company to identify patterns and trends to optimize their work.'
        },
        {
          title: 'Yard Sale',
          description:
            'E-commerce developed with Next.js and the Platzi Fake Store API. </br></br> Provides fictional product data for the simulation of a virtual store, filtering by product categories and more.'
        },
        {
          title: 'Logic Gates',
          description:
            'Interactive tool for learning logic gates and their truth tables. </br></br> The application allows users to enter logical equations, generate truth tables, and visualize Karnaugh maps.'
        },
        {
          title: 'Pokedex',
          description:
            'Pokedex built in React that utilizes the PokeAPI to display detailed information about each Pokemon in a design faithful to the original first-generation Pokedex. Navigation is done by clicking the arrows on the Pokedex.'
        },
        {
          title: 'Cake-Shop',
          description:
            'Cake-Shop is designed for the display and sale of cakes.</br></br> Users can explore a variety of unique and customized cakes, place orders via WhatsApp, and contact to request a cake according to their needs.'
        },
        {
          title: 'Certifications',
          description:
            "My-Certifications is a platform developed to facilitate the storage and display of certificates.</br></br>Elegant and professional gallery to showcase recognitions throughout one's professional career."
        },
        {
          title: 'Cost-Manager',
          description:
            'Platform developed to simplify the tracking of daily expenses.</br></br> The user can register his expenses and visualize them in a table and graphs in order to keep track of his income and expenses allowing him to improve his financial life.'
        }
      ]
    },
    skills: {
      title: 'Skills'
    },
    certifications: {
      title: 'Certifications',
      footer: 'See More certifications'
    },
    contact: {
      title: 'Contact',
      description:
        "Don't hesitate to get in touch with me to discuss how I can contribute to your team!"
    }
  }
}
