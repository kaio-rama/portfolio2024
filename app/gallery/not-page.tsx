
import { GalleryGrid } from "./gallery-grid"

export const metadata = {
  title: 'Gallery',
  description: 'Watch some of my works.',
}

export default function Page() {
  return (

    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">my gallery </h1>
      <p> here you can find some of my works.</p>
      
      <GalleryGrid/>

    </section>
  )
}