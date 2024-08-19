import Image from "next/image";
import bgImage from "../../public/bgImage.jpg";

export default function BgImage() {
    return <Image
        src={bgImage}
        alt="Background"
        placeholder="blur"
        fill
        sizes="100vw"
        id="bgImage"
        style={{
            objectFit: 'cover',
            zIndex : -1,
            
        }}
    />
}