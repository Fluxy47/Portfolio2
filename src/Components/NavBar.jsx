import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()
    const arr = [{name:"Work", route:"/Work"},{name:"About", route:"/About"},{name:"Contact", route:"/Contact"}]

    const handleNavigation = (route) => {
        navigate(route)
    }

  return (
    <section className=" flex justify-between pt-[30px] md:pt-[35px">
    <h2 onClick={() => handleNavigation("/Home")} className="ml-3 md:ml-10 tracking-wider font-bold  md:text-xl cursor-pointer">
      @CodeByDenis
    </h2>
    <div className="md:flex mr-10 justify-evenly  gap-[2em] hidden">
      {arr.map((item, idx) => (
        <h2 onClick={() => handleNavigation(item.route)} className="text-xl font-bold tracking-wider cursor-pointer" key={idx}>
          {item.name}
        </h2>
      ))}
    </div>
    <h2 className="tracking-wider font-bold md:hidden mr-3">Menu</h2>
  </section>
  )
}

export default NavBar
