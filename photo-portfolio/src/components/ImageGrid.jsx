import ImageCard from "./ImageCard.jsx"
import IMAGES from "../assets/data/homepics.jsx"

function ImageGrid () {
    return(
            <main className="py-12 grid grid-cols-2 w-full place-items-center">
                {IMAGES && IMAGES.map((item, index) =>
                        <ImageCard key={item.title} title={item.title} image={item.photo} index={index}/>
                )
                }
            </main>
    )
}

export default ImageGrid