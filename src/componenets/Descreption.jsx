import React from 'react'
import { useParams } from 'react-router-dom'

const Descreption = ({film}) => {
    const params = useParams()
    const el =film.find(movie=>movie.id==params.id)
  return (
    <div>
        <h3> <br />
            {el.descreption}
        </h3> <br /> <br />
        <iframe width={500} height={500} src={el.trailer} frameborder="0"></iframe>
    </div>
  )
}

export default Descreption;