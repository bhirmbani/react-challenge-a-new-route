import React from 'react';

class DetailsPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default DetailsPage;