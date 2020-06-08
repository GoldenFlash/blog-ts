import React from "react"
import styles from "./about.module.scss"

function About() {

  return (
    <div id="capture" className={styles.container}>
      <aside className={styles.side}>
        <div className={styles.header}>
          <div className={styles.avatar} />
          <span className={styles.name}>王伟</span>
          <span className={styles.purpose}>求职意向：前端开发</span>

        </div>
        <HeaderLine name="个人信息">
          <InfoList label="学历：" value="本科"></InfoList>
          <InfoList label="毕业时间：" value="2017"></InfoList>
          <InfoList label="工作经验：" value="3年"></InfoList>
          <InfoList label="电话：" value="18655483280"></InfoList>
          <InfoList label="邮箱：" value="892458829@qq.com"></InfoList>
          <InfoList label="地址：" value="上海市浦东新区"></InfoList>
        </HeaderLine>

        <HeaderLine name="教育背景">
          <InfoList label="学校：" value="安庆师范大学"></InfoList>
          <InfoList label="专业：" value="物理学"></InfoList>
          <InfoList label="时间：" value="2013.09 ~ 2017.07"></InfoList>
        </HeaderLine>

      </aside>
      <section className={styles.content}>

        <HeaderLine name="工作经历">
          <div className={styles.company}>
            <div className={styles.company_title}>
              <span>2018.08 至今</span>
              <span>上海丽正科技</span>
              <span>前端开发</span>
            </div>
            <ul className={styles.detail}>
              <li>
                负责前端开发，包括web端vue项目开发，与移动端react-native项目开发
              </li>
            </ul>
          </div>

          <div className={styles.company}>
            <div className={styles.company_title}>
              <span>2017.07 至 2018.08</span>
              <span>上海易宠</span>
              <span>前端开发</span>
            </div>
            <ul className={styles.detail}>
              <li>
                负责微信小程序的开发和维护
              </li>
            </ul>
          </div>
        </HeaderLine>

        <HeaderLine name="项目经验">
          <div className={styles.project}>
            <h3 className={styles.project_title}>哈尔滨环境质量监测（移动端app）</h3>
            <div className={styles.project_content}>
              <p>
                <strong>项目介绍：</strong>
                <span>
                  此项目是哈尔滨环境监测站的环境监测系统，用于从任务下发到完成采样到检测的一整套完整监测业务处理流程，数据上报，不同级别审核，查看，任务流转等，除主要的监测业务以外，还包含考勤打卡，仪器设备出库入库，物资采购
                  {/* 项目使用react-native构建的跨平台移动app */}
                </span>
              </p>
              <p>
                <strong>技术栈：</strong>
                <span className={styles.usedSkill}>react/react-native/redux/relam本地数据库/CodePush热更新/JPush极光推送</span>
              </p>
            </div>
          </div>

          <div className={styles.project}>
            <h2 className={styles.project_title}>内蒙古水环境质量（移动端app）</h2>
            <div className={styles.project_content}>
              <p >
                <strong>项目介绍：</strong>
                <span>此项目主要是内蒙古水环境质量监测数据的展示，与分析，通过Echart图表工具对数据进行格式化，对各项指标进行对比分析，使用地图展示各地区各河流断面的水质差异</span>
              </p>
              <p>
                <strong>技术栈：</strong>
                <span className={styles.usedSkill}>react/react-native/Echart/rn-map</span>
              </p>
            </div>
          </div>

          <div className={styles.project}>
            <h3 className={styles.project_title}>哈尔滨环境质量监测（web端）</h3>
            <div className={styles.project_content}>
              <p>
                <strong>项目介绍：</strong>
                <span>此项目是哈尔滨环境质量监测的网页端，主要功能同移动端，网页版页面较大，方便数据填写，可以展示更多内容，可以连接打印机打印表格文件 室内办公时比较方便</span>
              </p>
              <p>
                <strong>技术栈：</strong>
                <span className={styles.usedSkill}>vue/vuex/vue-router</span>
              </p>
            </div>
          </div>

          <div className={styles.project}>
            <h3 className={styles.project_title}>个人博客系统</h3>
            <div className={styles.project_content}>
              <p>
                <strong>项目介绍：</strong>
                <span>
                  个人使用的博客系统，包含文章列表，分类归档，文章编辑，发布，该项目包含前端，后台，数据库
                  前端使用react，后台使用node（express框架），数据库mongodb，使用nginx部署在阿里云服务器上
                </span>
              </p>
              <p>
                <strong>技术栈：</strong>
                <span className={styles.usedSkill}>react/redux/typeScript/node/mongodb/nginx</span>
              </p>
              <p>
                <strong>项目地址：</strong>
                <span className={styles.usedSkill}>
                  <a href="https://101.132.173.11/" target="_blank" >地址</a>
                </span>
              </p>
            </div>
          </div>
        </HeaderLine>

        <HeaderLine name="自我评价" >
          <ul className={styles.aboutme}>
            <li>
              <p>熟练 <strong>HTML、DIV + CSS</strong> 的页面布局，能根据设计图像素级完成页面制作</p>
            </li>
            <li>
              <p>熟悉 <strong>HTML5</strong> 及语义化，了解 <strong>Canvas</strong> 动画制作，掌握 <strong>CSS 3 动画、过渡效果</strong>等常用技术</p>
            </li>
            <li>
              <p>熟悉<strong>原生 JavaScript、ES6</strong>，了解 <strong>TypeScript</strong></p>
            </li>
            <li>
              <p>熟悉 react 常用功能，理解如<strong>生命周期、组件、虚拟 DOM hooks</strong>, 熟练使用<strong>redux</strong> </p>
            </li>
            <li>
              <p>熟悉 <strong>react-native</strong> 跨平台移动app开发</p>
            </li>
            <li>
              <p>熟悉 Vue 常用功能，理解如<strong>生命周期、组件、虚拟 DOM、数据响应式</strong>等概念，能够使用 Vue 全家桶开发项目</p>
            </li>
            <li>
              <p>熟悉模块化、工程化开发流程，能够配置 <strong>Webpack</strong></p>
            </li>

            <li>
              <p>了解 <strong>HTTP</strong> 相关知识，了解常见的 Web <strong>性能优化</strong>方案</p>
            </li>
            <li>
              <p>了解 <strong>Node.js</strong>，能够开发简单的后台服务器</p>
            </li>
          </ul>
        </HeaderLine>
      </section>
    </div>
  )
}


export default About


function HeaderLine(props: any) {
  return (
    <div className={styles.headerline}>
      <div className={styles.headerline_title}>
        <span>{props.name}</span>
      </div>
      <div className={styles.headerline_content}>
        {props.children}
      </div>
    </div>
  )
}

function InfoList(props: any) {
  return (
    <div className={styles.info}>
      <div className={styles.label}>
        <label>{props.label}</label>
      </div>
      <div className={styles.value}>
        <span>{props.value}</span>
      </div>
    </div>
  )
}
