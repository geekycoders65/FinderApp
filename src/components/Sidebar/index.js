import React from 'react';
import {SidebarContainer,
     Icon,closeIcon,
     SidebarWrapper,
     SidebarMenu,
     SidebarLink,
     SideBtnWrap,
     SidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <closeIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="scholarships" onClick={toggle}>
                        Scholarships
                    </SidebarLink>
                    <SidebarLink to="internships" onClick={toggle}>
                        Internships
                    </SidebarLink>
                    <SidebarLink to="jobs" onClick={toggle}>
                        Jobs
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
