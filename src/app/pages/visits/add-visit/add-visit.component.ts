import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Http, RequestOptions, RequestMethod, Headers } from '@angular/http';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './add-visit.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class AddVisitComponent {

  visit = { hallName: '', time: '', description: '' };
  file: File;


  constructor(private service: SmartTableService, private http: Http) {

  }

  addVisit() {
    console.log(this.visit);
  }

  onChange(event: EventTarget) {
    let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    let files: FileList = target.files;
    let fileToUpload = files[0];
    console.log(fileToUpload);
    let headers = new Headers();
    /** No need to include Content-Type in Angular 4 */
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    const endpoint = 'http://localhost/gem/';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http
      .get(endpoint, {params: {purpose: 'upload_file',fileKey:fileToUpload,fileName:fileToUpload.name}})
      .map(() => { return true; })
      .catch(error => Observable.throw(error))
      .subscribe(
        data => console.log('success'),
        error => console.log(error)
      );
  }


}
