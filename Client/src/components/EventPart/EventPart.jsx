import React, { useState, useEffect } from "react"
import "./EventPart.css"
import "../../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { months, fullDays } from "../../data/Data"
import { Link, NavLink } from "react-router-dom"
import Layout from "../../Layout/Layout"
function EventPart() {
  const currentDate = new Date()
  const [eventData, setEventData] = useState([])
  const [isLogin, setIsLogin] = useState(false)
  const [username, setUsername] = useState(null)
 
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/tasks")
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const data = await response.json()
      const { tasks: eventData } = data
      setEventData(eventData)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/user", {
      method: "GET",
      credentials: "include",
    }).then((response) =>
      response.json().then((userInfo) => {
        setUsername(userInfo.username.toUpperCase())
        // console.log('eventpart page')
        setIsLogin(true)
      })
    )
  }, [])
  const handleDelete = (e) => {
    let deleteTaskID = e.currentTarget.parentNode.parentNode.id
    console.log(deleteTaskID)

    const deleteData = async (deleteTaskID) => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/tasks/${deleteTaskID}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        if (response.ok) {
          fetchData() //updating the tasks list
          console.log("Task deleted successfully.")
        } else {
          console.error("Error deleting task:", response.statusText)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    deleteData()
  }

  const formatTime = (time) => {
    const [hours, minutes] = time.split(":")
    let ampm = "AM"
    let formattedHours = parseInt(hours)

    if (formattedHours >= 12) {
      ampm = "PM"
      if (formattedHours > 12) {
        formattedHours -= 12
      }
    }

    return `${formattedHours}:${minutes} ${ampm}`
  }
  const logOut = async () => {
    await fetch("http://localhost:3000/logout", {
      credentials: "include",
      method: "GET",
    })
    setIsLogin(false)
  }

  return (
    <section className="Event-Container">
      <header className="event-header">
        <span className="event-day">{fullDays[currentDate.getDay()]}</span>
        <span className="event-complete-date">
          {currentDate.getDate()}th {months[currentDate.getMonth()].month}
          {currentDate.getFullYear()}
        </span>
      </header>
      <section className="event-content">
        {
          <ul className="event-list">
            {eventData.map((data) => (
              <li className="event-item" key={data._id} id={data._id}>
                <div className="wrapper">
                  <p className="event-title">{data.title}</p>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    style={{ color: "#97ffb1" }}
                    className="dustbin"
                    onClick={handleDelete}
                  />
                </div>

                <span className="event-time">
                  {`${formatTime(data.timeFrom)} -- ${formatTime(data.timeTo)}`}
                </span>
              </li>
            ))}
          </ul>
        }
      </section>
      <footer className="event-footer">
        {!isLogin && (
          <button className="loginBtn">
            <Link to={"login"} className="nav-link">
              LogIn
            </Link>
          </button>
        )}
        {isLogin && (
          <button className="loginBtn" onClick={logOut}>
            LogOut
          </button>
        )}

        <button className="registerBtn">
          {!isLogin && (
            <Link to={"register"} className="nav-link">
              Register
            </Link>
          )}
          {isLogin && username}
        </button>
        <button className="createEvent">
          <Link to={"addEvent"} className="nav-link">
            <FontAwesomeIcon
              icon={faCirclePlus}
              style={{ color: "rgb(112, 119, 146)" }}
            />
          </Link>
        </button>
      </footer>
    </section>
  )
}

export default EventPart
