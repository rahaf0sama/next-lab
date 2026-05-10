import ProductList from "@/components/productlist";
import Filter from "@/components/filter";

export default async function ProductsPage({
  searchParams,
}: {

  searchParams: Promise<{ consumeType?: string }>; 
}) {

  const params = await searchParams;
  const selectedType = params.consumeType;
  
  const apiUrl = "https://raw.githubusercontent.com/rahaf0sama/pharmacy-dataset/refs/heads/main/products.json"; 

  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch");
    const allProducts = await res.json();


    const filtered = selectedType && selectedType !== "all"
      ? allProducts.filter((p: any) => p.consumeType === selectedType)
      : allProducts;

   
    const formattedProducts = filtered.map((p: any, index: number) => ({
      id: index + 1,
      title: p.drugName,
      price: p.price,
      description: p.description,
      thumbnail: p.image,
    }));

    return (
      <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-purple-800 uppercase tracking-widest">
          Pharmacy Store
        </h1>
        
        <div className="mb-10">
   
          <Filter allProducts={allProducts} />
        </div>
        
        {formattedProducts.length > 0 ? (
            <ProductList products={formattedProducts} />
        ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400 font-semibold italic">
                No products found for "{selectedType}"
              </p>
            </div>
        )}
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center mt-20">
        <div className="bg-red-100 text-red-700 p-4 rounded-lg inline-block font-bold">
           Error loading Pharmacy Data. Please try again later.
        </div>
      </div>
    );
  }
}