import { fetchUserInfo } from "./fetchUserInfo"

export const fetchEventDates = async (setEventDates) => {
    const eventDates = []

    try {

        const { id: userID } = await fetchUserInfo()

        const response = await fetch(`http://localhost:3000/api/tasks/all?userID=${userID}`, {
            method: "GET",
            credentials: "include",
        })
        const data = await response.json()
        const { tasks } = data
        // console.log('tasks  ', tasks)
        tasks.slice(1).forEach((task) => {
            const { dateID } = task
            // console.log(dateID)
            eventDates.push(dateID)
        })


    } catch (error) {
        console.log(error)
    }
    // console.log(eventDates);
    setEventDates(eventDates)
}