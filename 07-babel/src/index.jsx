import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {

    constructor(prop) {
        super(prop)
        this.state = {
            title: 'hello React'
        }
    }

    render() {
        return <h1>{this.state.title}</h1>
    }

}

ReactDom.render(
    <App/>,
    document.getElementById('app')
)
