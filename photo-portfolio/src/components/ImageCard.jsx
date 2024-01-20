// import imgtest from '../img/homescreen/DSC01064-45.jpg'

// import IMAGES from "../assets/data/homepics.jsx"
function getImageUrl(name) {
    return new URL(`../img/homescreen/${name}.jpg`, import.meta.url).href
  }

function ImageCard (image) {
    return(
        <>
            <div className=" aspect-1/1 object-fill bg-slate600 w-4/5">
                <img src={getImageUrl(image.image)} className="object-cover w-full h-full hover:blur-sm cursor-pointer relative duration-300"/>
                <div className="h-20 w-full">
                    <text className="top-1/2 w-full text-center">swag</text>
                </div>
            </div>
        </>
    )
}

export default ImageCard