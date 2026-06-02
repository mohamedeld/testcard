import ListCartItem from "@/components/card/ListCartItem";
import StarIcon from "@mui/icons-material/Star";
import DiamondIcon from "@mui/icons-material/Diamond";
import ParkIcon from "@mui/icons-material/Park";
import PoolIcon from "@mui/icons-material/Pool";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BedIcon from "@mui/icons-material/Bed";

const demoItem = {
  title: "Luxury Villas Compound",
  address: "Ar Rihab, Riyadh",
  range: "14 - 33",
  town: 20,
  villa: "12 villas",

  header: "Features",
  featuresList: [
    {
      id: 1,
      Icon: <ParkIcon />,
      value: "Green parks and open spaces",
    },
    {
      id: 2,
      Icon: <PoolIcon />,
      value: "Swimming pool",
    },
    {
      id: 3,
      Icon: <DirectionsCarIcon />,
      value: "Private parking",
    },
  ],

  footerTitle: "Starting from",
  price: "265,000",
  duration: "mo",
};
const cardData = [
  {
    id: 1,
    color: "purple",
    value: "premium",
    headerIcon: StarIcon,
    tags: ["New", "Pool", "5 beds"],
    mainImage: {
      src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80",
      alt: "Luxury villa exterior",
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
        alt: "Living room",
      },
      {
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
        alt: "Bedroom",
      },
    ],
    item: demoItem,
    addressImage: { Icon: <StarIcon /> },
  },
  {
    id: 2,
    color: "green",
    tags: ["Brand new", "Gym"],
    value: "Featured",
    headerIcon: StarIcon,
    mainImage: {
      src: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
      alt: "Modern apartment",
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
        alt: "Kitchen",
      },
      {
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
        alt: "Balcony view",
      },
    ],
    item: demoItem,
    addressImage: { Icon: <StarIcon /> },
  },
  {
    id: 3,
    color: "gray",
    tags: ["Disabled", "Not available"],
    mainImage: {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      alt: "Disabled listing",
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
        alt: "Entryway",
      },
      {
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
        alt: "Dining area",
      },
    ],
    item: demoItem,
    addressImage: { Icon: <StarIcon /> },
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-10 h-full p-8 px-2  md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cardData?.map((card) => (
          <ListCartItem
            key={card.id}
            {...card}
            sx={{
              opacity: card.disabled ? 0.5 : 1,
              pointerEvents: card.disabled ? "none" : "auto",
            }}
          />
        ))}
      </div>
    </div>
  );
}
