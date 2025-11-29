import { useState, useEffect } from 'react'
import './Projects.css'

// 导入所有项目图片
import shoudi1 from '../assets/images/手推洗地机1.jpeg'
import shoudi from '../assets/images/手推洗地机.jpeg'
import kesw1 from '../assets/images/科sw小1.jpeg'
import kesw2 from '../assets/images/科sw小2.jpeg'
import jqg1 from '../assets/images/机器狗1.jpeg'
import jqg2 from '../assets/images/机器狗2.jpeg'
import shuangshua2 from '../assets/images/双刷洗地机2.jpeg'
import shuangshua from '../assets/images/双刷洗地机.jpg'
import yingbinmin from '../assets/images/迎宾min.jpeg'
import yingbinmin2 from '../assets/images/迎宾min2.jpeg'
import kswz1 from '../assets/images/科sw中1.jpeg'
import kswz2 from '../assets/images/科sw中2.jpeg'
import pudu1 from '../assets/images/pudu1.jpeg'
import pudu2 from '../assets/images/pudu2.jpeg'
import keswxidi1 from '../assets/images/科sw洗地机1.jpeg'
import keswxidi2 from '../assets/images/科sw洗地机2.jpeg'
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

function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [showDetail, setShowDetail] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [])

  // 模拟项目数据
  const projects = [
    {
      id: 1,
      title: 'DEGESHI德戈仕 DX2型号手推自走式洗地机',
      categories: ['xidi'],
      description: '集高效率、强劲吸力、人性化操作和便捷维护于一身，特别适合需要大面积、高频次清洁的商场、工厂、仓库、机场等商业和工业场所。',
      image: shoudi1,
      detailContent: '双刷盘设计: 配备两个500W的高扭矩电机，驱动刷盘高速旋转，覆盖宽度达530mm。\n\n优化刷压: 30-35kg的刷盘压力，既能有效去除顽固污渍，又不会对地面造成过度磨损。\n\n强力回收: 独立的400W大功率吸水电机和830mm的超宽吸扒，能瞬间将污水吸入65L的大容量污水箱，确保地面无残留水渍。\n\n 简易化操作系统: 采用一键式启动，逻辑简单，操作人员无需复杂培训即可快速上手。\n\n集成控制面板: 将主要功能按键和指示灯集成于一处，操作直观便捷，运行状态一目了然，系统稳定性好。\n\n低噪音技术: 通过优化“静音通道”和加装“隔音罩”等设计，有效降低了工作时的运行噪音，提升了对周边环境的影响，创造了更友好的工作环境。',
      detailImage: shoudi
    },
    {
      id: 2,
      title: 'DEEBOTpro K1VAC 科沃斯商用清洁机器人',
      video: getVideoUrl('K1 VAC.mp4'),
      categories: ['xidi'],
      description: '专为地毯清洁设计的吸扫推一体机器人，具备强力吸尘与大容量集尘',
      image: kesw1,
      detailContent: '强效地毯吸尘：凭借20kPa的强劲吸力和创新的V型螺旋滚刷，能够吸净藏匿在地毯深处的灰尘、碎屑和毛发\n\n防缠绕设计：滚刷端侧采用迷宫结构，能有效防止毛发缠绕传动轴，减少因堵塞导致的维护 。\n\n全自动作业：能够与电梯、闸机、门禁等环境设施联动，实现自主乘梯、自主通行和自动回充，完成跨区域、跨楼层的无人化清洁任务 。\n\n多机协同系统：搭载科沃斯自研的HIVE多机协同系统，多台机器人可以共享"智慧大脑"，实现基础设施共享、信息互通和协同清洁作业 。\n\n支持手动与自动模式一键切换，兼顾了自动化操作的便利和人工干预的灵活性。',
      detailImage: kesw2
    },
    {
      id: 3,
      title: 'MagicDog智慧伴侣机器狗',
      video: getVideoUrl('机器狗1.mp4'),
      categories: ['jqg'],
      description: '支具备多重交互模式的智能机器狗，融合娱乐、陪伴和互动展示。',
      image: jqg1,
      detailContent: 'MagicDog的核心魅力在于其情感交互系统，它不仅能对你的触摸（例如头部）做出反应，还能自主表达情绪，进行如撒娇、握手等拟人化互动。通过其官方App，你还可以进行语音交互甚至图形化编程，让它成为家庭中一个有趣的科技玩伴。\n\n凭借13个关节自由度和低噪音大扭矩电机关节，MagicDog能够完成后空翻、太空步等30多种高难度动作。这套动作库让它极具表演观赏性，这也是它能在展会等场合吸引目光的重要原因。',
      detailImage: jqg2
    },
    {
      id: 4,
      title: 'DEGESHI德戈仕 DX4型号双刷驾驶式洗地机',
      video: getVideoUrl('双刷洗地机.mp4'),
      categories: ['xidi'],
      description: '更宽的清洁路径、翻倍的工作效率、更强的刷盘压力和更先进的驱动与控制技术，实现了清洁性能的全面飞跃。其聚氨酯轮毂和霍尔加速器等设计体现了对耐用性和操作体验的更高追求，非常适合需要应对大面积、高强度清洁任务的苛刻环境。',
      image: shuangshua2,
      detailContent: '宽幅设计与强劲动力： 660mm的刷地宽度配合1000mm的吸扒，以及500W的吸水电机，构成了一个高速、高效的清洁系统，工作效率高达6000㎡/小时。\n\n重型刷盘压力： 45kg的刷盘压力，使其能轻松应对工业环境中的各种挑战性污垢。\n\n霍尔加速器： 采用先进的霍尔传感器技术来控制速度，防水性、灵敏度和使用寿命都比传统的电位器式加速器有显著提升，操作响应更精准，故障率更低。\n\n聚氨酯防滑轮毂： 轮毂采用耐磨聚氨酯材料，具有减震、耐磨的特性。不仅能保护地面，还能提供更平稳的推动感，并极大延长了轮子的使用寿命，特别适合在粗糙的环氧树脂或水泥地面上使用。',
      detailImage: shuangshua
    },
    {
      id: 7,
      title: 'PUDU 葫芦机器人',
      video: getVideoUrl('pudu.mp4'),
      categories: ['yb', 'ps'],
      description: '配送与迎宾二合一的广告屏机器人，具备极强通过性与多场景服务能力,适合需要在高流量、复杂环境中实现服务自动化和智能化的场景。。',
      image: pudu1,
      detailContent: '葫芦 Pro 支持定制化的表情、语音和问候内容，可以为品牌或场所打造独特的迎宾体验。此外，它具备引导营销功能，顾客可以通过机器人屏幕上的指引，由它带领至目的地，并在到达后播放"专属广告"，实现精准营销\n\n机身上配备的18.5英寸高清大屏，不仅仅是一个显示器，更是一个移动的广告位。你可以播放促销视频、活动信息等。与传统的固定广告屏相比，移动的机器人更能吸引顾客目光。\n\n它的智能托盘检测功能，通过AI视觉传感器能判断顾客是否已取餐。一旦取餐完成，机器人便可立即自动执行下一个任务，减少了人工确认的环节，让流程更顺畅。\n\n得益于 52厘米 的最小通过宽度，葫芦 Pro 能在餐厅高峰时段拥挤的过道、酒店房间外的走廊等复杂且人流量大的环境中灵活穿行，确保任务不被卡顿。',
      detailImage: pudu2
    },
    {
      id: 8,
      title: 'DEEBOT PRO M1 科沃斯商用清洁机器人',
      video: getVideoUrl('M1.mp4'),
      categories: ['xidi'],
      description: '集洗地、扫地、尘推三种功能于一体、洗地模式续航 3.5小时，充电时间 2小时，搭载激光雷达与AIVI 3D技术，支持自主乘梯、自动避障,支持手动与自动双模式,应对中大型、开阔区域,主打高效、自动化和智能化，适用于办公楼大厅、大型展厅、购物中心、大型车间、医院。',
      image: keswxidi1,
      detailContent: '具备"洗扫推"三合一功能。其浮动加压双滚刷结构能更贴近地面，提升清洁效果。在深度洗地模式下，还能自动添加科沃斯自研的清洁剂，在保证去污效果的同时不损伤地面。\n\n能实现从清洁路径规划、自主乘梯到自动回充的全程自动化作业。通过手机APP和云平台，可以进行远程双端管控，清洁完成后还会自动生成可视化的清洁报告，方便管理。\n\n水电分离设计：机器内部的水路和电路系统是分开的，这样提升了长期运行的稳定性和安全性,污水箱具备自清洁功能，减轻了维护工作量。\n\n机器人能够自主乘坐电梯、通行闸机门禁，并自动返回充电桩进行自动充电、自动加注清水与排放污水，实现了跨楼层、全自动的连续性作业。',
      detailImage: keswxidi2
    },
    {
      id: 9,
      title: 'AELOSlite 入门级人形机器人编程平台',
      video: getVideoUrl('编程机器人.mp4'),
      categories: ['bc'],
      description: '主要面向中小学机器人编程教学和比赛,通过模块化的硬件、直观的编程软件以及丰富的课程和竞赛生态，搭载高阶运动控制算法，动作灵活稳定，帮助学生在动手实践中培养计算思维、创新能力和团队协作精神，是开启人形机器人编程世界的理想工具。',
      image: biancheng,
      detailContent: 'AELOS Lite兼容模块化图形编程，并支持多种传感器扩展。这让学生能亲手为机器人编程，实现如火灾预警、障碍破除等趣味任务，在实践中理解传感器原理、数据读取和逻辑控制。\n\n其17个舵机和头部180度转向赋予了机器人高度的灵活性，能完成行走、转向及各类仿生动作。优异的运动能力也使它在机器人足球、舞蹈表演等竞赛中能快速准确地执行指令。\n\n在软件层面，它提供支持Blockly、Scratch3.0和Python的多样化开发环境，适合从启蒙到高阶的各阶段学生。\n\nAELOS Lite有配套的分级课程体系，内容覆盖科学、技术、工程、数学、编程等多学科知识。它还是国内外权威机器人赛事的官方指定参赛设备，为学生提供了展示和创新实践的平台。',
      detailImage: biancheng1
    }
  ]

  // 项目分类
  const categories = [
    { id: 'all', name: '全部项目' },
    { id: 'xidi', name: '洗地机' },
    { id: 'jqg', name: '机器狗' },
    { id: 'yb', name: '迎宾机器人' },
    { id: 'ps', name: '配送机器人' },
    { id: 'bc', name: '机器人编程平台' }
  ]

  // 筛选项目
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory))

  // 打开项目详情
  const openProjectDetail = (project) => {
    setSelectedProject(project)
    setShowDetail(true)
  }

  // 处理分类切换，同时关闭项目详情
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
    setShowDetail(false)
    setSelectedProject(null)
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
          <h1 className="page-title">产品展示</h1>
          <p className="page-subtitle">探索我们的优秀产品，每一个都是我们专业能力的体现</p>
        </div>
      </section>

      {/* 项目筛选和展示 */}
      <section className="projects-section section">
        <div className="container">
          {/* 项目分类筛选器 */}
          <div className="project-filters">
            <ul className="filter-buttons">
              {categories.map(category => (
                <li key={category.id}>
                  <button 
                    className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 项目筛选和展示 */}
          {showDetail ? (
            // 项目详情页面
            selectedProject && (
              <div className="project-detail-content">
                  <div className="project-detail-content-wrapper">
                      {/* 项目图片 */}
                      <div className="project-detail-images">
                        <div className="project-detail-image">
                          <img src={selectedProject.image} alt={selectedProject.title + ' 概览图'} />
                        </div>
                        <div className="project-detail-image">
                          <img 
                            src={selectedProject.detailImage || selectedProject.image} 
                            alt={selectedProject.title + ' 详情图'} 
                          />
                        </div>
                      </div>
                      
                      {/* 项目视频 */}
                      {selectedProject.video && (
                        <div className="project-detail-video">
                          <h3>产品视频展示</h3>
                          <div className="video-container">
                            <video 
                              controls 
                              className="project-video"
                              poster={selectedProject.image} // 使用项目图片作为视频封面
                              autoPlay // 自动播放
                              muted // 静音播放（大多数浏览器要求自动播放必须静音）
                              playsInline // 内联播放，在移动设备上更好的支持
                              onError={(e) => {
                                // 视频加载失败时显示占位符
                                const videoContainer = e.target.closest('.video-container');
                                if (videoContainer) {
                                  videoContainer.innerHTML = `
                                    <div class="video-placeholder">
                                      <div class="placeholder-icon">📹</div>
                                      <p class="placeholder-text">视频文件暂不可用</p>
                                      <p class="placeholder-subtext">请联系管理员获取完整视频资料</p>
                                      <img src="${selectedProject.image}" alt="${selectedProject.title} 产品图片" class="placeholder-image" />
                                    </div>
                                  `;
                                }
                              }}
                            >
                              <source src={selectedProject.video} type="video/mp4" />
                              您的浏览器不支持视频播放
                            </video>
                          </div>
                        </div>
                      )}
                    </div>
                  <h2 className="project-detail-title">{selectedProject.title}</h2>
                  <div className="project-detail-overview">
                    <h3>产品概述</h3>
                    <p>{selectedProject.description}</p>
                  </div>
                  <div className="project-detail-info">
                    <h3>详细介绍</h3>
                    {selectedProject.detailContent.split('\n').map((paragraph, index) => (
                      paragraph.trim() ? <p key={index}>{paragraph}</p> : null
                    ))}
                  </div>
              </div>
            )
          ) : (
            // 项目列表页面
            <div className="projects-grid">
              {filteredProjects.map(project => (
                <div 
                  key={project.id} 
                  className="project-card"
                  onClick={() => openProjectDetail(project)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="project-image-container">
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                    </div>
        
                  </div>
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 没有项目时的提示 */}
          {!showDetail && filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>该分类下暂无项目</p>
            </div>
          )}
        </div>
      </section>


    </div>
  )
}

export default Projects