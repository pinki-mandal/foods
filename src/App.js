import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'
import Slider from './components/Slider'

function App() {
  return (
    <div>
        <Navbar />
        <Slider/>
        <HeadlineCards />
        <Food />
        <Category />
        {/* <Slider/> */}
    </div>
  );
}

export default App;