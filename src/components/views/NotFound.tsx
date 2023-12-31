import { Container } from "react-bootstrap";
import "./NotFound.css";
import NavBarTop from "../NavBarTop";
import NavBarBottom from "../NavBarBottom";
function NotFound() {
    return (
 
        <><NavBarTop /><section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>
                            </div>
                            <div className="contant_box_404">
                                <h3 className="h2">
                                    Il semblerait que vous vous soyez perdu
                                </h3>
                                <p>La page que vous cherchez n'existe pas!</p>
                                <a href="/" className="link_404">Retour</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <NavBarBottom/>
        </>

    )
}

export default NotFound;   