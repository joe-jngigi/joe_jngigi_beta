export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    "/main",
    "/main/documentation",
    "/main/implementations",
    "/main/settings",

  ],
};