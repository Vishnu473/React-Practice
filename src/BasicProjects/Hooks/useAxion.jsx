import axios from "axios";
import { useState, useEffect } from "react";

const useAxion = (url,category) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        setLoading(true)
        setError(null)

        

        const apiUrl = url+category;
        axios
            .get(apiUrl)
            .then(res => {
                const meals = res.data?.meals || [];
                console.log(meals)
                setData(meals);
                setLoading(false);
                setError(null)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
                setData([])
                console.log('Axios error',err);
            })
    }, [category])

    return {data,loading,error};
}

export default useAxion;