import { useState } from "react";

function RequestTokens(params: { address: string, amount: number }) {
    const [data, setData] = useState<{ result: boolean }>();
    const [isLoading, setLoading] = useState(false);
  
    const body = { address: params.address, amount: params.amount };
  
    if (isLoading) return <p>Requesting 100 tokens...</p>;
    if (!data)
      return (
        <button
          className="btn btn-active btn-neutral"
          onClick={() => {
            setLoading(true);
            fetch("https://ballot-be.vercel.app/mint-tokens", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            })
              .then((res) => res.json())
              .then((data) => {
                setData(data);
                setLoading(false);
              });
          }}
        >
          Request tokens
        </button>
      );
  
    return (
      <div>
        <p>Result from API: {data.result ? "worked" : "failed"}</p>
      </div>
    );
}
export default RequestTokens;