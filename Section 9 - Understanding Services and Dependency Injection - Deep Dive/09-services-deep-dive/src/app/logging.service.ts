import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  log(messsage: string) {
    const timeStamp = new Date().toLocaleTimeString();
    console.log(`[${timeStamp}]: ${messsage}`);
  }
}
