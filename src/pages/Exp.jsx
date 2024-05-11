import React from 'react'
import {VerticalTimeline,VerticalTimelineElement}   from 'react-vertical-timeline-component'
import {TbCertificate} from 'react-icons/tb'
import {TbSchool} from 'react-icons/tb'
import "react-vertical-timeline-component/style.min.css";

const Exp = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor='#3e497a'>


      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<TbCertificate />}
        >
          <h3 className="vertical-timeline-element-title">
            OneOrigin
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Bangalore, Karnataka
          </h4>
          <p>Working as a Full stack developer for ASUO (Arizona State University Online) projects</p>
        </VerticalTimelineElement>


      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<TbCertificate />}
        >
          <h3 className="vertical-timeline-element-title">
            JAVA Full Stack
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Bangalore, Karnataka
          </h4>
          <p>Completed Java Full Stack course at “Jspider” Rajajinagar Bengaluru.</p>
        </VerticalTimelineElement>



        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<TbCertificate />}
        >
          <h3 className="vertical-timeline-element-title">
           MERN Full Stack
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Bangalore, Karnataka
          </h4>
          <p>
          Completed MERN Full Stack course at “Jspider” Rajajinagar Bengaluru.
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<TbSchool />}
        >
          <h3 className="vertical-timeline-element-title">
          M.S.Ramaiah University of Applied Sciences, Bangalore, Karnataka
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            B.Tech.
          </h4>

          <p> Automotive Engineering</p>
        </VerticalTimelineElement>


       
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<TbSchool />}
        >
          <h3 className="vertical-timeline-element-title">
          St Philomena's Pu College, Bangalore, Karnataka
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            PUC
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
      
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<TbSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            St Philomena's English School, Bangalore, Karnataka
          </h3>
          <p> 10th</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Exp