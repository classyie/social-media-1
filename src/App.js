import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Cards from './Components/Cards';
import Createpost from './Components/Createpost';
import { useState } from 'react';
import PostListProvider from './store/post-list-store';
function App() {
  const [selectedState, setSelectedState] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar state={selectedState} setState={setSelectedState} />
        <div className="app-item">
          <Header />
          {selectedState === "Home" && <Cards />}
          {selectedState === "Create Post" && < Createpost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
