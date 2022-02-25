import React, { Component } from "react";
import BasicCard from "../../card/basiccard/BasicCard";

import './CoreLine.css'

export default class CoreLine extends Component {
  render() {
    return (
      <div class="line">
        <BasicCard></BasicCard>
        <BasicCard></BasicCard>
        <BasicCard></BasicCard>
        <BasicCard></BasicCard>
        <div class="card-add-button">Add card</div>
      </div>
    );
  }
}
//<!-- Burasi net degismeli !hover effect falan eklenmeli -->
