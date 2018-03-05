import React, { Component } from 'react';
import './App.css';
import { FormControl, FormGroup, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    Search() {
        // console.log('this.state  ' + this.state.query);
        var arr = [1, 2, 3, 4];
        var arr2 = arr.map(function(v,i){return v*2});
        console.log("arr "+arr+" \narr2 "+arr2);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = BASE_URL + 'q=' + this.state.query +'&type=artist&limit=1';
        console.log('fetch_url : '+FETCH_URL);

    }

    render() {
        let menus = ['Home','About','Services','Portfolio','Contact us']

        return (
            <div id='App'>
                <div id='AppTitle'>Music Master</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type='text'
                            placeholder='Search for an Artist'
                            value={this.state.query}
                            onChange={event => { this.setState({ query: event.target.value }) }}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.Search();
                                }
                            }}

                        // onKeyPress = { () => {console.log(this.state.query)} }
                        />
                        <InputGroup.Addon >
                            <Glyphicon glyph='search'></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <div id='profile'>
                    <div>Artist Pic</div>
                    <div>Artist Name</div>
                </div>
                <div id='gallery'>Gallery</div>
            </div>
        )
    }
}

export default App;