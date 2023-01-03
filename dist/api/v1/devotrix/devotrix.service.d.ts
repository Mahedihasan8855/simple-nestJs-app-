import { DevotrixDTO } from './dto/devotrix.dto';
export declare class DevotrixService {
    queueCreateWallet(dto: DevotrixDTO): Promise<{
        sum: number;
    }>;
}
