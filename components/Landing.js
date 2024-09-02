import Categories from "./Landing/Categories"
import Intro from "./Landing/Intro"
import OurStory from "./Landing/Ourstory"
import Topseller from "./Landing/Topseller"
import Winter from"./Landing/Winter"


const Landing = () => {

  // if(window.innerWidth > 600){
  //   return <p> Please use phone</p>
  // }
  return (
    <>
    <Intro/>
    <Categories/>
    <Topseller/>
    <Winter/>
    <OurStory/>
    </>
  )
}

export default Landing
