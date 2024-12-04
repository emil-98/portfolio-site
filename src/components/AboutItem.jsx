import React from 'react'

const AboutItem = ({id, name, date, desc, tasks}) => {
  return (
    <div 
      key={id}
      className='max-w-500px p-4'
    >
      <h3>
        {name}
      </h3>
      <p>
        {date}
      </p>
      <p>
        {desc}
      </p>
      {tasks ? <ul>
        {tasks.map((task) => {
          return <li key={task.id}>
            {task.text}
          </li>
        })}
      </ul> : null}
    </div>
  )
}

export default AboutItem