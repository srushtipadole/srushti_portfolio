import React from 'react'
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    //lets create a navbar which contains my name "SP" on the right with a margins
    //and space in between and about skills projects contact with equal gap and in the last a box to where the Resume is written inside
    <header className="fixed top-0 w-full z-50 bg-background-light/90 backdrop-blur border-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <span className="text-primary">{`<>`}</span>
          <span>Srushti_Padole</span>
          <span className="text-primary">{`<>`}</span>
        </div>

        {/* Links */}
        <nav className="hidden md:flex gap-6 text-sm">
  <a href="#home" className="hover:text-primary">Home</a>
  <a href="#about" className="hover:text-primary">About</a>
  <a href="#skills" className="hover:text-primary">Skills</a>
  <a href="#projects" className="hover:text-primary">Projects</a>
  <a href="#contact" className="hover:text-primary">Contact</a>
</nav>


        {/* Resume */}
        <Button
          className="bg-primary text-white hover:bg-primary/90"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1WKNFOxi6-wcgnRt5LJwPeAnML22u141t/view?usp=drivesdk"
            )
          }
        >
          Resume
        </Button>

      </div>
    </header>
  )
}

export default Navbar
