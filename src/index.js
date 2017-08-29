import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideosList from './components/videos_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCXPXDfqnoiIVITdLBPK7eMuWQmoqiag_E';

// create a new component that generate html
class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            videos : [],
            selectedVideo : null
        };

        this.videoSearch('surfing bird');
    }

    videoSearch(term) {
        YTSearch({key : API_KEY, term : term}, (videos) => {
            console.log(videos);
            this.setState({ 
               videos,
               selectedVideo:videos[0] 
            });
        });
    }

    render(){
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideosList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>
        ); 
    }
    
}

// take this generated component and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
