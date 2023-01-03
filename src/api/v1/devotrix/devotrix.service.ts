import { BadRequestException, Injectable } from '@nestjs/common';
import { DevotrixDTO } from './dto/devotrix.dto';

@Injectable()
export class DevotrixService {


    async queueCreateWallet(dto: DevotrixDTO) {
        if(dto.first<0 || dto.second<0){
            throw new BadRequestException("Be positive");
        }
        const sum = dto.first + dto.second;
        return {
            sum: sum,
          };
      }
}
