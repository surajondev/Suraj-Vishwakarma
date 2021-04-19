import React from 'react'
import Header from '../Components/Header'
import Intro from '../Components/Intro'
import HomeProject from '../Components/HomeProject'

class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Intro />
                <HomeProject />
            </div>
        )
    }
}

export default App