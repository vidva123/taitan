import { useState, useEffect } from 'react'
import './Projects.css'

// 只导入编程机器人相关的图片资源
import biancheng from '../assets/images/编程机器人.jpeg'
import biancheng1 from '../assets/images/编程机器人1.jpeg'

// 获取视频文件的公共URL（用于GitHub Pages部署）
const getVideoUrl = (videoName) => {
  // 在生产环境中使用构建后的视频文件路径
  if (process.env.NODE_ENV === 'production') {
    // 直接返回构建后的视频文件路径
    return `./assets/videos/${videoName}`;
  }
  // 在开发环境中使用原始视频文件路径
  return `../assets/videos/${videoName}`;
};

function ProjectsTest() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [showDetail, setShowDetail] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  // 只包含编程机器人一个项目
  const projects = [
    {
      id: 1,
      title: 'AELOSlite 入门级人形机器人编程平台',
      video: getVideoUrl('编程机器人.mp4'),
      categories: ['bc'],
      description: '主要面向中小学机器人编程教学和比赛,通过模块化的硬件、直观的编程软件以及丰富的课程和竞赛生态，搭载高阶运动控制算法，动作灵活稳定，帮助学生在动手实践中培养计算思维、创新能力和团队协作精神，是开启人形机器人编程世界的理想工具。',
      image: biancheng,
      detailContent: 'AELOS Lite兼容模块化图形编程，并支持多种传感器扩展。这让学生能亲手为机器人编程，实现如火灾预警、障碍破除等趣味任务，在实践中理解传感器原理、数据读取和逻辑控制。\n\n其17个舵机和头部180度转向赋予了机器人高度的灵活性，能完成行走、转向及各类仿生动作。优异的运动能力也使它在机器人足球、舞蹈表演等竞赛中能快速准确地执行指令。\n\n在软件层面，它提供支持Blockly、Scratch3.0和Python的多样化开发环境，适合从启蒙到高阶的各阶段学生。\n\nAELOS Lite有配套的分级课程体系，内容覆盖科学、技术、工程、数学、编程等多学科知识。它还是国内外权威机器人赛事的官方指定参赛设备，为学生提供了展示和创新实践的平台。',
      detailImage: biancheng1
    }
  ]

  // 打开项目详情
  const openProjectDetail = (project) => {
    setSelectedProject(project)
    setShowDetail(true)
  }

  // 返回项目列表
  const closeProjectDetail = () => {
    setShowDetail(false)
    setSelectedProject(null)
  }

  return (
    <div className={`projects ${isVisible ? 'visible' : ''}`}>
      {/* 页面标题 */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">视频测试页面</h1>
          <p className="page-subtitle">测试编程机器人视频文件是否能正常显示</p>
        </div>
      </section>

      {/* 项目展示 */}
      <section className="projects-section section">
        <div className="container">
          {showDetail ? (
            // 项目详情页面
            selectedProject && (
              <div className="project-detail-content">
                <div className="project-detail-content-wrapper">
                  {/* 返回按钮 */}
                  <button className="back-button" onClick={closeProjectDetail}>
                    ← 返回列表
                  </button>
                  
                  {/* 项目标题 */}
                  <h2 className="project-detail-title">{selectedProject.title}</h2>
                  
                  {/* 视频播放器 */}
                  {selectedProject.video && (
                    <div className="project-video-container">
                      <h3>产品演示视频</h3>
                      <video 
                        controls 
                        poster={selectedProject.image} 
                        autoPlay 
                        muted 
                        playsInline
                        className="project-video"
                        onError={(e) => {
                          console.error('视频加载失败:', e);
                          e.target.style.display = 'none';
                          const errorDiv = document.createElement('div');
                          errorDiv.className = 'video-error';
                          errorDiv.innerHTML = '视频加载失败，请检查网络连接或视频文件路径';
                          e.target.parentNode.appendChild(errorDiv);
                        }}
                      >
                        <source src={selectedProject.video} type="video/mp4" />
                        您的浏览器不支持视频播放。
                      </video>
                      <p className="video-info">视频文件大小: 18.6MB</p>
                    </div>
                  )}
                  
                  {/* 项目描述 */}
                  <div className="project-detail-description">
                    <p>{selectedProject.description}</p>
                  </div>
                  
                  {/* 详细内容 */}
                  <div className="project-detail-full">
                    <h3>产品特点</h3>
                    {selectedProject.detailContent.split('\\n\\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  
                  {/* 项目图片 */}
                  <div className="project-detail-images">
                    <img src={selectedProject.detailImage} alt={selectedProject.title} />
                  </div>
                </div>
              </div>
            )
          ) : (
            // 项目列表
            <div className="projects-grid">
              {projects.map(project => (
                <div key={project.id} className="project-card" onClick={() => openProjectDetail(project)}>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-meta">
                      <span className="project-category">编程机器人</span>
                      <span className="project-video-indicator">包含视频演示</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default ProjectsTest