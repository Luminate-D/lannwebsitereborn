import { injectable } from 'inversify';
import { LoggerFactory } from './logger/logger';
import { WebService } from './services/web';
import { Kernel } from './kernel';

@injectable()
export class App {
    private readonly logger = LoggerFactory.createLogger('App');

    private web: WebService;
    public constructor() {
        this.web = Kernel.getService(WebService);
    }

    public async start(): Promise<void> {
        await this.web.start();
        this.logger.info('Ready!');
    }
}
