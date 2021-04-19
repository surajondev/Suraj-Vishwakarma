import React from 'react'
import {Card, Tag} from 'antd'

const HomeProject = () =>{
    return(
        <Card className="site-card-border-less-wrapper">
            <div className="Container Card">
                <h2>Projects</h2>
                <p><a href="https://github.com/surajondev/">View All</a></p>
            </div>
            <div className="Container Card">
                <Card title="Text to Speech" bordered={false} style={{width:"30%"}}>
                    <p>Description : Conver text into speech.</p>
                    <p>Technology : 
                        <Tag color="#64DCFC">React</Tag>
                        <Tag color="#18314D">Webapp</Tag>
                     </p>
                    <p>Live : <a href="https://text-to-speeech.netlify.app/">Text-To-Speeech</a></p>
                </Card>

                <Card title="Covid19 Info" bordered={false} style={{width:"30%"}}>
                    <p>Description : The website provides you with information about covid-19.</p>
                        <p>Technology : 
                            <Tag color="#64DCFC">React</Tag> 
                            <Tag color="#18314D">Webapp</Tag> 
                            <Tag color="#ED840C">API</Tag>
                        </p>
                    <p>Live : <a href="https://github.com/surajondev/covid19-info">Text-To-Speeech</a></p>
                </Card>

                <Card title="Get Weather" bordered={false} style={{width:"30%"}}>
                    <p>Description : Get weather website run using react framework.</p>
                        <p>Technology : 
                        <Tag color="#64DCFC">React</Tag> 
                        <Tag color="#18314D">Webapp</Tag>
                        <Tag color="#ED840C">API</Tag>
                        </p>
                    <p>Live : <a href="https://github.com/surajondev/get-weather">Text-To-Speeech</a></p>
                </Card>
            </div>
        </Card>
    )
}

export default HomeProject