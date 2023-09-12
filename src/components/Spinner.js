import React from "react"
import { CgSpinner } from "react-icons/cg"
import "../styles/Spinner.css"

const Spinner = () => {
  return (
    <div className="spinner">
      <CgSpinner className="icon" />
    </div>
  )
}

export default Spinner
