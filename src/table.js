import React, { useEffect, useState } from "react";
import { Table, InputGroup, Input } from "reactstrap";
import TableRow from "./tableRow.js";

const table = props => {
  const [users, setUsers] = useState([]);
  const darkMode = props.mode == "dark";
  const [keyWords, setKeyWords] = useState("");
  useEffect(() => {
    //api call to server fopr initial data
    const url = "https://jsonplaceholder.typicode.com/users?limit=20";
    fetch(url)
      .then(r => r.json())
      .then(res => setUsers(res))
      .then(console.log("api"));
  }, []);
  return (
    <>
      <InputGroup style={{ maxWidth: "400px", margin: "20px" }}>
        <Input
          placeholder="Enter Keywords"
          onChange={e => setKeyWords(e.target.value.split(" "))}
        />
      </InputGroup>
      <Table responsive dark={darkMode} bordered hover striped>
        <thead>
          <tr>
            <th>{...props.mode}</th>
            <th>Name</th>
            <th>Company</th>
            <th>Blog Posts</th>
          </tr>
        </thead>
        <tbody>
          {/*  api will get data of all the users and then it will rnder a table accodingly*/}
          {users.map((item, idx) => (
            <TableRow
              key={idx}
              name={item.name}
              id={idx}
              keyWords={keyWords}
              company={item.company}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default table;
