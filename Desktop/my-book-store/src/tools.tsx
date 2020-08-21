import React from "react";
import { Route, Redirect } from "react-router-dom";

//@ts-ignore
export function AuthenticatedRoute({ component: C, appProps, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props: any) =>
        appProps.isAuthenticated ? (
          <C {...props} {...appProps} />
        ) : (
          <Redirect
            to={`/login?redirect=${props.location.pathname}${props.location.search}`}
          />
        )
      }
    />
  );
}