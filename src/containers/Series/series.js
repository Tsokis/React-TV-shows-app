import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList/serieslist';

class Series extends Component {
    state = {
        series: []
    }
    componentDidMount() {
        fetch('http://api.tvmaze.com/search/shows?q=Vikings')
            .then(response => response.json())
            .then(json => this.setState({
                series: json
            }))
            .catch()
    }
    render(){
        return(
            <div>
                the length of series array - {this.state.series.length}
                <SeriesList list={this.state.series} /> 
            </div>
            
        )
    }
}

export default Series;