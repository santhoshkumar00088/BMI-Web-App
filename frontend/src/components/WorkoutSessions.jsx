import React from 'react'

const WorkoutSession = () => {
  return (
    <section className="workout_session">
    <div className="wrapper">
      <h1>WORKOUT CATEGORIES</h1>
      <p>
      Choose a category that best suits the workout you're searching for.
       Once in the category, use the sort and filter options to find the right workout for your experience and goals.     
      </p>
      <img src="/dumbell.jpeg" alts="" border='5px solid white' width='640px' />
    </div>
    <div className='wrapper'>      
    <h1>MUSCLE BUILDING</h1>
    <p>
    Our workouts database has hundreds of free workout plans designed for building muscle.
     The workouts are created by fitness experts and come with a free downloadable PDF you can reference when training.
      Use the filters below to find the best workout for your goal, training experience and equipment access.
    </p>
    <div className="bootcamps">
      <div>
      <h4>Big and Strong: 8 Week Advanced Strength Building Workout.</h4>
      <p>
      Unlock unmatched strength with this 5-day strength-building workout.
       This plan incorporates power, speed, and explosive movements to help you move serious weight in 8 weeks.
      </p>
      </div>
      <div>
      <h4>Sculpted Strength: The Ultimate 12 Week Bodybuilding Program.</h4>
      <p>
      Build your best physique in three months with this complete routine. 
      This 6-day program focuses on each muscle group, emphasizing muscle shape, size, and definition.
      </p>
      </div>
      <div>
      <h4>3 Day Push/Pull/Legs (PPL) Workout for Beginners</h4>
      <p>
      This push/pull/legs routine is a simple, yet effective workout split that hits the whole body in just 3 days a week,
       and helps you increase strength and build muscle.
      </p>
      </div>
      <div>
      <h4>8 Week Beginner Fat Loss Workout for Women</h4>
      <p>
      This 4-day workout plan combines weight training and cardio to help you get leaner! 
      Each day is separated into upper and lower body sessions with core work mixed into both.
      </p>
      </div>
      
      
    </div>
    </div>
    </section>
  )
}

export default WorkoutSession
