export class TextureUtils {
    private static textureNames: string[] = ["", "2", "4", "8", "16", "32", "64", "128", "256", "512", "1k", "2k", "4k", "8k", "16k", "32k", "64k", "128k", "256k", "512k", "1m", "2m", "4m", "8m", "16m", "32m"];

    public static textureNameByPowerOfTwo(powerOfTwo: number): string {
        if (powerOfTwo == -1) {
            return "bomb";
        }
        return TextureUtils.textureNames[powerOfTwo];
    }
}
