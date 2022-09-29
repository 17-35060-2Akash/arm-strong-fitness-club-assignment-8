import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import QuestionAnswers from './components/QuestionAnswers/QuestionAnswers';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <QuestionAnswers></QuestionAnswers>
    </div>
  );
}

export default App;
