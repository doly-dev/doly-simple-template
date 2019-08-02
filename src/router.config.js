// pages
import HomePage from "~/pages/home"
import AboutPage from "~/pages/about"
import ExceptionPage from "~/pages/exception"

export default [
  {
    path: "/",
    component: HomePage,
    exact: true
  },
  {
    path: "/about",
    component: AboutPage
  },
  {
    path: "/404",
    component: ExceptionPage
  }
]
