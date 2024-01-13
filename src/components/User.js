import React from "react"
import "./User.css"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"
import EventIcon from "@material-ui/icons/Event"
import LocationOnIcon from "@material-ui/icons/LocationOn"

function User() {
  return (
    <div className="user">
      <img src="./images/avatar.jpg" className="user__avatar" alt="Dinari Ali" />
      <h1 className="user__name">Dinari Ali</h1>
      <p className="user__profession">Développeur Web</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon /> Markez Lajmi BP81 Sfax Tunisia
        </p>
        <p className="user__info">
          <PhoneIcon /> <a href="tel:+21644252259">44252259</a>
        </p>
        <p className="user__info">
          <MailIcon /> <a href="mailto:dinari_tn@outlook.fr">dinari_tn@outlook.fr</a>
        </p>
        <p className="user__info">
          <EventIcon /> Date de naissance: 14 Septembre 1992
        </p>
        <p className="user__info">
          <LocationOnIcon /> Lieu de naissance: Sfax
        </p>
      </div>
    </div>
  )
}

export default User
