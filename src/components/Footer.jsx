import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>广西贺州市泰坦人工智能科技有限公司</h3>
            <p>致力于为客户创造最大价值</p>
          </div>
          
          <div className="footer-links">
            <h4>快速链接</h4>
            <ul>
              <li><Link to="/">首页</Link></li>
              <li><Link to="/about">关于我们</Link></li>
              <li><Link to="/projects">产品展示</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>联系我们</h4>
            <ul>
              <li>地址：广西壮族自治区贺州市大数据产业园4栋1楼</li>
              <li>电话：18176772288</li>
              <li>邮箱：53739692@qq.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 泰坦人工智能科技有限公司. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer