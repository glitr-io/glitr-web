import React from "react";
const Button = React.lazy(() => import("glitr-ui/Button"));

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>App 1</h2>
    <React.Suspense fallback="Loading Button">
      <Button />
    </React.Suspense>
  </div>
);

export default App;