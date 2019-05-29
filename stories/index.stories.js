import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

// https://storybook.js.org/docs/configurations/default-config/#css-support
import 'bootstrap/scss/bootstrap.scss';


storiesOf('Demo', module)
  .add('alert', () => {
    return require('../src/blocks/alerts.html');
  })
  .add('button', () => {
    return require('../src/blocks/buttons.html');
  });
