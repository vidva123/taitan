import { useState, useEffect } from 'react'
import './About.css'
import companyImage from '../assets/images/公司1.jpeg'

function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  // 公司数据
  const stats = [
    {
      value: '100+',
      label: '合作客户'
    },
    {
      value: '1年',
      label: '行业经验'
    },
    {
      value: '95%',
      label: '客户满意度'
    }
  ]

  return (
    <div className={`about ${isVisible ? 'visible' : ''}`}>
      {/* 页面标题 */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">关于我们</h1>
          <p className="page-subtitle">专业、创新、值得信赖的技术合作伙伴</p>
        </div>
      </section>

      {/* 公司简介 */}
      <section className="company-intro section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2 className="section-title">
                <span>公司简介</span>
              </h2>
              <p>广西贺州市泰坦人工智能科技有限公司坐落于平桂区大数据产业园，立足广西、面向全国，专注于人工智能技术的研发与实际应用。</p>
              <p>公司聚焦智能交易系统与数据分析服务，致力于推动行业智能化升级，打造区域人工智能产业发展高地。</p>
              <p>作为多家顶尖机器人厂商的合作伙伴，我们提供智能机器人等硬件的租赁与购置服务，让企业能以更灵活的方式，低成本拥抱智能化。</p>
            </div>
            <div className="intro-image">
              <img src={companyImage} alt="公司办公环境" />
            </div>
          </div>
        </div>
      </section>

      {/* 公司数据统计 */}
      <section className="company-stats section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 使命愿景价值观 */}<section className="mission section">
        <div className="container">
          <h2 className="section-title">
            <span>我们的理念</span>
          </h2>
          <div className="mission-grid">
            <div className="mission-item">
              <div className="mission-icon"></div>
              <h3 className="mission-title">公司使命</h3>
              <p className="mission-description">让前沿人工智能,成为驱动企业与区域发展的澎湃动力</p>
            </div>
            <div className="mission-item">
              <div className="mission-icon"></div>
              <h3 className="mission-title">公司愿景</h3>
              <p className="mission-description">成为广受信赖的人工智能综合服务领军者,构建繁荣的本地AI生态</p>
            </div>
            <div className="mission-item">
              <div className="mission-icon"></div>
              <h3 className="mission-title">核心价值观</h3>
              <p className="mission-description">客户为先,价值共创,技术为本,持续发展</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default About