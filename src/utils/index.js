import store from 'store';

import { refreshWholeStore } from 'store/actions';
import Storage from './Storage';
import protector from './protector';

export { Storage };
export { protector };

export const logOut = () => {
  Storage.token = null;
  Storage.refreshToken = null;
  store.dispatch(refreshWholeStore());
};
