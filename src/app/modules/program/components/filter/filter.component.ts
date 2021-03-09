import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaunchService } from 'src/app/services/launch.service';
import { Launch } from '../../classes/program';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  years: any = [];
  showLoader: boolean = true;
  query: any = {
    limit: 100,
    launch_landing: true,
    land_success: true,
    launch_year: 2006
  };
  constructor(
    private launchService: LaunchService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.launchService.getLaunch()
    .subscribe
    (
      data=>
      {
        this.years = data;
        this.years = this.years.map( (a: any) => a.launch_year).filter((el: any, i: any, a: any) => i === a.indexOf(el));
        this.router.navigate(['/launches'],{ relativeTo: this.activatedRoute, queryParams: { limit: this.query.limit, launch_year: this.query.launch_year }});
        this.showLoader = false;
      }
    )
  }
  loadData(e: any): void {
    this.router.navigate(['/launches'],{ relativeTo: this.activatedRoute, queryParams: { limit: this.query.limit, launch_year: e }, queryParamsHandling: 'merge' });
  }
  launchData(): void {
    this.router.navigate(['/launches'],{ relativeTo: this.activatedRoute, queryParams: { launch_landing: this.query.launch_landing}, queryParamsHandling: 'merge' });
  }
  landingData(): void {
    this.router.navigate(['/launches'],{ relativeTo: this.activatedRoute, queryParams: { land_success: this.query.land_success}, queryParamsHandling: 'merge' });
  }
}
