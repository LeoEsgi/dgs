import Container from "react-bootstrap/esm/Container";
import NavBarTop from '../../components/NavBarTop';
import NavBarBottom from '../../components/NavBarBottom';
import ArtistCardView from '../../components/ArtistCardView';
import CustomCarousel from "../CustomCarousel";

function Home() {
    return (
      
            <><NavBarTop /><ArtistCardView /><NavBarBottom /></>
        
    )
}

export default Home;   