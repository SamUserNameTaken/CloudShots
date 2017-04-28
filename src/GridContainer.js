import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';

class GridContainer extends Component {
  render() {
    return (
      <Container>
        {/*

        Container is centered on page with 15px of
        padding on either side. The inner width is
        fluid for small viewports and has a max
        width for larger dimensions:

        * 570px (≥ 544px)
        * 740px (≥ 768px)
        * 960px (≥ 992px)
        * 1170px (≥ 1200px)

        */}
      </Container>
    );
  }
}
export default GridContainer;
