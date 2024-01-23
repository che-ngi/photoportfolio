import Header from '../components/Header.jsx';

function About() {

function getImageUrl(name) {
    return new URL(`../img/${name}.jpg`, import.meta.url).href
    }

  return (
    <div className="App flex">
      <Header/>
      <main className="p-12 border ">
        <div className="grid-rows-2 lg:grid-cols-2 grid border-red-500 border">
            <div className="grid grid-row-4 mb-6 lg:mr-6 font-sans font-light text-xl gap-12 leading-10">
                <h1 className="font-medium text-6xl">about.</h1>
                <h2 className="font-medium text-2xl">
                Hey! I'm Aaron, a self-taught photographer based in Boston but often take my camera around the world on my travels.
                </h2>
                <p>
                I specialize in land/cityscapes but have experience and confidence in any type of photography.
                I enjoy all types of creative photography including portraits, landscapes, concerts, and events. 
                Much of my creative exploration comes within the editing process and manipulating the colors, look, and feel of a photo.
                </p>
                <p>
                If you have a story or idea you want to express through photos, or is looking for someone to photograph your event, 
                let's collaborate!
                </p>
            </div>
            <div className="flex mt-6 lg:ml-6 lg:items-center border-black border">
                <img src={getImageUrl("me")} className="object-cover"/>
            </div>
        </div>

      </main>
    </div>

  )
}

export default About;
