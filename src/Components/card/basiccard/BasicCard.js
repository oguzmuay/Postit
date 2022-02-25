import React, { Component } from "react";
import ContentBlock from "./contentblock/ContentBlock";

import "./BasicCard.css";

export default class BasicCard extends Component {
  render() {
    return (
      <div class="main-card-block">
        <div class="header">
          <div class="header-offset">Lorem ipsum asjdhaskjdhaskdh  ajkshdkjashd kjashd kjha</div>
        </div>
        <div class="content">
          <ContentBlock></ContentBlock>
          <ContentBlock></ContentBlock>
          <button button class="add-content">
            + Add Card
          </button>
        </div>
      </div>
    );
  }
}
