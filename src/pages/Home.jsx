import '/src/App.css';

const Home = () => {
    return (
      <div className="container">
        <h1>Bienvenido al Administrador de Citas</h1>
        <p className='homeP'>Bienvenido al Administrador de Citas, una aplicación desarrollada como parte de un trabajo práctico para la escuela, con el objetivo de poner en práctica conocimientos de programación, diseño de interfaces y organización de datos. Este proyecto consiste en la creación de un programa funcional que permite a los usuarios gestionar citas de forma clara, ordenada y eficiente. </p>

        <p className='homeP'>La idea central del programa es simular un sistema real de administración de turnos o citas, como los que se pueden encontrar en consultorios médicos, veterinarias, centros de estética o cualquier otro servicio que trabaje con atención al cliente mediante turnos. El propósito es que el usuario pueda registrar nuevas citas ingresando una serie de datos esenciales, y que luego pueda visualizarlas, modificarlas o eliminarlas según sea necesario.</p>

        <p className='homeP'>El flujo principal de la aplicación se basa en la creación de una cita, la cual está compuesta por varios campos clave:</p>

        <p className='homeP'>Nombre del dueño: el nombre de la persona que solicita la cita.</p>

        <p className='homeP'>Síntoma: una breve descripción del motivo de la consulta.</p>

        <p className='homeP'>Fecha: el día exacto en el que se desea realizar la cita.</p>

        <p className='homeP'>Hora: el horario específico en el que está programada la atención.</p>

        <p className='homeP'>Detalles adicionales: un campo libre donde se pueden agregar observaciones, comentarios u otra información que el usuario considere importante.</p>

        <p className='homeP'>Al ingresar estos datos, el sistema se encarga de organizarlos y mostrarlos de manera estructurada, permitiendo un control simple pero eficaz sobre las citas registradas. Además, se incluyen funcionalidades básicas como la edición o eliminación de una cita ya existente, para simular un entorno dinámico y realista donde los datos pueden cambiar con el tiempo.</p>

        <p className='homeP'>Este proyecto no solo busca que aprendamos a escribir código y manipular formularios, sino que también nos entrena en el desarrollo de aplicaciones útiles y aplicables a la vida real. A través del trabajo con campos de entrada, almacenamiento de datos, validación de formularios y manejo de eventos, desarrollamos habilidades técnicas que nos preparan para desafíos más complejos en el futuro.</p>

        <p className='homeP'>En resumen, el Administrador de Citas es una herramienta práctica que, aunque sencilla en apariencia, encierra muchos de los conceptos fundamentales de la programación moderna. Representa un paso importante en nuestro aprendizaje, y al mismo tiempo demuestra cómo, a partir de una necesidad concreta, se puede crear una solución tecnológica que aporte valor y organización</p>
      </div>
    );
  };
  
  export default Home;
  