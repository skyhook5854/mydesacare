import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { authAtom } from "src/recoil/auth";
import { useLogin } from "src/actions/auth";

export { RouteGuard };

function RouteGuard({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const auth = useRecoilValue(authAtom);

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);
    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, [auth?.data]);

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = [
      "/auth/login",
      "/auth/register",
      "/auth/verify",
      "/auth/forgot-password",
      "/auth/reset-password",
    ];
    const path = url.split("?")[0];

    if (!auth?.data?.accessToken && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: "/auth/login",
      });
    } else {
      setAuthorized(true);
    }
  }
  return authorized && children;
}
