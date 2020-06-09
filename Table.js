export default class TABHL {
  constructor(valueStepPairs) {
    this.mVSP = valueStepPairs;
  }
  calc(x) {
    let firstPair = this.mVSP[0];

    if (x <= firstPair[0]) return firstPair[1];

    const upperIndex = this.mVSP.findIndex(pair => x <= pair[0]);

    if (upperIndex <= 0) return this.mVSP[this.mVSP.length - 1][1];

    const lowerIndex = upperIndex - 1;
    const slope =
      (this.mVSP[upperIndex][1] - this.mVSP[lowerIndex][1]) /
      (this.mVSP[upperIndex][0] - this.mVSP[lowerIndex][0]);
    return this.mVSP[lowerIndex][1] + (x - this.mVSP[lowerIndex][0]) * slope;
  }
}
