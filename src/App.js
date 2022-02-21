import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="app" component={DashBoardLayout}>
          <Route path="home" component={Home} />
          <Route path="add" component={Add} />
        </Route>
        {/* <Route path="user" component={UserLayout}>
          <Route path="login" component={Login} />
          <Route path="register" component={Register} />
        </Route> */}
      </Routes>
    </Router>
  );
}
