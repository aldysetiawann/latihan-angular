import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contentdetail',
  standalone: true,
  imports: [],
  templateUrl: './contentdetail.component.html',
  styleUrl: './contentdetail.component.css'
})
export class ContentdetailComponent implements OnInit {
  slug: string=""
  constructor(
    private route: ActivatedRoute){}
  ngOnInit(): void {
    this.slug=this.route.snapshot.paramMap.get("slug") || "" 
  }
}
