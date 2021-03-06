import { Component, 
         OnInit, 
         ViewEncapsulation,
         ChangeDetectionStrategy,
         ChangeDetectorRef,
         Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  ProductService,
  Product,
  LoaderService,
  User,
  Category,
  CategoryService,
  config,
  Shop
} from 'kng2-core';
import { i18n } from '../common';

@Component({
  selector: 'kng-product-swipe',
  templateUrl: './product-swipe.component.html',
  styleUrls: ['./product-swipe.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductSwipeComponent implements OnInit {

  bgStyle: string='/-/resize/200x/';

  @Input() limit:number;
  @Input() config: any;
  @Input() products:Product[];

  options = {
    home:true,
    available: true,
    status: true,
    when:true
  };

  constructor(
    private $i18n:i18n,
    private $product: ProductService,
    private $route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {

    let loader  = this.$route.snapshot.data.loader||
                  this.$route.snapshot.parent.data.loader;
    this.config = loader[0];
    this.limit  = 6;
    this.products = [];
  }

  getSelectedContent(elem:string){
    if(!this.config||!this.config.shared.home){
      return '';
    }
    return this.config.shared.home.selection[elem][this.$i18n.locale];
  }

  ngOnDestroy() {
    // document.body.classList.remove('mdc-dialog-scroll-lock');
  }

  ngAfterViewInit(){
    try{
      document.querySelector('kng-product-swipe > div > div.content').scrollLeft=70;
    }catch(e){}    
  }
  
  ngOnInit() {
    if(!this.products||!this.products.length){
      this.load();
    }



    //
    // DIALOG INIT HACK 
    // document.body.classList.add('mdc-dialog-scroll-lock');
  }


  load() {
    this.$product.select(this.options).subscribe((products: Product[]) => {
      this.products = products.sort(this.sortByDate);
    });
  }

  sortByDate(a,b){
    return b.updated-a.updated;
  }

  

}
