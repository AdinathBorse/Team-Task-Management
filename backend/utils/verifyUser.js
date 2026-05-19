import { errorHandler } from "./error.js"
import jwt from "jsonwebtoken"

const getTokenFromRequest = (req) => {
  const authHeader = req.headers.authorization || ""
  const bearerToken = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : null

  return bearerToken || req.cookies?.access_token || null
}

export const verifyToken = (req, res, next) => {
  const token = getTokenFromRequest(req)

  if (!token) {
    return next(errorHandler(401, "Unauthorized"))
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(errorHandler(401, "Unauthorized"))
    }

    req.user = decoded
    next()
  })
}

export const authorizeRoles = (...roles) => (req, res, next) => {
  if (!req.user) {
    return next(errorHandler(401, "Unauthorized"))
  }

  if (!roles.includes(req.user.role)) {
    return next(errorHandler(403, "Access Denied"))
  }

  next()
}

export const adminOnly = authorizeRoles("admin")
