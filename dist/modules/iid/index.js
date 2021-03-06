/**
 * 
 * Instance ID representation wrapper
 */
import ModuleBase from '../../utils/ModuleBase';
import { getNativeModule } from '../../utils/native';

export const MODULE_NAME = 'RNFirebaseInstanceId';
export const NAMESPACE = 'iid';

export default class InstanceId extends ModuleBase {
  constructor(app) {
    super(app, {
      hasShards: false,
      moduleName: MODULE_NAME,
      multiApp: false,
      namespace: NAMESPACE
    });
  }

  delete() {
    return getNativeModule(this).delete();
  }

  get() {
    return getNativeModule(this).get();
  }

  getToken(authorizedEntity, scope) {
    return getNativeModule(this).getToken(authorizedEntity, scope);
  }

  deleteToken(authorizedEntity, scope) {
    return getNativeModule(this).deleteToken(authorizedEntity, scope);
  }
}

export const statics = {};