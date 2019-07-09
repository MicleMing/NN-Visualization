import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import defaultTheme, { ITheme } from './theme';
import { ThemeProvider } from './styled';

import Visualization from './container/Visualization';

function createWithTheme(
  Widget: React.ComponentClass<{}>,
  theme?: ITheme,
) {
  const iTheme = theme || defaultTheme;
  return () => (
    <ThemeProvider theme={iTheme}>
      <Widget />
    </ThemeProvider>
  );
}

const VisualWidget = createWithTheme(Visualization);

class NNVisualization extends Component<any, any> {
  render() {
    return (
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Typography variant="h6" color="inherit">
            Neural Network Visualization
          </Typography>
        </Toolbar>
        <VisualWidget />
      </Container>
    );
  }
}

ReactDOM.render(
  <NNVisualization />,
  document.getElementById('nn-visualization'),
);
