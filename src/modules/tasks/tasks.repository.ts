import { Component } from '@nestjs/common';
import { DocumentService } from '../yaas/document.service';
import { Task } from './tasks.model';

@Component()
export class TasksRepository {

  private COLLECTION_NAME = 'todoTasks'

  constructor(
    private documentService: DocumentService,
  ){}

  async getAll(){
    const res = await this.documentService.getAll(this.COLLECTION_NAME);
    const tasks = res.map(({ id, description }) => new Task(id, description));
    return tasks;
  }

  async getById(taskId: string){
    const { id, description } = await this.documentService.getById(this.COLLECTION_NAME, taskId);
    const task = new Task(id, description);
    return task;
  }

  async create(description: string){
    const { id } = await this.documentService.create(this.COLLECTION_NAME, { description });
    return new Task(id, description);
  }
}
