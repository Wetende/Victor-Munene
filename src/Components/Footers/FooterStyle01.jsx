import React, { memo } from 'react'

// Libraries
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { PropTypes } from "prop-types";

// Components
import SocialIcons from '../SocialIcon/SocialIcons';
import { Footer } from './Footer';

const iconData = [
    {
        color: "#828282",
        link: "https://www.facebook.com/",
        icon: "fab fa-facebook-f"
    },
    {
        color: "#828282",
        link: "https://dribbble.com/",
        icon: "fab fa-dribbble"
    },
    {
        color: "#828282",
        link: "https://twitter.com/",
        icon: "fab fa-twitter"
    },
    {
        color: "#828282",
        link: "https://www.instagram.com/",
        icon: "fab fa-instagram"
    },
]

const FooterStyle01 = (props) => {
    return (
        <Footer theme={props.theme} className={`${props.className ? ` ${props.className}` : ""}`}>
            <div className="py-[5%] lg:py-[95px] md:py-[50px]">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <p className="text-lg mb-4">Victor Munene - Senior Data Analyst</p>
                            <p>Transforming data into actionable business insights</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="py-[40px] border-t border-[#ffffff1a]">
                <Container>
                    <Row>
                        <Col md={3} className="sm:mb-[20px]">
                            <Link aria-label="homepage" to="/" className="sm:flex sm:justify-center">
                                <img alt="logo" src={props.logo} width="111" height="36" />
                            </Link>
                        </Col>
                        <Col md={6} className="flex justify-center items-center text-center sm:mb-[20px]">
                            <p className="mb-0">&copy; {new Date().getFullYear()} Victor Munene. All rights reserved.</p>
                        </Col>
                        <Col md={3} className="text-right sm:text-center">
                            <SocialIcons size="xs" theme="social-icon-style-01" className="justify-end sm:justify-center" iconColor={props.theme === "dark" ? "light" : "dark"} data={iconData} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Footer>
    )
}

FooterStyle01.defaultProps = {
    data: [],
    className: "bg-darkgray text-[#828282]",
    logo: `${process.env.PUBLIC_URL}/assets/img/webp/logo-white.webp`,
    theme: "light"
}

FooterStyle01.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.string,
}

export default memo(FooterStyle01)
