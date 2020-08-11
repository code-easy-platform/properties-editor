
export class LocalStorageService {
    static getInputsWidth(): number {
        const width = localStorage.getItem('INPUTS_WIDTH');
        if (width) {
            return Number(width);
        } else {
            return 60;
        }
    }
    static setInputsWidth(newWidth: number): number {
        localStorage.setItem('INPUTS_WIDTH', String(newWidth))
        return newWidth;
    }
}
