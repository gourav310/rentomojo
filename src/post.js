import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button, CardHeader, CardBody, CardText } from "reactstrap";
import Highlighter from "react-highlight-words";
//get all the data from parent userposts and render cards
const post = props => {
  const history = useHistory();
  return (
    <div className="post">
      <Card className="card">
        <CardHeader>
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={[...props.keyWords]}
            autoEscape={true}
            textToHighlight={props.title}
          />
        </CardHeader>
        <CardBody>
          <CardText>
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={[...props.keyWords]}
              autoEscape={true}
              textToHighlight={props.body}
            />
          </CardText>
          {/*  if some one click on post details redirect them to post details page and passs data as loaction state  */}
          <Button onClick={() => history.push("/postDetails", props)}>
            Post Details
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default post;
