import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map(
        (item, index) => {
          return (
            <a
              className="app__navigation-dot"
              key={item + index}
              style={active === item ? { backgroundColor: '#313BAC' } : {}}
              href={`#${item}`}
            />
          );
        }
      )}
    </div>
  );
};

export default NavigationDots;
