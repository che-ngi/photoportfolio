// import IMAGES from "../assets/data/homepics.jsx"
function getImageUrl(name) {
    return new URL(`../img/recentwork/${name}.jpg`, import.meta.url).href
  }

function MasonryGrid () {
    return(
            <main className="py-12">

                <h1 className="text-center text-4xl mb-4 font-sans font-thin tracking-wider">recent work</h1>

                <div className="image-container m-10 columns-3 gap-5">
                    <img className="mb-5" src={getImageUrl("highvyn")}></img>
                    <img className="mb-5" src={getImageUrl("bean")}></img>
                    <img className="mb-5" src={getImageUrl("LASkyline")}></img>
                    <img className="mb-5" src={getImageUrl("dhadak")}></img>
                    <img className="mb-5" src={getImageUrl("hojean")}></img>
                    <img className="mb-5" src={getImageUrl("hongkong2")}></img>
                    <img className="mb-5" src={getImageUrl("jabin")}></img>
                    <img className="mb-5" src={getImageUrl("nycpark")}></img>
                    <img className="mb-5" src={getImageUrl("ricepaddyheroes")}></img>
                    <img className="mb-5" src={getImageUrl("hongkong")}></img>
                    <img className="mb-5" src={getImageUrl("ricepaddyheroes2")}></img>
                    <img className="mb-5" src={getImageUrl("tifday")}></img>
                </div>
            </main>
    )
}

export default MasonryGrid