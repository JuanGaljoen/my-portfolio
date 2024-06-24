import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import cert1 from "../Certs/AWSCCP.pdf"
import cert2 from "../Certs/WebDev.png"


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>These are the skills I have aquired so far in my coding journey.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img className='skill-image' src={"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png"} alt="skill-logo" />
                                    <h5>HTML</h5>
                                    <progress value="60" max="100"></progress>
                                </div>
                                <div className="item">
                                    <img className='skill-image' src={"https://pixelmechanics.com.sg/wp-content/uploads/2019/04/css.jpg"} alt="skill-logo" />
                                    <h5>CSS</h5>
                                    <progress value="58" max="100"></progress>
                                </div>
                                <div className="item">
                                    <img className='skill-image' src={"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"} alt="skill-logo" />
                                    <h5>JavaScript</h5>
                                    <progress value="62" max="100"></progress>
                                </div>
                                <div className="item">
                                    <img className='skill-image' src={"https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Symbol.png"} alt="skill-logo" />
                                    <h5>AWS</h5>
                                    <progress value="45" max="100"></progress>
                                </div>
                                <div className="item">
                                    <img className='skill-image' src={"https://media.istockphoto.com/id/868618032/tr/vekt%C3%B6r/sql-veritaban%C4%B1-simgesi-tasar%C4%B1m-ui-veya-ux-app.jpg?s=612x612&w=0&k=20&c=T-IVH0-p3LSjfXHw1zZKG8404iDCYZhZvL7LLzinj3A="} alt="skill-logo" />
                                    <h5>SQL</h5>
                                    <progress value="35" max="100"></progress>
                                </div>
                                <div className="item">
                                    <img className='skill-image' src={"https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png"} alt="skill-logo" />
                                    <h5>Docker</h5>
                                    <progress value="30" max="100"></progress>
                                </div>
                                <div className="item">
                                    <img className='skill-image' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"} alt="skill-logo" />
                                    <h5>React</h5>
                                    <progress value="62" max="100"></progress>
                                </div>
                                <div className="item">
                                    <img className='skill-image' src={"https://nodejs.org/static/images/logo-hexagon-card.png"} alt="skill-logo" />
                                    <h5>Node.js</h5>
                                    <progress value="45" max="100"></progress>
                                </div>
                                <div className="item">
                                    <img className='skill-image' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"} alt="skill-logo" />
                                    <h5>Bootstrap</h5>
                                    <progress value="60" max="100"></progress>
                                </div>
                                <div className="item">
                                    <img className='skill-image' src={"https://cdn.cdnlogo.com/logos/g/55/github.svg"} alt="skill-logo" />
                                    <h5>Github</h5>
                                    <progress value="50" max="100"></progress>
                                </div>
                                <div className="item">
                                    <img className='skill-image' src={"https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png"} alt="skill-logo" />
                                    <h5>MongoDB</h5>
                                    <progress value="45" max="100"></progress>
                                </div>
                                <div className="item">
                                    <img className='skill-image' src={"https://resources.dfuob.com/wp-content/uploads/2020/04/logo_lockup_analytics_icon_vertical_black_2x.png"} alt="skill-logo" />
                                    <h5>Google Analytics</h5>
                                    <progress value="38" max="100"></progress>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>



            <div className="certifications-container">
                <div className="certs">
                    <h2 className='cert-heading'>Certifications</h2>

                    <a href={cert1} target="_blank" rel="noreferrer">
                        <img
                            className="cert-image"
                            src="https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/linkedin_thumb_image.png"
                            alt="cert"
                            href={cert1}
                        />
                    </a>

                    <a href={cert2} target="_blank" rel="noreferrer">
                        <img
                            className="cert-image"
                            src="https://fundiconnect.co.za/wp-content/uploads/2021/06/Hyperion-Full-Stack-Web-Dev.png"
                            alt="cert"
                        />
                    </a>
                </div>
            </div>

        </section>
    )
}

