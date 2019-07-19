import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import eventStream, { NNEvent } from '../../services/EventStream';

import NNPanel from '../NNPanel';
import ThreeDPanel from '../ThreeDPanel';

import styled from '../../styled';

interface DIYPanelProps {

}

interface DIYPanelState {
  value: number;
}

const StyledWrapper = styled.div`
  border: 1px solid #eeeeee;
  height: 100%;
`;

class DIYPanel extends Component<DIYPanelProps, DIYPanelState> {
  constructor(props: DIYPanelProps) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    this.setState({
      value: newValue,
    });
    eventStream.send({
      type: NNEvent.PanelChange,
      payload: newValue,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <StyledWrapper>
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="3D" />
          <Tab label="NN_Layer" />
        </Tabs>
        {value === 0 && <ThreeDPanel />}
        {value === 1 && <NNPanel />}
      </StyledWrapper>
    );
  }
}

export default DIYPanel;
