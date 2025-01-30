import ImageCard from "./ImageCard.jsx"
import IMAGES from "../assets/data/homepics.jsx"

function ImageGrid () {
    return(
            <main className="py-12 grid lg:grid-cols-2 gap-y-28 place-items-center mb-10">
                {IMAGES && IMAGES.map((item, index) =>
                            <ImageCard key={item.title} title={item.title} image={item.photo} index={index}/>
                )
                }
            </main>
    )
}

export default ImageGrid