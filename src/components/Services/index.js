import React from 'react'
import {Link} from 'react-router-dom'
import Icon1 from '../../images/svg-3.svg'
import Icon2 from '../../images/svg-4.svg'
import Icon3 from '../../images/svg-5.svg'
import { ServicesContainer, ServicesH1,ServicesWrapper,
    ServicesCard,ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'
import '../Internship';
import '../Scholarship'


const Services = () =>  {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
              <ServicesH2 ><Link to={"/Scholarship"}>Scholarships</Link></ServicesH2>
                <ServicesP>We are here to reduce your fess</ServicesP>
            </ServicesCard>
          
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2><Link to={"/internship"}>Internships</Link></ServicesH2>
                <ServicesP>We are here to reduce your fess</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2><Link to={"/Jobs"}>Jobs</Link></ServicesH2>
                <ServicesP>We are here to reduce your fess</ServicesP>
            </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
