
import { Component, ElementRef, ViewChild } from '@angular/core';
import datainfo from 'src/assets/data.json';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';

interface Newdata {
  momId: string;
  title: string;
  venue: string;
  meetingDate: string;
  chairPerson: string;
  mode: string;
  keywords: string;

  momAttendeesResponse: {
    attendeesId: string;
    name: string;
    designation: string;
    organization: string;
    email: string;
    type: string;
  }[];

  momActionResponse: {
    title: string;
    momId: string | null;
    actionId: string;
    decissionPoint: string;
    actionPoint: string;
    status: string;
  }[];

  editedBy: string;
  editTime: string;
  remarks: string;
  status: string;
  linkedMOM: string;
  pdfFile: string;
  momEditHistoryResponse: {
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
  OrigData: Newdata[] = datainfo;
  title = 'html-to-pdf-angular-application';

  
  convetToPDF() {
    const data = document.getElementById('contentToConvert') as HTMLElement;
    html2canvas(data,{}).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      var imgWidth = 210;
      var imgHeight = canvas.height * imgWidth / canvas.width;   
      const pdf = new jsPDF('p', 'mm', 'a4'); 
      pdf.addImage(imgData, 'PNG', 1, 1, imgWidth, imgHeight)
      pdf.save('new-file.pdf'); 
    });
  }
}