import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablerIconsModule } from 'angular-tabler-icons';
import {IconTrash, IconHeart, IconBrandGithub, IconCirclePlus, IconTruckDelivery, IconUsers, IconBuildingStore} from 'angular-tabler-icons/icons';
// Select some icons (use an object, not an array)
const icons = {
  IconTrash,
  IconHeart,
  IconBrandGithub,
  IconCirclePlus,
  IconTruckDelivery,
  IconUsers,
  IconBuildingStore
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TablerIconsModule.pick(icons)
  ],
  exports:[
    TablerIconsModule
  ]
})
export class IconsModule { }
