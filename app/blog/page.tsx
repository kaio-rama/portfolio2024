import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <div className='mb-8 lang'>
        <p> 
        Here you will find documentation about some of the projects I've participated in, along with reflections on effective implementations,
        the challenges I've encountered, and the interesting solutions I've come across.      
        </p>
        <p>
        Some of these writings, which started as "notes," have evolved into something resembling articles or guides.
         I find them valuable for revisiting ideas and refreshing the understanding of some of these technologies.
        </p>
        <br/>
        <p>
        This serves as an useful window into the kind of work I've been doing recently, 
        the technologies I've been using, and what has been capturing my attention these days.
        </p>
      </div>
      <div className='mb-8 lang' hidden>
        <p> 
          Aquí encontrarás documentación sobre algunos de los proyectos en los que he participado,
          junto con reflexiones sobre implementaciones efectivas, los desafíos que he encontrado y las soluciones más interesantes que han surgido.    
        </p>
        <p>
          Algunos de estos escritos, que comenzaron como "notas", han evolucionado hasta convertirse en algo parecido a artículos o guías.
          Los encuentro valiosos para revisar ideas y refrescar la comprensión de ciertas tecnologías.</p>
        <br/>
        <p>
          Sirven como una ventana útil al tipo de trabajo que he estado haciendo recientemente, las tecnologías que he estado usando
           y lo que ha estado captando mi atención estos días.
        </p>
      </div>
      <BlogPosts />
    </section>
  )
}
