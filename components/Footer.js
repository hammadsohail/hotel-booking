import React from 'react'

const Footer = () => {
  return (
    <div className="grid grid-cols-1  px-32 py-14 bg-gray-100 gap-y-10 sm:grid-cols-4 ">
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is the real deal</p>
            <p>Its a pretty awesome Site</p>
            <p>Referrals accepted</p>
            <p>Newspaper</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">TOP 5</h5>
            <p>Saudia Arabia</p>
            <p>Pakistan</p>
            <p>Dubai</p>
            <p>Turkey</p>
            <p>Maldives</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
         <h5 className="font-bold">SUPPORT</h5>
            <p>Help Center</p>
            <p>Trust & Safety</p>
            <p>Need Guide, Youtube</p>
            <p>Winners</p>
            <p>Make a Plan</p>
        </div>
    </div>
  );
}

export default Footer