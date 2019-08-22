import { tmpPath, storage } from './common';
import Todo from '../modules/todo';

const { app, assert } = require('midway-mock/bootstrap');

describe('Test adapter todo module', () => {
  let todo: any;

  before(async () => {
    const projectManager = app.projectManager;
    await projectManager.addProject(tmpPath);
    const project = await projectManager.setCurrent(tmpPath);

    todo = new Todo({ project, storage })
  });

  it('get todo list', async () => {
    const results = await todo.getList();
    assert(results.length === 0);
  });
})
