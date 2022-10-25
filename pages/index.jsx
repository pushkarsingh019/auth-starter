import Link from "next/link"
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import LoginScreen from "./login";

// importing statemanagement variables
const initialState = {name : "", email : ""};
const feedState = [];

function reducer(state, action){
  switch(action.type){
    case "AUTHENTICATION":
      return {
        ...state, 
        name : action.pyload.name,
        email : action.payload.email
      }
      break;
    default:
      return state;
      break;
  };
};



export default function HomeScreen(){

  let [feed, setFeed] = useState([]);
  let [user, setUser] = useState();

  const [state, dispatch] = useReducer(reducer, initialState);


  async function fetchPosts(){
    let {data} = await axios.get("/api/fetch");
    setFeed(data.data)
  };

  async function loginHandler(responseData){
    let {data} = await axios.post(`/api/login`, {responseData : responseData});
    setUser(data.user);
    fetchPosts();
  }

  useEffect(() => {
    fetchPosts();
  },[])

  function FeedSection(){
    return(
      <section>
        {feed ? feed.map((profile) => {
          return <h4 key={profile.email}>{profile.name}</h4>
        }) : "no feed yet"}
      </section>
    )
  };

  return(
    <div className="app">
      <h1>{user ? `Welcome ${user.name}` : "The Home Page"}</h1>
      {console.log(user)}
      <LoginScreen loginHandler={loginHandler} userDetail={user} />
      <hr />
    <FeedSection />
    </div>
  )
};