export default function Tour({ id, name, info, image, price, removeTour }) {
  return (
    <>
      <article className='single-tour single-tour-hover'>
        <img src={image} alt={name} className='img' />
        <span className='tour-price'>${price}</span>
        <div className='tour-info'>
          <h5>{name}</h5>
          <p>{info}</p>
          <button className='btn btn-block delete-btn' onClick={() => removeTour(id)}>
            Remove tour
          </button>
        </div>
      </article>
    </>
  )
}
