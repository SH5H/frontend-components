import { Image } from '../../../Viewer/types'
import { calculateDistance } from './calculateDistance'

describe('calculateDistance:', () => {
  it('should calculate with PixelSpacing', () => {
    const MOCK_IMAGE = {
      columnPixelSpacing: 0.7,
      rowPixelSpacing: 0.7,
    } as Image

    expect(calculateDistance(1, MOCK_IMAGE)).toEqual(1.4285714285714288)
    expect(calculateDistance(5, MOCK_IMAGE)).toEqual(7.142857142857143)
    expect(calculateDistance(10, MOCK_IMAGE)).toEqual(14.285714285714286)
    expect(calculateDistance(20, MOCK_IMAGE)).toEqual(28.571428571428573)
  })

  it('should calculate with ImagerPixelSpacing', () => {
    const MOCK_IMAGE = {
      data: {
        string: () => '0.6\\0.6',
      },
    } as unknown as Image

    expect(calculateDistance(1, MOCK_IMAGE)).toEqual(1.6666666666666667)
    expect(calculateDistance(5, MOCK_IMAGE)).toEqual(8.333333333333334)
    expect(calculateDistance(10, MOCK_IMAGE)).toEqual(16.666666666666668)
    expect(calculateDistance(20, MOCK_IMAGE)).toEqual(33.333333333333336)
  })

  it('should be calculate with no PixelSpacing or ImagerPixelSpacing', () => {
    const MOCK_IMAGE = {
      data: {
        string: () => undefined,
      },
    } as unknown as Image

    expect(calculateDistance(1, MOCK_IMAGE)).toEqual(1)
    expect(calculateDistance(5, MOCK_IMAGE)).toEqual(5)
    expect(calculateDistance(10, MOCK_IMAGE)).toEqual(10)
    expect(calculateDistance(20, MOCK_IMAGE)).toEqual(20)
  })

  it('should calculate with null Image', () => {
    expect(calculateDistance(1, null)).toEqual(1)
    expect(calculateDistance(5, null)).toEqual(5)
    expect(calculateDistance(10, null)).toEqual(10)
    expect(calculateDistance(20, null)).toEqual(20)
  })
})
