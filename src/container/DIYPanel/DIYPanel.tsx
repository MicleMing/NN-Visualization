import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import NNPanel from '../NNPanel';
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
  }

  render() {
    return (
      <StyledWrapper>
        <Tabs value={this.state.value} onChange={this.handleChange}>
          <Tab label="NN_Layer" />
          <Tab label="TODO" />
        </Tabs>
        <NNPanel />
      </StyledWrapper>
    );
  }
}

export default DIYPanel;
