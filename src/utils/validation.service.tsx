export default class ValidationService{
    constructor() {}
    public static isUndefinedOrNullOrEmpty(value: any): boolean {
    if (value === undefined || value === null || ( value. length !== undefined && value.length < 1 )) {
    return true;
    }
    return false;
}
}