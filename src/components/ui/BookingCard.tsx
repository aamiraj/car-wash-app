import { Card } from "antd";
import { useEffect } from "react";

const BookingCard = ({ bookingData }: any) => {
  useEffect(() => {
    const element = document.getElementById("count-down") as HTMLElement;

    const toDate = `${bookingData?.slot?.date}T${bookingData?.slot?.startTime}:00+06:00`;
    const countDownDate = new Date(toDate).getTime();
    // const countDownDate = new Date("2024-12-24T12:30:00+06:00").getTime();

    const x = setInterval(function () {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      element.innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        element.innerHTML = "EXPIRED";
      }
    }, 1000);
  }, [bookingData]);

  return (
    <Card className="bg-slate-100" style={{ maxWidth: 240 }}>
      <div className="flex flex-col items-start justify-start gap-8">
        <div>
          <p className="text-xl font-semibold mb-4">
            {bookingData?.service?.name}
          </p>
          <p className="text-lg font-semibold mb-4">
            {bookingData?.vehicleBrand} {bookingData?.vehicleModel}{" "}
            {bookingData?.manufacturingYear}
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold mb-4">
            Date:{" "}
            <span className="bg-blue-500 text-white px-2 py-1 rounded">
              {bookingData?.slot?.date}
            </span>
          </p>
          <p className="text-lg font-semibold mb-4">
            Slot:{" "}
            <span className="bg-sky-500 text-white px-2 py-1 rounded">
              {bookingData?.slot?.startTime}-{bookingData?.slot?.endTime}
            </span>
          </p>
        </div>
        <div>
          <p className="mb-2">Remaining:</p>
          <p
            id="count-down"
            className="bg-[#F7EEDD] px-2 py-1 rounded text-2xl font-semibold mb-4"
          >
            0d 0h 0m 0s
          </p>
        </div>
      </div>
    </Card>
  );
};

export default BookingCard;
