const HomeManifesto = () => {
  return (
    <section
      id='home-manifesto'
      className='wow fadeInUp'
      aria-labelledby='home-manifesto-title'
    >
      <div className='home-manifesto-heading'>
        <span className='home-manifesto-mark' aria-hidden='true'>
          A
        </span>
        <div>
          <p className='home-manifesto-kicker'>ALLEN&apos;S NOTE</p>
          <h2 id='home-manifesto-title'>为什么写博客</h2>
        </div>
      </div>

      <p className='home-manifesto-copy'>
        我一直相信，<strong>博客不是过时的东西。</strong>
        短视频负责让人快速看见你，社交媒体负责让观点流动，而博客负责沉淀你的长期信用。一个人如果能持续公开输出，时间会慢慢把这些内容变成他的简历、作品集、信任资产和机会入口。
      </p>
    </section>
  )
}

export default HomeManifesto
