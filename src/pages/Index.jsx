import React from 'react'
import SliderPage from './SliderPage'
import images from "../images/images"
import HistoryPage from './HistoryPage'
import GalleryPage from './GalleryPage'
import ContactPage from './ContactPage'
import LandingPage from './LandingPage'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Events from './EventsPage'
import DonationPage from './DonationPage'
import ManagementPage from './ManagementPage'
import VideoPage from './VideoPage'

const Index = () => {
  return (
    <div>
      <Header/>
      <LandingPage/>
      <Events id="events"/>
      <VideoPage/>
      <HistoryPage id="history" />
      <ManagementPage id="management"/>
      <SliderPage id="gallery">
        {images.map((image, index) => (
          <img 
            className='w-full h-60 object-cover' 
            key={index} 
            src={image.imgURL} 
            alt={image.imgAlt} 
          />
        ))}
      </SliderPage>
      {/* <GalleryPage id="gallery" /> */}
      <DonationPage id="donation"/>
      <ContactPage id="contact" />
      <Footer/>
    </div>
  )
}

export default Index
