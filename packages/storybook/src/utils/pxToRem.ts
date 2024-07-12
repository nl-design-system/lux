const pxToRem = (px: number | string, base: number = 16) => {
  const tempPx = `${px}`.replace('px', '');

  return (1 / base) * parseInt(tempPx, 10) + 'rem';
};

export default pxToRem;
