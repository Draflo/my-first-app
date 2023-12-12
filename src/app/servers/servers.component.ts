import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created !';
  serverName = 'Test server';
  serverCreated = false;
  servers = ['Server 1', 'Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus =
      'Server was created ! Name is ' + this.serverName;
  }
}
