import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import companyImage from '../assets/images/公司4.jpeg'
import projectImage from '../assets/images/科sw洗地机1.jpeg'
import yingbinmin from '../assets/images/迎宾min.jpeg'
import company3 from '../assets/images/公司3.jpeg'

function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [showContactCard, setShowContactCard] = useState(false)

  const toggleContactCard = () => {
    setShowContactCard(!showContactCard)
    // 点击其他地方关闭名片
    if (!showContactCard) {
      setTimeout(() => {
        document.addEventListener('click', closeContactCardOnClickOutside)
      }, 10)
    }
  }

  const closeContactCardOnClickOutside = (e) => {
    if (!e.target.closest('.contact-button') && !e.target.closest('.contact-card')) {
      setShowContactCard(false)
      document.removeEventListener('click', closeContactCardOnClickOutside)
    }
  }

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
    
    // 设置英雄区域的背景图片
    document.documentElement.style.setProperty('--hero-bg-image', `url(${company3})`)
  }, [])

  // 模拟项目数据
  const projects = [
    {
      id: 1,
      title: 'DEEBOTpro K1VAC 科沃斯商用清洁机器人',
      description: '专为地毯清洁设计的吸扫推一体机器人，具备强力吸尘与大容量集尘',
      image: projectImage
    },
    {
      id: 2,
      title: '猎户星空豹小秘mini机器人',
      description: '多功能迎宾服务机器人，支持"1+N"场景定制，适用于多种行业。',
      image: yingbinmin
    }
   
  ]

  // 模拟服务数据
  const services = [
    {
      id: 1,
      title: '智能产品租售',
      description: '提供智能机器人等AI硬件设备的灵活租赁与购买方案，降低企业智能化门槛',
      
    },
    {
      id: 2,
      title: '体验智能产品',
      description: '为客户提供真实的智能产品体验，展示其功能和价值',
      
    }
    
  ]



  return (
    <div className={`home ${isVisible ? 'visible' : ''}`}>
      {/* 英雄区域 */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">广西贺州市泰坦人工智能科技有限公司，
              <span className="hero-highlight">引领智能科技未来</span>
            </h1>
            <p className="hero-subtitle">致力于为客户创造最大价值</p>
            <div className="hero-cta">
              <Link to="/projects" className="btn">查看我们的项目</Link>
              <button className="btn btn-secondary contact-button" onClick={toggleContactCard}>联系我们</button>
            </div>
          </div>
        </div>
      </section>

      {/* 关于我们简介 */}
      <section className="about-preview section">
        <div className="container">
          <div className="about-preview-content">
            <div className="about-preview-text">
              <h2 className="section-title">
                <span>关于我们</span>
              </h2>
             <p>广西贺州市泰坦人工智能科技有限公司坐落于平桂区大数据产业园，立足广西、面向全国，专注于人工智能技术的研发与实际应用。</p>
              <p>公司聚焦智能交易系统与数据分析服务，致力于推动行业智能化升级，打造区域人工智能产业发展高地。</p>
              <p>作为多家顶尖机器人厂商的合作伙伴，我们提供智能机器人等硬件的租赁与购置服务，让企业能以更灵活的方式，低成本拥抱智能化。</p>
              <Link to="/about" className="btn">了解更多</Link>
            </div>
            <div className="about-preview-image">
              <img src={companyImage} alt="关于我们" />
            </div>
          </div>
        </div>
      </section>

      {/* 服务展示 */}
      <section className="services section">
        <div className="container">
          <h2 className="section-title">
            <span>我们的服务</span>
          </h2>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 项目展示预览 */}
      <section className="projects-preview section">
        <div className="container">
          <h2 className="section-title">
            <span>精选项目</span>
          </h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <Link to="/projects" className="project-link">查看详情 →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="projects-cta">
            <Link to="/projects" className="btn btn-secondary">查看更多项目</Link>
          </div>
        </div>
      </section>

      {/* 联系呼吁 */}
      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">准备好开始您的下一个项目了吗？</h2>
            <p className="cta-subtitle">联系我们，我们将竭诚为您服务。</p>
            <button className="btn contact-button" onClick={toggleContactCard}>立即联系</button>
          </div>
        </div>
      </section>

      {/* 联系名片 */}
      {showContactCard && (
        <div className="contact-card">
          <h3>广西贺州市泰坦人工智能科技有限公司</h3>
          <p className="contact-name">联系人：黄国亮</p>
          <p className="contact-phone">电话：18176772288</p>
          <p className="contact-email">邮箱：53739692@qq.com</p>
          <p className="contact-address">地址：广西壮族自治区贺州市大数据产业园4栋1楼</p>
        </div>
      )}
    </div>
  )
}

export default Home