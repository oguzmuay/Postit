import React, { Component } from 'react';
import CoreLine from '../line/coreline/CoreLine'


export default class CurrentProject extends Component {
  render() {
    return <div class="current-project">
      <CoreLine></CoreLine>
    <div class = "line-add-button">
        Line eklemek icin buraya tiklayiniz
    </div>
</div>;
  }
}
