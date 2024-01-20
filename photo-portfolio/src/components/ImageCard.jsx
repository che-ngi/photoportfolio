// import imgtest from '../img/homescreen/DSC01064-45.jpg'

// import IMAGES from "../assets/data/homepics.jsx"
function getImageUrl(name) {
    return new URL(`../img/homescreen/${name}.jpg`, import.meta.url).href
  }

function ImageCard (image) {
    return(
        <>
            <div className="group relative aspect-1/1 object-fill w-4/5 cursor-pointer">
                <img src={getImageUrl(image.image)} className="group-hover:blur-sm block object-cover w-full h-full"/>
                <div style={{backgroundColor: "#c7c7c74f"}}className="absolute inset-0  opacity-0 group-hover:opacity-100 flex justify-center items-center duration-300">
                </div>
                <text className="absolute font-sans font-thin tracking-wider pt-3 duration-500 text-3xl sm:text2-xl lg:text-4xl xl:text-5xl text-gray-800 text-center content-start justify-center w-full">{image.title}</text>
            </div>
        </>
    )
}

export default ImageCard