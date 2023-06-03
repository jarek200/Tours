import { useState } from 'react'
export default function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false)

  return (
    <>
      <article className='single-tour single-tour-hover'>
        <img src={image} alt={name} className='img' />
        <span className='tour-price'>${price}</span>
        <div className='tour-info'>
          <h5>{name}</h5>
          <p>
            {readMore ? info : info.substring(0, 200)} ...
            <button className='info-btn' onClick={() => setReadMore(!readMore)}>
              {readMore ? 'Show Less' : 'Read More'}
            </button>{' '}
          </p>

          <button className='btn btn-block delete-btn' onClick={() => removeTour(id)}>
            Remove tour
          </button>
        </div>
      </article>
    </>
  )
}
