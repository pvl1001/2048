import block_cube from "shared/assets/icons/block_cube.png";
import frozen_cube from "shared/assets/icons/frozen_cube.png";
import happy_cube from "shared/assets/icons/happy_cube.png";


export enum Warnings {
    FROZEN = 'frozen',
    UNFROZEN = 'unfrozen',
    REGION = 'region',
}

export const data: Record<Warnings, {image: string, text: string}> = {
    frozen: {image: frozen_cube, text: 'Your account has been frozen, please'},
    unfrozen: {image: happy_cube, text: 'Your funds have been unfrozen, you can continue to withdraw them'},
    region: {image: block_cube, text: 'Registration is not available in your jurisdiction'},
};