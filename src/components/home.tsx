import { CiCircleChevDown } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

import '../css/home.css'
import '../css/kodchasan.css'

function Home() {
  return (
    <>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
        </style>
        <div className="menu-icon"><GiHamburgerMenu size={30}/></div>
        <div className="home">
            <h1>Hi, I'm Aditi Verma</h1>
            <h2>Computer Engineering Student</h2>
            <button>Learn more</button>
            <br></br>
            <CiCircleChevDown size={36}/>
        </div>
        <img id="wave" src="public\wave2.png" alt="wave" />
    </>
  )
}

export default Home