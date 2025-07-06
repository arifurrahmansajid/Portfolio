import VentureShop from "../images/screencapture-dynamic-lily-a7c45f-netlify-app-2025-07-06-11_20_45.png";
import DhakaFC from "../images/DhakaFC-FullView.png";
import ProBox from "./ProBox.jsx";
//import FoodiesWebApp from "../images/FoodiesWebsite-Full.png";
import HyperTouch from "../images/HyperTouch-fulllview.png";
//import Gymnation from "../images/GymNation.png"
import Deliveryooo from "../images/Deliveryoo Web.png"
import TaxiUp from "../images/screencapture-localhost-3000-2024-11-24-21_54_08 (1).png"
import Eatgood from "../images/EATBEST.png"
import Wander from "../images/screencapture-hotel-appoinmnet-system-web-app-2025-07-06-11_15_28.png"
import Residence from "../images/screencapture-plant-website-a0f51-web-app-2025-07-06-11_08_19.png"

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="Residence"
                img={Residence}
                description="LAZEA is a modern, responsive web application dedicated to promoting a plant-based lifestyle. It allows users to explore a wide variety of plant-based items, view detailed descriptions, and benefit from an engaging, interactive UI."
                techno1="React Js"
                techno2="Express Js"
                code="https://github.com/arifurrahmansajid/LAZEA"
                demo="https://plant-website-a0f51.web.app/"
                scrollY="-83%"
                icon="🌱"

              />

              <ProBox
                title="WanderVenture"
                img={Wander}
                // ...existing code...
                description="WanderVenture is a responsive travel app where users share stories, upload photos, and explore destinations with a global community."
                // ...existing
                techno1="ReactJS"
                techno2="ExpressJS"
                code="https://github.com/arifurrahmansajid/WanderVenture-1"
                demo="https://hotel-appoinmnet-system.web.app/"
                scrollY="-74%"
                icon="🏠"

              />
              {/*   <ProBox
                title="TaxiUp"
                img={TaxiUp}
                description="A NextJs Sass Project for taxi driver made with NextJs and Tailwindcss. 
                "
                techno1="NextJs"
                techno2="Tailwindcss"
                code="https://github.com/arifurrahmansajid/TaxiUp"
                demo="https://taxi-up-sigma.vercel.app/"
                scrollY="-74%"
                icon="🚗"

              />    

           */}

              <ProBox
                title="Deliveryooo"
                img={Deliveryooo}
                description="Deliveryoo is the most trusted community-fueled platform that provides one convenient app for ride-sharing, food delivery, parcel & courier services in Bangladesh. 
                "
                techno1="ReactJS"
                techno2="CSS"
                code="https://github.com/arifurrahmansajid/Deliveryoo"
                demo="https://deliveryoobd.netlify.app/"
                scrollY="-74%"
                icon="🚚"
              //cName="reversed-proj"
              />

              {/*  <ProBox
               title="Foodies E-Commerce"
                img={FoodiesWebApp}
                description=""
                techno1="HTML5"
                techno2="CSS"
                techno3="Vanila JS"
                code="https://github.com/arifurrahmansajid/foodies-main"
                demo="https://foodiesbd.netlify.app/"
                scrollY="-83%"
                icon="🛒"
 
              /> 
*/}
              <ProBox
                title="Eat the best"
                img={Eatgood}
                description="Foodies is a site dedicated to quick meals. This shop has a wide selection of tasty salads and other dishes."
                techno1="HTML"
                techno2="CSS"
                techno3="React Icons"
                code="https://github.com/arifurrahmansajid/Food-website?tab=readme-ov-file"
                demo="https://stately-nougat-dc92ba.netlify.app"
                scrollY="-83%"
                icon="🍔"
              />
              {/* 
              <ProBox
                title="HyperTouch"
                img={HyperTouch}
                description="HyperTouch is a Website where people can buy their perfect cloths, shoes and others."
                techno1="React"
                techno2="CSS"
                techno3="Material UI"
                techno4="SC"
                code="https://github.com/arifurrahmansajid/HyperTouch"
                demo="https://hypertouch.netlify.app/"
                scrollY="-74%"
                icon="🚗"

              />
*/}
              <ProBox
                title="Event Explorer"
                img={VentureShop}
                // ...existing code...
                description="Event Explorer is a dynamic platform to discover and connect with events across music, sports, tech, art, and more."
                //
                techno1="ReactJS"
                techno2="CSS"
                techno3="Firebase"
                techno4="Material UI"
                code="https://github.com/arifurrahmansajid/Event-Explorer-1"
                demo="https://dynamic-lily-a7c45f.netlify.app/"
                scrollY="-89%"
                icon="🎫"
              />

              <ProBox
                title="DhakaFC Restro E-Commerce"
                img={DhakaFC}
                description="DhakaFC is a responsive Fast Food website,  noodles, burgers, chicken and more from the comfort of your own home."
                techno1="HTML5"
                techno2="CSS"
                techno3="Vanila JS"
                code="https://github.com/arifurrahmansajid/dhakafc"
                demo="https://dhakafcbd.netlify.app/"
                scrollY="-71%"
                icon="🛒"

              />




            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
