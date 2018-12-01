import React from 'react';

class Piece extends React.Component {

  render() {
    let row = parseInt(this.props.row, 10);
    let number = parseInt(this.props.number, 10);

    if (this.props.value) {
      return <div className="piece" onClick={()=>this.props.handler(row, number)}>&nbsp;</div>
    }
    else {
      return <div className="piece selected" onClick={()=>this.props.handler(row, number)}>&nbsp;</div>
    }
  }

}

export default Piece;
