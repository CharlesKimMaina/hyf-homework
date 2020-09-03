import React, { useState } from "react";
import Users from "./Users";
import Search from "./Search";
import { UserContext } from "../UserContext";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const UserRouter = () => {
  const [userId, setUserId] = useState(null || "");
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={path}>
        <UserContext.Provider value={{ userId: userId }}>
          <Search setUserId={setUserId} />
          <Users />
        </UserContext.Provider>
      </Route>
    </Switch>
  );
};
export default UserRouter;
