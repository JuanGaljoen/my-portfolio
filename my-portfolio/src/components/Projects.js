import cartPic from "../images/cart.jpg"
import memoryPic from "../images/memory.jpg"
import portfolioPic from "../images/resume.jpg"
import todoPic from "../images/todo.jpg"
import inventoryPic from "../images/inventory.jpg"
import carsPic from "../images/cars.jpg"
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {
  // Array of project objects with title, description, image URL, and link
  const projects = [
    // Project 1: AWS Cloud Resume
    {
      title: "AWS Cloud Resume",
      description: "This portfolio is bootstrapped with React and hosted on AWS using S3, Cloudfront, Route53, Lambda, API Gateway, and DynamoDB. CI/CD is set up with Github Actions for the frontend and Terraform for the backend.",
      imgUrl: portfolioPic,
      link: "https://github.com/JuanBiljoen/cloud-resume/blob/main/my-portfolio/README.md"
    },
    // Project 2: Memory game
    {
      title: "Memory game",
      description: "The React-based match card game is a fun and interactive game that challenges users to match pairs of cards. The game features a deck of cards with different images, and the user's objective is to match all the cards in the shortest time possible.",
      imgUrl: memoryPic,
      link: "https://memory-app-ten.vercel.app/"
    },
    // Project 3: E-commerce cart
    {
      title: "e-commerce cart",
      description: "Vanilla JavaScript shopping cart, web-based application that allows users to select items from an online store, add them to a shopping cart, and proceed to checkout where you can choose delivery and add a promo code. The shopping cart is designed using HTML, CSS, and JavaScript.",
      imgUrl: cartPic,
      link: "https://github.com/JuanBiljoen/e-commerce-Shopping-cart"
    },
    // Project 4: Cars Manager
    {
      title: "Cars Manager",
      description: "This application includes both the frontend created with ReactJS and the backend part created with ExpressJS and the database setup with MongoDB. The data interacts with the DB using CRUD operations.",
      imgUrl: carsPic,
      link: "https://github.com/JuanBiljoen/car-manager#readme"
    },
    // Project 5: Todo app (Full Stack)
    {
      title: "Todo app (Full Stack)",
      description: "The MERN stack to-do app enables users to create an account, add to-do items, and edit or delete them later. The app features secure authentication, options to mark tasks as complete or pending, and an intuitive user interface. It is a powerful and efficient solution for managing tasks.",
      imgUrl: todoPic,
      link: "https://github.com/JuanBiljoen/mern-todo"
    },
    // Project 6: Inventory manager (Full stack MERN application)
    {
      title: "Inventory manager (Full stack MERN application)",
      description: "The inventory management app built using the MERN stack has admin and end-user features, uses JWT authentication, and is designed for businesses to manage their inventory efficiently and securely. The app allows admins to manage products, orders, shipments, and user access levels. End-users can browse products, add to cart, track orders, and view order history.",
      imgUrl: inventoryPic,
      link: "https://github.com/JuanBiljoen/inventory"
    },
    // Next Project: Placeholder for future projects
    // {
    //   title: "Next Project",
    //   description: "Loading...",
    //   imgUrl: "https://media.tenor.com/UnFx-k_lSckAAAAC/amalie-steiness.gif",
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "fadeIn" : ""}>
                  {/* Section heading and description */}
                  <h2>Projects</h2>
                  <p>Here are a couple of projects I have worked on thus far.</p>
  
                  <Tab.Content className={isVisible ? "slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      {/* Render project cards */}
                      <Row>
                        {projects.map((project, index) => (
                          <Col md={4} key={index}>
                            <ProjectCard {...project} />
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
