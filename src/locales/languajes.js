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
          job: 'Desarrollador Frontend - FitnessUY',
          dates: 'Feb-2024',
          description: [
            '<a href="https://www.paydrinkapp.com/" class="underline text-blue-500 visited:text-purple-500">FitnessUY<a/> es un ecommerce de ropa deportiva dirigido principalmente al público uruguayo.',

            'Desarrollo e implemento la interfaz de usuario y la lógica del frontend. Trabajando en conjunto con el equipo de diseño, adapto la aplicación web a las necesidades del cliente. Colaboro estrechamente con el equipo de backend y diseño para llevar un correcto organizamiento de responsabilidades.'
          ],
          company: 'LIKA Software',
          current: true
        },
        {
          job: 'Desarrollador Frontend - Paydrink',
          dates: 'Ene-2024 / Mar-2024',
          description: [
            'Contribuí al desarrollo de <a href="https://www.paydrinkapp.com/" class="underline text-blue-500 visited:text-purple-500">Paydrink<a/>, un marketplace de bebidas para boliches en Argentina. Mi labor consistió en el desarrollo y optimización del código del lado del frontend, lo que permitió la evolución continua del proyecto. ',

            'Trabajé en equipo de manera organizada, lo que nos permitió llevar a cabo el proyecto de manera exitosa.'
          ],
          company: 'LIKA Software',
          current: false
        },
        {
          job: 'Freelance Desarrollador ReactJs',
          dates: 'Aug-2023 / Oct-2023',
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
          title: 'Cinema Data',
          description:
            'Plataforma para explorar películas, los usuarios pueden encontrar una amplia selección de películas organizadas por género, tendencias, ademas.</br></br> Proyecto usando React y la API de The Movie Database.'
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
          job: 'Frontend Developer - FitnessUY',
          dates: 'Feb-2024',
          description: [
            '<a href="https://www.paydrinkapp.com/" class="underline text-blue-500 visited:text-purple-500">FitnessUY<a/> is an ecommerce for sportswear mainly aimed at the Uruguayan public.',

            'I develop and implement the user interface and frontend logic. Working together with the design team, I adapt the web application to the client`s needs. I collaborate closely with the backend and design team to maintain a correct organization of responsibilities>.'
          ],
          company: 'LIKA Software',
          current: true
        },
        {
          job: 'Frontend Developer - Paydrink',
          dates: 'Jan-2024 / Mar-2024',
          description: [
            'I contributed to the development of <a href="https://www.paydrinkapp.com/" class="underline text-blue-500 visited:text-purple-500">Paydrink<a/>, a beverage marketplace for nightclubs in Argentina. My work consisted of developing and optimizing the code, which allowed for the continuous evolution of the project. ',

            'I worked in an organized team, which allowed us to successfully carry out the project.'
          ],
          company: 'LIKA Software',
          current: false
        },
        {
          job: 'Freelance ReactJs Developer',
          dates: 'Aug 2023 - Present',
          description: [
            'Developed a web application based on the Minimals.cc design template, adapting it to the specific needs of clients. Implemented logic and user interface using React and Material-UI.',
            'Integrated various features into the information system required from a task dashboard, utilizing best practices to achieve maintainable code over time.'
          ],
          company: 'GMO Solutions',
          current: true
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
          title: 'Cinema Data',
          description:
            'Platform for exploring movies, where users can find a wide selection of movies organized by genre, trends, and more.</br></br> This project is built using React and The Movie Database API.'
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
