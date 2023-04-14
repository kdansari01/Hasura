import { useState, useEffect } from "react";

const GetApi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = "{ todos {id created_at title} }";
      const headers = {
        "Content-Type": "application/json",
        "x-hasura-admin-secret":
          "WRwsjA9dgCSOEoULSv7bkIlt1Kxc6jTlWNbYaAjlk6rhcDhjyKBcUdFYFQE6oae5"
      };
      const response = await fetch("https://kdansari.hasura.app/v1/graphql", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ query: query })
      });
      const result = await response.json();
      setData(result.data.todos);
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <div>
            {item.id}:- {item.title}
          </div>
          {/* <div>
            <p>{item.created_at}</p>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default GetApi;
