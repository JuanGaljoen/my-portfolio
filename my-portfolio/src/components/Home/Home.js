import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Container, Row } from "react-bootstrap";
import clouds from '../../assets/images/clouds.mp4'
import './Home.css'

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
        <div style={{ position: "relative" }}>
            <Container className="banner" id="home" style={{ overflow: "hidden" }}>
                <video
                    autoPlay
                    loop
                    muted
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -1 }}
                >
                    <source src={clouds} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Row className="align-items-center">
                    <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
                    <h1 className="section-title" style={{ color: "white" }}>
                        <span className="text-grey" style={{ textAlign: "center" }}>
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