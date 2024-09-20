import cartPic from "../assets/images/cart.jpg"
import memoryPic from "../assets/images/memory.jpg"
import portfolioPic from "../assets/images/resume.jpg"
import todoPic from "../assets/images/todo.jpg"
import inventoryPic from "../assets/images/inventory.jpg"
import carsPic from "../assets/images/cars.jpg"
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {
  const projects = [
    {
      title: "AWS Cloud Resume",
      description: "This portfolio is bootstrapped with React and hosted on AWS using S3, Cloudfront, Route53, Lambda, API Gateway, and DynamoDB. CI/CD is set up with Github Actions for the frontend and Terraform for the backend.",
      imgUrl: portfolioPic,
      link: "https://github.com/JuanGaljoen/cloud-resume/blob/main/my-portfolio/README.md"
    },
    {
      title: "Memory game",
      description: "The React-based match card game is a fun and interactive game that challenges users to match pairs of cards. The game features a deck of cards with different images, and the user's objective is to match all the cards in the shortest time possible.",
      imgUrl: memoryPic,
      link: "https://memory-app-ten.vercel.app/"
    },
    {
      title: "e-commerce cart",
      description: "Vanilla JavaScript shopping cart, web-based application that allows users to select items from an online store, add them to a shopping cart, and proceed to checkout where you can choose delivery and add a promo code. The shopping cart is designed using HTML, CSS, and JavaScript.",
      imgUrl: cartPic,
      link: "https://github.com/JuanGaljoen/e-commerce-Shopping-cart"
    },
    {
      title: "Cars Manager",
      description: "This application includes both the frontend created with ReactJS and the backend part created with ExpressJS and the database setup with MongoDB. The data interacts with the DB using CRUD operations.",
      imgUrl: carsPic,
      link: "https://github.com/JuanGaljoen/car-manager#readme"
    },
    {
      title: "Todo app (Full Stack)",
      description: "The MERN stack to-do app enables users to create an account, add to-do items, and edit or delete them later. The app features secure authentication, options to mark tasks as complete or pending, and an intuitive user interface. It is a powerful and efficient solution for managing tasks.",
      imgUrl: todoPic,
      link: "https://github.com/JuanGaljoen/mern-todo"
    },
    {
      title: "Inventory manager (Full stack MERN application)",
      description: "The inventory management app built using the MERN stack has admin and end-user features, uses JWT authentication, and is designed for businesses to manage their inventory efficiently and securely. The app allows admins to manage products, orders, shipments, and user access levels. End-users can browse products, add to cart, track orders, and view order history.",
      imgUrl: inventoryPic,
      link: "https://github.com/JuanGaljoen/inventory"
    },
  ];

  return (
    <Container className="project" id="projects" >
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "fadeIn" : ""}>
                <h2>Projects</h2>
                <p>Here are a couple of projects I have worked on thus far.</p>
                <Tab.Content className={isVisible ? "slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => (
                        <Col xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
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
  )
}
