import Image from 'next/image';

const IMAGES = ["/pic-1.jpg", "/pic-2.jpg", "/CryptoWallet.jpg", "/TDMovieOut.0.jpg"];

export function GalleryGrid(){
    return (
        <div className='gallery-grid'>
            {IMAGES.map((img, index) => (
                <Image
                    key={index}
                    width={360}
                    height={240}
                    src={img}
                    alt="Illustration of some Design & developing work."
                    className="mt-5"
                />
            ))}
        </div>
    );
}
