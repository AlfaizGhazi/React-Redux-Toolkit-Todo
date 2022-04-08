import * as React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  CounterPage,
  TodoPage,
  ApiTesting,
  Workout,
} from "../Screens";

const RoutesManager = (props) => {
  const { isDarkMode } = props;
  const routesList = [
    {
      routeName: "HomePageDefault",
      path: "/",
      element: <HomePage isDarkMode={isDarkMode} />,
    },
    {
      routeName: "HomePage",
      path: "home",
      element: <HomePage isDarkMode={isDarkMode} />,
    },
    {
      routeName: "CounterPage",
      path: "counter",
      element: <CounterPage isDarkMode={isDarkMode} />,
    },
    {
      routeName: "TodoPage",
      path: "todo",
      element: <TodoPage isDarkMode={isDarkMode} />,
    },
    {
      routeName: "ApiTestingPage",
      path: "apitesting",
      element: <ApiTesting isDarkMode={isDarkMode} />,
    },
    {
      routeName: "WorkoutPage",
      path: "workout",
      element: <Workout isDarkMode={isDarkMode} />,
    },
  ];
  return (
    <Routes>
      {/* <Route exact path={"/"} element={<HomePage isDarkMode={isDarkMode} />} />
      <Route
        exact
        path={"home"}
        element={<HomePage isDarkMode={isDarkMode} />}
      />
      <Route
        exact
        path={"counter"}
        element={<CounterPage isDarkMode={isDarkMode} />}
      />
      <Route
        exact
        path={"todo"}
        element={<TodoPage isDarkMode={isDarkMode} />}
      />
      <Route
        exact
        path={"apitesting"}
        element={<ApiTesting isDarkMode={isDarkMode} />}
      /> */}

      {routesList.map((item) => {
        return (
          <Route
            exact
            path={item.path}
            element={item.element}
            key={item.routeName}
          />
        );
      })}
    </Routes>
  );
};

export default RoutesManager;
