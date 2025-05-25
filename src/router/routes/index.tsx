import { LoginRoute, PageNotFound } from './basic'
import { about } from './about'
// import { dashboard } from './dashboard'
// import { others } from './others'
// import { errors } from './errors'
// const ProtectedRoute = [dashboard, about, others, errors]

export const basicRoutes = [LoginRoute, PageNotFound, about]
