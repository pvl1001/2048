import {MockData} from "shared/api/mock_data/MockData";
import {ConfigAdapter} from "./adapter";
import {GlobalConfig} from "../types";


export class ApiConfig {
    /** Получить конфиги */
    static async getMetaConfig(): Promise<GlobalConfig> {
        // let res: AxiosResponse<GlobalConfigResponse> = await request.get('config/get_meta_config');
        const res = MockData.metaConfig as any;
        return ConfigAdapter.getGlobalConfig(res.data);
    }
}