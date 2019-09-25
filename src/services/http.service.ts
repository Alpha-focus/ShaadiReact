import { ajax } from 'rxjs/ajax';
import { map} from 'rxjs/operators';

export default class HttpService {
    public headers: any;
    private static _instance: HttpService;
    public serviceLoaderCount: number = 0;
    constructor() { }
    public static get Instance() {
        return this._instance || (this._instance = new this());
    }
    callServicePOST(action: string, requestData: any) {
        let serviceURL: string;
        serviceURL = "url"+action;
        let contentType = 'application/x-www-form-urlencoded';
        let headerOptions = { 'Content-Type': contentType };
        return ajax.post(serviceURL, requestData, headerOptions).pipe(map((res: any) => this.processRespData(res)))
    }
    callServicePOSTSync(action: string, requestData: any) {
        requestData.UAPAPPID = '';
        let serviceURL: string;
        let localversion: any = Math.floor(Math.random() * 99999);   
        serviceURL = action + "?ver=" + localversion ;
        let contentType = 'application/json';
        // let headerOptions = { 'Content-Type': contentType };
        let xhr = new XMLHttpRequest()
        xhr.open("POST", serviceURL, false);
        xhr.setRequestHeader("Content-Type", contentType);
        xhr.send(JSON.stringify(requestData));
    }
    processRespData(serviceResponse: any) {
        // let responseObj = serviceResponse.response;
        let validatedResp: any = { status: true, errorMessage: '', payload: {} };
        // let serResp: any = responseObj.serResp;
        validatedResp.status = false;
        validatedResp.errorMessage = serviceResponse;
        return validatedResp;
    }
}

