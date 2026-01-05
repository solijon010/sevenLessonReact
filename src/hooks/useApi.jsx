import { useEffect, useState } from "react"
import { useActionData } from "react-router-dom"
import { baseAxios } from "../api/baseAxios";

function useApi() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true)
        try {
            const response = await baseAxios()
            setData(response.data)
        }
        catch(error ) {
            setError(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])
  return (
    {data, loading, error}
  )
}

export default useApi