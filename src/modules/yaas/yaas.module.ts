import { Module, NestModule } from '@nestjs/common';
import { YaasConfig } from './yaas.config';
import { AuthService } from './auth.service';
import { DocumentService } from './document.service';

@Module({
  components: [ YaasConfig, AuthService, DocumentService ],
  exports: [ DocumentService ],
})
export class YaasModule implements NestModule {}
