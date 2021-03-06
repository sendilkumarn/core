import {iit, it, ddescribe, describe, expect, inject, async, beforeEachProviders} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';

import {NgbModalBackdrop} from './modal_backdrop';

describe('ngb-modal-backdrop', () => {

  it('should render backdrop with required CSS classes', async(inject([TestComponentBuilder], (tcb) => {
       tcb.createAsync(NgbModalBackdrop).then((fixture) => {
         fixture.detectChanges();

         expect(fixture.nativeElement).toHaveCssClass('modal-backdrop');
       });
     })));
});
