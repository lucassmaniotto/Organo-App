import './index.css';

const Footer = () => {
    return (
        <div className="footer__wrapper">
            <div className='footer__social-media'>
                <a href="https://github.com/lucassmaniotto"><img src="/img/fb.png" alt="Facebook"/></a>
                <a href="https://twitter.com/alpiste_punk"><img src="/img/tw.png" alt="Twitter"/></a>
                <a href="https://www.instagram.com/corvus_tenebrae"><img src="/img/ig.png" alt="Instagram"/></a>
            </div>
            <img src="/img/logo.png" alt="Logo" className="footer__logo"/>
            <p className="footer__text">Desenvolvido no curso da <a className="footer__text--ancor" href="https://github.com/lucassmaniotto/React-Cursos/tree/main/">Alura</a>.</p>
        </div>
    );
};

export default Footer;