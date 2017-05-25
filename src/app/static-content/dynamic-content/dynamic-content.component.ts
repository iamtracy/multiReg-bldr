import { Component, OnInit, DoCheck, Input } from '@angular/core';

import { MultiReg } from './../multi-reg.model';
import { ContentService } from './../content.service';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.css']
})
export class DynamicContentComponent implements OnInit, DoCheck {
  @Input() multiReg: MultiReg;
  @Input() formData;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.multiReg = this.contentService.getMultiReg();
  }

  ngDoCheck() {
    let data = this.formData.value;
    this.contentService.setMultiReg(data);
    this.multiReg = this.contentService.getMultiReg();
  }

}
