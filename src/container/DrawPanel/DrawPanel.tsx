import React, { Component, createRef } from 'react';
import * as d3 from 'd3';
import DrawLayer from '../../services/DrawLayer';

interface DrawPanelProps {
}

interface DrawPanelState {
  area: d3.Selection<SVGElement, any, any, any> | null;
}

class DrawPanel extends Component<DrawPanelProps, DrawPanelState> {
  private ref = createRef<HTMLDivElement>();
  constructor(props: DrawPanelProps) {
    super(props);
    this.state = {
      area: null,
    };
  }
  componentDidMount() {
    const svg = d3.select(this.ref.current).append('svg')
      .attr('width', 700)
      .attr('height', 500);
    const draw = new DrawLayer({ svg });
    const layer1 = draw.drawNodes(3, 0, 5);
    const layer2 = draw.drawNodes(8, 20, 0);
    const layer3 = draw.drawNodes(4, 40, 4);

    draw.drawLines(layer1, layer2);
    draw.drawLines(layer2, layer3);

  }
  render() {
    return <div ref={this.ref} />;
  }
}

export default DrawPanel;
