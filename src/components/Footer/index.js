import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {FooterContainer, FooterWrap,FooterLinksContainer,FooterLinksWrapper, FooterLinksItems,
FooterLinkTitle, FooterLink,SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights
, SocialIcons, SocialIconLink} from './FooterElements';

const  Footer = () => {
    return (
        <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">Reach Us</FooterLink>
                                <FooterLink to="/signin">Meet the developers</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Feedback</FooterLink>   
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Contact Us </FooterLinkTitle>
                                <FooterLink to="/signin">Support</FooterLink>
                                <FooterLink to="/signin">Contact</FooterLink>
                                <FooterLink to="/signin">Find Us</FooterLink>
                                <FooterLink to="/signin">Sponsers</FooterLink>   
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">Contact Us</FooterLink>
                                <FooterLink to="/signin">Meet the developers</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Feedback</FooterLink>   
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/signin">Facebook</FooterLink>
                                <FooterLink to="/signin">Twitter</FooterLink>
                                <FooterLink to="/signin">Instagram</FooterLink>
                                <FooterLink to="/signin">Youtube</FooterLink>   
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Finder
                        </SocialLogo>
                        <WebsiteRights>Finder © {new Date().getFullYear()} 
                         All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com" target="_blank"
                            aria-label="facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com" target="_blank"
                            aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com" target="_blank"
                            aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com" target="_blank"
                            aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
        </>
    )
}

export default Footer;
