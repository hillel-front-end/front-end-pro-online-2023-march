const divToHundred = (v) => v / 100;

export const toPercent = (v) => divToHundred(v);

export const toCoin = (v) => v * 100;

export const unWrapFromCoin = (v) => divToHundred(v);

// modile.export = { divToHundred, toPercent, toCoin, unWrapFromCoin}
