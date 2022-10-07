import {
  ArrowDownLeftIcon,
  ArrowDownRightIcon,
  ArrowLeftIcon,
  ArrowPathIcon,
  ArrowUpRightIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
export default function Example() {
  return (
    <>
      <div className="flex m-5">
        <ArrowLeftIcon className="h-7 w-7 rounded-full p-0.5 border"/>
        <h4 className="ml-2">Payment</h4>
      </div>
      <h1 className="text-4xl font-bold">Payment</h1>
      <div >
        <div>
            <h3 className="text-xl">Seller Details</h3>
        </div>
      </div>
    </>
  );
}
