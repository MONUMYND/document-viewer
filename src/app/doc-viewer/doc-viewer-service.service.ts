import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { UtilityService } from '../shared/utility.service';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DocViewerService {

  constructor(private _httpClient: HttpClient, private utilityService: UtilityService, public route: ActivatedRoute) { }

  getfileById(id: any, hashcode: any, successCallback?: Function | undefined, cancelCallback?: Function | undefined) {
    let token =''//this.utilityService.getToken();
    debugger
    let headers:any= { 'Authorization': token, 'Access-Control-Allow-Origin': '*'};
    if(hashcode!=null && hashcode!=undefined && hashcode!=''){
      hashcode= decodeURIComponent(hashcode)
      headers['XAuth']=hashcode;
    }
    
    return this._httpClient.get(environment?.docApi + '/doc/' + id, { headers: headers })
      .subscribe((data: any) => {
        if (data.data != undefined) {
          if (typeof (successCallback) === 'function') {
            const link = document.createElement('a');
            //const btn = document.createElement('button');
            var url = data.data.urls[0];
            link.href = url;
            //btn.addEventListener('click', this.closeTab);
            document.body.appendChild(link);
            successCallback(data.data); 
            //btn.click();
            link.click();
            document.body.removeChild(link);
            //document.body.removeChild(btn);
          }
        }
      }, (error: any) => {
        if (typeof (cancelCallback) === 'function') {
          cancelCallback();
        }
      }
      );
  }
  closeTab() {
    window.close();
  }
}

