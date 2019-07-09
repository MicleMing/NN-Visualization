export interface ICoordinate {
  x: number;
  y: number;
}

export interface INode {
  coordinate: ICoordinate;
  radius: number;
  styles?: Object;
}
