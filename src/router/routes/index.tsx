import { LoginRoute, PageNotFound, RootRoute } from './basic'
import { dashboard } from './dashboard'
import { about } from './about'
import { others } from './others'
import { errors } from './errors'

const ProtectedRoute = [dashboard, about, others, errors]

export const basicRoutes = [RootRoute, LoginRoute, PageNotFound, ...ProtectedRoute]
