/**
 * @jest-environment node
 */

import { isOfficialBusuanziHost } from '@/components/Busuanzi'

describe('isOfficialBusuanziHost', () => {
  it('only enables statistics on the canonical production hostname', () => {
    expect(isOfficialBusuanziHost('allenjia.top')).toBe(true)
    expect(isOfficialBusuanziHost('localhost')).toBe(false)
    expect(isOfficialBusuanziHost('allenjia.vercel.app')).toBe(false)
    expect(isOfficialBusuanziHost('www.allenjia.top')).toBe(false)
  })
})
