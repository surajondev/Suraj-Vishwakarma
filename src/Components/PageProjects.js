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
            <div className="Container Card">
                <Project 
                    name={this.state.github[i].name}
                    desc={this.state.github[i].description}
                    tech={this.state.github[i].language}
                    live={this.state.github[i].homepage}
                />
                <Project 
                    name={this.state.github[i+1].name}
                    desc={this.state.github[i+1].description}
                    tech={this.state.github[i+1].language}
                    live={this.state.github[i+1].homepage}
                />
                <Project 
                    name={this.state.github[i+2].name}
                    desc={this.state.github[i+2].description}
                    tech={this.state.github[i+2].language}
                    live={this.state.github[i+1].homepage}
                />
            </div>
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
                        if(index<this.state.github.length-2 & index%3===0){
                            return(
                                  this.projectContainer(index)                                
                            )
                        }   
                    })}
                </Card>
            )
        }
    }
}

export default PageProjects