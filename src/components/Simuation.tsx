import CanvasPage from "@/components/canvas";

export default function Simulation() {
    return (
        <div className="w-full flex justify-center items-center absolute top-0 left-0 h-full bg-gray-200">
            <CanvasPage/>
        </div>
    );
}
