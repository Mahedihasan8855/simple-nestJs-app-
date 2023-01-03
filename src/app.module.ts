import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MytestController } from './api/v1/mytest/mytest.controller';
import { DevotrixController } from './api/v1/devotrix/devotrix.controller';
import { MytestService } from './api/v1/mytest/mytest.service';
import { DevotrixService } from './api/v1/devotrix/devotrix.service';

@Module({
  imports: [
  ],
  controllers: [AppController, MytestController, DevotrixController],
  providers: [AppService, MytestService, DevotrixService],
})
export class AppModule { }