import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import image from '../src/image/imageInSrc.jpg';

function App() {
  return (
    <div className="container" >
      <h1 class="title red">Yousri</h1>
      <br/>
      <img src={image} alt=""/>
      <br/>
      <img src="/image/imageInPublic.jpg" alt=""/>
      <br/>
      <iframe width="500" height="350" src="https://www.youtube.com/embed/BS9g6Z3lbBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    
      
      
    </div>
  );
}

export default App;
