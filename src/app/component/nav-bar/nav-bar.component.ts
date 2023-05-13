import {Component, OnInit} from '@angular/core';
import {faMagnifyingGlass, faUser, faBasketShopping, faEllipsisVertical,faChevronDown, faBars} from "@fortawesome/free-solid-svg-icons";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {distinctUntilChanged, tap} from "rxjs";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  Breakpoints = Breakpoints;
  currentBreakpoint: string = '';
  public LocalBreakpoints = {
    XSmall: "XSmall",
    Small: "Small",
    Medium: "Medium",
    Large: "Large",
    XLarge: "XLarge",
    Handset: "Handset",
    Tablet: "Tablet",
    Web: "Web",
    HandsetPortrait: "HandsetPortrait",
    TabletPortrait: "TabletPortrait",
    WebPortrait: "WebPortrait",
    HandsetLandscape: "HandsetLandscape",
    TabletLandscape: "TabletLandscape",
    WebLandscape: "WebLandscape"
  };
  public FORM_NAME = {
    SEARCH: "search",
    SEARCH_BUTTON: "searchButton"
  }
  // fontawesome
  public magnifyingGlass = faMagnifyingGlass;
  public user = faUser;
  public basketShopping = faBasketShopping
  public ellipseVertical = faEllipsisVertical;
  public chevronDown=faChevronDown;
  public menuBar=faBars;
  public searchGroup: FormGroup = this.fb.group({
    [this.FORM_NAME.SEARCH]: [null, Validators.required],
  });
  readonly breakpoint$ = this.breakpointObserver.observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, '(min-width: 500px)'])
    .pipe(
      tap(value => console.log(value)),
      distinctUntilChanged()
    )

  constructor(private fb: FormBuilder, private breakpointObserver: BreakpointObserver) {

  }

  ngOnInit(): void {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );
  }

  private breakpointChanged() {
    if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
      this.currentBreakpoint = "large";
    } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.currentBreakpoint = "medium";
    } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
      this.currentBreakpoint = "small";
    } else if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
      this.currentBreakpoint = 'x-small';
    } else if (this.breakpointObserver.isMatched(Breakpoints.XLarge)) {
      this.currentBreakpoint = 'x-large';
    }

  }

}
