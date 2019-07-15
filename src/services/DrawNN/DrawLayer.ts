import _ from 'lodash';
import Draw from './Draw';
import { INode } from './interface';
import * as Config from './Config';

interface IDrawLayer {
  svg: d3.Selection<SVGElement, any, any, any>;
}

class DrawLayer {
  private draw: Draw;
  constructor(props: IDrawLayer) {
    const { svg } = props;
    this.draw = new Draw({ svg });
  }
  drawNodes(layerId: string, num: number, xbias: number, ybias: number) {
    const nodes: INode[] = _.map(
      _.range(0, num),
      (i) => {
        const node: INode = _.cloneDeep(Config.nodeConf);
        const unit = node.radius;
        const { coordinate } = node;
        const x = coordinate.x + xbias * unit;
        const y = coordinate.y + i * 4 * unit + unit * ybias * 2;

        const conf = {
          ...node,
          coordinate: {
            y,
            x,
          },
        };

        return conf;
      });

    this.draw.drawNodes(nodes, layerId);

    return nodes;
  }

  drawLines(from: INode[], to: INode[]) {
    from.forEach(
      fnode => to.forEach(tnode => this.draw.drawLine(fnode, tnode)),
    );
  }

  clear() {
    this.draw.svg.selectAll('g').remove();
    this.draw.svg.selectAll('line').remove();
  }
}

export default DrawLayer;
