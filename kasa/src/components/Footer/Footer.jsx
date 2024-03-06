import logoFooter  from "../../assets/logoFooter.png"
import  "./footer.scss"

function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo" src={logoFooter} alt="logo de kasa"/>
            <p className="footer__text">© 2020 Kasa. All rights reserved</p> 
        </footer>
    )
}

export default Footer