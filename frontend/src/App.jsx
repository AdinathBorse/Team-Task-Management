import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/SignUp"
import Dashboard from "./pages/admin/Dashboard"
import ManageTasks from "./pages/admin/ManageTasks"
import ManageUsers from "./pages/admin/ManageUsers"
import CreateTask from "./pages/admin/CreateTask"
import ProtectedRoute from "./routes/ProtectedRoute"
import AdminRoute from "./routes/AdminRoute"
import UserDashboard from "./pages/user/UserDashboard"
import TaskDetails from "./pages/user/TaskDetails"
import MyTasks from "./pages/user/MyTasks"
import { useSelector, useDispatch } from "react-redux"
import axiosInstance from "./utils/axioInstance"
import { signInSuccess, signInFailure } from "./redux/slice/userSlice"

import toast, { Toaster } from "react-hot-toast"

const App = () => {
  const dispatch = useDispatch()
  const { currentUser } = useSelector((state) => state.user)

  useEffect(() => {
    const restoreUserFromToken = async () => {
      const token = localStorage.getItem("authToken")

      if (!currentUser && token) {
        try {
          const response = await axiosInstance.get("/auth/user-profile")
          dispatch(signInSuccess({ user: response.data, token }))
        } catch (error) {
          localStorage.removeItem("authToken")
          dispatch(signInFailure("Session expired. Please login again."))
        }
      }
    }

    restoreUserFromToken()
  }, [currentUser, dispatch])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Admin Routes */}
          <Route element={<AdminRoute />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/tasks" element={<ManageTasks />} />
            <Route path="/admin/users" element={<ManageUsers />} />
            <Route path="/admin/create-task" element={<CreateTask />} />
          </Route>

          {/* User Routes */}
          <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/tasks" element={<MyTasks />} />
            <Route path="/user/task-details/:id" element={<TaskDetails />} />
          </Route>

          {/* Default Route */}
          <Route path="/" element={<Root />} />
        </Routes>
      </BrowserRouter>

      <Toaster />
    </div>
  )
}

export default App

const Root = () => {
  const { currentUser } = useSelector((state) => state.user)

  if (!currentUser) {
    return <Navigate to="/login" replace />
  }

  return currentUser.role === "admin" ? (
    <Navigate to="/admin/dashboard" replace />
  ) : (
    <Navigate to="/user/dashboard" replace />
  )
}
