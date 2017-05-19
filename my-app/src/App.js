import React, { Component } from 'react';
import './styles/App.css';

import Header           from './components/Header';
import Dropdown         from './components/Dropdown';
import RegistrationForm from './components/RegistrationForm';
// mockData
import MenuList         from './mockData/menuList';



class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header items={ MenuList }/>
          <Dropdown />
        </div>
        <hr />
        <div className="container-form">
          <RegistrationForm />
        </div>
      </div>


    );
  }
}

export default App;
















// import React, { Component } from 'react';
// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';


//  Working variant
// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );
//
// const About = () => (
//
//   <div>
//     <h2>About</h2>
//   </div>
// );
//
// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );
//
// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>
//
//     <Route path={`${match.url}/:topicId`} component={Topic}/>
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// );
//
// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//       </ul>
//
//       <hr/>
//
//       <Route exact path="/" component={Home}/>
//       <Route path="/about" component={About}/>
//       <Route path="/topics" component={Topics}/>
//     </div>
//   </Router>
// );



// const MainPage = () => (
//   <div>
//     <h2>Main Page</h2>
//   </div>
// )


// class DictionaryTable extends Component {
// 	render() {
// 		const { items } = this.props;
// 		// const users = this.props.users;

// 		return (
//       <div>
//         <div>
//           <h3>{match.params.topicId}</h3>
//         </div>

//         // <div>
//         //   <table>
//         //     <thead>
//         //       <th>ID</th>
//         //       <th>Site</th>
//         //       <th>Domen</th>
//         //       <th>SiteId</th>
//         //       <th>isActive</th>
//         //     </thead>

//         //     <tbody>
//         //         { items.map(e =>
//         //           return (
//         //             <tr></tr>
//         //           )
//         //         )}
//         //     </tbody>
//         //   </table>
//         // </div>
//       </div>
// 		)
// 	}
// }

// const DictionaryTable = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

// const Dictionaries = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.url}/:topicId`} component={DictionaryTable}/>
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )


// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Main page</Link></li>
//         <li><Link to="/dictionaries">Dictionaries</Link></li>
//       </ul>

//       <hr/>

//       <Route exact path="/" component={MainPage}/>
//       <Route path="/dictionaries" component={Dictionaries}/>
//     </div>
//   </Router>
// )

// export default BasicExample;
