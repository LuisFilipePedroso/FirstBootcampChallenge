import * as Yup from 'yup'
import Project from '../models/Project'

class ProjectController {
  async index(req, res) {
    const projects = await Project.find()
    return res.json(projects)
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }

    const project = await Project.create(req.body)
    return res.json(project)
  }

  async update(req, res) {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body)
    return res.json(project)
  }

  async delete(req, res) {
    await Project.findByIdAndRemove(req.params.id)
    return res.json({ msg: 'Project was deleted' })
  }
}

export default new ProjectController()
