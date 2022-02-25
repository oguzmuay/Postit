import React, { Component } from "react";
import Tag from "../extras/tag/Tag";

import "./ContentBlock.css";

export default class ContentBlock extends Component {
  render() {
    return (
      <div class="main-block">
        <div class="image-block"></div>
        <div class="tag-block">
          <Tag></Tag>
          <Tag></Tag>
          <Tag></Tag>
        </div>
        <div class="description-block">
          Lorem ipsum naber ya lorem ipsum falanLorem ipsum naber ya lorem ipsum falanLorem ipsum naber ya lorem ipsum falanLorem ipsum naber ya lorem ipsum falanLorem ipsum naber ya lorem ipsum falanLorem ipsum naber ya lorem ipsum falanLorem ipsum naber ya lorem ipsum falanLorem ipsum naber ya lorem ipsum falanLorem ipsum naber ya lorem ipsum falanLorem ipsum naber ya lorem ipsum falan
        </div>
        <div class="indicator-block">
          <div class="indicator">ind</div>
        </div>
      </div>
    );
  }
}
