import { Component } from '@angular/core';
import datainfo from 'src/assets/data.json';

interface Newdata {
  momId: string;
  title: string;
  venue: string;
  meetingDate: string;
  chairPerson: string;
  mode: string;
  keywords: string;

  momAttendeesResponse:{
    attendeesId: string;
    name: string;
    designation:string;
    organization:string;
    email: string;
    type: string;
  }[];

  momActionResponse:{
    title: string;
    momId: string | null;
    actionId: string;
    decissionPoint: string;
    actionPoint: string;
    status: string;
  }[];

  editedBy:string;
  editTime:string;
  remarks:string;
  status:string;
  linkedMOM:string;
  pdfFile:string;
  momEditHistoryResponse:{
    momEditId: string;
    editedBy: string;
    editTime: string;
    remarks: string;
    status: string;
  }[];

}

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css']
})
export class TableDetailsComponent {

 OrigData:Newdata[]=datainfo;
}
