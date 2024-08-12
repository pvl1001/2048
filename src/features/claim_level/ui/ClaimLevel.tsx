import {select, useAppSelector} from "app/store";
import {useGetCurrency, UseGetCurrency} from "shared/lib/hooks";
import {Button} from "shared/ui/button";


export function ClaimLevel() {
    let {getLevelClaim}: UseGetCurrency = useGetCurrency();
    let levelRewards: number[] = useAppSelector(select.profile._levelRewards);
    let isPending: boolean = useAppSelector(select.profile._isPending);

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
