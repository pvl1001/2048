export class NumberUtils {
    public static priceFormat(price: number) {
        const formatter = Intl.NumberFormat("en", {notation: "compact", minimumFractionDigits: 0, maximumFractionDigits: 1});
        return formatter.format(price);
    }

    public static longPriceFormat(price: number) {
        return new Intl.NumberFormat().format(price).replace(",", ".");
    }

    public static scoreFormat(score: number) {
        return score.toLocaleString().replace(",", " ");
    }
}
