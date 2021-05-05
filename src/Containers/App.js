import React from 'react'
import Header from '../Components/Header'
import Intro from '../Components/Intro'
import HomeProject from '../Components/HomeProject'
import HomeBlog from '../Components/HomeBlog'
import Footer from '../Components/Footer'
import PageProjects from '../Components/PageProjects'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <div>
                        <Route path="/" component={HomePage} exact></Route>
                        <Route path="/projects" component={Projects}></Route>
                        <Route path="/blog" component={Blog}></Route>
                        <Footer />
                    </div>
                </Switch>
            </Router>
        )
    }
}

const HomePage = () =>{
    return(
        <div>
            <Header home="primary" project="default" blog="default" contact="default"/>
            <Intro />
            <HomeProject />
            <HomeBlog /> 
        </div>

    )
}

const Projects = () =>{
    return(
        <div>
            <Header home="default" project="primary" blog="default" contact="default"/>
            <PageProjects />
        </div>

    )
}

const Blog = () =>{
    return(
        <div>
            <Header home="default" project="default" blog="primary" contact="default"/>
            <Blog />
        </div>

    )
}

export default App