import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaunchService } from 'src/app/services/launch.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
  host: { '[class]': 'contentClass' }
})
export class ProgramComponent implements OnInit {
  contentClass: string = 'content-section';
  query: any = {
    limit: 10,
    launch_landing: true,
    land_success: true,
    launch_year: 2014
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private launchService: LaunchService
  ) { 
  }

  ngOnInit(): void {
  }

}
