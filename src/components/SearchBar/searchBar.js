import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        };
    }

    render() {
        return (
            <div className="search-bar">
                Search:
                <input
                    value={this.state.term}
                    onChange={e => this.onInputChange(e.target.value)}
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term }), this.props.onSearchChange({ term });
    }
}

export default SearchBar;

/* export const SearchBar = onSearchChange;
return (
    <div className="search-bar">
        <input value={onSearchChange} onChange={onSearchChange} />
    </div>
); */
