export default function randomColorGenerater(amount: number): string[] {
    const alphabetArr: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];

    const getRandomDecimal = (): string => {
        let randomNum: number = Math.floor(Math.random() * 16);

        return randomNum >= 10 ? alphabetArr[randomNum - 10] : randomNum.toString();
    }

    return new Array(amount).fill(0).map(() => '#' + new Array(20).fill(0).map(() => getRandomDecimal()).slice(0, 6).join(''));
}