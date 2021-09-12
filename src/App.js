// create your App component here
import React from 'react';

export default class App extends React.Component {
    state = {
        astroName: []
    }
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                astroName: data.people
            })
        }).catch((e) => {console.log(e)});
    }

    astroList = () => {
        return this.state.astroName.map((el) => <p key={el.name}>{el.name}</p>)
    
    }
    render() {
        return <div>{this.astroList()}</div>
    }
}