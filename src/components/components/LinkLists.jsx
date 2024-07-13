import React from 'react'

function LinkLists({
  handleOnClickFunction,
    activeSection = false,
    compareActiveSection,
    title,
    hrefNavigateId,
}) {
  return (
    <li onClick={handleOnClickFunction} className={`${activeSection === compareActiveSection && 'text-[#D79B2A]'} hover:text-[#D79B2A]`}>
    <a href={hrefNavigateId}>{title}</a>
  </li>
  )
}

export default LinkLists