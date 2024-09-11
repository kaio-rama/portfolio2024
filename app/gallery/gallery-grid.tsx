import Image from 'next/image';

const IMAGES = [
    {img: "/pic-1.jpg", alt: "Subsuelo - Own project of underground artist fron Córdoba city."},
    {img: "/pic-2.jpg", alt: "Subsuelo's Gallery - Own project of underground artist fron Córdoba city."},
    {img: "/CryptoWallet.jpg", alt: "Mockup for a CryptoWallet project."},
    {img: "/TDMovieOut.0.jpg", alt: "Touchdesign's made in visual."},
    {img: "/dread-delusion.avif", alt: "Cool retro game visual."},
    {img: "/exterior 2 mas sat.png", alt: "Hell Hoe videoclip directed by kaio-rama."},
    {img: "/habitacio.png", alt: "Hell Hoe videoclip directed by kaio-rama."},
    {img: "/puchito.png", alt: "Hell Hoe videoclip directed by kaio-rama."},
    {img: "/image (3).png", alt: "Art direction on Lara Modena videoclip."},
    {img: "/Screenshot 2024-08-29 at 11-10-43 QUASAR - Lara Modena Fotografía color y co-dirección Behance.png", alt: "Art direction on Lara Modena videoclip."},
    {img: "/Captura.JPG", alt: "Art direction on Lara Modena videoclip."},
    {img: "/Screenshot 2024-08-29 at 11-30-11 QUASAR - Lara Modena Fotografía color y co-dirección Behance.png", alt: "Art direction on Lara Modena videoclip."},

];

export function GalleryGrid(){
    return (
        <div className='gallery-grid'>
            {IMAGES.map((img, index) => (
                <Image
                    key={index}
                    width={400}
                    height={140}
                    src={img.img}
                    alt={img.alt}
                    className="mt-5"
                />
            ))}
        </div>
    );
}
