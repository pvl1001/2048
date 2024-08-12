function sampleSize(str: string, length: number): string {
    let acc: string = '';
    for (let i: number = 0; i < length; i++) {
        let randomIndex: number = Math.floor(Math.random() * str.length);
        acc += str[randomIndex];
    }
    return acc;
}

function getGeneratedValue(length: number = 8): string {
    const charset: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_';
    return sampleSize(charset, length);
}

export default getGeneratedValue;