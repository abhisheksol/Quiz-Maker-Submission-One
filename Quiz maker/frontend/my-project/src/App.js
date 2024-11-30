import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import QuizTaker from './pages/User/QuizTaker';
import Button from './component/button';
import QuizCreator from './pages/Admin/QuizCreator';
import { BrowserRouter as Router, Route, Link,Routes } from "react-router-dom";
import Home from './Home';
import Login from './pages/Login';
import QuizList from './pages/User/Quiz_List';
import UserQuizResult from './pages/User/UserQuizResult';
import UserDashboard from './pages/User/UserDashboard';
import Settings from './pages/User/Settings';



function App() {
  return (
    <Router>
    <div>
      <header>
      {/* <Nav isAdmin={false} isLoggedIn={true} /> */}
      {/* <Nav isAdmin={true} isLoggedIn={false} /> */}
      <Nav isAdmin={true} isLoggedIn={true} />
      </header>
      <main>
     
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="user/quizzes" element={<QuizList />} />
            <Route path="/quiz/:id" element={<QuizTaker />} />
            <Route path="/admin/create" element={<QuizCreator />} /> {/* Fixed this line */}
            <Route path="/user/:userId/results" element={<UserQuizResult />} />
            <Route path="/dashboard" element={<UserDashboard />} />   {/* user dashboard*/ }
            <Route path="/settings" element={<Settings />} />



          </Routes>
     
      </main>
    
    </div>
    </Router>
  );
}

export default App;
