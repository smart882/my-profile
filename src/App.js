import jimmy from './jimmy.JPG';
import './App.css';
import I4G from './I4G.jpeg';
import slack from './slack.svg';
import github from './github.svg';


function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className='profile-section'>
        <img id="profile_img" src= {jimmy} alt="profile photo" />
        <h5 id='twitter' className='profile-name'>Jimmy Inieke</h5>
        <h5 id='slack' className='profile-name' hidden>Inieke Jimmy </h5>

        </div>
      <div className="links-section">
                <a href="https://twitter.com/JimmyInieke" id="twitter" className="link-anchor">twitter</a>
               <a href="https://training.zuri.team/" id="btn_zuri" className="link-anchor">Zuri Link</a>
                <a href="https://books.zuri.team/" id="books" className="link-anchor">Zuri Books</a>
                <a href="https://books.zuri.team/python-for-beginners?ref_id=" id="book_python" class="link-anchor">Python Books</a>
                <a href="https://background.zuri.team/" id="pitch" className="link-anchor">Background check for Coders</a>
                <a href="https://books.zuri.team/design-rules" id="book_design" class="link-anchor">Design Books</a>

      </div>
      <div className='font-icons'>
      <a href="#"> <img className='icons' src= {slack} alt="slack-icon" /></a>
      <a href="https://github.com/smart882"><img className='icons' src= {github} alt="slack-icon" /></a>
      </div>
      
    
  
    <footer className='footer'>
      <div className='footer-icons'>
        <div className='Zuri-logo'>Zuri<span>.</span>Internship</div>
        <div className='HNG-icon'>HNGInternship 9 Frontend Task</div>
        <div>
          <img id="I4G-logo" src= {I4G} alt="I4G-logo" />
        </div>
    </div>
    </footer>
    </div>
    </div>
  );
}

export default App;
