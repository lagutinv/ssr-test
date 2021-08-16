import React from 'react';

function App(props) {
  const dishes = props.dishes.map((dish, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, dish.title));
  return /*#__PURE__*/React.createElement("ul", null, dishes);
}

export default App;