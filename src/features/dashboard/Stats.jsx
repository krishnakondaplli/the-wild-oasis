import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat.jsx";
import { formatCurrency } from "../../utils/helpers.js";

function Stats({ bookings, confirmStays, numDays, cabinsCount }) {
  //1).
  const numBookings = bookings.length;

  //2).
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  //3).
  const checkins = confirmStays.length;

  //4).
  const occupation =
    confirmStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinsCount);
  // num checked in nights/all the available nights (numdays*num Cabins)
  return (
    <>
      <Stat
        title="bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="check ins"
        color="indigo"
        icon={<HiOutlineCalendar />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
