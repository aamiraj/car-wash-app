import { Card } from "antd";

const BookingCard = () => {
  return (
    <Card className="bg-slate-100" style={{maxWidth: 240}}>
      <div className="flex flex-col items-start justify-start gap-8">
        <div>
          <p className="text-xl font-semibold mb-4">Full Wash</p>
          <p className="text-lg font-semibold mb-4">Toyota Axio 2015</p>
        </div>
        <div>
          <p className="text-lg font-semibold mb-4">
            Date:{" "}
            <span className="bg-blue-500 text-white px-2 py-1 rounded">
              2024-09-10
            </span>
          </p>
          <p className="text-lg font-semibold mb-4">
            Slot:{" "}
            <span className="bg-sky-500 text-white px-2 py-1 rounded">
              09:30-10:30
            </span>
          </p>
        </div>
        <div>
          <p className="mb-2">Remaining:</p>
          <p className="bg-[#F7EEDD] px-2 py-1 rounded text-5xl font-semibold mb-4">
            02:11
          </p>
        </div>
      </div>
    </Card>
  );
};

export default BookingCard;
