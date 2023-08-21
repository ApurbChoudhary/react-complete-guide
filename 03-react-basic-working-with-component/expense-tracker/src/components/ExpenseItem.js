import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem (props) {
    return (
        <div className='expense-item'>
            <ExpenseDate expDate={props.expDate}/>
            <div className='expense-item__description'>
                <h2>{props.expType}</h2>
                <div className='expense-item__price'>₹{props.expAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;