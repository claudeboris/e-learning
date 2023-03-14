import React from 'react'
//import { Navigate, useNavigate } from 'react-router-dom'

const AdminPrivateRoute = () => {
    /**
     *     const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

     useEffect(() => {
        axios.get("/api/checkingAuthenticated").then(res => {
            if(res.status === 200) {
                setAuthenticated(true)
            } 
            setLoading(false)
        })
        
        return () => {
            setAuthenticated(false)
        };
    }, []); 

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
        if (401 === err.response.status) {
           //Swal("Unauthorized", err.response.data.message, "warning")
           navigate('/');
        } else if(403 === err.response.status) { // Access denied
            //Swal("Forbidden", err.response.data.message, "warning")
            navigate('/Page403')
        } else if(404 === err.response.status) { // Page not found
            //Swal("404 Error", "URL/Page no found", "warning")
            navigate('/Page404')
        }
        return Promise.reject(err);
    });

    if(loading) {
        return <h1>Loading....</h1>
    }

    return (
        <>
            {authenticated ? <MasterLayout  /> : <Navigate to="/login" />};
        </>

    )
     */
}

export default AdminPrivateRoute