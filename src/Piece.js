import React from 'react';

class Piece extends React.Component {

  render() {
    let row = parseInt(this.props.row, 10);
    let number = parseInt(this.props.number, 10);

    if (this.props.value) {
      return (<svg className="piece" onClick={()=>this.props.handler(row, number)} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 125">
        <path d="M31.298,34.197c-8.852,0-16.029,7.176-16.029,16.027
          c0,8.853,7.177,16.028,16.029,16.028c8.852,0,16.028-7.176,16.028-16.028C47.326,41.373,40.149,34.197,31.298,34.197z
          M26.21,60.172c0,0-5.536-3.118-5.322-10.934c0.199-7.25,7.083-10.71,7.083-10.71C23.25,44.034,22.709,53.274,26.21,60.172z" />
      </svg>)

    }
    else {
      return (<svg className="piece selected" onClick={()=>this.props.handler(row, number)} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 125">
        <path d="M31.298,34.197c-8.852,0-16.029,7.176-16.029,16.027
          c0,8.853,7.177,16.028,16.029,16.028c8.852,0,16.028-7.176,16.028-16.028C47.326,41.373,40.149,34.197,31.298,34.197z
          M26.21,60.172c0,0-5.536-3.118-5.322-10.934c0.199-7.25,7.083-10.71,7.083-10.71C23.25,44.034,22.709,53.274,26.21,60.172z" />
      </svg>)
    }
  }

}

export default Piece;
