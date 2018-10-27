import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';


@Pipe({
  name: 'imgPipe'
})
export class ImgPipe implements PipeTransform {

  transform(img: string, type:String = 'users'): any {

    let url = `${URL_SERVICES}/images/`;

    if (!img) {
      /// Redirection to no image path
     return url += `/x/x`;
    }

    if (img.indexOf("https") >= 0) {
      return img;
    }

    if(img.indexOf('base64')>=0){

      return img
    }

    switch(type){
      case 'users': url+=`users/${img}`;
      break;
      case 'hospitals': url+=`hospitals/${img}`;
      break;
      case 'doctors': url+=`doctors/${img}`;
      break;
      default:  url+=`x/x`;
    }

    return url;
  }
}


