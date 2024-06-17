const fetchData = (page, setLoading, setData, setError, setHasMore,) => {
    setLoading(true)
    fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=3`)
        .then((response) => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
            }
            return response.json()
        })
        .then((data) => {
            const sortedUsers = data.users.sort((a, b) => new Date(b.registration_timestamp) - new Date(a.registration_timestamp))
            setData((prevData) => [...prevData, ...sortedUsers])
            setHasMore(data.links.next_url !== null)
            setLoading(false)
        })
        .catch((error) => {
            setError(error.message)
            setLoading(false)
        })
    console.log(data, error, loading)
}

export default fetchData