import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './VideoList/videoList';
import VideoDetail from './VideoDetail/videoDetail';
import _ from 'lodash';
import Particles from 'react-particles-js';
import backgroundParticles from './BackgroundParticles/backgroundParticles';
import { userInput } from '../actions/index';

/* const API_KEY = 'AIzaSyDfqLtk0gSjf8AtHvIgie2frbMwHV_eFmU'; */
const API_KEY = 'AIzaSyAgEh5eT0bzPKYtzcupIQ3J_Vr0as0IijY';

const mapStateToProps = state => {
    return {
        searchChange: state.userInp,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onActionChange: event => {
            dispatch(userInput(event.target.value));
        },
    };
};

class App extends Component {
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
            /* console.log(this.state.selectedVideo); */
        });
    }

    render() {
        const { searchChange, onActionChange } = this.props;
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

/* export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App); */
export default App;
