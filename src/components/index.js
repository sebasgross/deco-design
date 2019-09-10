import React, {Component} from 'react';
// import { Link }  from 'react-router-dom'
import AOS from 'aos'
import Section1 from './section1';


class Index extends Component{

    componentDidMount() {
        // window.addEventListener("scroll", this.resizeHeaderOnScroll);
        AOS.init();
	}

	// resizeHeaderOnScroll() {
	// 	const distanceY = window.pageYOffset || document.documentElement.scrollTop,
	// 		shrinkOn = 80	,
	// 		header = document.getElementById("navbar"),
	// 		logo = document.getElementById("logo-mercedes-grossmann")
	// 	//   orbisLogoShrunk = document.getElementById("orbis-logo-shrunk")


	// 	if (distanceY > shrinkOn) {
	// 		header.classList.add("navbar-smaller");
	// 		header.classList.remove("navbar");
	// 		logo.classList.add("logo-small");
	// 		logo.classList.remove("logo-big");

	// 	//   orbisLogoShrunk.style.visibility = "visible"
	// 	} else {
	// 		header.classList.add("navbar");
	// 		header.classList.remove("navbar-smaller");
	// 		logo.classList.add("logo-big");
	// 		logo.classList.remove("logo-small");

	// 	//   orbisLogoShrunk.style.visibility = "hidden"

	// 	}
    // }
    
    render() {
        return(
            <div>
                <Section1></Section1>

                <div className="services-page">
                <section>
                <h1 id="title" >Services</h1>
                </section>
                <div className="services-container">
                <div className="services-card">
                    <div className="services-each" data-aos="fade-right" data-aos-duration="2000" >
                        <p>Consultation</p>
                        {/* <img id="logo-services" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566177853/Deco-Design/icons8-intelligence-48.png" alt="Logo Service" /> */}
                    </div>
                    <div className="services-each" data-aos="fade-left" data-aos-duration="2000">
                        <p>Design</p>
                        {/* <img id="logo-services" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566177958/Deco-Design/icons8-buffet-48.png" alt="Logo Service" /> */}
                    </div>
                
                    <div className="services-each" data-aos="fade-right" data-aos-duration="2000">
                        <p>Renovation</p>
                        {/* <img id="logo-services" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566178040/Deco-Design/icons8-colosseum-48_1.png" alt="Logo Service" /> */}
                    </div>
                    <div className="services-each" data-aos="fade-left" data-aos-duration="2000">
                        <p>Staging</p>
                        {/* <img id="logo-services" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566177935/Deco-Design/icons8-curtains-48.png" alt="Logo Service" /> */}
                    </div>
                    <div className="services-each" data-aos="fade-right" data-aos-duration="2000">
                        <p>Deco-Kids</p>
                        {/* <img id="logo-services" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566177874/Deco-Design/icons8-sandbox-48.png" alt="Logo Service" /> */}
                    </div>
                    <div className="services-each" data-aos="fade-left" data-aos-duration="2000">
                        <p>Commercial</p>
                        {/* <img id="logo-services" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1566178074/Deco-Design/icons8-new-company-48.png" alt="Logo Service" /> */}
                    </div>
                </div>
                </div>
                </div>
                <div className="contact-info">
                    <div className="contact-mission">
                        <h3>Mercedes Grossmann</h3>
                        <div>
                            <p>Art and design are part of my life. I believe there is beauty in the interaction between objects and people, there is true harmony between public spaces and the people who build their stories in them. I believe in the transformation of empty territories with cultural elements, shaping up the identity of every city. And in search of a better reality, I believe in residential spaces that fit individual lifestyles, where art and design are used as main expressions of everyone’s own personality.
Scale and proportion to find perfect shapes, style and adaptability to meet each unique identity.
This is my field and my passion. As a designer, I seek to give life and soul to objects and functionality to spaces in order to bring beauty to the ones who enjoy them.
                            </p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Index