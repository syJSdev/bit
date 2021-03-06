import chalk from 'chalk';
import Command from '../../command';
import { CFG_USER_TOKEN_KEY } from '../../../constants';
import * as scopeConfig from '../../../api/consumer/lib/global-config';

export default class Logout extends Command {
  name = 'logout';
  description = 'log the CLI out of Bit';
  alias = '';
  opts = [];

  action(): Promise<any> {
    scopeConfig.delSync(CFG_USER_TOKEN_KEY);
    return Promise.resolve();
  }

  report(): string {
    return chalk.green('logged out successfully.');
  }
}
