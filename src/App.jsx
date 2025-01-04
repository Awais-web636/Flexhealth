import Navbar from "./Components/Navbar"
import Herosection from "./Components/Herosection"
import Services from "./Components/Services"
import Speciality from "./Components/Speciality"
import Whowe from "./Components/Whowe"
import Whychoose from "./Components/Whychoose"
import ContactUs from "./Components/Contactus"
import FAQ from "./Components/FAQ"
import Footer from "./Components/Footer"
import ScrollToTop from "./Components/scrollToTop"
export default function App() {
  return (
    <>
    <div className="overflow-x-hidden">
    <Navbar/>
    <Herosection/>
    <Services/>
    <Speciality/>
    <Whowe/>
    <Whychoose/>
    <ContactUs/>
    <FAQ/>
    <Footer/>
    <ScrollToTop/>
    </div>

    </>
  )
}