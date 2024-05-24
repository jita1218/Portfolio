import React from 'react'
import './qlf.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBookReader } from "react-icons/fa";


const Qlf = () => {
  return (
    <div className='qlf' id='qualification'>
      <div className="title"> 
      <h1 className='h1'>Qualifications</h1>
      </div>
      <div className="vertical_components">
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-bg-variant)' }}
    contentArrowStyle={{ borderRight: '7px solid transparent' }}
    date="2022 - present"
    iconStyle={{ background: 'var(--color-primary-variant)', color: 'var(--color-bg)' }}
    icon={<FaBookReader />  }
  >
    <h3 className="vertical-timeline-element-title">B.Tech 
    </h3>
    <h3 className="vertical-timeline-element-title">
    Computer Science and Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">NIT , Silchar</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-bg-variant)' }}
    contentArrowStyle={{ borderRight: '7px solid  transparent' }}
    date="2019 - 2020"
    iconStyle={{  background: 'var(--color-primary-variant)', color: 'var(--color-bg)' }}
    icon={<FaBookReader />  }
  >
    <h3 className="vertical-timeline-element-title">12th standard</h3>
    <h4 className="vertical-timeline-element-subtitle">Jaipur, Rajasthan</h4>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-bg-variant)' }}
    contentArrowStyle={{ borderRight: '7px solid  transparent' }}
    date="2017 - 2018"
    iconStyle={{  background: 'var(--color-primary-variant)', color: 'var(--color-bg)' }}
    icon={<FaBookReader />  }
  >
    <h3 className="vertical-timeline-element-title">10th standard</h3>
    <h4 className="vertical-timeline-element-subtitle">Didwana , Rajasthan</h4>
    <p>
      
    </p>
  </VerticalTimelineElement>
  
</VerticalTimeline>

      </div>
      <div class="devicer">
      
    </div>
    </div>
  )
}

export default Qlf
