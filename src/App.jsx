import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import Friends from "./Friends";
import Players from "./Players";
import Countries from "./Countries";
import Books from "./Books";
import Villages from "./Villages";
import Posts from "./Posts";
import Details from "./Details";
import Devices from "./Devices";
import "./App.css";
import { Suspense } from "react";

const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const fetchPlayer = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const fetchCountries = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const fetchBooks = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const fetchVillages = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const fetchDetails = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const fetchDevices = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);

function App() {
  const friendsPromise = fetchFriends();
  const countriesPromise = fetchCountries();
  const villagesPromise = fetchVillages();
  const postsPromise = fetchPosts();
  const detailsPromise = fetchDetails();

  function handleClick() {
    alert("I am clicked");
  }

  const handleClick3 = () => {
    alert("clicked 3");
  };

  const handleClick5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h3>Vite + React</h3>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUser={fetchUser}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      {/* <Suspense fallback={<h3>wait a second...</h3>}>
        <Players fetchPlayer={fetchPlayer}></Players>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Countries name is coming...</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Books list is coming...</h3>}>
        <Books fetchBooks={fetchBooks}></Books>
      </Suspense> */}

      {/* <Suspense fallback={<h3>just a second...</h3>}>
        <Villages villagesPromise={villagesPromise}></Villages>
      </Suspense> */}

      {/* <Suspense fallback={<h4>Posts are coming....</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Details detailsPromise={detailsPromise}></Details>
      </Suspense> */}

      <Suspense fallback={<h3>wait a second...</h3>}>
        <Devices fetchDevices={fetchDevices}></Devices>
      </Suspense>

      <Batsman></Batsman>

      <Counter></Counter>

      {/* <button onClick={handleClick}>Click Me</button> */}
      {/* <button onClick={function handleClick2(){
        alert('clicked 2')
      }}>Click Me2</button>
      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={() => alert('clicked 4')}>Click Me 4</button>
      <button onClick={() => handleClick5(10)}>Click add 5</button> */}

      {/* <button onclick="handleClick()">Click Me</button>
       <button onClick={handleClick}>Click Me 2</button>
       <button onClick={function handleClick2(){
        alert('click 2')
       }}>Click Me</button>
       <button onClick={handleClick3}>Click Me 3</button>
       <button onClick={() => alert('clicked 4')}>Click Me 4</button>
       <button onClick={() => handleClick5(10)}>Click Me 5</button> */}
    </>
  );
}

export default App;
