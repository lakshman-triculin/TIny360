import { Component,OnChanges,Input,trigger,state,style,transition,animate } from '@angular/core';
import {HttpService} from '../services/http-service';
// import {HTTP_PROVIDERS} from '@angular/http';
import { Router } from '@angular/router';
import {menuList} from './menuList';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  styles: [".router-link-active { background-color: red; }"],
   animations: [
  trigger('visibilityChanged1', [
    state('block', style({'font-size': '1.4rem','display':'block'})),
    state('none', style({ 'font-size': '0.0rem','display':'none'})),
    // transition('* => *', animate('.5s'))
    transition('none => block',animate('700ms')),
    transition('block => none', animate('300ms'))
  ])
  ],
  providers: [HttpService]
})

export class NavbarComponent implements OnChanges {
  menuItems:menuList;
  menuindex:number=0;
  subindex:number=0;
  public selected:number=999;
	public selectedSubMenu=999;
  sidebar1:string = 'block';
  constructor(public httpService: HttpService,private router: Router) 
  {   
       this.httpService.getMasterConfig()
       .subscribe(
         res =>{this.menuItems = res.masterConfig.menuList;});
  }
expandMenu(index:number) {
	  (this.selected===index)?this.selected=999:this.selected=index;
	  this.selectedSubMenu=999;
    // (this.menuItems[index].active)=!(this.menuItems[index].active);
	}
go(routerLink:string) {
		 this.router.navigate([routerLink]);
    
	}
  activeClassFun(i:number){
    this.menuindex=i;
  }
  activeClassFun1(j:number){
    this.subindex=j;
  }
  tog(){
    (this.sidebar1=='none')? this.sidebar1='block':this.sidebar1='none';
  }
  ngOnChanges() {
    (this.sidebar1=='none')? this.sidebar1='block':this.sidebar1='none';
   } 
}
