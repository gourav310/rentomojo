import React, { useEffect, useState } from "react";
import Post from "./post.js";
import { useLocation } from "react-router-dom";
import { Table, InputGroup, Input } from "reactstrap";
//render all the posts by user

const table = props => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const [keyWords, setKeyWords] = useState("");
  const userName =
    location.state === undefined ? "user" : location.state.userName;
  const userId = location.state === undefined ? 0 : location.state.userId;
  //  console.log(location.state);

  useEffect(() => {
    //if datais already present
    if (location.state !== undefined && location.state.posts) {
      setPosts(location.state.posts);
      return;
    }
    //if we are fetchiong data for first time
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}&skip=0&limit=10`;
    fetch(url)
      .then(r => r.json())
      .then(res => {
        console.log(res);
        setPosts(res);
      })
      .then(console.log("api"))
      .catch(e => console.log(e));
  }, []);
  return (
    <div className="container ">
      <InputGroup
        className="row cardRow"
        style={{
          maxWidth: "400px",
          margin: "auto",
          display: "flex",
          marginTop: "15px"
        }}
      >
        <Input
          placeholder="Enter Keywords"
          onChange={e => setKeyWords(e.target.value.split(" "))}
        />
      </InputGroup>
      <div className="row cardRow ">
        <h1 style={{ paddingTop: "20px" }}>{userName}'s Posts</h1>
      </div>
      <div className="row cardRow">
        {/* use posts component to rednder all the posts in bootstrap cards and pass dat as prrps*/}
        {posts.map((item, idx) => (
          <Post
            body={item.body}
            postId={item.id}
            userId={userId}
            title={item.title}
            name={userName}
            keyWords={keyWords}
            key={idx}
            posts={posts}
          />
        ))}
      </div>
    </div>
  );
};

export default table;
