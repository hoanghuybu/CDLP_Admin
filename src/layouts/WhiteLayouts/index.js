import './WhiteLayouts.scss';
import images from '~/assets/images';
function WhiteLayouts({ children }) {
    return (
        <section className="vh-100">
            <div className="header-title">
                <div className="d-flex header-logo">
                    <img src={images.CDLP_logo} alt="CDLP"></img>
                </div>
                <h2>Login Admin</h2>
                <div className="d-flex"></div>
            </div>
            <div className="container-fluid h-100">{children}</div>
        </section>
    );
}

export default WhiteLayouts;
