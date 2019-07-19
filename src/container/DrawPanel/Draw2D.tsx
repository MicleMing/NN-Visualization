import React, { Component, createRef } from 'react';
import * as d3 from 'd3';
import styled from '../../styled';
import DrawLayer from '../../services/DrawNN/DrawLayer';
import eventSteam, { NNEvent } from '../../services/EventStream';

interface ILayer {
  id: string;
  nodes: number;
}

interface Draw2DProps {
}

interface Draw2DState {
  area: d3.Selection<SVGElement, any, any, any> | null;
}

const StyledWrapper = styled.div`
`;

class Draw2D extends Component<Draw2DProps, Draw2DState> {
  private ref = createRef<HTMLDivElement>();
  private subscription: any;
  constructor(props: Draw2DProps) {
    super(props);
    this.state = {
      area: null,
    };
  }
  componentDidMount() {

    const svg = d3.select(this.ref.current).append('svg')
      .attr('width', 800)
      .attr('height', 800)
      .call(d3.zoom().on('zoom', zoomed))
      .call(d3.drag());

    function zoomed() {
      svg.attr('transform', d3.event.transform);
    }
    const draw = new DrawLayer({ svg });
    this.subscription = eventSteam.subscribe(NNEvent.LayerChange, (data) => {
      draw.clear();
      this.drawLayers(draw, data);
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  drawLayers(draw: DrawLayer, layers: ILayer[]) {
    const maxValue = Math.max(...layers.map(layer => layer.nodes));
    const nlayers: any = [];
    layers.forEach((layer, index) => {
      const { nodes } = layer;
      const nlayer = draw.drawNodes(`layer_${index}`, nodes, index * 16, maxValue - nodes);
      nlayers.push(nlayer);
    });

    nlayers.forEach((nlayer, index) => {
      const nextLayer = nlayers[index + 1];
      if (nextLayer) {
        draw.drawLines(nlayer, nextLayer);
      }
    });
  }
  render() {
    return <StyledWrapper ref={this.ref} />;
  }
}

export default Draw2D;
