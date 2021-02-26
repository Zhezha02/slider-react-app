// import './App.css';
// import Carousel from './components/Carousel';
// import { slidesDB } from './Data/date';
// import WindowSizes from './components/WindowSizes';

// function App () {
//   return (
//     <>
//       {/* <Carousel imageDB={slidesDB} />  */}
//     </>
//   );
// }

// export default App;

import React, { Component } from 'react';
import UserContext from './contexts/UserContext';
import PageHeader from './components/PageHeader';
import Sidebar from './components/Sidebar';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        imageSrc: 'https://www.011global.com/Account/Slices/user-anonymous.png',
      },
    };
  }

  render () {
    return (
      <UserContext.Provider value={this.state.user}>
        <PageHeader />
        <Sidebar/>
      </UserContext.Provider>
    );
  }
}

export default App;
