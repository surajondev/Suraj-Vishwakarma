import React from 'react'
import {Card, Button} from 'antd'
import {IoLogoTwitter, IoLogoLinkedin, IoLogoWordpress} from "react-icons/io5"

const Footer = () => {
    return(
        <Card className="intro">
            <div className="Container footer">
                <div>
                    <Button className="social-media-btn" href="https://twitter.com/surajondev">
                        <IoLogoTwitter size="30px" className="footer-icon"/>
                    </Button>

                    <Button className="social-media-btn" href="https://www.linkedin.com/in/surajsrv11/">
                        <IoLogoLinkedin size="30px" className="footer-icon"/>
                    </Button>

                    <Button className="social-media-btn" href="https://surajondev.wordpress.com/">
                        <IoLogoWordpress size="30px" className="footer-icon"/>
                    </Button>
                </div>

                <div>
                    <p>Copywrite ©2021 All rights reserved</p>
                </div>
            </div>
        </Card>
    )
}

export default Footer

