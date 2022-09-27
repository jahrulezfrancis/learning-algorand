import './App.css';
import { Posts } from './Postlist';


function PostComp(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
     {Posts.map((element, index) => {
      return  <PostComp key={element.id} title={element.title} body={element.body} />
     })}
    </div>
  );
}

export default App;