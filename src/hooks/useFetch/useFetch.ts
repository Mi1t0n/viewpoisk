import {DependencyList, useEffect, useState} from "react";
import {instance} from "../../api/api";

export default function useFetch<T>(path: string, dep: DependencyList = []): [T, boolean, string] {

    const [response, setResponse] = useState<Partial<T>>({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        setLoading(true)
        instance
            .get(`${path}`)
            .then(res => setResponse(res.data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, dep)


    return [response as T, loading, error]
}