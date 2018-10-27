import { Injectable } from '@angular/core';
import { URL_SERVICES } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor() { }

  uploadFile(file:File,type:string,id:string,token:string){

    return new Promise((resolve,reject)=>{

       let formData = new FormData();

       let xhr = new XMLHttpRequest();

       formData.append("img", file, file.name);

       xhr.onreadystatechange = () => {
         if (xhr.readyState === 4) {
           if (xhr.status === 200) {
             console.log("IMG UPLOADED");
             resolve(JSON.parse(xhr.response))
           }
        else{console.log('IMG UPLOAD FAILED');
             reject(JSON.parse(xhr.response))}
         }
       };

       let url = `${URL_SERVICES}/upload/${type}/${id}?token=${token}`

       xhr.open('PUT',url,true);

       xhr.send(formData)
    })
    }
}
