import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Peliculas extends PureComponent {
  static propTypes = {
    prop: PropTypes
  };

  componentDidMount = () => {
    this.props.getPeliculas({
      s: 'love',
      y: '2020',
      apikey: '5eec5adc',
      type: 'movie'
    });
  };

  render() {
    const { peliculas } = this.props;
    return (
      <div>
        <>
          {peliculas?.Search.map((pelicula) => {
            let { Title, Poster } = pelicula;
            return (
              <div>
                <h1>{Title}</h1>
                <img src={Poster} alt="" />
              </div>
            );
          })}
        </>
      </div>
    );
  }
}
