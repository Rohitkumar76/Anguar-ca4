import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Ca4',
  templateUrl: './l-test.component.html',
  styleUrls: ['./l-test.component.css']
})
export class LTestComponent implements OnInit {
     
  changeV1(val: any) {
    console.log(val.value);
    }
    
    submit(frm: any)
    {
    alert('Form submitted');
    }
    
    constructor() { }
    
    ngOnInit(): void {
    }
    
    }
