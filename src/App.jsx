import { Suspense, lazy } from "react";

const LazyContent = lazy(() => import('./components/LazyContent'));
const Counter = lazy(()=> import('./components/Counter'));

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
        <Suspense fallback={<div>Loading...</div>}>
          <LazyContent />
        </Suspense>
        <Suspense fallback={<div>CounterLoading...</div>}>
          <Counter />
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
