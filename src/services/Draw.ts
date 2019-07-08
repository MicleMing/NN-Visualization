import d3 from 'd3';
import { INode } from './interface';
import * as Config from './Config';

interface IDraw {
  svg: d3.Selection<SVGElement, any, any, any>;
}

class Draw {
  private svg;
  constructor(props: IDraw) {
    this.svg = props.svg;
  }
  drawNode(node: INode) {

    let { nodeConf } = Config;
    if (node) {
      nodeConf = {
        ...nodeConf,
        ...node,
      };
    }
    const { coordinate, styles, radius } = nodeConf;

    const g = this.svg.append('g')
      .attr('transform', `translate(${coordinate.x}, ${coordinate.y})`)
      .append('circle')
      .attr('r', radius);

    for (const key in styles) {
      g.style(key, styles[key]);
    }
    return g;
  }

  drawLine(from: INode, to: INode) {

    const line = this.svg.append('line')
      .style('stroke', '#999')
      .attr('x1', from.coordinate.x + from.radius / Math.sqrt(2))
      .attr('y1', from.coordinate.y + from.radius / Math.sqrt(2))
      .attr('x2', to.coordinate.x - to.radius / Math.sqrt(2))
      .attr('y2', to.coordinate.y - to.radius / Math.sqrt(2));

    return line;
  }
}

export default Draw;
