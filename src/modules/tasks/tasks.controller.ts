import { Response } from '@types/express';
import { 
  Controller,
  Get,
  Post,
  Res,
  Param,
  Body,
  HttpStatus,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(
    private tasksService: TasksService,
  ){}

  @Get()
  async getAllTasks(
    @Res() res: Response,
  ){
   const tasks = await this.tasksService.getAll();
   res.status(HttpStatus.OK).json(tasks);
  }

  @Get('/:id')
  async getTaskById(
    @Res() res: Response,
    @Param('id') id: string,
  ){
    const task = await this.tasksService.getById(id);
    res.status(HttpStatus.OK).json(task);
  }

  @Post()
  async createTask(
    @Res() res: Response,
    @Body('description') description: string,
  ){
    const task = await this.tasksService.create(description);
    res.status(HttpStatus.CREATED).json(task);
  }
}
