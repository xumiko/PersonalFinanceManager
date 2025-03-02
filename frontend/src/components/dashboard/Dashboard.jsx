import React, {useState} from 'react';
import './dashboard.css';
import DashboardNavbar from '../dashboardNavbar/DashboardNavbar';
import { Container,Row,Col ,Button, Dropdown} from 'react-bootstrap';
import Transaction from '../transaction/Transaction';
import axios from 'axios';

// // export const Dashboard = () => {
// //   return (
// //     <div>
// //          <h1>Welcome to the Dashboard!</h1>
// //          <p>This is your personalized dashboard.</p>
// //     </div>
// //   )
// // }


const Dashboard = () => {


  // const handleLogout = () => {
  //   // You can add your logout logic here
  //   // Example: clearing localStorage or redirecting to the login page
  //   console.log("Logging out...");
  //   window.location.href = '/login';  // Redirecting to the login page
  // }

  const [showForm, setShowForm] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const handleAddTransactionClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const addTransaction = async (newTransaction) => {

  const transactionData = {
    type: newTransaction.type,
    amount: newTransaction.amount,
    category: newTransaction.category,
    date: newTransaction.date,
    description: newTransaction.description,
  };

    setTransactions([...transactions, transactionData]);

 //Send the transaction data to the backend
 try {
  const response = await axios.post("http://localhost:5000/api/transaction", transactionData);
  console.log("Transaction added:", response.data);
  alert("Transaction added successfully!");
} catch (error) {
  console.error("Error adding transaction:", error.response ? error.response.data : error);
  alert("Failed to add transaction.");
}
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

  


  // Function to get user data from the protected route
const fetchDashboardData = async () => {
  const token = localStorage.getItem('authToken'); // Get token from localStorage
  
  if (!token) {
      console.log('No token found, please log in');
      return;
  }

  try {
      const response = await fetch('/api/dashboard', {
          method: 'GET',
          headers: {
              'x-auth-token': token, // Send the token in the request header
          },
      });
      
      if (response.ok) {
          const data = await response.json();
          console.log('User data:', data);
          // Handle the user data, e.g., update state
      } else {
          console.log('Unauthorized, please log in again');
      }
  } catch (error) {
      console.error('Error fetching dashboard data:', error);
  }
};

// Call this function on component mount or whenever necessary
fetchDashboardData();




  return (
    <div className='title'>
      {/* <DashboardNavbar onLogout={handleLogout} />  Using the DashboardNavbar and passing onLogout function */}
      <h1>Welcome to your Dashboard!</h1>
      {/* Add your Dashboard content here */}
      <Container className='dashboard'>
        <Row className='button-container'>
          
        <Col xs={12} sm={6} md={3} lg={3} className='mb-3'>
        <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filter
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">sort by date</Dropdown.Item>
                <Dropdown.Item href="#">sort by month</Dropdown.Item>
                <Dropdown.Item href="#">sort by year</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            </Col>

            
        <Col xs={12} sm={6} md={3} lg={3} className='mb-3'>

<button onClick={handleAddTransactionClick} className="btn btn-outline-primary">Add Transactions</button>

</Col>


<Col xs={12} sm={6} md={3} lg={3} className='mb-3'>
<Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Categories
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Add Category</Dropdown.Item>
                <Dropdown.Item href="#">All Categories</Dropdown.Item>
                <Dropdown.Item href="#">Update Category</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

</Col>


<Col xs={12} sm={6} md={3} lg={3} className='mb-3'>

<button type="button" className="btn btn-outline-primary">Charts</button>

</Col>


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




//-----------------------------------------------------------------------------------------------------------------------


// const Dashboard = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [transactions, setTransactions] = useState([]);

//   const handleAddTransactionClick = () => {
//     setShowForm(true);
//   };

//   const handleCloseForm = () => {
//     setShowForm(false);
//   };

//   const addTransaction = async (newTransaction) => {
//     // Ensure the data format matches what the backend expects
//     const transactionData = {
//       type: newTransaction.type,
//       amount: newTransaction.amount,
//       category: newTransaction.category,
//       date: newTransaction.date,
//       description: newTransaction.description,
//     };

//     // Update the local state with the new transaction
//     setTransactions([...transactions, transactionData]);

//     // Send the transaction data to the backend
//     try {
//       const response = await axios.post("http://localhost:5000/api/transaction", transactionData);
//       console.log("Transaction added:", response.data);
//       alert("Transaction added successfully!");
//     } catch (error) {
//       console.error("Error adding transaction:", error.response ? error.response.data : error);
//       alert("Failed to add transaction.");
//     }
//   };

//   const handleEditTransaction = (index, updatedTransaction) => {
//     const updatedTransactions = transactions.map((transaction, i) =>
//       i === index ? updatedTransaction : transaction
//     );
//     setTransactions(updatedTransactions);
//   };

//   const handleDeleteTransaction = (index) => {
//     const updatedTransactions = transactions.filter((_, i) => i !== index);
//     setTransactions(updatedTransactions);
//   };

//   return (
//     <div className='title'>
//       <h1>Welcome to your Dashboard!</h1>
//       <Container className='dashboard'>
//         <Row className='button-container'>
//           <Col xs={12} sm={6} md={3} lg={3} className='mb-3'>
//             <Dropdown>
//               <Dropdown.Toggle variant="success" id="dropdown-basic">
//                 Filter
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item href="#">Sort by date</Dropdown.Item>
//                 <Dropdown.Item href="#">Sort by month</Dropdown.Item>
//                 <Dropdown.Item href="#">Sort by year</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </Col>

//           <Col xs={12} sm={6} md={3} lg={3} className='mb-3'>
//             <Button onClick={handleAddTransactionClick} variant="outline-primary">Add Transaction</Button>
//           </Col>

//           <Col xs={12} sm={6} md={3} lg={3} className='mb-3'>
//             <Dropdown>
//               <Dropdown.Toggle variant="success" id="dropdown-basic">
//                 Categories
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item href="#">Add Category</Dropdown.Item>
//                 <Dropdown.Item href="#">All Categories</Dropdown.Item>
//                 <Dropdown.Item href="#">Update Category</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </Col>

//           <Col xs={12} sm={6} md={3} lg={3} className='mb-3'>
//             <Button variant="outline-primary">Charts</Button>
//           </Col>
//         </Row>

//         {showForm && <Transaction onClose={handleCloseForm} onAddTransaction={addTransaction} />}

//         {/* Render transaction data in a table */}
//         <Row>
//           <Col className="transaction-table">
//             <h2>Transaction List</h2>
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>Type</th>
//                   <th>Amount</th>
//                   <th>Category</th>
//                   <th>Date</th>
//                   <th>Description</th>
//                   <th>Edit</th>
//                   <th>Delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {transactions.map((transaction, index) => (
//                   <tr key={index}>
//                     <td>{transaction.type}</td>
//                     <td>{transaction.amount}</td>
//                     <td>{transaction.category}</td>
//                     <td>{transaction.date}</td>
//                     <td>{transaction.description}</td>
//                     <td>
//                       <button
//                         onClick={() => handleEditTransaction(index, promptEditTransaction(transaction))}
//                         className="table-btn-edit"
//                       >
//                         Edit
//                       </button>
//                     </td>
//                     <td>
//                       <button
//                         onClick={() => handleDeleteTransaction(index)}
//                         className="table-btn-delete"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// const promptEditTransaction = (transaction) => {
//   const type = prompt("Enter transaction type:", transaction.type);
//   const amount = prompt("Enter new amount:", transaction.amount);
//   const category = prompt("Enter new category:", transaction.category);
//   const date = prompt("Enter new date:", transaction.date);
//   const description = prompt("Enter new description:", transaction.description);
//   return { type, amount, category, date, description };
// };

// export default Dashboard;

