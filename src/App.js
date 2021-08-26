import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import yt from './yt.js';
import VideoDetail from './VideoDetail';
import './style.css';


class App extends React.Component{
    state= { videos: [], selectedVideo: null}
    onTermSubmit= async term =>{
        const result= await yt.get('/search', {
            params:{
                q: term
            }
        });
        this.setState({videos:result.data.items});
    };
    onVideoSelect = video => {
        this.setState({selectedVideo: video});
    }
    render() {
      return (
          <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <div className="style-this">
        <div>
            <VideoDetail video={this.state.selectedVideo}/>
        </div>
        <div className="list-of-videos">
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
        </div>

        </div>
        
        </div>
     );
    }
    
}

export default App;