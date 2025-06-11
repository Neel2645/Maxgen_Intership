import { ShoppingCart } from "lucide-react";

const Card = ({ item }) => {
  return (
    <div className="w-full max-w-xs bg-gray-50 border border-gray-200 overflow-hidden shadow-md relative hover:bg-gray-100">
      <div className="p-4 flex justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="h-40 object-contain"
        />
      </div>

      <div className="h-12 text-center">
        <span className="px-4 text-md  font-medium text-gray-800">
          {item.title}
        </span>
      </div>

      <div className="px-4 mt-2 flex items-center justify-center gap-2 text-sm">
        <span className="text-black font-semibold text-base">
          ₹{item.price}
        </span>
      </div>

      <div className="mt-2">
        <select className="w-full text-black bg-[#FFF5EF] text-center border border-gray-300 text-sm px-2 py-2">
          <option>Crunchy / 510gm</option>
        </select>
      </div>

      <div>
        <button className="w-full flex items-center justify-center gap-2 border border-orange-500 text-orange-500 hover:bg-orange-200  py-2 text-sm font-medium">
          Add to cart <ShoppingCart size={16} />
        </button>
      </div>
    </div>
  );
};

export default Card;

// components/Card.jsx
// import React from "react";
// import { ShoppingCart } from "lucide-react";

// const Card = ({ item }) => {
//   return (
//     <div className="w-full max-w-xs bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md relative">
//       {/* Discount badge */}
//       <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
//         12% OFF
//       </div>

//       {/* Product Image */}
//       <div className="p-4 flex justify-center">
//         <img
//           src={item.image}
//           alt={item.title}
//           className="h-40 object-contain"
//         />
//       </div>

//       {/* Title */}
//       <div className="px-4 text-sm text-center font-medium text-gray-800">
//         {item.title}
//       </div>

//       {/* Price */}
//       <div className="px-4 mt-2 flex items-center justify-center gap-2 text-sm">
//         <span className="text-black font-semibold text-base">₹{item.price}</span>
//         <span className="line-through text-gray-400 text-sm">₹{item.mrp}</span>
//       </div>

//       {/* Dropdown (Fixed for now) */}
//       <div className="px-4 mt-2">
//         <select className="w-full border border-gray-300 rounded text-sm px-2 py-1">
//           <option>Crunchy / 510gm</option>
//           {/* You can map real options if needed */}
//         </select>
//       </div>

//       {/* Add to cart */}
//       <div className="px-4 py-2">
//         <button className="w-full flex items-center justify-center gap-2 border border-orange-500 text-orange-500 hover:bg-orange-50 rounded py-2 text-sm font-medium">
//           Add to cart <ShoppingCart size={16} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;
