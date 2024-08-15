import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpServiceService } from '../shared/http-service.service';
import { DocViewerService } from '../doc-viewer/doc-viewer-service.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.css']
})
export class DocViewerComponent implements OnInit {
  docId!: any;
  hashcode!: any;
  isHaveHashCode!: boolean;
  queryParam:any;
  constructor(private router: Router, private httpService: HttpServiceService,public route: ActivatedRoute, private docViewerService: DocViewerService) {

  }

  ngOnInit(): void {
    this.isShowError = false;
    this.queryParam = this.route.snapshot.queryParams;
      this.docId = this.queryParam['p'];
      this.hashcode =this.queryParam['q'];

    if (this.hashcode != null && this.hashcode != undefined && this.hashcode != '') {
      this.isHaveHashCode = true;
    }
    if (this.docId != null && this.docId != undefined && this.docId != '') {
      setTimeout(() => {
        this.getDocument();
      }, 1000);
    }
  }
  isShowError: boolean = false;
  getDocument() {
    this.docViewerService.getfileById(this.docId, this.hashcode, (data: any) => {
      console.log('windows close');
       this.closeCurrentTab();
    }, () => {
      this.isShowError = true;
    })
  }
  closeCurrentTab(): void {
    this.router.navigate(['/']); 
  }

}
