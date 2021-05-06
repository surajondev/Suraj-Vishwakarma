import React from 'react'
import {Card} from 'antd'
import Project from "./Project.js"

class PageProjects extends React.Component {
    constructor(){
        super()
        {
            this.state = {
                github: null,
                isLoaded: false
            }
        }
    }
    
    async componentDidMount(){

        const url = "https://api.github.com/users/surajondev/repos";

        const response = await fetch(url)
        const data = await response.json()
        this.setState(
            {
                github:data,
                isLoaded:true
            }
        )
    }

    projectContainer=(i)=>{
        
        return(
                <Project 
                    name={this.state.github[i].name}
                    desc={this.state.github[i].description}
                    tech={this.state.github[i].language}
                    live={this.state.github[i].homepage}
                />
        )    
    }

    render(){
        if(!this.state.isLoaded){
            return(
                <Card className="site-card-border-less-wrapper">
                    <div className="Container Card div-header">
                        <h2>Projects</h2>
                        <p><a href="https://github.com/surajondev/">View All</a></p>
                    </div>
                    <h1 align="center">Loading...</h1>
                    
                </Card>
            )
        }
        else{
            return(
                <Card className="site-card-border-less-wrapper">
                    <div className="Container Card div-header">
                        <h2>Projects</h2>
                        <p><a href="https://github.com/surajondev/">View All</a></p>
                    </div>

                    {this.state.github.map((name, index)=>{
                            return(
                                <div className="Container Card">
                                    {
                                        this.projectContainer(index)
                                        
                                    }
                                </div>
                                
                            )
                    })}
                </Card>
            )
        }
    }
}

export default PageProjects