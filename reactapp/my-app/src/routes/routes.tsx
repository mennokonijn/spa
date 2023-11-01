import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from "../users/users";
import TaskPage from "../tasks/taskPage";

const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/tasks" element={<TaskPage />} />
            </Routes>
        </Router>
    );
};

export default RoutesComponent;