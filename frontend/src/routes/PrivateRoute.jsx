import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"

const PrivateRoute = ({ allowedRoles }) => {
  const { currentUser } = useSelector((state) => state.user)
  const location = useLocation()

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (!allowedRoles.includes(currentUser.role)) {
    return <Navigate to={currentUser.role === "admin" ? "/admin/dashboard" : "/user/dashboard"} replace />
  }

  return <Outlet />
}

export default PrivateRoute
