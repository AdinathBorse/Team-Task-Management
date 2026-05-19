import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const AdminRoute = () => {
  const { currentUser } = useSelector((state) => state.user)

  if (!currentUser) {
    return <Navigate to="/login" replace />
  }

  if (currentUser.role !== "admin") {
    return <Navigate to="/user/dashboard" replace />
  }

  return <Outlet />
}

export default AdminRoute
