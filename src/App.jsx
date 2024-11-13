// function App() {
//   return <h1>"Hello Folks!"</h1>;
// }

import Footer from './components/Footer';
import Header from './components/Header';
import JSXRules from './components/JSXRules';
import MainContent from './components/MainContent';
import Greeting from './components/Greeting';
import WelcomeMessage from './components/WelcomeMessage';
import ProductInfo from './components/ProductInfo';
import UserList from './components/UserList';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      {/* <WelcomeMessage />
      <JSXRules />
      <Greeting />
      <ProductInfo /> */}
      <UserList />
      <ProductList />
      <Footer />
    </div>
  );
};

export default App;
