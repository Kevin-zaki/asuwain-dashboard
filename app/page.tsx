import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Channels from '../components/Channels';
import Wishlist from '../components/Wishlist';
import DonationForm from '../components/DonationForm';
import Gallery from '../components/Gallery';
import Legal from '../components/Legal';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Channels />
        <Wishlist />
        <DonationForm />
        <Gallery />
        <Legal />
      </main>
      <Footer />
    </>
  );
}
