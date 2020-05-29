// import { matchRoutes, renderRoutes } from "react-router-config";
import React from "react";
import {Redirect} from "react-router-dom"
import "antd/dist/antd.css";

const Index = React.lazy(() => import("@/view/index/index"));
const ArticleList = React.lazy(() => import("@/view/articleList/articleList"));
const Article = React.lazy(() => import("@/view/article/article"));
const ProjectList = React.lazy(() => import("@/view/project/project"));
const ProjectDetail = React.lazy(() => import("@/view/project/pages/index"));
const Archive = React.lazy(() => import("@/view/archive/index"));
const Test = React.lazy(() => import("@/_test_/test"));
const TimeLine = React.lazy(() => import("@/view/timeline/index"));
const NotFound = React.lazy(() => import("@/components/404/notFound"));

const About = React.lazy(()=>import("@/view/about/about"))
export default [
  {
    path: "/test",
    exact: true,
    component: Test
  },
  {
    path: "/NotFound",
    exact: true,
    component: NotFound,
    requiresAuth: false
  },
  {
    path: "/",
    component: Index,
    requiresAuth: false,

    routes: [
      {
        path: "/",
        exact: true,
        component: ArticleList,
        requiresAuth: false
      },
      {
        path: "/search/:search",
        exact: true,
        component: ArticleList,
        requiresAuth: false
      },
      {
        path: "/article/:id",
        exact: true,
        component: Article,
        requiresAuth: false
      },
      {
        path: "/archive",
        exact: true,
        component: Archive,
        requiresAuth: false
      },
      {
        path: "/timeline/:time",
        exact: true,

        component: TimeLine,
        requiresAuth: false
      },
      {
        path: "/project/:project_name",
        exact: true,

        component: ProjectDetail,
        requiresAuth: true
      },
      {
        path: "/project",
        exact: true,
        component: ProjectList,
        requiresAuth: true
      },
      {
        path: "/about",
        exact: true,
        component: About,
        requiresAuth: true
      },
      {
        path: "/*",
        component:  ()=><Redirect to="/NotFound" />,
        requiresAuth: false
      }
    ]
  },
  // {
  //   path:"/Edite",
  //   exact:true,
  //   component:Edite
  // },
  
];
