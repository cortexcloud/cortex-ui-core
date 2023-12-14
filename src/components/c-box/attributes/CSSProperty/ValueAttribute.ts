import { findCssRuleIndex } from '../../../../helpers/functions/cssRule/findCssRuleIndex';
import { CxDatepickerName } from '../../../datepicker/types/datepicker.name';
import { abbrStylesMapper } from '../../styles-mapper/abbr-styles-mapper';
import { ScopedProperty } from '../scoped/ScopedProperty';
import { UIScopedStyles } from '../scoped/UIScoped';

export class ValueAttribute {
  constructor(private box: CBox.Ref, private attr: string, private value: string) {}

  init() {
    UIScopedStyles.setStylesheet();
    ScopedProperty.scope('prop', this.createStyleText(), this.attr, this.box);
  }

  private createStyleText() {
    const valueWithImportant = this.value?.endsWith('!') ? '!important' : '';
    return `{${abbrStylesMapper.get(this.attr)}: ${this.value.replace(
      '!',
      ''
    )}${valueWithImportant};}`;
  }
}
