// import IMAGES from "../assets/data/homepics.jsx"
import PORTRAITS from "../assets/data/portraits.jsx"
import LANDSCAPES from "../assets/data/landscapes.jsx"
import CONCERTS from "../assets/data/concerts.jsx"
import EVENTS from "../assets/data/events.jsx"


// function getImageUrlPortraits(name) {
//     return new URL(`../img/portraits/${name}.jpg`, import.meta.url).href
//   }
// function getImageUrlLandscapes(name) {
// return new URL(`../img/landscapes/${name}.jpg`, import.meta.url).href
// }

function getImageUrl(genre, name) {
return new URL(`../img/${genre}/${name}.jpg`, import.meta.url).href
}

function MasonryGrid (props) {
    return(
            <main className="p-12">
                <h1 className="font-sans font-thin tracking-wider duration-500 text-2xl md:text-4xl xl:text-5xl text-gray-800 text-center content-start justify-center">{props.title}</h1>
                <div className="mt-6 image-container columns-3 gap-8">
                    {props.title == "portraits" && PORTRAITS && PORTRAITS.map((item) =>   
                        <img key={item} className="mb-8" src={getImageUrl("portraits", item)}/>
                    )}
                    {props.title == "landscapes" && LANDSCAPES && LANDSCAPES.map((item) =>  
                        <img key={item} className="mb-8" src={getImageUrl("landscapes", item)}/>
                    )}
                    
                    {props.title == "concerts" && CONCERTS && CONCERTS.map((item) =>  
                        <img key={item} className="mb-8" src={getImageUrl("concerts", item)}/>
                    )}
                    {props.title == "events" && EVENTS && EVENTS.map((item) =>  
                        <img key={item} className="mb-8" src={getImageUrl("events", item)}/>
                    )}
                </div>
            </main>
    )
}

export default MasonryGrid