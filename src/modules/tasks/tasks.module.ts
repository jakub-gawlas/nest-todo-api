import { Module, NestModule } from '@nestjs/common';
import { YaasModule } from '../yaas/yaas.module';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repository';

@Module({
  modules: [ YaasModule ],
  controllers: [ TasksController ],
  components: [ TasksService, TasksRepository ],
})
export class TasksModule implements NestModule {}
