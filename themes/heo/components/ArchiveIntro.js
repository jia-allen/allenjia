/**
 * 合集页的序言区。
 * 这里保留“知行录”的主题感，但不承担宣传或转化功能。
 */
const ArchiveIntro = () => {
  return (
    <section id='archive-intro' aria-labelledby='archive-intro-title'>
      <div className='archive-intro-heading'>
        <p className='archive-intro-kicker'>COLLECTION / 01</p>
        <h1 id='archive-intro-title'>知行录</h1>
        <p className='archive-intro-quote'>知者行之始，行者知之成。——王阳明</p>
      </div>

      <div className='archive-intro-notes' aria-label='知行录寄语'>
        <p>写下来的，才是自己的。</p>
        <p>知行合一，行稳致远。</p>
        <p>记录走过的路，也整理走过的脑子。</p>
      </div>
    </section>
  )
}

export default ArchiveIntro
