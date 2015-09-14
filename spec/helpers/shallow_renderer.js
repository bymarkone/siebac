import React from 'react/addons';

const TestUtils = React.addons.TestUtils;

export default (component) => {
  const renderer = TestUtils.createRenderer();
  renderer.render(component);

  return renderer.getRenderOutput();
};
