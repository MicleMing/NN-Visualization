import React, { Component, createRef } from 'react';
import * as d3 from 'd3';
import styled from '../../styled';
import DrawLayer from '../../services/DrawNN/DrawLayer';
import emitter, { NNEvent } from '../../services/EventEmitter';

interface ILayer {
  id: string;
  nodes: number;
}

interface DrawPanelProps {
}

interface DrawPanelState {
  area: d3.Selection<SVGElement, any, any, any> | null;
}

const StyledWrapper = styled.div`
`;

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
      .attr('width', 800)
      .attr('height', 500);
    const draw = new DrawLayer({ svg });
    this.onNNLayerChange(draw);
  }

  drawLayers(draw: DrawLayer, layers: ILayer[]) {
    const maxValue = Math.max(...layers.map(layer => layer.nodes));
    const nlayers: any = [];
    layers.forEach((layer, index) => {
      const { nodes } = layer;
      const nlayer = draw.drawNodes(nodes, index * 16, maxValue - nodes);
      nlayers.push(nlayer);
    });

    nlayers.forEach((nlayer, index) => {
      const nextLayer = nlayers[index + 1];
      if (nextLayer) {
        draw.drawLines(nlayer, nextLayer);
      }
    });
  }

  onNNLayerChange(draw: DrawLayer) {
    emitter.on(NNEvent.LayerChange, (layers) => {
      draw.clear();
      this.drawLayers(draw, layers);
    });
  }
  render() {
    return <StyledWrapper ref={this.ref} />;
  }
}

export default DrawPanel;
