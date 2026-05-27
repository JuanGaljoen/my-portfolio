import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Container, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import clouds from '../../assets/images/clouds.mp4';
import './Home.css';

const apiUrl = process.env.REACT_APP_API_URL;

export const Home = () => {
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        const fetchVisitorCount = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setVisitorCount(data.count);
            } catch (error) {
                console.error('Error fetching visitor count:', error);
            }
        };

        fetchVisitorCount();
    }, []);

    return (
        <div className="home-wrapper">
            <Container className="banner" id="home">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="banner-video"
                >
                    <source src={clouds} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Row className="align-items-center">
                    <Icon icon="la:laptop-code" className="header-icon" />
                    <h1 className="section-title banner-title">
                        <span className="text-grey">
                            Juan Viljoen
                        </span>
                    </h1>
                    <TypeAnimation
                        sequence={[
                            "FULL STACK DEVELOPER",
                            2000,
                            "ENTREPRENEUR",
                            2000,
                            "TECH ENTHUSIAST",
                            2000,
                        ]}
                        wrapper="span"
                        repeat={Infinity}
                        cursor={true}
                        className="wrap"
                    />
                </Row>
            </Container>
            <div className="visitor-count">
                Visitors: {visitorCount}
            </div>
        </div>
    );
}
