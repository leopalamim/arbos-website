import { LoginMutation } from "@app/data/graphql";
import { Routes } from "@app/modules/app/routes";
import { destroyCookie, setCookie } from "nookies";

type HandleCookiesOperationType = "set" | "destroy";

type SetCookiesVariables = LoginMutation;

const COOKIES_AGE = 30 * 24 * 60 * 60;

export const handleCookies = (operation: HandleCookiesOperationType, variables?: SetCookiesVariables) => {
  if (operation === "set") {
    setCookie(null, "jwt", variables.login.jwt, {
      maxAge: COOKIES_AGE,
      path: Routes.Home,
    });
    setCookie(null, "role", variables.login.user.role.name, {
      maxAge: COOKIES_AGE,
      path: Routes.Home,
    });
    setCookie(null, "username", variables.login.user.username, {
      maxAge: COOKIES_AGE,
      path: Routes.Home,
    });
    setCookie(null, "id", variables.login.user.id, {
      maxAge: COOKIES_AGE,
      path: Routes.Home,
    });
  }

  if (operation === "destroy") {
    destroyCookie(null, "jwt", {
      path: Routes.Home,
    });
    destroyCookie(null, "role", {
      path: Routes.Home,
    });
    destroyCookie(null, "username", {
      path: Routes.Home,
    });
    destroyCookie(null, "id", {
      path: Routes.Home,
    });
  }
};
