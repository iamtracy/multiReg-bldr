import { Component, OnInit } from '@angular/core';

import { MultiReg } from './../multi-reg.model';
import { ContentService } from './../content.service';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.css']
})
export class DynamicContentComponent implements OnInit {
  multiReg: MultiReg;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.multiReg = this.contentService.getMultiReg();
  }

}
