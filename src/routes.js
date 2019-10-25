import express from 'express'

import ProjectController from './controllers/ProjectController'
import TasksController from './controllers/TasksController'

import checkProjectExists from './middlewares/checkProjectExists'

const routes = express.Router()

routes.get('/projects', ProjectController.index)

routes.post('/projects', ProjectController.store)

routes.put('/projects/:id', checkProjectExists, ProjectController.update)

routes.delete('/projects/:id', checkProjectExists, ProjectController.delete)

routes.post('/projects/:id/tasks', TasksController.store)

export default routes
