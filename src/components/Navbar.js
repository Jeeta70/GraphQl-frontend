import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  useEffect(() => {
    // fetch("http://localhost:4000/", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     query: `
    //      query getUserById($userId:ID!) {
    //      user(_id: $userId) {
    //      _id
    //      firstName
    //      lastName
    //      email
    //      }
    //   }

    //   `,
    //     variables: {
    //       userId: "63f77ec95b5c23aa94260858",
    //     },
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  }, []);

  return (
    <nav>
      <div className="nav-wrapper #673ab7 deep-purple">
        <Link to="/" className="brand-logo left">
          Quote App
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
