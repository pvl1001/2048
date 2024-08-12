import video3 from "shared/assets/video/bonuscubes.webm";
import video4 from "shared/assets/video/deadline.webm";
import video5 from "shared/assets/video/points.webm";
import video1 from "shared/assets/video/Tutorial1.webm";
import video2 from "shared/assets/video/Tutorial2.webm";
import {HowToPlaySlide} from "../types";


export const slides: HowToPlaySlide[] = [
    {
        headTitle: 'Control',
        title: 'Move and drop',
        description: 'Drag the cube to aim. Release to throw!',
        video: video1,
    },
    {
        headTitle: 'Merge',
        title: 'Merge the cubes!',
        description: 'Drag the cube to aim. Release to throw!',
        video: video2,
    },
    {
        headTitle: 'Bonus cubes',
        title: 'Use the bomb!',
        description: 'Merge equal cubes and earn points!',
        video: video3,
    },
    {
        headTitle: 'The corridor is full',
        title: 'Line overflow',
        description: 'The play field has its limits.',
        video: video4,
    },
    {
        headTitle: 'Points',
        title: 'Earn points and win!',
        description: 'Merging cubes gives you the points. The player with the highest points becomes the winner.',
        video: video5,
    },
];
