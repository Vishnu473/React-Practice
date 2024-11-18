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
import Product from './components/Product';
import Person from './components/Person';
import CardChildren from './components/CardChildren';
import Weather from './components/Weather';
import UserStatus from './components/UserStatus';
import Greetings from './components/Greetings';
import StyleCard from './components/StyleCard';
import ProfileCard from './components/ProfileCard';
import IconComponent from './components/IconComponent';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import Profile from './components/Profile';
import ShoppingList from './components/ShoppingList';

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      {/* <WelcomeMessage />
      <JSXRules />
      <Greeting />
      <ProductInfo />
      <UserList />
      <ProductList />
      <Person name='Vishnu' age='23'/>
      <Product 
      name='Ring'
      price='20000'/>
      <CardChildren>
        <div><h1>Card 1</h1>
        <p>This is the description of Card 1</p></div>
        <div><h1>Card 2</h1>
        <p>This is the description of Card 2</p></div>
        <div><h1>Card 3</h1>
        <p>This is the description of Card 3</p></div>
      </CardChildren>
      <UserStatus isLoggedIn={true} isAdmin={true}/>
      <Greetings timeOfDay='evening'/>
      <Weather temp={12}/>
      <StyleCard />
      <ProfileCard />
      <IconComponent /> */}
      {/* <Counter/> */}
      {/* <TodoList /> */}
      {/* <Profile /> */}
      <ShoppingList/>
      <Footer />
      
    </div>
  );
};

export default App;
