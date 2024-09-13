export type {GlobalConfig, PaymentCurrency} from './types';
export {OfferId} from './types';

export {globalConfigReducer} from './model/GlobalConfigSlice';
export {GlobalConfigSelectors} from './model/GlobalConfigSelectors';
export {thunkGetGlobalConfig} from './model/GlobalConfigThunks';
