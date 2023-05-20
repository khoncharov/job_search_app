import { Link } from 'react-router-dom';
import CardItem from '../../types/card-item';
import FavBtnComponent from './favorite/FavBtn';
import './list-item.css';

interface ListItemProps extends CardItem {
  isAlone: boolean;
}

const ListItemComponent = ({
  id,
  profession,
  typeOfWork,
  location,
  paymentFrom,
  paymentTo,
  currency,
  isAlone,
}: ListItemProps) => {
  let payment;

  if (paymentFrom && paymentTo) {
    if (paymentFrom === paymentTo) payment = `${paymentFrom} ${currency}`;
    else payment = `${paymentFrom} - ${paymentTo} ${currency}`;
  } else if (paymentFrom) {
    payment = `от ${paymentFrom} ${currency}`;
  } else if (paymentTo) {
    payment = `до ${paymentTo} ${currency}`;
  } else {
    payment = 'не указана';
  }

  return (
    <li className="card">
      <article className="card-info__wrapper">
        {isAlone ? (
          <>
            <h2 className="card-title-2" id={`title-${id}`}>
              {profession}
            </h2>
            <div>
              <span className="card-payment-2">з/п {payment}</span>
              <span className="card-delimiter-2">•</span>
              <span className="card-type_of_work-2">{typeOfWork}</span>
            </div>
          </>
        ) : (
          <>
            <Link to={`/vacancies/${id}`}>
              <h2 className="card-title" id={`title-${id}`}>
                {profession}
              </h2>
            </Link>
            <div>
              <span className="card-payment">з/п {payment}</span>
              <span className="card-delimiter">•</span>
              <span>{typeOfWork}</span>
            </div>
          </>
        )}
        <p className="card-location">{location}</p>
      </article>
      <FavBtnComponent itemId={id} />
    </li>
  );
};

export default ListItemComponent;
