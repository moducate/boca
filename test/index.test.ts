import { $parse } from '../src'

describe('$parse', () => {
  it('should parse values', () => {
    process.env = { TEST_HELLO: 'hello world', npm_package_name: 'test' }
    const parsed = $parse()

    expect(parsed).toMatchObject({ hello: 'hello world' })
  })

  it('should parse nested values', () => {
    process.env = { TEST_HELLO__THERE: 'general kenobi', npm_package_name: 'test' }
    const parsed = $parse()

    expect(parsed).toMatchObject({ hello: { there: 'general kenobi' } })
  })

  it('should format keys with underscores', () => {
    process.env = { TEST_HELLO_THERE: 'general kenobi', npm_package_name: 'test' }
    const parsed = $parse()

    expect(parsed).toMatchObject({ helloThere: 'general kenobi' })
  })

  it('should parse numbers', () => {
    process.env = { TEST_X: '1', TEST_Y: '1.25', npm_package_name: 'test' }
    const parsed = $parse()

    expect(parsed).toMatchObject({ x: 1, y: 1.25 })
  })

  it('should parse booleans', () => {
    process.env = { TEST_X: 'false', TEST_Y: 'true', npm_package_name: 'test' }
    const parsed = $parse()

    expect(parsed).toMatchObject({ x: false, y: true })
  })

  it('should use the supplied prefix if defined', () => {
    process.env = { TEST_X: 'hello', BOCA_Y: 'world', npm_package_name: 'boca' }
    const parsed = $parse({ prefix: 'test' })

    expect(parsed).toMatchObject({ x: 'hello' })
  })

  it('should use the NPM package name if opts.prefix is not defined', () => {
    process.env = { TEST_X: 'hello', BOCA_Y: 'world', npm_package_name: 'boca' }
    const parsed = $parse({ prefix: undefined })

    expect(parsed).toMatchObject({ y: 'world' })
  })

  it('should use the current working dir\'s name if opts.prefix and npm_package_name are not defined', () => {
    const spy = jest.spyOn(process, 'cwd')
    spy.mockReturnValue('/workspaces/boca')

    process.env = { TEST_X: 'hello', BOCA_Y: 'world', BOCA_Z: 'boca', npm_package_name: undefined }
    const parsed = $parse({ prefix: undefined })

    expect(parsed).toMatchObject({ z: 'boca' })
  })

  it('should reject invalid prefix names', () => {
    expect(() => $parse({ prefix: 'boca!' })).toThrowError()
  })
})
