// import cartPic from "../images/cart.jpg"
// import memoryPic from "../images/memory.jpg"
// import loadingGif from "../images/loading.gif"
// import weatherPic from "../images/weather.jpg"
// import todoPic from "../images/todo.jpg"
// import inventoryPic from "../images/inventory.jpg"
// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";

// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Projects = () => {

//   const projects = [
//     {
//       title: "Functional e-commerce cart",
//       description: "One of my first more advanced JavaScript projects",
//       imgUrl: cartPic,
//       link: "https://github.com/JuanBiljoen/e-commerce-Shopping-cart"
//     },
//     {
//       title: "Memory game",
//       description: "a Card memory game built with React.",
//       imgUrl: memoryPic,
//       link: "https://memory-app-ten.vercel.app/"
//     },
//     {
//       title: "Weather app",
//       description: "Weather app built with React",
//       imgUrl: weatherPic ,
//       link: "https://weather-sand-sigma.vercel.app/"
//     },
//     {
//       title: "Todo app (Full Stack)",
//       description: "Todo-List app built with MERN stack",
//       imgUrl: todoPic,
//       link: "https://github.com/JuanBiljoen/mern-todo"
//     },
//     {
//       title: "Inventory manager (Full stack MERN application)",
//       description: "Inventory management system",
//       imgUrl: inventoryPic,
//       link: "https://github.com/JuanBiljoen/inventory"
//     },
//     {
//       title: "Next Project",
//       description: "Loading...",
//       imgUrl: loadingGif,
//     },


//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                   <h2>Projects</h2>
//                   <p>Here are a couple of projects I have worked on thus far.</p>

//                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                     <Tab.Pane eventKey="first">
//                       <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                               />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>

//     </section>
//   )
// }

import cartPic from "../images/cart.jpg"
import memoryPic from "../images/memory.jpg"
import weatherPic from "../images/weather.jpg"
import todoPic from "../images/todo.jpg"
import inventoryPic from "../images/inventory.jpg"
import carsPic from "../images/cars.jpg"
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from 'react-on-screen';
import 'animate.css';


export const Projects = () => {
  const projects = [
    {
      title: "e-commerce cart",
      description: "Vanilla JavaScript shopping cart, web-based application that allows users to select items from an online store, add them to a shopping cart, and proceed to checkout where you can choose delivery and add a promo code. The shopping cart is designed using HTML, CSS, and JavaScript.",
      imgUrl: cartPic,
      link: "https://github.com/JuanBiljoen/e-commerce-Shopping-cart"
    },
    {
      title: "Memory game",
      description: "The React-based match card game is a fun and interactive game that challenges users to match pairs of cards. The game features a deck of cards with different images, and the user's objective is to match all the cards in the shortest time possible.",
      imgUrl: memoryPic,
      link: "https://memory-app-ten.vercel.app/"
    },
    {
      title: "Weather app",
      description: "The React-based weather app fetches APIs to display the weather and photo of a city searched by the user. The app uses third-party APIs like OpenWeatherMap and Unsplash to fetch real-time weather data and photos respectively. The app features an easy-to-use interface that allows users to search for any city and view the current weather conditions along with a relevant photo of the location.",
      imgUrl: weatherPic ,
      link: "https://weather-sand-sigma.vercel.app/"
    },
    { 
      title: "Cars Manager",
      description: "This application includes both the frontend created with ReactJS and the backend part created with ExpressJS and the database setup with MongoDB. The data interacts with the DB using CRUD operations.",
      imgUrl: carsPic ,
      link: "https://github.com/JuanBiljoen/car-manager#readme"
    },
    {
      title: "Todo app (Full Stack)",
      description: "The MERN stack to-do app enables users to create an account, add to-do items, and edit or delete them later. The app features secure authentication, options to mark tasks as complete or pending, and an intuitive user interface. It is a powerful and efficient solution for managing tasks.",
      imgUrl: todoPic,
      link: "https://github.com/JuanBiljoen/mern-todo"
    },
    {
      title: "Inventory manager (Full stack MERN application)",
      description: "The inventory management app built using the MERN stack has admin and end-user features, uses JWT authentication, and is designed for businesses to manage their inventory efficiently and securely. The app allows admins to manage products, orders, shipments, and user access levels. End-users can browse products, add to cart, track orders, and view order history.",
      imgUrl: inventoryPic,
      link: "https://github.com/JuanBiljoen/inventory"
    },
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
                <h2>Projects</h2>
                <p>Here are a couple of projects I have worked on thus far.</p>
  
                <Tab.Content className={isVisible ? "slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
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
