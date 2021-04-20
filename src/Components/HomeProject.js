import React from 'react'
import {Card, Tag} from 'antd'

const HomeProject = () =>{
    return(
        <Card className="site-card-border-less-wrapper">
            <div className="Container Card div-header">
                <h2>Projects</h2>
                <p><a href="https://github.com/surajondev/">View All</a></p>
            </div>
            <div className="Container Card">
                <Card className="Card-project" title="Text to Speech" bordered={false}>
                    <p>Description : Conver text into speech.</p>
                    <p>Technology : 
                        <Tag color="#64DCFC">React</Tag>
                        <Tag color="#18314D">Webapp</Tag>
                     </p>
                    <p>Live : <a href="https://text-to-speeech.netlify.app/">Text-To-Speeech</a></p>
                </Card>

                <Card className="Card-project" title="Covid19 Info" bordered={false}>
                    <p>Description : The website provides you with information about covid-19.</p>
                        <p>Technology : 
                            <Tag color="#64DCFC">React</Tag> 
                            <Tag color="#18314D">Webapp</Tag> 
                            <Tag color="#ED840C">API</Tag>
                        </p>
                    <p>Live : <a href="https://github.com/surajondev/covid19-info">Covid19-Info</a></p>
                </Card>

                <Card className="Card-project" title="Get Weather" bordered={false}>
                    <p>Description : Get weather website run using react framework.</p>
                        <p>Technology : 
                        <Tag color="#64DCFC">React</Tag> 
                        <Tag color="#18314D">Webapp</Tag>
                        <Tag color="#ED840C">API</Tag>
                        </p>
                    <p>Live : <a href="https://github.com/surajondev/get-weather">Get-Weather</a></p>
                </Card>
            </div>
        </Card>
    )
}

export default HomeProject