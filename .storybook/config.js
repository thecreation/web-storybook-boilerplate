import { configure } from '@storybook/html';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

const viewports = {
  responsive: {
    name: 'Responsive',
    styles: {
      width: '100%',
      height: '100%',
      border: 'none',
      display: 'block',
      boxShadow: 'none',
    },
    type: 'desktop',
  },
  '1680x1050': {
    name: '1680x1050',
    styles: {
      width: '1680px',
      height: '1050px'
    },
    type: 'desktop',
  },
  '1440x960': {
    name: '1440x960',
    styles: {
      width: '1440px',
      height: '960px'
    },
    type: 'desktop',
  },
  ipad: {
    name: 'iPad',
    styles: {
      height: '1024px',
      width: '768px',
    },
    type: 'tablet',
  },
  iphonex: {
    name: 'iPhone X',
    styles: {
      height: '812px',
      width: '375px',
    },
    type: 'mobile',
  },
  iphonexr: {
    name: 'iPhone XR',
    styles: {
      height: '896px',
      width: '414px',
    },
    type: 'mobile',
  }
}

addParameters({
  viewport: { viewports }
})