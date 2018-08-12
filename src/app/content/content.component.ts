import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Observable } from "rxjs";
import { UploadFileService } from '../_services/fileUpload.service';
import { HttpResponse } from "@angular/common/http";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [UploadFileService]

})
export class ContentComponent implements OnInit {
  public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
    'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
    'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
    'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
    'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
    'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
    'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];
  ckeditorContent: string = '<p>Some html</p>';
  private value:any = ['Athens'];
  private values: any = [];
  private _disabledV:string = '0';
  private disabled:boolean = false;
  imageChangedEvent: any = '';
croppedImage: any = '';

fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(image: string) {
    this.croppedImage = image;
    console.log(image);
}
imageLoaded() {
    // show cropper
}
loadImageFailed() {
    // show message
}
   selectedFiles: FileList;
   currentFileUpload: File;

    constructor(private uploadService: UploadFileService) {}
    selectFile(event) {
      this.selectedFiles = event.target.files;
    }
    upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
     if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFiles = undefined;
  }

  private get disabledV():string {
    return this._disabledV;
  }
 
  private set disabledV(values:string) {
    this._disabledV = values;
    this.disabled = this._disabledV === '1';
  }
 
  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }
 
  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }
  public typed(value:any):void {
    console.log('New search input: ', value);
  }
  public refreshValue(value:any):void {
    this.value = value;
  }
  public itemsToString(value:Array<any> = []):string {
    return value
      .map((item:any) => {
        return item.text;
      }).join(',');
  }
  ngOnInit(): void {
    
  }
}
