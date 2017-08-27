import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideosList from './components/videos_list';

const API_KEY = 'AIzaSyCXPXDfqnoiIVITdLBPK7eMuWQmoqiag_E';

// create a new component that generate html
class App extends Component{

    constructor(props){
        super(props);

        this.state = { videos : [] };

        YTSearch({key : API_KEY, term : 'surfing bird'}, (videos) => {
            console.log(videos);
           this.setState({ videos });
        });
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideosList videos={this.state.videos} />
            </div>
        ); 
    }
    
}

// take this generated component and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
