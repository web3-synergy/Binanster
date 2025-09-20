import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Particle from "@/Components/LandingPage/ParticlesBackground";

// Example in React / Next.js layout component
export default function RootLayout({ children }) {
  return (
    <div>
      <div class="bg-animation">
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          <div id='stars4'></div>
        </div>
      <Particle />

      {/* Existing site content */}
      <div>{children}</div>
    </div>
  );
}
