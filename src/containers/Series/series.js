import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList/serieslist';

class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFetching: false
    }
    
    onInputCapture = e => {
        this.setState({seriesName: e.target.value, isFetching: true});
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json())
            .then(json => this.setState({
                series: json,
                isFetching: false
            }))
            .catch();   
    }
    render(){
        const {series,seriesName,isFetching} = this.state;
        return(
            <div>
                the length of series array = {this.state.series.length}
                <div>
                    <input value={seriesName} type="text" onChange={this.onInputCapture} />
                </div>
                { 
                   isFetching && series.length === 0 && seriesName.trim() === ''
                    &&
                    <p>Enter a tv show you want to find</p>
                }
                {
                   isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>No tv shows found</p>
                }
                {
                    isFetching && <p>Loading...</p>
                }
                {
                    !isFetching && <SeriesList list={this.state.series} /> 
                }
                
            </div>
            
        )
    }
}

export default Series;