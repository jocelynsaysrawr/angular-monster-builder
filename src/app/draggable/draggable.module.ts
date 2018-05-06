import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DraggableDirective } from "./draggable.directive";
import { MoveableDirective } from "./moveable.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [DraggableDirective, MoveableDirective],
  exports: [DraggableDirective, MoveableDirective]
})
export class DraggableModule {}
