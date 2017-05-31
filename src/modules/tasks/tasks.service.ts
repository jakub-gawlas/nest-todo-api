import { Component, HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { TasksRepository } from './tasks.repository';
import { Task } from './tasks.model';
import * as crypto from 'crypto';

const TYPE = 'todoTasks';

@Component()
export class TasksService {

  constructor(
    private tasksRepository: TasksRepository,
  ){}

  async getAll(){
    return await this.tasksRepository.getAll();
  }

  async getById(id: string){
    return await this.tasksRepository.getById(id);
  }

  async create(description: string){
    return await this.tasksRepository.create(description);
  }
}
