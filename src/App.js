import UserProfile from "./components/UserProfile";

import "./App.css";

const userDetailsList = [
  {
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Karthik",
    role: "Full stack developer"
  },
  {
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Karthik",
    role: "Full stack developer"
  },
  {
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Karthik",
    role: "Full stack developer"
  },
  {
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Karthik",
    role: "Full stack developer"
  }
];
const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map((eachItem) => (
        <UserProfile userDetails={eachItem} />
      ))}
    </ul>
  </div>
);

export default App;
