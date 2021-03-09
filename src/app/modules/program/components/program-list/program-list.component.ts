import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaunchService } from 'src/app/services/launch.service';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss'],
  host: { '[class]': 'programClass' }
})
export class ProgramListComponent implements OnInit {
  programClass: string = 'program-list';
  showLoader: boolean = true;
  programs :any;
  query: any = {
    limit: 100,
    launch_landing: true,
    land_success: true,
    launch_year: 2006
  };
  constructor(
    private launchService: LaunchService,
    private router: Router,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    //this.programs = [];
    this.showLoader = true;
    this.activatedRoute.queryParams.subscribe((params) => {
      this.programs=[];
      this.query.limit = params['limit'];
      this.query.launch_year= params['launch_year'];
      
      this.launchService.getLaunch().subscribe((data:any)=>{
        let array=data.filter((x: any)=>x.launch_year == this.query.launch_year);

        for (let index = 0; index < array.length; index++) {
          let element = array[index];
          this.programs.push(element);
        }
        this.showLoader = false;

      })
    });
     
  }
}
