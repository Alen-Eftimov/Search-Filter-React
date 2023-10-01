import { useEffect, useState } from 'react';
import './app.scss'
// import { Users } from './users';
import Table from './Table.jsx';
import axios from 'axios';


////////////// BASIC SEARCH ////////////////

// function App() {

//   const [query, setQuery] = useState('');

//   return (
//     <div className="app">
//       <input className="search" placeholder="search" onChange={(e) => setQuery(e.target.value.toLowerCase())} />
//       <ul className='list'>
//         {Users.filter((user) =>
//          user.first_name.toLowerCase().includes(query)
//          ).map((user) => (
//           <li className='listItem' key={user.id}>
//             {user.first_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

////////////// SEARCH ON DATATABLE ////////////////

// function App() {

//   const [query, setQuery] = useState('');
//   const keys = ['first_name', 'last_name', 'email']
//   const search = (data) => {
//     return data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query)))
//   }

//   return (
//     <div className="app">
//       <input
//        className="search" 
//        placeholder="Search..." 
//        onChange={(e) => setQuery(e.target.value.toLowerCase())} 
//       />
//       {<Table data={search(Users)} />}
//     </div>
//   );
// }

// export default App;


////////////// API SEARCH ////////////////

const App = () => {

  const [query, setQuery] = useState("");
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const responsive = await axios.get(`http://localhost:5000?q=${query}`)
      console.log(responsive.data)
      setData(responsive.data)
    }
    if (query.length === 0 || query.length > 2) fetchData()
  }, [query])
  return (
    <div className='app'>
      <input
       className='search' 
       placeholder='Search...'
       onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      {<Table data={data} />}
    </div>
  )
}

export default App

