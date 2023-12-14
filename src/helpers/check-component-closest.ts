import { ComponentNameTypes } from '../types/component.names';

export const checkCBoxclosest = (
  box: CBox.Ref,
  componentName: ComponentNameTypes,
  errorText: string
) => {
  try {
    if (!box.closest(componentName)) throw errorText;
  } catch (error) {
    console.error('AttributeBase |error|', box, error);
  }
};
