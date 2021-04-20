import React from "react"
import {Button, Card, Image, Space} from 'antd'
import surajondev from '../img/surajondev.png'

const Intro = () =>{
    return(
        <Card className="intro">
            <div className="Container">
                
                <div>
                    <h1 className="title">
                        Hi, I am Suraj,
                        <br></br>
                        Coder, Designer And Blogger
                    </h1>
                    <p className="header-p">
                        Learning and helping other people to understand technology👨‍💻<br></br>
                        🔭 I’m aplha head of Student Developer Club.<br></br>
                        ⚛️ I’m currently learning react.<br></br>
                        📝 I love to write blog post on technology as well as general topic.<br></br>
                        ⚡ Fun fact: I love old hindi songs....
                    </p>
                    <Button type="primary" size="large" href="https://dev.to/surajondev" danger>Visit Blog</Button>
                </div>

                <Space align="center" className="img-header-div">
                    <Image className="img-header" src={surajondev} preview={false} style={{borderRadius:"50%"}}></Image>
                </Space>
            </div>
            
        </Card>
    )
}

export default Intro