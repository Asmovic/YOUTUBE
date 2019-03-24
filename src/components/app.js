import React, { Component } from 'react';
import SearchBar from './SearchBar/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './VideoList/videoList';
import VideoDetail from './VideoDetail/videoDetail';
import _ from 'lodash';
import Particles from 'react-particles-js';
import backgroundParticles from './BackgroundParticles/backgroundParticles';

const API_KEY = 'AIzaSyDfqLtk0gSjf8AtHvIgie2frbMwHV_eFmU';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
            searchChange: '',
        };
        this.myVideoSearch('lionel messi');
    }

    myVideoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, videos => {
            this.setState({ videos: videos, selectedVideo: videos[0] });
            console.log(videos);
        });
    }

    render() {
        const myVideoSearch = _.debounce(
            term => this.myVideoSearch({ term }),
            2
        );
        return (
            <div>
                <Particles className="particles" params={backgroundParticles} />
                <SearchBar onSearchChange={myVideoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo =>
                        this.setState({ selectedVideo })
                    }
                    videos={this.state.videos}
                />
            </div>
        );
    }
}
