/**
 * Credit goes to Lewis Fairweather @ JavaScript in Plain English on Medium
 * Source: https://medium.com/javascript-in-plain-english/6-pure-angular-pipes-for-human-readable-ui-c76b4e6fafa1
 *
 * The toSlugPipe Pipe transforms a URL to a slug. It strips any characters that are not allowed or irrelevant in URLs,
 * including strings that could cause issues when used as a URL path/segment.
 * toSlug uses a regular expression (Regex) to strip out non-URL compliant characters.
 *
 * The optional id parameter will append half of the passed id value to the end of the slug.
 * This is useful if there is a chance that you’ll generate similar or duplicate slugs through this transformation.
 * It makes sure that the slugs are unique, consequently making your apps URL’s unique.
 */

import {Pipe, PipeTransform} from '@angular/core';
import slugify from 'slugify';

@Pipe({
  name: 'toSlug'
})
export class ToSlugPipe implements PipeTransform {

  transform(value: string, id?: string): string {
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
    const p = new RegExp(a.split('')
      .join('|'), 'g');

    let slug = value
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
    if (id) {
      slug = slug.concat('-', slugify(id.slice(Math.round(id.length / 2)))); // append half of id for uniqueness
    }
    return slug;
  }
}
