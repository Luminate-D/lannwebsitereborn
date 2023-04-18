import { Container, interfaces } from 'inversify';
import { LoggerFactory } from './logger/logger';

import { App } from './app';
import { WebService } from './services/web';

export class Kernel {
    private logger = LoggerFactory.createLogger('Kernel');
    public static Instance = new Kernel();

    private container: interfaces.Container;
    private constructor() {
        this.container = new Container();
        this.container.bind(App).to(App).inSingletonScope();
        this.container.bind(WebService).to(WebService).inSingletonScope();

        this.logger.info('Kernel container services bound');
    }

    public static getService<T>(service: any): T {
        return Kernel.Instance.getService<T>(service);
    }

    public getService<T>(service: any): T {
        return Kernel.Instance.container.get<T>(service);
    }
}