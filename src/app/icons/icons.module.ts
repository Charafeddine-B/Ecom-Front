import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablerIconsModule } from 'angular-tabler-icons';
import { IconTrash, IconHeart, IconBrandGithub } from 'angular-tabler-icons/icons';
// Select some icons (use an object, not an array)
const icons = {
  IconTrash,
  IconHeart,
  IconBrandGithub
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
