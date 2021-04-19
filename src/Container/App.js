import React from 'react'
import Header from '../Components/Header'
import Intro from '../Components/Intro'
import HomeProject from '../Components/HomeProject'
import Footer from '../Components/Footer'

class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Intro />
                <HomeProject />
                <Footer />
            </div>
        )
    }
}

export default App