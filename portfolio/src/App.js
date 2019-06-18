import pawesome from './assets/pawesome.png'
import footballfrenzy from './assets/football-frenzy.png'
import nomekop from './assets/nomekop.png'
import newbieroyale from './assets/newbie-royale.png'
import headShot from './assets/headShot.jpeg'
import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Link, animateScroll as scroll } from "react-scroll";

class App extends Component {
  constructor(){
    super()
    this.state= {
      first_name: '',
      last_name: '',
      from: '',
      text: '',
      sent: false
    }
  }

  


  inputChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({[name]: value})
  }

handleFormSubmit = async (e) => {
  e.preventDefault();
  let data = {
    from: this.state.from,
    first_name: this.state.first_name,
    text: this.state.text,
    last_name: this.state.last_name
}
  axios.post('http://localhost:3030/mail', data)
    .then( res => {
      console.log(data)
        this.setState({ sent: true })
        console.log('sent')
    })
    .catch( (e) => {
      console.log(e.message)
})
}

  render() {
    const {first_name,from, text, last_name} = this.state;
    return (
      <div className="App">
      <header>
        <div className='logo'>W</div>
        <Link 
          spy={true}
          smooth={true}
          offset={-70}
          to='about'
          className='header-link'
        >
          About
        </Link>
        <Link 
          to='projects'
          spy={true}
          smooth={true}
          offset={-70}
          className='header-link'
        >
          Projects
        </Link>
        <Link 
          spy={true}
          smooth={true}
          offset={-70}
          to='contact'
          className='header-link'
        >
          Contact
        </Link>
        {/* <h3 className='header-h3'>About</h3>
        <h3 className='header-h3'>Projects</h3>
        <h3 className='header-h3'>Contact</h3> */}
      </header>
      <div className='about' id={'about'} ref='/about'>
        <article>
          <div class="circle-container">
            <img src={headShot} alt='Wayne Wilson' className='headShot' />
          </div>
          <h1>About</h1>
          <p>Software Engineer and Web Developer skilled in both the Front and Back end of Web Development, Client Facing Services, Sales Operations, and Sales Management. Experienced Sales Specialist with a demonstrated history of working in the consumer services industry. </p>
        </article>
      </div>
      <div className='projects' id={'projects'}>
        <h1>Projects</h1>
        <article className='projects-article'>
          <div className='project-card'>
          <a href='http://anything-i-want.surge.sh/'>
            <img src={nomekop} alt='Nomekop'/>
            <h3>Nomekop (V1)</h3>
          </a>
            <p>An RPG turn based combat game, demonstrating knowledge of HTML, CSS, and Javascript. V2 is planned to leverage React's component based structure. Future verisons will implement an item, and healing system.</p>
          </div>
          <div className='project-card'>
            <a href='http://newbie-royale.herokuapp.com/'>
              <img src={newbieroyale} alt='Newbie Royale'/>
              <h3>Newbie Royal (V2)</h3>
            </a>
            <p>A deck construction tool for SuperCell's Clash Royale. This application makes calls to Clash Royale's API, and renders all information through React. Users can explore inormation on cards, chests, and leagues; as well as create decks.</p>
          </div>
          <div className='project-card'>
            <a href='http://pawsome.surge.sh/'>
              <img src={pawesome} alt='Pawesome Pet Rescue'/>
              <h3>Pawesome (V1)</h3>
            </a>
            <p>Pawesome is a 501c3 animal rescue that I am a part of. Their main need was to leverage a database in order to store and organize information on pets, adoptions, and volunteers. This application uses Express to build a custom databse and API, to allow the stakeholder the ability to preform full CRUD funcationality across all tables.</p>
          </div>
          <div className='project-card'>
            <a href='https://footballfrenzy.herokuapp.com/'>
              <img src={footballfrenzy} alt='Football Frenzy'/>
                <h3>Football Frenzy (V1)</h3>
            </a>
            <p>Football Frenzy is fantasy football league manager for commissioners. This tool in V1 gives the user the ability to add teams to leagues, and manager the players across teams, preventing the same player from being added to mulitple teams. This application leaverages Ruby on Rails, to set up the multiple end-points needed, in order to manipulate the multi-relational database</p>
          </div>
         
        </article>
      </div>
      <div className='contact' id={'contact'}>
        <h1>Conact me:</h1>
         <p>Contact Me</p>
         <div className='contact-form-container'>
          <div className='contact-container'>
            <form 
              action="/action_page.php"
              onSubmit={this.handleFormSubmit}>
              <label>First Name</label>
              <input 
                type="text" 
                id="fname" 
                name="first_name" 
                placeholder="Your name.." 
                defaultValue={first_name}
                onChange={this.inputChange}/>
              <label>Last Name</label>
              <input 
                type="text" 
                id="lname" 
                name="last_name" 
                placeholder="Your last name.." 
                defaultValue={last_name}
                onChange={this.inputChange}/>
              <label>Email</label>
              <input 
                type="email" 
                id="email" 
                name="from" 
                placeholder="Your email" 
                defaultValue={from}
                onChange={this.inputChange}/>
              <label>Subject</label>
              <textarea 
                id="subject" 
                name="text" 
                defaultValue={text}
                placeholder="Write something.."
                onChange={this.inputChange}></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
      <footer>
        <h3>Wayne Wilson, 2019</h3>
      </footer>
    </div>
    );
  }
}

export default App;
