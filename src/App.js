// import 'bootstrap/dist/css/bootstrap.css';
import 'popper.js';
// import './App.css';
import './style.css';
// import './style-m.css';
import './style-index.css';
// import './style-index-m.css';
import './style-cv.css';
// import './style-cv-m.css';
import './style-contact.css';
// import './style-contact-m.css';
import Header from './components/Header';
import HomeMain from './components/HomeMain';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomeMain /> */}
      <Footer/>
    </div>
  );
}

export default App;