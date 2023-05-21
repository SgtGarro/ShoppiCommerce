import { XMarkIcon } from "@heroicons/react/24/solid";
function ProductDetail() {
  return (
    <aside className="max-w-md w-2/5  fixed top-16 right-0 bg-white h-[calc(100vh-4rem)] border-current border rounded-lg">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon className="w-6 h-6 cursor-pointer transition-all duration-300 ease-out hover:scale-125" />
        </div>
      </div>
    </aside>
  );
}

export default ProductDetail;
