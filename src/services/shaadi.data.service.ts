import HttpService from './http.service';
export default class OCCDataService {
    private static _instance: OCCDataService;
    constructor() { }
    public static get Instance() {
        return this._instance || (this._instance = new this());
    }
    validateUserDetails(requestJson: any) {
        let serviceName = 'LoginService';
        let requestData: any = { requestMapping: 'shaadiLaunch' };
        Object.assign(requestData, requestData, requestJson);
        return HttpService.Instance.callServiceGET(serviceName, requestData);
    }
}
