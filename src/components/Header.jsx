import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showContactCard, setShowContactCard] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>广西贺州市泰坦人工智能科技有限公司</h1>
          </Link>
          
          <nav className="nav">
            <ul className="nav-links">
              <li><Link to="/" className="nav-link">首页</Link></li>
              <li><Link to="/about" className="nav-link">关于我们</Link></li>
              <li><Link to="/projects" className="nav-link">项目展示</Link></li>
              <li><button className="contact-button" onClick={toggleContactCard}>联系我们</button></li>
            </ul>
          </nav>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className={`menu-icon ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
      
      {/* 移动端菜单 */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-links">
          <li><Link to="/" className="mobile-link" onClick={toggleMenu}>首页</Link></li>
          <li><Link to="/about" className="mobile-link" onClick={toggleMenu}>关于我们</Link></li>
          <li><Link to="/projects" className="mobile-link" onClick={toggleMenu}>项目展示</Link></li>
          <li><button className="contact-button mobile-contact" onClick={(e) => {
            toggleContactCard()
            toggleMenu()
          }}>联系我们</button></li>
        </ul>
      </div>
      
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

    </header>
  )
}

export default Header