import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1. Number of bookings
  const numBookings = bookings.length;

  // 2. Total sales calculation
  const sales = bookings.reduce((acc, booking) => acc + booking.totalPrice, 0);

  // 3. Number of confimed check ins
  const checkins = confirmedStays.length;

  // 4. Occupancy rate (number of checked in nights / all available nights)
  // num of checked in nights = confirmedStays.numNigths
  // num of available nights = num of days * num of cabins
  const occupation =
    confirmedStays.reduce((acc, stay) => acc + stay.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
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
