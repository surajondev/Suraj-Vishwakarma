import React from 'react'
import Header from '../Components/Header'
import Intro from '../Components/Intro'

class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Intro />
            </div>
        )
    }
}

export default App