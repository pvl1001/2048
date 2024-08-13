import {select, useAppSelector} from "app/store";
import {useGetCurrency, UseGetCurrency} from "shared/lib/hooks";
import {Button} from "shared/ui/button";


export function ClaimLevel() {
    const {getLevelClaim}: UseGetCurrency = useGetCurrency();
    const levelRewards: number[] = useAppSelector(select.profile._levelRewards);
    const isPending: boolean = useAppSelector(select.profile._isPending);

    return (
        <Button
            onClick={getLevelClaim}
            disabled={!levelRewards.length}
            isPending={isPending}
        >
            Claim
        </Button>
    );
}
