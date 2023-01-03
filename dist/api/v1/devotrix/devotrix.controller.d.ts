import { DevotrixService } from './devotrix.service';
import { DevotrixDTO } from './dto/devotrix.dto';
export declare class DevotrixController {
    private readonly service;
    constructor(service: DevotrixService);
    createWallet(dto: DevotrixDTO): Promise<{
        sum: number;
    }>;
}
