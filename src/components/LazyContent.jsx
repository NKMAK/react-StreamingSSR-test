import { use } from "react";

const LazyContent = () => {
  use(new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  }));

  return (
    <div>
      <h1>Lazy Content</h1>
    </div>
  );
}

export default LazyContent;
