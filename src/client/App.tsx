import * as React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';



import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';

import Resume from './components/Resume';
import InterviewPrep from './components/InterviewPrep';
import Flashcards from './components/Flashcards';

import AdminResumeView from './components/AdminResumeView';


// import Admin from './components/Admin';
// import Resources from './components/Resources';
// import HiddenInnovators from './components/HiddenInnovators';
// import IntroToAgileMethods from './components/IntroToAgileMethods';


const App: React.FC<AppProps> = props => {
	
	return (
		<Router>
			
			<Navbar />
			
			<main className="container-fluid pt-5">
				
				<Switch>
					
					<Route exact path="/" component={ Login } />
					<Route exact path="/home" component={ Home } />
					<Route exact path="/profile/:id" component={ Profile } />
					<Route exact path="/resume/:id" component={ Resume } />
					<Route exact path="/interviewprep/:id" component={ InterviewPrep } />
					<Route exact path="/flashcards" component={ Flashcards } />
					
					<Route exact path="/adminresumeview" component={ AdminResumeView } />

				</Switch>

			</main>
			
			<Footer />

		</Router>
	);
}



interface AppProps {}

// export interface IAppState {
// 	name: string;
// }

export default App;
