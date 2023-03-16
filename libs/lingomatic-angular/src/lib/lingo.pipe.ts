import { Component, Pipe, PipeTransform } from "@angular/core";
import { lingomaticBase } from "@wamas/lingomatic-base";

@Pipe({
  name: "lingo",
  standalone: true,
})
export class LingoPipe implements PipeTransform {
  transform(value: string): string {
    return lingomaticBase(value);
  }
}
