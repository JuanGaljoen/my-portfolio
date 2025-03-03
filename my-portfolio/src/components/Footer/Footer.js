import { Icon } from '@iconify/react';
import './Footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className="col-md-12">
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/juan-viljoen-409895245/" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:linkedin" className="social-icon" />
                    </a>
                    <a href="https://github.com/JuanGaljoen" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:github" className="social-icon" />
                    </a>
                    <a href="mailto:juangaljoen@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:email" className="social-icon" />
                    </a>
                </div>
                <div className="copyright py-4 text-center">
                    Copyright © Juan Viljoen
                </div>
            </div>
        </footer>
    );
};