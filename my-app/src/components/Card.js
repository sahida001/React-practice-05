
const date = new Date();
const dateName = date.getDate();
const dateMonth = date.getMonth();
const dateYear = date.getFullYear();

function Card(props){
  const {todoTitle, todoDesc} = props;
  return  <div className='card'>
    <h3 className='card-title'>{todoTitle}</h3>
    <p className='card-desc'>{todoDesc}</p>
    <p className='card-Footer'>{dateName + "/"+ dateMonth + "/" + dateYear}</p>
    
  </div>
}

export default Card;