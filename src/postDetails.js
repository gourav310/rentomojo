import React, { useState } from "react";
import { Button } from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";
import { Table, InputGroup, Input } from "reactstrap";
import Highlighter from "react-highlight-words";

import Comment from "./comment";
const post = props => {
  const [keyWords, setKeyWords] = useState("");
  const history = useHistory();
  const location = useLocation();
  const [comments, setComments] = useState([]);
  const { name, postId, title, body, userId, posts } = location.state;
  //console.log(location.state);
  //loading comments frrom api
  const loadComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(r => r.json())
      .then(r => setComments(r));
  };
  //delete post
  //call the dlete api if the status is 200(ok)//
  //we are manuulating the data hre beacuse api will always return the same data
  //we will now do api call again we will just fill the data which we modified here
  const deletePost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE"
    }).then(r => {
      if (r.ok) {
        let arr = posts.filter(item => item.id !== postId);
        history.push(`/posts/${name}`, {
          userName: name,
          userId: userId,
          posts: arr,
          postId: postId
        });
      } else {
        console.log(r);
      }
    });
  };
  return (
    <div className="container" style={{ paddingTop: "40px" }}>
      <InputGroup
        className="row cardRow"
        style={{ maxWidth: "400px", margin: "auto", display: "flex" }}
      >
        <Input
          placeholder="Enter Keywords"
          onChange={e => setKeyWords(e.target.value.split(" "))}
        />
      </InputGroup>
      <div className="row postDetails">
        <div className="col">
          <h2>User Name: {name}</h2>
        </div>
      </div>
      <div className="row postDetails title0">
        <div className="col title">
          <h3>Title:</h3>
        </div>
        <div className="col title1">
          <h3>
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={[...keyWords]}
              autoEscape={true}
              textToHighlight={title}
            />
          </h3>
        </div>
      </div>
      <div className="row postDetails title0">
        <div className="col title0">
          <h4>Body:</h4>
        </div>
        <div className="col title1">
          <h4>
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={[...keyWords]}
              autoEscape={true}
              textToHighlight={body}
            />
          </h4>
        </div>
      </div>
      <div className="row postDetails">
        <div className="col">
          {" "}
          <Button color="link" onClick={() => loadComments()}>
            Load Comments
          </Button>
          <span style={{ marginLeft: "10px" }}>
            <Button color="link" onClick={deletePost}>
              Delete
            </Button>
          </span>
        </div>
      </div>
      <div className="row postDetails">
        <div className="col">
          <ul>
            {/*comment component for renderting all the comments on a post  */}
            {comments.map((item, idx) => (
              <Comment name={item.email} body={item.body} key={idx} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default post;
