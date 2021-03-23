import React, {Component} from 'react'
import axios from 'axios'

class Profile extends Component{
    constructor(){
        super()

        this.state={
            characterDetails: []
        }
    }

    componentDidMount(){
        const {first, last} = this.props.match.params;
        axios.get(`/api/${first}/${last}`)
        .then(response => {
            this.setState({
                characterDetails: response.data
            })
        })
        .catch(err => console.log(err))
    }

    render(){
        const {firstName, middleName, lastName, bestQuote, image} = this.state.characterDetails;
        return (
        <div className='profile'>
            <img src={image} alt={`${firstName, lastName}`}/>
            <h2>{`${firstName} ${middleName} ${lastName}`}</h2>
            <h3>{bestQuote}</h3>
            {/* black diamond router lab */}
            <button onClick={this.props.history.goBack}>Back</button>
        </div>

        )
    }
}

export default Profile;