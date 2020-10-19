import {
  Contour,
  ContourDrawer,
  ContourViewer,
  CornerstoneImage,
  CornerstoneSingleImage,
  CornerstoneViewer,
  InsightViewerContainer,
  InsightViewerControllerOptions,
  InsightViewerTestController,
  installWADOImageLoader,
  unloadImage,
  useContour,
  useInsightViewerSync,
} from '@lunit/insight-viewer';
import React, { useMemo } from 'react';

installWADOImageLoader();

const emptyLabel = () => '';

const initialContours: Omit<Contour & { lineWidth: number }, 'id'>[] = [
  {
    lineWidth: 1,
    label: emptyLabel,
    polygon: [
      [277.33333333333337, 94.58666666666666],
      [276.48, 94.58666666666666],
      [273.06666666666666, 92.88000000000001],
      [269.65333333333336, 92.02666666666666],
      [265.38666666666666, 91.17333333333333],
      [260.2666666666667, 89.46666666666668],
      [256, 88.61333333333333],
      [250.02666666666667, 87.76],
      [241.49333333333334, 85.2],
      [231.25333333333336, 84.34666666666666],
      [225.28, 82.64],
      [220.16000000000003, 82.64],
      [212.48000000000002, 82.64],
      [206.5066666666667, 82.64],
      [200.53333333333336, 85.2],
      [196.26666666666668, 86.90666666666668],
      [191.14666666666668, 89.46666666666668],
      [187.73333333333335, 91.17333333333333],
      [183.46666666666667, 93.73333333333333],
      [180.90666666666667, 96.29333333333334],
      [178.34666666666666, 98.85333333333334],
      [174.93333333333334, 100.56000000000002],
      [172.37333333333333, 103.97333333333334],
      [169.81333333333333, 106.53333333333335],
      [167.25333333333333, 109.09333333333335],
      [163.84, 112.50666666666667],
      [162.13333333333335, 115.92],
      [159.57333333333335, 120.18666666666668],
      [157.01333333333335, 124.45333333333333],
      [155.30666666666667, 128.72000000000003],
      [153.60000000000002, 132.13333333333333],
      [151.89333333333335, 136.40000000000003],
      [150.18666666666667, 140.66666666666669],
      [149.33333333333334, 144.93333333333334],
      [148.48000000000002, 149.2],
      [147.62666666666667, 152.61333333333334],
      [146.77333333333334, 156.88],
      [146.77333333333334, 159.44],
      [145.92000000000002, 162.85333333333335],
      [145.92000000000002, 165.41333333333336],
      [145.92000000000002, 168.82666666666665],
      [145.06666666666666, 172.24],
      [145.06666666666666, 175.65333333333336],
      [145.06666666666666, 179.06666666666666],
      [144.21333333333334, 181.62666666666667],
      [144.21333333333334, 185.89333333333332],
      [143.36, 189.30666666666667],
      [143.36, 192.72000000000003],
      [143.36, 195.28000000000003],
      [142.5066666666667, 197.84000000000003],
      [142.5066666666667, 201.25333333333333],
      [142.5066666666667, 204.66666666666669],
      [142.5066666666667, 208.07999999999998],
      [142.5066666666667, 210.64],
      [142.5066666666667, 214.90666666666664],
      [142.5066666666667, 217.46666666666664],
      [141.65333333333334, 220.02666666666664],
      [141.65333333333334, 223.44],
      [141.65333333333334, 226],
      [141.65333333333334, 228.56],
      [142.5066666666667, 231.12],
      [142.5066666666667, 233.68],
      [143.36, 236.24],
      [145.06666666666666, 238.8],
      [145.92000000000002, 241.36],
      [146.77333333333334, 243.92000000000002],
      [148.48000000000002, 247.33333333333331],
      [151.04000000000002, 249.89333333333332],
      [152.74666666666667, 253.30666666666667],
      [155.30666666666667, 256.72],
      [157.86666666666667, 259.28],
      [160.42666666666668, 261.84],
      [162.98666666666668, 265.25333333333333],
      [165.54666666666668, 267.81333333333333],
      [168.10666666666668, 270.37333333333333],
      [171.52, 272.93333333333334],
      [174.08, 276.3466666666667],
      [176.64000000000001, 278.05333333333334],
      [180.05333333333334, 280.61333333333334],
      [183.46666666666667, 282.32],
      [186.88000000000002, 284.88],
      [191.14666666666668, 286.58666666666664],
      [194.56, 289.14666666666665],
      [198.82666666666668, 290.85333333333335],
      [204.8, 293.41333333333336],
      [209.0666666666667, 295.12],
      [213.33333333333334, 295.97333333333336],
      [219.30666666666667, 297.68],
      [225.28, 298.53333333333336],
      [231.25333333333336, 299.38666666666666],
      [236.37333333333333, 300.24],
      [244.05333333333334, 301.09333333333336],
      [250.88000000000002, 301.09333333333336],
      [256.85333333333335, 301.09333333333336],
      [263.68, 301.09333333333336],
      [268.8, 300.24],
      [276.48, 300.24],
      [282.4533333333334, 298.53333333333336],
      [289.28000000000003, 296.82666666666665],
      [299.52000000000004, 294.26666666666665],
      [305.49333333333334, 292.56],
      [310.61333333333334, 290.85333333333335],
      [316.5866666666667, 288.29333333333335],
      [329.3866666666667, 282.32],
      [336.21333333333337, 279.76],
      [342.18666666666667, 277.2],
      [347.3066666666667, 274.64],
      [352.4266666666667, 270.37333333333333],
      [358.40000000000003, 266.96],
      [364.37333333333333, 263.5466666666667],
      [368.64000000000004, 260.1333333333333],
      [372.9066666666667, 256.72],
      [376.32000000000005, 253.30666666666667],
      [380.5866666666667, 250.74666666666667],
      [384, 247.33333333333331],
      [386.56, 244.7733333333333],
      [389.12, 241.36],
      [391.68, 238.8],
      [394.24, 236.24],
      [395.9466666666667, 233.68],
      [397.65333333333336, 230.26666666666665],
      [399.36, 226.85333333333335],
      [400.21333333333337, 223.44],
      [401.92, 220.02666666666664],
      [402.77333333333337, 216.61333333333334],
      [403.62666666666667, 213.2],
      [404.48, 208.07999999999998],
      [404.48, 205.52000000000004],
      [405.33333333333337, 202.10666666666668],
      [405.33333333333337, 198.69333333333333],
      [406.18666666666667, 195.28000000000003],
      [406.18666666666667, 191.86666666666667],
      [406.18666666666667, 189.30666666666667],
      [406.18666666666667, 185.89333333333332],
      [406.18666666666667, 181.62666666666667],
      [406.18666666666667, 179.06666666666666],
      [405.33333333333337, 174.8],
      [404.48, 171.38666666666666],
      [402.77333333333337, 167.97333333333336],
      [402.77333333333337, 166.26666666666665],
      [401.0666666666667, 162.85333333333335],
      [399.36, 160.29333333333335],
      [398.5066666666667, 158.5866666666667],
      [397.65333333333336, 156.88],
      [395.9466666666667, 154.32],
      [395.09333333333336, 153.4666666666667],
      [394.24, 150.9066666666667],
      [393.3866666666667, 150.05333333333334],
      [392.53333333333336, 147.49333333333334],
      [390.8266666666667, 146.64],
      [389.97333333333336, 144.93333333333334],
      [389.12, 142.37333333333333],
      [387.41333333333336, 140.66666666666669],
      [386.56, 138.95999999999998],
      [385.7066666666667, 137.25333333333333],
      [384, 135.54666666666668],
      [384, 134.69333333333333],
      [382.29333333333335, 132.98666666666668],
      [381.44, 131.28000000000003],
      [380.5866666666667, 130.42666666666668],
      [379.73333333333335, 129.57333333333332],
      [378.88000000000005, 128.72000000000003],
      [378.0266666666667, 127.86666666666666],
      [378.0266666666667, 127.86666666666666],
      [377.17333333333335, 127.01333333333334],
      [376.32000000000005, 126.16000000000001],
      [375.4666666666667, 126.16000000000001],
      [375.4666666666667, 126.16000000000001],
      [373.76000000000005, 125.30666666666669],
      [372.9066666666667, 125.30666666666669],
      [372.05333333333334, 124.45333333333333],
      [371.20000000000005, 124.45333333333333],
      [369.49333333333334, 123.60000000000001],
      [368.64000000000004, 122.74666666666668],
      [367.7866666666667, 121.89333333333333],
      [366.08000000000004, 121.89333333333333],
      [365.2266666666667, 121.04],
      [363.52000000000004, 120.18666666666668],
      [362.6666666666667, 119.33333333333333],
      [361.81333333333333, 119.33333333333333],
      [361.81333333333333, 118.48],
      [360.96000000000004, 118.48],
      [360.1066666666667, 118.48],
      [359.25333333333333, 117.62666666666668],
      [359.25333333333333, 117.62666666666668],
      [358.40000000000003, 117.62666666666668],
      [358.40000000000003, 117.62666666666668],
      [357.5466666666667, 117.62666666666668],
      [357.5466666666667, 117.62666666666668],
      [357.5466666666667, 117.62666666666668],
      [356.6933333333333, 117.62666666666668],
    ],
  },
  {
    lineWidth: 2,
    label: emptyLabel,
    polygon: [
      [256, 130.42666666666668],
      [255.14666666666668, 130.42666666666668],
      [255.14666666666668, 130.42666666666668],
      [252.58666666666667, 130.42666666666668],
      [250.88000000000002, 130.42666666666668],
      [249.17333333333335, 130.42666666666668],
      [247.46666666666667, 130.42666666666668],
      [244.9066666666667, 130.42666666666668],
      [242.3466666666667, 131.28000000000003],
      [239.7866666666667, 131.28000000000003],
      [237.2266666666667, 132.98666666666668],
      [233.81333333333336, 133.84000000000003],
      [231.25333333333336, 134.69333333333333],
      [227.84, 136.40000000000003],
      [225.28, 138.10666666666668],
      [222.72000000000003, 139.81333333333333],
      [221.01333333333335, 140.66666666666669],
      [219.30666666666667, 142.37333333333333],
      [217.60000000000002, 143.2266666666667],
      [215.89333333333335, 144.93333333333334],
      [213.33333333333334, 146.64],
      [211.6266666666667, 148.3466666666667],
      [209.92000000000002, 150.05333333333334],
      [209.0666666666667, 151.76],
      [208.21333333333334, 154.32],
      [207.36, 155.17333333333335],
      [206.5066666666667, 157.73333333333335],
      [205.65333333333334, 159.44],
      [204.8, 162],
      [203.9466666666667, 164.56],
      [203.9466666666667, 167.12],
      [203.09333333333333, 168.82666666666665],
      [203.09333333333333, 170.53333333333336],
      [202.24, 173.94666666666666],
      [202.24, 176.50666666666666],
      [202.24, 179.06666666666666],
      [201.38666666666668, 181.62666666666667],
      [201.38666666666668, 183.33333333333337],
      [200.53333333333336, 186.74666666666667],
      [200.53333333333336, 188.45333333333332],
      [199.68, 191.01333333333332],
      [199.68, 193.57333333333332],
      [199.68, 196.13333333333333],
      [199.68, 196.98666666666668],
      [199.68, 199.54666666666668],
      [199.68, 201.25333333333333],
      [199.68, 205.52000000000004],
      [199.68, 206.37333333333333],
      [199.68, 208.93333333333334],
      [199.68, 210.64],
      [199.68, 212.3466666666667],
      [199.68, 214.05333333333334],
      [200.53333333333336, 216.61333333333334],
      [200.53333333333336, 218.32],
      [200.53333333333336, 220.02666666666664],
      [201.38666666666668, 221.73333333333335],
      [202.24, 223.44],
      [203.09333333333333, 226],
      [204.8, 226.85333333333335],
      [205.65333333333334, 229.41333333333336],
      [207.36, 231.97333333333336],
      [209.0666666666667, 233.68],
      [209.92000000000002, 235.38666666666666],
      [211.6266666666667, 237.94666666666666],
      [212.48000000000002, 238.8],
      [215.04000000000002, 241.36],
      [215.89333333333335, 243.06666666666666],
      [218.45333333333335, 244.7733333333333],
      [220.16000000000003, 246.48000000000002],
      [221.86666666666667, 248.18666666666667],
      [224.42666666666668, 249.04000000000002],
      [226.13333333333335, 250.74666666666667],
      [227.84, 252.45333333333332],
      [230.4, 253.30666666666667],
      [232.96, 255.01333333333332],
      [234.66666666666669, 255.01333333333332],
      [236.37333333333333, 256.72],
      [238.08, 256.72],
      [239.7866666666667, 257.5733333333333],
      [242.3466666666667, 257.5733333333333],
      [244.9066666666667, 258.4266666666667],
      [246.61333333333334, 258.4266666666667],
      [248.32000000000002, 258.4266666666667],
      [250.88000000000002, 258.4266666666667],
      [252.58666666666667, 258.4266666666667],
      [255.14666666666668, 258.4266666666667],
      [256.85333333333335, 258.4266666666667],
      [259.41333333333336, 257.5733333333333],
      [261.97333333333336, 256.72],
      [265.38666666666666, 255.86666666666667],
      [267.94666666666666, 255.01333333333332],
      [270.50666666666666, 254.16000000000003],
      [273.92, 252.45333333333332],
      [277.33333333333337, 251.60000000000002],
      [280.74666666666667, 249.89333333333332],
      [284.16, 249.04000000000002],
      [285.8666666666667, 248.18666666666667],
      [290.1333333333333, 246.48000000000002],
      [293.5466666666667, 245.62666666666667],
      [296.1066666666667, 243.92000000000002],
      [299.52000000000004, 242.2133333333333],
      [301.2266666666667, 241.36],
      [304.64000000000004, 239.6533333333333],
      [307.20000000000005, 238.8],
      [309.76000000000005, 237.94666666666666],
      [312.32, 236.24],
      [314.0266666666667, 235.38666666666666],
      [316.5866666666667, 234.53333333333336],
      [318.29333333333335, 233.68],
      [320, 232.82666666666665],
      [321.7066666666667, 231.12],
      [325.12, 229.41333333333336],
      [325.97333333333336, 228.56],
      [328.53333333333336, 226.85333333333335],
      [330.24, 226],
      [331.9466666666667, 224.29333333333335],
      [333.65333333333336, 223.44],
      [336.21333333333337, 220.88],
      [337.06666666666666, 220.02666666666664],
      [339.62666666666667, 219.17333333333335],
      [341.33333333333337, 217.46666666666664],
      [343.04, 216.61333333333334],
      [343.8933333333334, 214.90666666666664],
      [345.6, 213.2],
      [346.4533333333334, 211.49333333333334],
      [347.3066666666667, 209.7866666666667],
      [349.0133333333334, 208.07999999999998],
      [349.0133333333334, 206.37333333333333],
      [349.8666666666667, 203.81333333333333],
      [350.72, 202.10666666666668],
      [350.72, 200.40000000000003],
      [351.5733333333334, 198.69333333333333],
      [351.5733333333334, 196.98666666666668],
      [352.4266666666667, 195.28000000000003],
      [352.4266666666667, 193.57333333333332],
      [352.4266666666667, 191.01333333333332],
      [352.4266666666667, 189.30666666666667],
      [352.4266666666667, 187.60000000000002],
      [352.4266666666667, 185.04000000000002],
      [352.4266666666667, 181.62666666666667],
      [352.4266666666667, 179.06666666666666],
      [351.5733333333334, 175.65333333333336],
      [350.72, 172.24],
      [349.8666666666667, 170.53333333333336],
      [349.0133333333334, 167.12],
      [348.16, 165.41333333333336],
      [347.3066666666667, 162.85333333333335],
      [346.4533333333334, 161.14666666666665],
      [345.6, 159.44],
      [344.74666666666667, 158.5866666666667],
      [343.8933333333334, 156.88],
      [343.04, 156.0266666666667],
      [341.33333333333337, 155.17333333333335],
      [340.48, 153.4666666666667],
      [338.77333333333337, 152.61333333333334],
      [337.92, 150.9066666666667],
      [336.21333333333337, 150.05333333333334],
      [335.36, 149.2],
      [334.50666666666666, 147.49333333333334],
      [332.8, 146.64],
      [331.9466666666667, 145.7866666666667],
      [330.24, 144.07999999999998],
      [329.3866666666667, 143.2266666666667],
      [327.68, 141.51999999999998],
      [325.97333333333336, 140.66666666666669],
      [325.12, 139.81333333333333],
      [323.41333333333336, 138.95999999999998],
      [322.56, 138.10666666666668],
      [321.7066666666667, 138.10666666666668],
      [320, 137.25333333333333],
      [319.1466666666667, 137.25333333333333],
      [317.44, 136.40000000000003],
      [316.5866666666667, 136.40000000000003],
      [314.88, 136.40000000000003],
      [313.17333333333335, 135.54666666666668],
      [312.32, 135.54666666666668],
      [309.76000000000005, 135.54666666666668],
      [308.05333333333334, 135.54666666666668],
      [307.20000000000005, 134.69333333333333],
      [305.49333333333334, 134.69333333333333],
      [303.7866666666667, 134.69333333333333],
      [302.08000000000004, 133.84000000000003],
      [300.37333333333333, 133.84000000000003],
      [298.6666666666667, 132.98666666666668],
      [297.81333333333333, 132.98666666666668],
    ],
  },
  {
    lineWidth: 3,
    label: emptyLabel,
    polygon: [
      [263.68, 169.68],
      [262.8266666666667, 169.68],
      [261.97333333333336, 169.68],
      [261.12, 170.53333333333336],
      [260.2666666666667, 170.53333333333336],
      [258.56, 171.38666666666666],
      [256.85333333333335, 172.24],
      [255.14666666666668, 173.09333333333336],
      [252.58666666666667, 174.8],
      [250.88000000000002, 175.65333333333336],
      [250.02666666666667, 177.36],
      [248.32000000000002, 178.21333333333337],
      [247.46666666666667, 179.92000000000002],
      [245.76000000000002, 181.62666666666667],
      [244.9066666666667, 182.48000000000002],
      [244.05333333333334, 183.33333333333337],
      [243.20000000000002, 184.18666666666667],
      [243.20000000000002, 185.04000000000002],
      [242.3466666666667, 185.89333333333332],
      [242.3466666666667, 186.74666666666667],
      [241.49333333333334, 187.60000000000002],
      [241.49333333333334, 188.45333333333332],
      [241.49333333333334, 188.45333333333332],
      [241.49333333333334, 189.30666666666667],
      [241.49333333333334, 190.16000000000003],
      [240.64000000000001, 191.01333333333332],
      [240.64000000000001, 191.86666666666667],
      [240.64000000000001, 192.72000000000003],
      [240.64000000000001, 193.57333333333332],
      [240.64000000000001, 194.42666666666668],
      [240.64000000000001, 195.28000000000003],
      [240.64000000000001, 196.13333333333333],
      [240.64000000000001, 196.98666666666668],
      [240.64000000000001, 197.84000000000003],
      [241.49333333333334, 198.69333333333333],
      [241.49333333333334, 199.54666666666668],
      [242.3466666666667, 200.40000000000003],
      [243.20000000000002, 201.25333333333333],
      [244.05333333333334, 202.10666666666668],
      [244.9066666666667, 202.96000000000004],
      [245.76000000000002, 203.81333333333333],
      [246.61333333333334, 204.66666666666669],
      [247.46666666666667, 205.52000000000004],
      [249.17333333333335, 206.37333333333333],
      [250.88000000000002, 208.07999999999998],
      [252.58666666666667, 208.07999999999998],
      [253.44000000000003, 208.93333333333334],
      [255.14666666666668, 209.7866666666667],
      [256.85333333333335, 210.64],
      [258.56, 210.64],
      [260.2666666666667, 211.49333333333334],
      [261.97333333333336, 211.49333333333334],
      [263.68, 212.3466666666667],
      [265.38666666666666, 212.3466666666667],
      [267.09333333333336, 212.3466666666667],
      [267.94666666666666, 212.3466666666667],
      [269.65333333333336, 212.3466666666667],
      [271.36, 212.3466666666667],
      [273.06666666666666, 212.3466666666667],
      [273.92, 212.3466666666667],
      [276.48, 212.3466666666667],
      [278.18666666666667, 212.3466666666667],
      [279.8933333333334, 211.49333333333334],
      [281.6, 211.49333333333334],
      [283.3066666666667, 210.64],
      [285.0133333333334, 209.7866666666667],
      [286.72, 208.93333333333334],
      [288.4266666666667, 208.07999999999998],
      [290.1333333333333, 207.2266666666667],
      [291.84000000000003, 206.37333333333333],
      [292.6933333333333, 205.52000000000004],
      [294.40000000000003, 203.81333333333333],
      [295.25333333333333, 202.96000000000004],
      [296.96000000000004, 202.10666666666668],
      [298.6666666666667, 200.40000000000003],
      [299.52000000000004, 199.54666666666668],
      [300.37333333333333, 198.69333333333333],
      [302.08000000000004, 197.84000000000003],
      [302.93333333333334, 196.13333333333333],
      [303.7866666666667, 195.28000000000003],
      [304.64000000000004, 194.42666666666668],
      [306.3466666666667, 193.57333333333332],
      [307.20000000000005, 192.72000000000003],
      [307.20000000000005, 191.86666666666667],
      [307.20000000000005, 191.01333333333332],
      [308.05333333333334, 190.16000000000003],
      [308.05333333333334, 189.30666666666667],
      [308.9066666666667, 188.45333333333332],
      [308.9066666666667, 187.60000000000002],
      [308.9066666666667, 186.74666666666667],
      [308.9066666666667, 185.89333333333332],
      [308.9066666666667, 185.04000000000002],
      [308.9066666666667, 184.18666666666667],
      [308.9066666666667, 183.33333333333337],
      [308.9066666666667, 182.48000000000002],
      [308.9066666666667, 181.62666666666667],
      [308.05333333333334, 180.77333333333337],
      [308.05333333333334, 179.92000000000002],
      [307.20000000000005, 179.06666666666666],
      [306.3466666666667, 178.21333333333337],
      [306.3466666666667, 176.50666666666666],
      [305.49333333333334, 175.65333333333336],
      [304.64000000000004, 174.8],
      [303.7866666666667, 173.94666666666666],
      [303.7866666666667, 173.94666666666666],
      [302.93333333333334, 173.09333333333336],
      [302.08000000000004, 172.24],
      [301.2266666666667, 171.38666666666666],
      [301.2266666666667, 171.38666666666666],
      [300.37333333333333, 170.53333333333336],
      [299.52000000000004, 170.53333333333336],
      [299.52000000000004, 169.68],
      [298.6666666666667, 169.68],
      [297.81333333333333, 168.82666666666665],
      [296.96000000000004, 168.82666666666665],
      [296.96000000000004, 167.97333333333336],
      [296.1066666666667, 167.97333333333336],
      [295.25333333333333, 167.12],
      [295.25333333333333, 167.12],
      [294.40000000000003, 167.12],
      [293.5466666666667, 166.26666666666665],
      [293.5466666666667, 166.26666666666665],
      [292.6933333333333, 166.26666666666665],
      [292.6933333333333, 166.26666666666665],
      [291.84000000000003, 166.26666666666665],
      [291.84000000000003, 166.26666666666665],
      [291.84000000000003, 165.41333333333336],
      [290.9866666666667, 165.41333333333336],
      [290.9866666666667, 165.41333333333336],
      [290.9866666666667, 165.41333333333336],
    ],
  },
];

const controllerOptions: InsightViewerControllerOptions = {
  width: [600, 400, 1000],
  height: [700, 400, 1000],
  control: ['pen', ['none', 'pen', 'pan', 'adjust']],
  wheel: ['zoom', ['none', 'zoom']],
  flip: [false],
  invert: [false],
};

export default () => {
  const image: CornerstoneImage = useMemo(
    () =>
      new CornerstoneSingleImage(`wadouri:https://static.lunit.io/fixtures/dcm-files/series/CT000010.dcm`, {
        unload: unloadImage,
      }),
    [],
  );

  const { cornerstoneRenderData, updateCornerstoneRenderData } = useInsightViewerSync();

  // create contour data
  const { contours, focusedContour, focusContour, removeContour, addContour } = useContour({
    mode: 'contour', // is [x, y][]
    initialContours,
  });

  return (
    <InsightViewerTestController options={controllerOptions}>
      {({ width, height, invert, flip, control, wheel, resetTime, interactions, element, setElement }) => (
        <InsightViewerContainer ref={setElement} width={width} height={height}>
          <CornerstoneViewer
            width={width}
            height={height}
            invert={invert}
            flip={flip}
            interactions={interactions}
            resetTime={resetTime}
            image={image}
            updateCornerstoneRenderData={updateCornerstoneRenderData}
          />
          {contours && contours.length > 0 && cornerstoneRenderData && (
            <>
              <ContourViewer
                width={width}
                height={height}
                contours={contours}
                focusedContour={focusedContour}
                polygonAttrs={(contour, cornerstoneRenderData, isBorder) => ({
                  style: {
                    strokeWidth: contour.lineWidth * 3 + (isBorder ? 4 : 0),
                  },
                })}
                cornerstoneRenderData={cornerstoneRenderData}
              />
            </>
          )}
          {contours && cornerstoneRenderData && control === 'pen' && (
            <ContourDrawer
              width={width}
              height={height}
              contours={contours}
              draw={control === 'pen' && element}
              onFocus={focusContour}
              onAdd={(contour) => addContour(contour, { label: () => '', lineWidth: 1 })}
              onRemove={removeContour}
              cornerstoneRenderData={cornerstoneRenderData}
            />
          )}
        </InsightViewerContainer>
      )}
    </InsightViewerTestController>
  );
};
