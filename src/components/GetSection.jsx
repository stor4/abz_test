import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import fetchData from '../functions/fetchData'
import Preloader from './Preloader'

function GetSection({reload, setReload}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)


    // console.log(data)

    const fetchData = (page) => {
        setLoading(true)
        fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
            .then((response) => {
                if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
                }
                return response.json()
            })
            .then((data) => {
                const sortedUsers = data.users.sort((a, b) => new Date(b.registration_timestamp) - new Date(a.registration_timestamp))
                if (page === 1) {
                    setData(sortedUsers)
                } else {
                    setData((prevData) => [...prevData, ...sortedUsers])
                }
                setHasMore(data.links.next_url !== null)
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message)
                setLoading(false)
            })
        // console.log(data, error, loading)
    }

    useEffect(() => {
        setPage(1)
        setData([])
    }, [reload])

    useEffect(() => {
        fetchData(page)
    }, [page, reload])



    const showMore = () => {
        if (hasMore) {
            setPage((prevPage) => prevPage + 1)
        }
    }

  return (
    <div className='get'>
        <div className="get__container container">
            <p className="get__title">Working with GET request</p>
            <div className="get__grid">
                {data && data.map((item, key) => (
                    <UserCard key={key} img={item.photo} name={item.name} job={item.position} email={item.email} phone={item.phone}/>
                ))}
            </div>
            {loading && <Preloader/>}
            {hasMore && !loading && (
                <button className="get__btn d_btn" onClick={showMore}>Show more</button>
            )}
        </div>
    </div>
  )
}

export default GetSection