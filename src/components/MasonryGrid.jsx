// import IMAGES from "../assets/data/homepics.jsx"
import PORTRAITS from "../assets/data/portraits.jsx"
import LANDSCAPES from "../assets/data/landscapes.jsx"
import CONCERTS from "../assets/data/concerts.jsx"
import EVENTS from "../assets/data/events.jsx"
import { useState } from 'react';

function getImageUrl(genre, name) {
return new URL(`${name}`, import.meta.url).href
}



function MasonryGrid (props) {

    const [preview, setPreview] = useState(false);
    const [imagePopUp, setImagePopUp] = useState();

    function previewSelector(item) {
        setImagePopUp(getImageUrl("portraits", item)) 
        setPreview(true) 
    }

    return(
        <div>
            <main className="p-12">
                <h1 className="font-sans font-thin tracking-wider duration-500 text-4xl xl:text-5xl text-gray-800 text-center content-start justify-center">{props.title}</h1>
                <div className="mt-6 image-container sm:columns-3 gap-8">
                    {props.title == "portraits" && PORTRAITS && PORTRAITS.map((item) =>   
                        <img key={item} className="mb-8 cursor-pointer hover:scale-105 duration-300" src={getImageUrl("portraits", item)} onClick={() => previewSelector(item)}/>
                    )}
                    {props.title == "landscapes" && LANDSCAPES && LANDSCAPES.map((item) =>  
                        <img key={item} className="mb-8 cursor-pointer hover:scale-105 duration-300" src={getImageUrl("landscapes", item)} onClick={() => previewSelector(item)}/>
                    )}
                    
                    {props.title == "concerts" && CONCERTS && CONCERTS.map((item) =>  
                        <img key={item} className="mb-8 cursor-pointer hover:scale-105 duration-300" src={getImageUrl("concerts", item)} onClick={() => previewSelector(item)}/>
                    )}
                    {props.title == "events" && EVENTS && EVENTS.map((item) =>  
                        <img key={item} className="mb-8 cursor-pointer hover:scale-105 duration-300" src={getImageUrl("events", item)} onClick={() => previewSelector(item)}/>
                    )}
                </div>
            </main>
            {preview &&
                <div className="fixed h-full w-screen backdrop-blur-sm top-0 left-0">
                    <header className="flex bg-white/80 h-full w-full justify-center align-center" onClick={() => {setPreview(false)}}>
                            <img className="p-2 sm:p-10 object-contain" src={imagePopUp}/>
                    </header>

                </div>
            }
        </div>
    )
}

export default MasonryGrid