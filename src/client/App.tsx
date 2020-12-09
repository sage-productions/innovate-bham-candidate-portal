import * as React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';



import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';

import Resume from './components/Resume';
import FlashcardsDev from './components/Flashcards-Dev-Andrew';
import FlashcardsData from './components/Flashcards-Data-Andrew';
import ElevatorPitch from './components/ElevatorPitch-Alt';
import CommonInterviewQs from './components/CommonInterviewQs';

import AdminResumeView from './components/AdminResumeList'; 


import Resources from './components/Resources-Alt';
import Staff from './components/Staff';
// import HiddenInnovators from './components/HiddenInnovators';
// import IntroToAgileMethods from './components/IntroToAgileMethods';


const App: React.FC<AppProps> = props => {
	
	return (
		<Router>
			
			<Navbar />

			{/* <div className="app-bg-img"> */}
				{/* <main className="container-fluid"> */}

						<Switch>
						
							<Route exact path="/" component={ Login } />
							<Route exact path="/home" component={ Home } />
						

							<Route exact path="/profile/:userid" component={ Profile } />

							<Route exact path="/resume/:userid" component={ Resume } />
							<Route exact path="/elevatorpitch/:userid" component={ ElevatorPitch } />
							<Route exact path="/common-interview-Qs" component={ CommonInterviewQs } />
							<Route exact path="/flashcards-dev" component={ FlashcardsDev } />
							<Route exact path="/flashcards-data" component={ FlashcardsData } />

							<Route exact path="/resources" component={ Resources } />
							<Route exact path="/staff" component={ Staff } />
							
							<Route exact path="/adminresumeview" component={ AdminResumeView } />

						</Switch>

				{/* </main>  */}
			{/* </div> */}
			
			<Footer />

		</Router>
	);
}



interface AppProps {}

export default App;
