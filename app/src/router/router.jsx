/**
 @name : router
 @date : 2022/4/20
 @description:
 */

import React, {Component} from "react";
import {Navigate} from "react-router-dom";
import Login from "../pages/login/Login";
import TodoList from "../pages/todoList/TodoList";
export default [
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/",
        element: <Navigate to={"/login"}/>
    }
];