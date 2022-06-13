import { Result } from 'postcss'
import React, { createContext, useContext, useState } from 'react'

const ResultContext = createContext()
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('answers')

    const getResults = async (type) => {
        setIsLoading(true)
        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'CA',
                'X-RapidAPI-Key': '99a71675b3msh90b4f5556771a72p121b18jsn0050dbec2633',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        })

        const data = await response.json()

        if (type.includes('/news')) 
            setResults(data.entries)
        else if (type.includes('/image'))
            setResults(data.image_results)
        else
            setResults(data.results)

        setIsLoading(false)
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext)