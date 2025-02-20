// import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

const LoadingFallback = () => {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // if (!isClient) {
  //   return <h1>Loadingだよ...</h1>;
  // }

  return (
    <div>
      <PacmanLoader
        loading={true}
        margin={2}
        size={20}
        speedMultiplier={1}
      />
    </div>
  );
}

export default LoadingFallback;
