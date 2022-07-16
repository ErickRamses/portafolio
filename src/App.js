import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


function App() {


  return (
    <div >
      <div className="App">

        <div className='Back'></div>
        <div>

          <div className='Header'>hi mogh add padding or somethong or quit scroll later</div>
          <div className='Header1'>subtitle?</div>
          <div className='Header2'>logo1</div>
          <div className='Header3'>logo2</div>
        </div>

       

      </div>
      <div className='blur'>

      </div>
      <div className='body'>
        <br></br>
        make triangle 📐
        what i can do xd egtegnologies<br></br>
        logo <br></br>
        logo <br></br><br></br>                  
        proyets add flex or grid?
        grid better and one img per columsn ?
        <br></br>
        
        <Card style={{ width: '320px',border:"0px" }} className="shadow">
      <Card.Img variant="top" src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2017/03/space_debris/16871919-3-eng-GB/Space_Debris_pillars.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <Button variant="primary">git hub</Button>
      </Card.Body>
    </Card>
      </div>
      </div>
    
  );
}

export default App;
