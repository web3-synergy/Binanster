import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Meteor from "@/Components/LandingPage/Meteor";



 
export default function RootLayout({ children }) {
  return (
    <div className=''>
      <div className="main"></div>

      <div class="star-field">
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
      </div>

      <Meteor/>

      {children}
    </div>
  );
}
