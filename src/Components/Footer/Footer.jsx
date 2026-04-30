
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import "./Footer.css";
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";

function Footer() {
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-section">
                        <h3>Contacto</h3>
                        <div className="info-item">
                            <Phone size={20}/>
                            <div>
                                <p>304 132 2283</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <MapPin size={20}/>
                            <div>
                                <p>Calle 4 # 7E-31 B</p>
                                <p>Quinta Oriental</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Mail size={20}/>
                            <div>
                                <p>info@irvet.com</p>
                            </div>
                        </div>

                        
                        
                    </div>
                    <div className="footer-section">
                        <h3>Horarios</h3>
                        <div className="info-item">
                            <Clock size={20}/>
                            <div>
                                <p>Lunes a Viernes</p>
                                <p>8:30 AM - 6:00 PM</p>
                                <p style={{marginTop: "0.5rem"}}>Sábados</p>
                                <p>9:00 AM - 12:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3>IRVET</h3>
                        <p>
                            Instituto de Resultados Veterinarios - Comprometidos con la salud
                            y bienestar de tus mascotas. Ofrecemos servicios de laboratorio
                            clínico veterinario con tecnología de punta.
                        </p>
                    </div>
                    
                   <div className="footer-section">
                        <h3>Redes Sociales</h3>
                        <div className="info-item">
                            <SiFacebook size={20}/>
                            <div>
                                <p>IRVET - Instituto de Resultados Veterinarios</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <SiInstagram size={20}/>
                            <div>
                                <p>laboratorio_irvet</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} IRVET - Instituto de Resultados
                        Veterinarios. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;