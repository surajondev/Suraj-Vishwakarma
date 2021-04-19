import React from "react"
import {Card, Image,Space} from 'antd'
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
            </div>

            <Space align="center">
                <Image src={surajondev} preview={false} width="300px" className="img-header"></Image>
            </Space>
        </div>
            
        </Card>
    )
}

export default Intro