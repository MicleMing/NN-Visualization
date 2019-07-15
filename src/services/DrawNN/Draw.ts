import d3 from 'd3';
import { INode } from './interface';
import * as Config from './Config';

interface IDraw {
  svg: d3.Selection<SVGElement, any, any, any>;
}

class Draw {
  public svg;
  constructor(props: IDraw) {
    this.svg = props.svg;
  }
  drawNodes(nodes: INode[], id: string) {
    const enter = this.svg.selectAll(`g#${id}`).data(nodes).enter();
    enter.append('g')
      .attr('id', id)
      .attr('transform', (node) => {
        const { coordinate } = node;
        return `translate(${coordinate.x}, ${coordinate.y})`;
      })
      .append('circle')
      .attr('r', (node) => {
        const { radius } = node;
        return radius;
      })
      .style('fill', node => node.fill)
      .style('stroke', node => node.stroke);

    const exit = enter.exit();
    exit.remove();
  }

  drawLine(from: INode, to: INode) {

    const line = this.svg.append('line')
      .style('stroke', '#999')
      .attr('x1', from.coordinate.x + from.radius)
      .attr('y1', from.coordinate.y)
      .attr('x2', to.coordinate.x - to.radius)
      .attr('y2', to.coordinate.y);

    return line;
  }
}

export default Draw;
