import React, {useState} from 'react';
import './dashboard.css';
import DashboardNavbar from '../dashboardNavbar/DashboardNavbar';
import { Container,Row,Col } from 'react-bootstrap';
import Transaction from '../transaction/Transaction';

// export const Dashboard = () => {
//   return (
//     <div>
//          <h1>Welcome to the Dashboard!</h1>
//          <p>This is your personalized dashboard.</p>
//     </div>
//   )
// }


const Dashboard = () => {


  const handleLogout = () => {
    // You can add your logout logic here
    // Example: clearing localStorage or redirecting to the login page
    console.log("Logging out...");
    window.location.href = '/login';  // Redirecting to the login page
  }

  const [showForm, setShowForm] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const handleAddTransactionClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleEditTransaction = (index, updatedTransaction) => {
    const updatedTransactions = transactions.map((transaction, i) =>
      i === index ? updatedTransaction : transaction
    );
    setTransactions(updatedTransactions);
  };

  const handleDeleteTransaction = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
  };

  return (
    <div className='title'>
      {/* <DashboardNavbar onLogout={handleLogout} />  Using the DashboardNavbar and passing onLogout function */}
      <h1>Welcome to your Dashboard!</h1>
      {/* Add your Dashboard content here */}
      <Container className='dashboard'>
        <Row className='button-container'>

        <Col xs={12} sm={6} md={4} lg={3} className='mb-3'>
        
        <button onClick={handleAddTransactionClick} className="btn btn-outline-primary">Add Transactions</button>
        
        </Col>
        
<button type="button" className="btn btn-outline-primary">Add Category</button>
<button type="button" className="btn btn-outline-primary">All Categories</button>
<button type="button" className="btn btn-outline-primary">Charts</button>

{/* <button type="button" className="btn btn-outline-warning">Warning</button>
<button type="button" className="btn btn-outline-info">Info</button> */}

        </Row>

        {showForm && <Transaction onClose={handleCloseForm} onAddTransaction={addTransaction} />}


         {/* Render transaction data in a table */}
         <Row>
          <Col className="transaction-table">
            <h2>Transaction List</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                      <td>{transaction.type}</td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.category}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>
                      <button
                        onClick={() => handleEditTransaction(index, promptEditTransaction(transaction))}
                        className="table-btn-edit">
                        Edit
                      </button>
                      </td>
                      <td>
                      <button
                        onClick={() => handleDeleteTransaction(index)}
                        className="table-btn-delete">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>

     </Container>
    </div>

  );
};

const promptEditTransaction = (transaction) => {
  const type = prompt("Enter transaction type:", transaction.type);
  const amount = prompt("Enter new amount:", transaction.amount);
  const category = prompt("Enter new category:", transaction.category);
  const date = prompt("Enter new date:", transaction.date);
  const description = prompt("Enter new description:", transaction.description);
  return { type,amount,category,date, description };
};


export default Dashboard;




