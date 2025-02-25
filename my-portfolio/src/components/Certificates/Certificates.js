import React from "react";
import { Icon } from '@iconify/react';
import webCert from '../../assets/certs/WebDev.png';
import awsCert from '../../assets/certs/AWSCCP.pdf';

export const Certificates = () => {
    const sectionName = "Certificates";

    const certs = [
        { name: "AWS Cloud Practitioner", icon: "mdi:aws", link: awsCert },
        { name: "Full Stack Web Development", icon: "ant-design:code-outlined", link: webCert },
    ];

    return (
        <section id="certificates">
            <h2 className="section-title">{sectionName}</h2>
            <div className="cert-container">
                {certs.map((cert, index) => (
                    <div key={index} className="cert-tile">
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
