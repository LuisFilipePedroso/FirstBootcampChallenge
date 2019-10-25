import * as Yup from 'yup'
import Project from '../models/Project'

class TasksController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }

    let { _id, title, tasks } = await Project.findById(req.params.id)
    tasks = [...tasks, req.body.title]

    const project = {
      _id,
      title,
      tasks,
    }

    await Project.findOneAndUpdate(req.params.id, project)
    return res.json(project)
  }
}

export default new TasksController()
