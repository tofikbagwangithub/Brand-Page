import photo1 from '/amazon.png'
import photo2 from '/flipkart.png'
import photo3 from '/hero-image.png'

const Hero = () => {
  return (
    <main className='hero container'>
    <div className= 'hero-content'> 
        <h1> YOUR FEET DESERVE THE BEST</h1>
        <p> YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. </p>

    <div className= 'hero-btn'> 
        <button> Shop Now </button>
        <button className= 'secondary-btn'> Category </button>
    </div>

    <div className= 'shopping'> 
        <p> Aso Available On</p>
        <div className= 'brand-icons'> 
            < img src= {photo1} alt='amazon'/>
            < img src= {photo2} alt='flipcart'/>
        </div>
    </div>
    </div>

        <div className= 'hero-image'>
        < img src= {photo3} alt='hero'/>
        </div>
    </main>
    
  )
}
export default Hero;
