import React, {Component} from 'react';
import { Link }  from 'react-router-dom'


class Section1 extends Component {
    render() {
        return(
            <div className="section1-intro">
                <div>
                <h2>Designs for a better life</h2>
                </div>
                <div className="buttons-container">
                    <span id="services-button"><Link style={{ textDecoration: 'none', color:'white' }} ><p><b>My Services</b></p></Link></span>
                    <span id="portafolio-button"><Link id="link-portafolio" style={{ textDecoration: 'none'}} ><p><b>My Portfolio</b></p></Link></span>
                </div>
                </div>
        )
    }
}

export default Section1