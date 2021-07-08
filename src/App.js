import './App.css';
import {useEffect, useState} from "react";
import {getComments, getPosts, getUsers} from "./services/API/API";
import Users from "./comps/users/Users";
import Posts from "./comps/posts/Posts";
import Comments from "./comps/comments/Comments";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";

function App() {

  let [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(value => setUsers(value.data))
  }, [])


  let [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(value => setPosts(value.data))
  }, [])


  let [comments, setComments] = useState([]);

  useEffect(() => {
    getComments().then(value => setComments(value.data))
  }, [])




    return (
        <BrowserRouter>
            <div>
              <Link to={'/users'}>to users page</Link>
              <br/>
              <Link to={'/posts'}>to posts page</Link>
              <br/>
              <Link to={'/comments'}>to comments page</Link>
              <br/>
              <Link to={'/'}>home page</Link>



              <Switch>
              <Route path={'/users'} render={()=><Users itemsU={users}/>}/>

              <Route path={'/posts'} render={()=><Posts itemsP={posts}/>}/>

              <Route path={'/comments'} render={()=><Comments itemsC={comments}/>}/>

              <Route exact={true} path={'/'}>HOME</Route>
              </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
