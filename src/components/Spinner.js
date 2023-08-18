import React from "react"
import { FaSpinner } from "react-icons/fa"
import "../styles/Spinner.css"

const Spinner = () => {
  return (
    <div className="spinner">
      <FaSpinner className="icon" />
    </div>
  )
}

export default Spinner
