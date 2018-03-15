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
  filesToUpload: Array<File> = [];


  constructor(private service: SmartTableService, private http: Http) {

  }

  addVisit() {
    this.postFile();
  }


  onChange(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  postFile() {

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    const endpoint = 'http://localhost/gem/';
    
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    for(let i =0; i < files.length; i++){
      formData.append("uploads[]", files[i], files[i]['name']);
    }

    formData.append("visit",JSON.stringify(this.visit));
    formData.append("purpose","add_visit");
    
    return this.http
      .post(endpoint, formData, { headers: headers })
      .map(() => { return true; })
      .subscribe(
      data => console.log('success'),
      error => console.log(error)
      );
}


}
