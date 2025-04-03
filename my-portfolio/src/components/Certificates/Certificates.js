import React from 'react';
import { Icon } from '@iconify/react';
import './Certificates.css';
import { certs } from '../../data/certs';

export const Certificates = () => {
    return (
        <section id="certificates">
            <h2 className="section-title">Certificates</h2>
            <div className="cert-container">
                {certs.map((cert) => (
                    <div key={cert.id} className="cert-tile">
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="skill-link">
                            <Icon icon={cert.icon} className="cert-icon" />
                            <span className="cert-name">{cert.name}</span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};
