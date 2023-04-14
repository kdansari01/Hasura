import { useState } from "react";

const PostApi = () => {
  const [data, setData] = useState({
    title: ""
  });
  const handleSubmit = async () => {
    await fetch("https://kdansari.hasura.app/v1/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret":
          "WRwsjA9dgCSOEoULSv7bkIlt1Kxc6jTlWNbYaAjlk6rhcDhjyKBcUdFYFQE6oae5"
      },
      body: JSON.stringify({
        query: `
        mutation {
          insert_todos_one(object: {title: ${data.title}}){
            id
          }
        }
    `
      })
    });
  };

  console.log(data);
  return (
    <div>
      <input
        name="title"
        value={data.title}
        type="text"
        placeholder="text"
        onChange={(e) =>
          setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default PostApi;
