import React from 'react/addons';

export default (component) => {
  if (!document.getElementById('main')) {
    document.body.innerHTML += '<div id="main"></div>';
  }

  document.getElementById('main').innerHTML = '';

  React.render(component, document.getElementById('main'));
};
