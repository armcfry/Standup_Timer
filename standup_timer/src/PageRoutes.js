import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Meeting from "./pages/Meeting";

export default class PageRoutes extends Component {
    render() {
        return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}/>
                <Route index element={<Home />} />
                <Route path="meeting" element={<Meeting />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
        )
    }
}