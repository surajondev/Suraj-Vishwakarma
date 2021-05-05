import React from 'react'
import{Card} from 'antd'
import Project from "./Project.js"

class PageProjects extends React.Component {
    constructor(){
        super()
        {
            this.state = {
                github1:[],
                github2:[],
                github3:[],
                github4:[],
                github5:[],
                github6:[],
                github7:[],
                github8:[],
                github9:[],
                github10:[]
            }
        }
    }
    
    async componentDidMount(){

        const response = await fetch("https://api.github.com/users/surajondev/repos")
        // fetch("https://api.github.com/users/surajondev/repos")
        const data = await response.json();
        this.setState(
            {
                github1:data[0],
                github2:data[1],
                github3:data[2],
                github4:data[3],
                github5:data[4],
                github6:data[4],
                github7:data[6],
                github8:data[7],
                github9:data[8],
                github10:data[9]
            }
        )
    }

    projectContainer=()=>{
        console.log(this.state.github1)
        return(
            <Project 
                name={this.state.github1.name}
                desc={this.state.github1.description}
                tech={this.state.github1.language}
                live={this.state.github1.homepage}
            />
        )
    }

    render(){
        return(
            <Card className="site-card-border-less-wrapper">
                <div className="Container Card div-header">
                    <h2>Projects</h2>
                    <p><a href="https://github.com/surajondev/">View All</a></p>
                </div>
                {this.projectContainer}
                
            </Card>
        )
    }
}

export default PageProjects