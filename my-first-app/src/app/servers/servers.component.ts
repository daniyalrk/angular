import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowServer : Boolean= false;
  serverCreationStatus:String="Server is not created yet !";
  serverName: String = '';
  constructor() {
    setTimeout(()=>{
      this.allowServer=true;
    },2000);
  }

  ngOnInit(): void {
  }

  onServerCreation(){
    this.serverCreationStatus="server has been created and Name is "+this.serverName;
  }

  onUpdateServerName(event: Event){
  //console.log(event);
  this.serverName = (<HTMLInputElement>event.target).value;
  }

}
