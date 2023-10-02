import { fetchUserInfo } from "./fetchUserInfo"

export const fetchEventDates = async () => {
    const eventDates = []

    try {
        
        const { id: userID } = await fetchUserInfo()

        // console.log(userID)
        
            const response = await fetch(`http://localhost:3000/api/tasks/all?userID=${userID}`, {
                method: "GET",
                credentials: "include",
            })
            const data = await response.json()
            const { tasks } = data
            tasks.slice(1).forEach((task) => {
                const { dateID } = task
                eventDates.push(dateID)
            })
        

    } catch (error) {
        console.log(error)
    }
    return eventDates
}