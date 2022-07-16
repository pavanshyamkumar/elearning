import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProfessorComponent } from '../add-professor/add-professor.component';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private dia:MatDialog) { }

  ngOnInit(): void {
  }

  open()
  {
    this.dia.open(AddProfessorComponent);
  }

}
