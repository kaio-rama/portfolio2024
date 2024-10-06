import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter lang-en">
        Ramiro Canevari's portfolio
      </h1>
      <div className="mb-4 lang">
      <p><b>Audiovisual artist & front-end developer.</b></p>
      <p>      
        Visuals, cinematic and code, that's my dogma. <br/>
        I'm a eveloper with solid frontend experience, specializing in technologies such as <b>JavaScript, 
        React, jQuery, Next.js, Webpack, and CSS (& SASS)</b>, enabling me to create modern and efficient user interfaces.
        My passion for design ensures that my solutions are not only functional but also visually appealing. <br/>
        Additionally, I have experience in backend development with tools like <b>Node.js, Python, and PHP</b>, 
        which allows me to approach projects comprehensively. 
      </p>
      <br/>
      <p>  
        I am constantly learning and motivated to face new challenges in the world of software & design.
        I am looking for opportunities that allow me to expand my skills, whether in frontend,
        backend development, or even in data entry tasks. I am ready to contribute in any area that requires a
        proactive and committed approach.
      </p>  
      </div>
      <div className="mb-4 lang" hidden>
      <p><b>Artista audiovisual & front-end developer.</b></p>
      <p>
        Visuales, cinematografía y código, ese es mi dogma. <br/>
        Desarrollador con sólida experiencia en frontend, especializado en tecnologías como
        <b>JavaScript, React, jQuery, Next.js, Webpack y CSS (& SASS)</b>, lo que me permite crear interfaces de
        usuario modernas y eficientes. Mi pasión por el diseño garantiza que mis soluciones no solo
        sean funcionales, sino también visualmente atractivas. Además, tengo experiencia en
        backend con herramientas como <b>Node.js, Python y PHP</b>, lo que me permite abordar
        proyectos de manera integral.
      </p>
      <br/>
      <p>
        Estoy en constante aprendizaje y me motiva enfrentar nuevos desafíos en el mundo de la programación.
        Busco oportunidades que me permitan expandir mis habilidades, ya sea en el desarrollo frontend,
        backend, o incluso en tareas de data entry. Estoy listo para contribuir en cualquier área que requiera un
        enfoque proactivo y comprometido.
      </p>
      </div>

      <div className="my-8">
        <h3 className="mb-4 text-xl font-semibold tracking-tighter">
          Lasts Blog entrys:
        </h3>
        <BlogPosts />
      </div>
    </section>
  )
}
