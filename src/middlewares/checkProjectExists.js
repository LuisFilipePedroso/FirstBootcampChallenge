import Project from '../models/Project'

export default async (req, res, next) => {
  const { id } = req.params

  const project = await Project.findById(id)

  if (!project) {
    return res.status(400).json({ error: 'Project does not exists' })
  }

  return next()
}
