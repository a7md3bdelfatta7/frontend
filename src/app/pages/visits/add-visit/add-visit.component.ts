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
  fileToUpload: File = null;


  constructor(private service: SmartTableService, private http: Http) {

  }

  addVisit() {
    console.log(this.visit);
  }


  onChange(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
    this.postFile(this.fileToUpload);
  }

  postFile(fileToUpload: File) {

    const headers = new Headers();
    headers.append('Accept', 'application/json');

    const endpoint = 'http://localhost/gem/';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http
      .post(endpoint, formData, { headers: headers })
      .map(() => { return true; })
      .subscribe(
      data => console.log('success'),
      error => console.log(error)
      );
}


}
