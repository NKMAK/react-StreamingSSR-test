import { Suspense } from "react";
import LazyContent from "./components/LazyContent";
// const LazyContent = lazy(() => import('./components/LazyContent.jsx'));
import LoadingFallback from "./components/LoadingFallback.jsx";

export default function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My app</title>
      </head>
      <body>
        <Router />
        <Suspense fallback={<LoadingFallback />}>
          <LazyContent />
        </Suspense>
      </body>
    </html>
  );
}

function Router() {
  return (
    <h1>Routerだよ</h1>
  )
}
