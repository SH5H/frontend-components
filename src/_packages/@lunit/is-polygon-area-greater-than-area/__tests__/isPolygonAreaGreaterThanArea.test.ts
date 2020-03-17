import { isPolygonAreaGreaterThanArea } from '@lunit/is-polygon-area-greater-than-area';

describe('isPolygonAreaGreaterThanArea()', () => {
  test('the polygon area is bigger than 100', () => {
    expect(
      isPolygonAreaGreaterThanArea([
        [293.12, 344.32],
        [293.12, 344.32],
        [290.56, 345.6],
        [288, 348.16],
        [285.44, 350.72],
        [282.88, 353.28000000000003],
        [280.32, 357.12],
        [273.92, 362.24],
        [270.08, 367.36],
        [264.96, 371.2],
        [262.4, 373.76],
        [257.28000000000003, 377.6],
        [254.72, 380.16],
        [252.16, 382.72],
        [250.88, 384],
        [249.6, 385.28000000000003],
        [248.32, 385.28000000000003],
        [248.32, 385.28000000000003],
        [247.04, 386.56],
        [245.76, 386.56],
        [243.20000000000002, 386.56],
        [240.64000000000001, 386.56],
        [235.52, 385.28000000000003],
        [231.68, 384],
        [227.84, 381.44],
        [224, 377.6],
        [218.88, 375.04],
        [217.6, 373.76],
        [215.04, 371.2],
        [212.48000000000002, 368.64],
        [211.20000000000002, 366.08],
        [209.92000000000002, 362.24],
        [209.92000000000002, 360.96000000000004],
        [209.92000000000002, 358.40000000000003],
        [209.92000000000002, 355.84000000000003],
        [209.92000000000002, 354.56],
        [211.20000000000002, 350.72],
        [212.48000000000002, 348.16],
        [213.76, 346.88],
        [213.76, 344.32],
        [215.04, 343.04],
        [216.32, 340.48],
        [216.32, 340.48],
        [217.6, 339.2],
        [217.6, 337.92],
        [218.88, 337.92],
        [218.88, 337.92],
        [220.16, 336.64],
        [221.44, 336.64],
        [224, 335.36],
        [226.56, 334.08],
        [234.24, 332.8],
        [239.36, 330.24],
        [247.04, 327.68],
        [253.44, 326.40000000000003],
        [259.84000000000003, 325.12],
        [263.68, 323.84000000000003],
        [267.52, 322.56],
        [271.36, 321.28000000000003],
        [273.92, 321.28000000000003],
        [276.48, 321.28000000000003],
        [276.48, 321.28000000000003],
        [277.76, 321.28000000000003],
        [280.32, 321.28000000000003],
        [282.88, 321.28000000000003],
      ]),
    ).toBeTruthy();

    expect(
      isPolygonAreaGreaterThanArea([
        [322.56, 71.68],
        [322.56, 71.68],
        [316.16, 74.24000000000001],
        [309.76, 75.52000000000001],
        [302.08, 78.08000000000001],
        [295.68, 80.64000000000001],
        [288, 84.47999999999999],
        [284.16, 87.03999999999999],
        [279.04, 90.88],
        [272.64, 96],
        [270.08, 99.84],
        [267.52, 102.4],
        [267.52, 107.52000000000001],
        [267.52, 110.08000000000001],
        [268.8, 112.64000000000001],
        [272.64, 116.47999999999999],
        [282.88, 121.6],
        [293.12, 125.44],
        [302.08, 128],
        [312.32, 129.28],
        [321.28000000000003, 129.28],
        [334.08, 129.28],
        [339.2, 130.56],
        [349.44, 129.28],
        [357.12, 128],
        [360.96, 126.72],
        [366.08, 125.44],
        [371.2, 124.16],
        [372.48, 122.88],
        [375.04, 120.32],
        [377.6, 117.75999999999999],
        [377.6, 115.20000000000002],
        [377.6, 112.64000000000001],
        [377.6, 107.52000000000001],
        [377.6, 104.96000000000001],
        [376.32, 101.12],
        [373.76, 98.56],
        [372.48, 94.72],
        [371.2, 92.16],
        [368.64, 89.6],
        [367.36, 88.32],
        [367.36, 87.03999999999999],
        [366.08, 85.75999999999999],
        [366.08, 85.75999999999999],
        [364.8, 84.47999999999999],
      ]),
    ).toBeTruthy();

    expect(
      isPolygonAreaGreaterThanArea([
        [408.32, 177.92000000000002],
        [408.32, 177.92000000000002],
        [407.04, 177.92000000000002],
        [405.76, 179.20000000000002],
        [404.48, 180.48000000000002],
        [401.92, 181.76],
        [400.64, 183.04],
        [399.36, 185.6],
        [396.8, 186.88],
        [396.8, 190.72],
        [395.52, 194.56],
        [395.52, 195.84000000000003],
        [395.52, 198.39999999999998],
        [395.52, 200.95999999999998],
        [396.8, 200.95999999999998],
        [398.08, 203.51999999999998],
        [399.36, 204.8],
        [401.92, 204.8],
        [404.48, 206.07999999999998],
        [405.76, 206.07999999999998],
        [409.6, 206.07999999999998],
        [413.44, 206.07999999999998],
        [416, 204.8],
        [417.28000000000003, 204.8],
        [421.12, 203.51999999999998],
        [422.40000000000003, 202.24],
        [423.68, 200.95999999999998],
        [424.96000000000004, 200.95999999999998],
        [426.24, 200.95999999999998],
        [426.24, 199.68],
        [426.24, 199.68],
        [427.52, 199.68],
        [427.52, 198.39999999999998],
        [427.52, 198.39999999999998],
        [427.52, 197.12],
        [427.52, 197.12],
        [427.52, 195.84000000000003],
        [427.52, 195.84000000000003],
        [427.52, 194.56],
        [427.52, 193.28000000000003],
        [427.52, 193.28000000000003],
        [427.52, 193.28000000000003],
        [427.52, 192],
        [427.52, 192],
        [427.52, 192],
        [427.52, 190.72],
        [427.52, 190.72],
        [427.52, 189.44],
        [427.52, 189.44],
        [427.52, 188.16],
        [427.52, 186.88],
        [427.52, 186.88],
        [427.52, 186.88],
        [427.52, 185.6],
        [427.52, 185.6],
        [427.52, 185.6],
        [427.52, 185.6],
        [427.52, 184.32],
        [427.52, 184.32],
        [426.24, 183.04],
      ]),
    ).toBeTruthy();

    expect(
      isPolygonAreaGreaterThanArea([
        [62.72, 371.2],
        [62.72, 371.2],
        [62.72, 371.2],
        [61.44, 371.2],
        [60.160000000000004, 371.2],
        [60.160000000000004, 371.2],
        [58.88, 371.2],
        [57.6, 372.48],
        [56.32, 373.76],
        [55.04, 375.04],
        [55.04, 376.32],
        [53.76, 376.32],
        [53.76, 377.6],
        [53.76, 378.88],
        [53.76, 380.16],
        [53.76, 381.44],
        [53.76, 381.44],
        [53.76, 382.72],
        [55.04, 382.72],
        [56.32, 384],
        [57.6, 384],
        [58.88, 384],
        [60.160000000000004, 384],
        [61.44, 384],
        [62.72, 384],
        [62.72, 384],
        [64, 384],
        [65.28, 384],
        [65.28, 384],
        [65.28, 384],
        [65.28, 384],
        [66.56, 384],
        [66.56, 382.72],
        [66.56, 382.72],
        [66.56, 382.72],
        [66.56, 382.72],
        [67.84, 382.72],
        [67.84, 382.72],
        [67.84, 381.44],
        [67.84, 381.44],
        [67.84, 380.16],
        [67.84, 378.88],
        [67.84, 378.88],
        [66.56, 377.6],
        [66.56, 376.32],
        [66.56, 376.32],
        [65.28, 375.04],
        [65.28, 375.04],
        [65.28, 375.04],
        [65.28, 375.04],
      ]),
    ).toBeTruthy();
  });

  test('the polygon area is smaller than 100', () => {
    expect(
      isPolygonAreaGreaterThanArea([
        [407.04, 336.64],
        [407.04, 336.64],
        [407.04, 337.92],
        [407.04, 339.2],
        [407.04, 339.2],
        [407.04, 340.48],
        [407.04, 340.48],
        [407.04, 341.76],
        [407.04, 341.76],
        [407.04, 341.76],
        [408.32, 341.76],
        [409.6, 343.04],
        [410.88, 343.04],
        [410.88, 343.04],
        [412.16, 343.04],
        [412.16, 343.04],
        [413.44, 343.04],
        [413.44, 343.04],
        [413.44, 343.04],
        [413.44, 343.04],
        [414.72, 343.04],
      ]),
    ).toBeFalsy();

    expect(
      isPolygonAreaGreaterThanArea([
        [404.48, 350.72],
        [404.48, 352],
        [404.48, 352],
        [404.48, 352],
        [404.48, 352],
        [404.48, 353.28000000000003],
        [404.48, 353.28000000000003],
        [404.48, 353.28000000000003],
        [404.48, 353.28000000000003],
        [404.48, 353.28000000000003],
        [405.76, 354.56],
        [405.76, 354.56],
        [405.76, 354.56],
        [405.76, 354.56],
        [405.76, 354.56],
        [405.76, 354.56],
        [407.04, 354.56],
      ]),
    ).toBeFalsy();

    expect(
      isPolygonAreaGreaterThanArea([
        [180.48, 453.12],
        [179.20000000000002, 453.12],
        [179.20000000000002, 453.12],
        [177.92000000000002, 453.12],
        [176.64000000000001, 453.12],
        [176.64000000000001, 453.12],
        [175.36, 453.12],
        [175.36, 454.4],
        [175.36, 454.4],
        [175.36, 455.68000000000006],
        [175.36, 455.68000000000006],
        [175.36, 456.96000000000004],
        [175.36, 456.96000000000004],
        [175.36, 456.96000000000004],
        [175.36, 458.24],
        [175.36, 458.24],
        [175.36, 458.24],
        [175.36, 459.52],
        [175.36, 459.52],
        [175.36, 459.52],
        [176.64000000000001, 459.52],
        [176.64000000000001, 459.52],
        [176.64000000000001, 459.52],
        [176.64000000000001, 458.24],
      ]),
    ).toBeFalsy();
  });
});
