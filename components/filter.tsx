"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface FilterProps {
  allProducts: any[]; 
}

export default function Filter({ allProducts }: FilterProps) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  

  const activeType = searchParams.get("consumeType") || "all";

  const dynamicTypes = [
    "all",
    ...Array.from(new Set(allProducts.map((p) => p.consumeType).filter(Boolean)))
  ];

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    
    if (filter === "all") {
      params.delete("consumeType");     
    } else {
      params.set("consumeType", filter); 
    }
    
    router.replace(`${pathName}?${params.toString()}`);
  }

  return (
    <div className="flex gap-3 justify-center flex-wrap p-4 bg-white shadow-sm rounded-2xl border border-purple-100 mb-10">
      {dynamicTypes.map((type: any) => (
        <button
          key={type}
          onClick={() => handleFilter(type)}
          className={`px-6 py-2 rounded-full font-bold transition-all duration-300 border-2 ${
            activeType === type
              ? "bg-purple-600 text-white border-purple-600 shadow-md scale-105"
              : "bg-purple-50 text-purple-600 border-purple-100 hover:border-purple-300 hover:bg-purple-100"
          }`}
        >
         
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
}