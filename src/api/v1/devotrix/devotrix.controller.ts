import { Controller } from '@nestjs/common';
import { DevotrixService } from './devotrix.service';
import {ApiHeader, ApiOperation,} from '@nestjs/swagger';
import {    
    Body,
    Post,
  } from '@nestjs/common';
import { DevotrixDTO } from './dto/devotrix.dto';

@Controller('/devotrix')
export class DevotrixController {
    constructor(
        private readonly service: DevotrixService,
    ) {}
    @ApiOperation({
        description: '...',
        summary: 'Create a Known User Wallet contract',
      })
      @Post('sum')
      @ApiHeader({
        name: 'Authorization',
      })
      async createWallet(@Body() dto: DevotrixDTO) {      
        return await this.service.queueCreateWallet(dto);
      }
}


