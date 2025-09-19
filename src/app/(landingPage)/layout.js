import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Particle from "@/Components/LandingPage/ParticlesBackground";

// Example in React / Next.js layout component
export default function RootLayout({ children }) {
  return (
    <div>
      <div class="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
  
      </div>
      <Particle />

      {/* Existing site content */}
      <div>{children}</div>
    </div>
  );
}