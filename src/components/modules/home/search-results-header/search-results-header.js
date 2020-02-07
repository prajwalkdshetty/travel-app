import React, { Component } from 'react';
import './search-results-header.scss';


class SearchResultsHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section id="search-results-header" class="box wrapper">
                <div id="no-of-results">{this.props.hotels.length} results found</div>
            </section>
        )
    }
}
export default SearchResultsHeader;