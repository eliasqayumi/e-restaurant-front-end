import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit, AfterViewInit {
  @ViewChild('ihCarouselInner') ihCarouselInner!: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.onResize();
  }

  onResize() {
    setTimeout(() => {
      this.toggleCarouselBtns()
    }, 200)
  }

  number0fItems(num:any) {
    return new Array(num)
  }

  onCarouselArrowClick(direction: any) {
    let carouselOffsetWidth = this.ihCarouselInner.nativeElement.offsetWidth;
    // let carouselItemWidth = document.querySelector('.ih-carousel-inner').clientWidth;
    let carouselScrollWidth = this.ihCarouselInner.nativeElement.scrollWidth;
    // if (direction == 'left')
    //   this.ihCarouselInner.nativeElement.scrollTo({left: (this.ihCarouselInner.nativeElement.scrollLeft - carouselOffsetWidth + carouselItemWidth)});
    // else
    //   this.ihCarouselInner.nativeElement.scrollTo({left: (this.ihCarouselInner.nativeElement.scrollLeft + carouselOffsetWidth - carouselItemWidth)})
    // setTimeout(() => {
    //   this.toggleCarouselBtns();
    // }, 500)
  }

  toggleCarouselBtns() {
    let carouselScrollWidth = this.ihCarouselInner.nativeElement.scrollWidth;
    let carouselOffsetWidth = this.ihCarouselInner.nativeElement.offsetWidth;
    let scrollLeft = this.ihCarouselInner.nativeElement.scrollLeft;
    // let carouseNextBtn: HTMLElement = document.getElementById('ih-carousel-next-btn');
    // let carouselPrevBtn: HTMLElement = document.getElementById('ih-carousel-prev-btn')
    // if (scrollLeft > 5)
    //   carouselPrevBtn.classList.remove('d-none');
    // else
    //   carouselPrevBtn.classList.add('d-none');
    // if ((carouselOffsetWidth + scrollLeft + 15) >= carouselScrollWidth)
    //   carouseNextBtn.classList.add('d-none');
    // else
    //   carouseNextBtn.classList.remove('d-none');
  }

  onSwipe(swipe: any) {
//swipe-right = 4 & swipe-left = 2
    if (swipe.direction == 4) {
      this.ihCarouselInner.nativeElement.scrollTo({
        left: (this.ihCarouselInner.nativeElement.scrollLeft + (swipe.distance)),
        behavior: 'smooth'
      });
    }
    if (swipe.direction == 2) {
      this.ihCarouselInner.nativeElement.scrollTo({
        left: (this.ihCarouselInner.nativeElement.scrollLeft + (swipe.distance)),
        behavior: 'smooth'
      })
    }
    console.log(swipe.direction);
    setTimeout(() => {
      this.toggleCarouselBtns();
    }, 500)
  }
}
