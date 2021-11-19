import { toPrefix } from '../src/util'

describe('toPrefix', () => {
  it('should handle valid names', () => {
    expect(toPrefix('example')).toEqual('EXAMPLE')
    expect(toPrefix('boca')).toEqual('BOCA')
  })

  it('should handle extreme names', () => {
    expect(toPrefix('moducate-boca')).toEqual('MODUCATE_BOCA')
    expect(toPrefix('@moducate/boca')).toEqual('MODUCATE_BOCA')
  })

  it('should reject erroneous names', () => {
    expect(toPrefix('moducate boca')).toBeFalsy()
  })
})
