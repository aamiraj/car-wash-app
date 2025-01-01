import Service1 from "./assets/service-1.jpg";
import Service2 from "./assets/service-2.png";
import Service3 from "./assets/service-3.png";
import Service5 from "./assets/service-5.jpg";
import Service6 from "./assets/service-6.jpg";
import Service7 from "./assets/service-7.jpg";

export const serviceImgs = [
  Service1,
  Service2,
  Service3,
  Service5,
  Service6,
  Service7,
];

export const carTypes = [
  { value: "sedan", label: "Sedan" },
  { value: "coupe", label: "Coupe" },
  { value: "hatchback", label: "Hatchback" },
  { value: "suv", label: "SUV" },
  { value: "crossover", label: "Crossover" },
  { value: "convertible", label: "Convertible" },
  { value: "wagon", label: "Wagon" },
  { value: "minivan", label: "Minivan" },
  { value: "pickup truck", label: "Pickup Truck" },
  { value: "sports car", label: "Sports Car" },
  { value: "luxury car", label: "Luxury Car" },
  { value: "electric car", label: "Electric Car" },
  { value: "hybrid car", label: "Hybrid Car" },
];

const commonBrands = [
  "Toyota",
  "Honda",
  "Nissan",
  "Mitsubishi",
  "Hyundai",
  "Kia",
  "Ford",
  "Suzuki",
  "Tata",
  "Ashok Layland",
  "Proton",
  "Palki",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Other"
]
export const carBrands = commonBrands.map(item => ({
  value: item, label: item
}));
