import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminData } from './Redux/Actions/adminAction';
import { getStudentDataByToken } from './Redux/Actions/studentAction';
import { getSchoolData } from './Redux/Actions/schoolAction';
import 'react-calendar/dist/Calendar.css';
import Routing from './Components/Routing/Routing';
import NetworkError from './Components/NetworkError/NetworkError';

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const dispatch = useDispatch()
  
  useEffect(() => {
     dispatch(getAdminData())
    //  dispatch(getStudentData())
     dispatch(getSchoolData())
     dispatch(getStudentDataByToken())
  },[])
  useEffect(() => {
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleStatusChange);

    window.addEventListener('offline', handleStatusChange);

    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [isOnline]);
  
  return (
    <>
    {
      isOnline ? 
      <Routing /> 
      :<NetworkError />
    }
    </>
  );
}

export default App;
