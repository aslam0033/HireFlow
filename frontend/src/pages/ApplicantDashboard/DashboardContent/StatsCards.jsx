import { useEffect, useState } from "react";
import StatCard from "./StatCard";
import styles from "./statsCards.module.css";

import {
  FiBriefcase,
  FiCheckCircle,
  FiCalendar,
  FiAward,
  FiClock,
  FiXCircle,
} from "react-icons/fi";

function StatsCards() {
  const [values,setValues] = useState({
    applied:0,
    interview:0,
    shortlisted:0,
    offers:0
  })
  useEffect(()=>{
    const getData = async () => {
      let data = await fetch("http://localhost:3500/stats")
      data = await data.json()
      setValues({
        applied:data.applications,
        interview:data.interview,
        shortlisted:data.shortlisted,
        offers:data.offers,
      })
    }
    getData()
  },[])




  const stats = [
    {
      title: "Applications",
      value: values.applied,
      icon: <FiBriefcase />,
    },
    {
      title: "Shortlisted",
      value: values.shortlisted,
      icon: <FiCheckCircle />,
    },
    {
      title: "Interviews",
      value: values.interview,
      icon: <FiCalendar />,
    },
    {
      title: "Offers",
      value: values.offers,
      icon: <FiAward />,
    }
  ];

  return (
    <section className={styles.statsContainer}>

      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
        />
      ))}

    </section>
  );
}

export default StatsCards;