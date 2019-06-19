import pawesome from './assets/pawesome.png';
import footballfrenzy from './assets/football-frenzy.png';
import nomekop from './assets/nomekop.png';
import newbieroyale from './assets/newbie-royale.png';
import headShot from './assets/headShot.jpeg';
import linkedin from './assets/linkedin.png';
import email from './assets/email.png';
import github from './assets/github.png';
import React, {Component} from 'react';
import Logo from './assets/logo.png';
import './App.css';
import axios from 'axios';
import {Link, animateScroll as scroll} from 'react-scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      from: '',
      text: '',
      sent: false,
      modal: false,
      alert: false
    };
  }

  inputChange = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({[name]: value});
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    if(!this.state.first_name || !this.state.last_name || !this.state.from || !this.state.text){
      this.setState({alert: true})
    }
    else{
      let data = {
        from: this.state.from,
        first_name: this.state.first_name,
        text: this.state.text,
        last_name: this.state.last_name,
      };
      axios
        .post('https://waynewilsonportfolio.herokuapp.com/mail', data)
        .then(res => {
          console.log(data);
          this.setState({sent: true});
          console.log('sent');
        })
        .catch(e => {
          console.log(e.message);
        });
        this.setState({modal: true})
    }
  };


  closeModal = () => {
    this.setState({
      first_name: '',
      last_name: '',
      from: '',
      text: '',
      sent: false,
      modal: false,
      alert: false
    })
    this.clearForm();
  }

  closeAlertModal = () => {
    this.setState({
      alert: false
    })
    this.clearForm();
  }

  clearForm = () => {
    this.refs.fname.value="";
    this.refs.lname.value="";
    this.refs.subject.value="";
    this.refs.email.value='';
  }


  render() {
    const {first_name, from, text, last_name} = this.state;
    return (
      <div className="App">
        <header>
          <div className="header-container">
            <img src={Logo} alt="Wayne Wilson" className="header-logo" />
          </div>
          <div className="header-link-container">
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              to="about"
              className="header-link"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              className="header-link"
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-41}
              to="contact"
              className="header-link"
            >
              Contact
            </Link>
            <a href="https://www.docdroid.net/EcT5dX9/wayne-wilson.pdf" className="header-link">
              Resume
            </a>
            {/* <h3 className='header-h3'>About</h3>
        <h3 className='header-h3'>Projects</h3>
        <h3 className='header-h3'>Contact</h3> */}
          </div>
        </header>
        <div className="about" id={'about'} ref="/about">
          <article>
            <div class="circle-container">
              <img src={headShot} alt="Wayne Wilson" className="headShot" />
            </div>
            <h1>About</h1>
            <p>
              Software Engineer and Web Developer skilled in both the Front and
              Back end of Web Development, Client Facing Services, Sales
              Operations, Management. Experienced Sales Specialist
              with a demonstrated history of working in the consumer tech services
              industry.
            </p>
          </article>
        </div>
        <div className="projects" id={'projects'}>
          <h1>Projects</h1>
          <article className="projects-article">
            <div className="project-card">
              <a href="http://anything-i-want.surge.sh/" className='project-title'>
                <img 
                  src={nomekop} 
                  alt="Nomekop" 
                  className='project-image'/>
                <h3>Nomekop (V1)</h3>
              </a>
              <p>
                An RPG turn based combat game, demonstrating knowledge of HTML,
                CSS, and Javascript. V2 is planned to leverage React's component
                based structure. Future verisons will implement an item, and
                healing system.
              </p>
            </div>
            <div className="project-card">
              <a href="http://newbie-royale.herokuapp.com/" className='project-title'>
                <img 
                  src={newbieroyale} 
                  alt="Newbie Royale" 
                  className='project-image'/>
                <h3>Newbie Royal (V2)</h3>
              </a>
              <p>
                A deck construction tool for SuperCell's Clash Royale. This
                application makes calls to Clash Royale's API, and renders all
                information through React. Users can explore inormation on
                cards, chests, and leagues; as well as create decks.
              </p>
            </div>
            <div className="project-card">
              <a href="http://pawsome.surge.sh/" className='project-title'>
                <img 
                  src={pawesome} 
                  alt="Pawesome Pet Rescue" 
                  className='project-image'/>
                <h3>Pawesome (V1)</h3>
              </a>
              <p>
                Pawesome is a 501c3 animal rescue that I am a part of. Their
                main need was to leverage a database in order to store and
                organize information on pets, adoptions, and volunteers. This
                application uses Express to build a custom databse and API, to
                allow the stakeholder the ability to preform full CRUD
                funcationality across all tables.
              </p>
            </div>
            <div className="project-card">
              <a href="https://footballfrenzy.herokuapp.com/" className='project-title'>
                <img 
                  src={footballfrenzy} 
                  alt="Football Frenzy" 
                  className='project-image'/>
                <h3>Football Frenzy (V1)</h3>
              </a>
              <p>
                Football Frenzy is fantasy football league manager for
                commissioners. This tool in V1 gives the user the ability to add
                teams to leagues, and manager the players across teams,
                preventing the same player from being added to mulitple teams.
                This application leaverages Ruby on Rails, to set up the
                multiple end-points needed, in order to manipulate the
                multi-relational database
              </p>
            </div>
          </article>
        </div>
        <div className="contact" id={'contact'}>
          {/* Modal */}
          <div 
            id="myModal" 
            className={this.state.modal ? 'active-modal': 'modal'} 
            onClick={this.closeModal}>
            <div className="modal-content">
              <span 
                className="close"
                onClick={this.closeModal}>&times;</span>
              <p className={'modal-text'}>Thank you, {this.state.first_name}! I will reach out to you shortly.</p>
            </div>
          </div>
          {/* Modal End */}
          {/* Alert Modal */}
          <div 
            id="alertModal" 
            className={this.state.alert ? 'alert-active-modal': 'modal'} 
            onClick={this.closeModal}>
            <div className="alert-modal-content">
              <span 
                className="alert-close"
                onClick={this.closeAlertModal}>&times;</span>
              <p className={'modal-text'}>Please fill in all fields to contact me</p>
            </div>
          </div>
          {/* End Alert Modal */}
          <h1>Contact me:</h1>
          <div className="contact-form-container">
            <div className="contact-container">
              <form action="/action_page.php" onSubmit={this.handleFormSubmit}>
                <label>First Name</label>
                <input
                  type="text"
                  ref='fname'
                  id="fname"
                  name="first_name"
                  placeholder="Your name.."
                  defaultValue={first_name}
                  onChange={this.inputChange}
                />
                <label>Last Name</label>
                <input
                  type="text"
                  ref='lname'
                  id="lname"
                  name="last_name"
                  placeholder="Your last name.."
                  defaultValue={last_name}
                  onChange={this.inputChange}
                />
                <label>Email</label>
                <input
                  type="email"
                  ref='email'
                  id="email"
                  name="from"
                  placeholder="Your email"
                  defaultValue={from}
                  onChange={this.inputChange}
                />
                <label>Subject</label>
                <textarea
                  id="subject"
                  ref='subject'
                  name="text"
                  defaultValue={text}
                  placeholder="Write something.."
                  onChange={this.inputChange}
                />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
        <footer>
          <div className='footer-container'>
            <div className='footer-icons'>
                <a href='mailto:wynwlsn86@gmail.com'>
                  <img src={email} alt="Send Email" className="footer-link" />
                </a>
                <a href='https://github.com/wynwlsn86'>
                  <img src={github} alt="Go to Github" className="footer-link" />
                </a>
                <a href='https://www.linkedin.com/in/wynwlsn86/'>
                  <img src={linkedin} alt="Go to LinkedIn" className="footer-link" />
                </a>
              </div>
            <h3 className='footer-text'>Wayne Wilson, 2019</h3>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
