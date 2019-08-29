import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {

  // Firefox和Chrome早期版本中带有前缀
  // var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
  // // 选择目标节点
  // var target = document.getElementById('root'); 
  // // 创建观察者对象
  // var observer = new MutationObserver(function(mutations) {  
  //   mutations.forEach(function(mutation) { 
  //     for (let i = 0; i < document.body.childNodes.length; i++) {
  //       console.log( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
  //     }

  //     console.log(mutation.type); 
  //   }); 
  // }); 
  // // 配置观察选项:
  // var config = { attributes: true, childList: true, characterData: true }
  // // 传入目标节点和观察选项
  // observer.observe(target, config);
  // // 随后,你还可以停止观察
  // observer.disconnect();
  // var root = document.getElementById('root');
  // console.log(root.innerHTML);

  // root.onmousedown = function (e) {
  //   console.log("onmousedown", e);
  // }
  // root.onclick = function (e) {
  //   console.log("onclick", e);
  // }
  // for (var i = 0; i <= root.length; i++) {
  //   (function () {
  //     var p = i
  //     root[i].onclick = function () {
  //       alert(p);
  //     }
  //   })();
  // }


  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}

export default App;