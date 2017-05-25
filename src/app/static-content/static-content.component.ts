import { ContentService } from './content.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-static-content',
  templateUrl: './static-content.component.html',
  styleUrls: ['./static-content.component.css']
})
export class StaticContentComponent implements OnInit {
  multiRegForm: FormGroup;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    const multiReg = this.contentService.getMultiReg();
    this.multiRegForm = new FormGroup({
      'bannerImg': new FormControl(multiReg.bannerImg),
      'title': new FormControl(multiReg.title),
      'abstract': new FormControl(multiReg.abstract),
    });
  }

}
