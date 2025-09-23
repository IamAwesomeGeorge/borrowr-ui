import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import BrLogo from "/Br.svg";
import Button from "@mui/material/Button";
import { TestService } from "./components/services/test.service";

function App() {
  const [count, setCount] = useState(0);

  const { data, status } = useQuery({
    queryKey: ["status"],
    queryFn: async () => {
      const res = await TestService.getStatus();
      console.log("res", res);
      return res;
    },
  });

  useEffect(() => {
    console.log("Status:", status);
    console.log("Data:", data);
  }, [status, data]);

  return (
    <>
      <div>
        <img src={BrLogo} className="logo" alt="Borrowr logo" />
      </div>
      <h1>Borrowr</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>Coming soon: A platform to borrow books!</p>
      </div>
      {status === "success" ? (
        <div>
          <p>
            API {data?.name} running {data?.status} on version {data?.version}
          </p>
        </div>
      ) : (
        <div>
          <p>Loading API status...</p>
        </div>
      )}
    </>
  );
}

export default App;
