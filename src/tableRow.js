import React from "react";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";

//each rrow of tabnle with data
// click on see posts to see all post of that userId
///passing state which can be accessed by use location hook
export default function row(props) {
  return (
    <tr>
      <th scope="row">{props.id + 1}</th>
      <td>
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[...props.keyWords]}
          autoEscape={true}
          textToHighlight={props.name}
        />
      </td>
      <td>
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[...props.keyWords]}
          autoEscape={true}
          textToHighlight={props.company.name}
        />
      </td>
      <td>
        <Link
          to={{
            pathname: `/posts/${props.name}`,
            state: {
              userName: props.name,
              userId: props.id + 1
            }
          }}
        >
          {" "}
          See Posts
        </Link>
      </td>
    </tr>
  );
}
