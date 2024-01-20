// import imgtest from '../img/homescreen/DSC01064-45.jpg'

// import IMAGES from "../assets/data/homepics.jsx"
function getImageUrl(name) {
    return new URL(`../img/homescreen/${name}.jpg`, import.meta.url).href
  }

function ImageCard (image) {
    return(
        <>
            <div className="group relative aspect-1/1 object-fill bg-slate600 w-4/5 cursor-pointer">
                <img src={getImageUrl(image.image)} className="group-hover:blur-sm block object-cover w-full h-full"/>
                <div style={{backgroundColor: "#8080804f"}}className="absolute inset-0  opacity-0 group-hover:opacity-100 flex justify-center items-center duration-300">
                    <text className="text-5xl text-black">swag</text>
                </div>
            </div>
        </>
    )
}

export default ImageCard