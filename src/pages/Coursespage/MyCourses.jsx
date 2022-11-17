import React from "react"
import { useNavigate } from "react-router-dom";
import "./courses.css"
import { mycourses } from "../../dummydata"
import Header from "../../components/header/Header"
import Heading from "../../components/heading/Heading"
import { Center } from "@mantine/core";

const MyCourses = () => {
   const navigate = useNavigate()

  function gotoCourseDetail()
  {
     navigate('/courseDetail')
  }
  return (
    <>
    
      <section className='online'>
        <div className='container-mycourse'>
          <Center><Heading subtitle='COURSES' title='Browse Our Online Courses' /></Center>
          <br></br>
          <br></br>
          <div className='content grid3'>
            {mycourses.map((val) => (
              <div className='box'>
               
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
                <button onClick={gotoCourseDetail} className="enroll">Enroll</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
 
export default MyCourses
