import { Injectable } from '@angular/core';
import { MultiReg } from './multi-reg.model';

@Injectable()
export class ContentService {
  
  private multiReg: MultiReg = new MultiReg(
    'Event Summit Series',
    'https://content.inxpo.com/FileLibrary/2010/15/Open-Webcast-Series-980x150.jpg', 
    'For the last three decades, Bentley’s OpenRoads products have provided global transportation agencies and firms the tools they need to design, engineer, and construct higher quality and predictable road and highway projects. Join the webinar series to learn how OpenRoads Designer enables the project delivery of road networks through construction-driven engineering and delivers all the information needed to support operational workflows.'
  );
  
  getMultiReg() {
    return this.multiReg;
  }

}
