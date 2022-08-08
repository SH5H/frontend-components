import {
  setup,
  drawAnnotation,
  drawAnnotations,
  moveAnnotation,
  deleteAndCheckAnnotationOrMeasurement,
} from '../support/utils'
import { VIEWPORT_WIDTH, VIEWPORT_HEIGHT, $LOADED } from '../support/const'
import {
  POLYGON_ANNOTATIONS,
  INTERSECTING_POLYGON_ANNOTATION,
  SMALLER_THAN_MINIMUM_AREA_POLYGON_ANNOTATION,
} from '../../mocks/polygons'

describe(
  'annotation drawer',
  {
    viewportWidth: VIEWPORT_WIDTH,
    viewportHeight: VIEWPORT_HEIGHT,
    scrollBehavior: false,
  },
  () => {
    const MOVING_DISTANCE = 100

    before(() => {
      setup()
      cy.visit('/annotation')
    })

    it('shows initial annotation', () => {
      cy.get($LOADED).should('be.exist')
      cy.get('[data-cy-tab="drawer"]').click()
    })

    describe('Polygon Annotation', () => {
      const mockPolygonAnnotationLength = POLYGON_ANNOTATIONS.length

      it('count polygon annotation before drawing', () => {
        cy.get('[data-cy-id]').should('have.length', 0)
      })

      it('cancel drawing when drawing intersecting polygons', () => {
        drawAnnotation(INTERSECTING_POLYGON_ANNOTATION)

        cy.get('[data-cy-id]').should('have.length', 0)
      })

      it('cancel drawing if smaller than the minimum area', () => {
        drawAnnotation(SMALLER_THAN_MINIMUM_AREA_POLYGON_ANNOTATION)

        cy.get('[data-cy-id]').should('have.length', 0)
      })

      it('Annotation polygon drawing', () => {
        drawAnnotations(POLYGON_ANNOTATIONS)

        cy.get('[data-cy-id]').should('have.length', mockPolygonAnnotationLength)
      })

      it('delete polygon annotation and count annotation', () => {
        const targetAnnotation = POLYGON_ANNOTATIONS[1]

        deleteAndCheckAnnotationOrMeasurement(targetAnnotation, 'not.exist')
        cy.get('[data-cy-id]').should('have.length', mockPolygonAnnotationLength - 1)
      })

      it('move polygon annotation', () => {
        const targetAnnotation = POLYGON_ANNOTATIONS[2]
        const targetDataAttr = `[data-cy-id="${targetAnnotation.id}"]`
        const movedPolygonPoints =
          '265.5,308.26562499999994 261.5,308.26562499999994 259.5,308.26562499999994 256.5,310.26562499999994 253.5,311.26562499999994 251.49999999999997,312.26562499999994 248.5,314.26562499999994 245.5,316.26562499999994 240.5,319.26562499999994 237.49999999999997,323.26562499999994 234.5,326.26562499999994 230.5,329.26562499999994 228.50000000000003,332.26562499999994 224.49999999999997,335.26562499999994 224.49999999999997,336.26562499999994 220.5,340.26562499999994 218.49999999999997,342.26562499999994 218.49999999999997,344.26562499999994 216.5,346.26562499999994 216.5,347.26562499999994 216.5,350.26562499999994 218.49999999999997,353.265625 218.49999999999997,355.26562499999994 220.5,357.26562499999994 221.5,359.265625 224.49999999999997,361.26562499999994 226.5,363.26562499999994 230.5,367.26562499999994 233.5,368.26562499999994 239.5,371.265625 243.5,372.265625 249.5,374.26562499999994 254.49999999999997,375.26562499999994 257.5,376.26562499999994 262.5,376.26562499999994 265.5,377.26562499999994 271.5,378.265625 275.5,378.265625 279.5,378.265625 281.5,378.265625 282.5,378.265625 283.5,378.265625 284.5,377.26562499999994 285.5,377.26562499999994 287.5,376.26562499999994 289.5,376.26562499999994 291.5,374.26562499999994 292.49999999999994,373.26562499999994 292.49999999999994,373.26562499999994 293.5,371.265625 295.5,367.26562499999994 295.5,365.265625 296.5,363.26562499999994 297.5,360.26562499999994 298.5,355.26562499999994 300.5,351.26562499999994 300.5,349.26562499999994 301.5,347.26562499999994 301.5,344.26562499999994 301.5,342.26562499999994 301.5,340.26562499999994 299.5,336.26562499999994 297.5,334.26562499999994 295.5,331.26562499999994 293.5,327.26562499999994 292.49999999999994,324.26562499999994 290.5,322.26562499999994 289.5,319.26562499999994 289.5,319.26562499999994 287.5,317.26562499999994 284.5,316.26562499999994 281.5,314.26562499999994 278.5,312.26562499999994 278.5,311.26562499999994 276.5,310.26562499999994 276.5,309.26562499999994 275.5,309.26562499999994 274.5,308.26562499999994 273.5,307.26562499999994 273.5,307.26562499999994 273.5,306.26562499999994 272.5,306.26562499999994 272.5,306.26562499999994 272.5,306.26562499999994'

        cy.get('[data-cy-edit="false"]').click()

        moveAnnotation(targetAnnotation, MOVING_DISTANCE)

        // count Line Annotation
        cy.get('[data-cy-id]').should('have.length', mockPolygonAnnotationLength - 1)

        // check moved Points of Line Annotation
        cy.get(`${targetDataAttr} > polygon`).invoke('attr', 'points').should('equal', movedPolygonPoints)
      })
    })
  }
)
