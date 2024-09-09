export function getHeaderClass(index: number): object {
  return {
    'w3-bar-item': true,
    'w3-button': true,
    'w3-padding': true,
    'w3-hide-small': true,
    'w3-selected': false,
    'hidden-header': index < 0,
    'header-number-0': index === 0,
    'header-number-1': index === 1,
    'header-number-2': index === 2,
    'header-number-3': index === 3,
    'header-number-4': index === 4,
    'header-number-5': index === 5
  };
}

export function getArrowClass(): object {
  return {
    'w3-bar-item': true,
    'w3-button': true,
    'w3-padding': true,
    'w3-hide-small': true,
    'w3-selected': false
  };
}
