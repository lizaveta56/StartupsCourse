import CrudController from './crud.controller';
import {send} from '../../helpers/sender.helper';

export default class UserController extends CrudController {
    constructor ({usersService, cacheService}) {
        super(usersService, cacheService);
        this.registerRoutes();
    }
};