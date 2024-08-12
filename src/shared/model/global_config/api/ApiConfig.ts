import {MockData} from "shared/api/mock_data/MockData";
import {GlobalConfig} from "../types";
import {ConfigAdapter} from "./adapter";


export class ApiConfig {
    /** Получить конфиги */
    static async getMetaConfig(): Promise<GlobalConfig> {
        // let res: AxiosResponse<GlobalConfigResponse> = await request.get('config/get_meta_config');
        let res = MockData.metaConfig as any;
        return ConfigAdapter.getGlobalConfig(res.data);
    }
}