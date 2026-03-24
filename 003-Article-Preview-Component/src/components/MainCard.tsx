import drawers_image from "../assets/drawers.jpg";
import avatar_image from "../assets/avatar-michelle.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
type MainCardProps = {
  onShareClick: () => void;
};
function MainCard({ onShareClick }: MainCardProps) {
  type SelectedImg = {
    src: string;
    alt: string;
  };
  const [selectedImg, setSelectedImg] = useState<SelectedImg | null>(null);

  const handleImg = (e: React.MouseEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;

    setSelectedImg({
      src: img.src,
      alt: img.alt,
    });
  };
  const closeOverlay = () => {
    setSelectedImg(null);
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 font-sans">
        <div className="flex flex-col md:flex-row w-full md:w-1/2 bg-white rounded-lg shadow-md main">
          <div className="w-full md:w-1/2">
            <img
              onClick={handleImg}
              className="h-full w-full object-cover hover:scale-105 cursor-pointer transition ease-linear duration-500"
              src={drawers_image}
              alt="drawers"
            />
          </div>

          <div className="flex flex-col p-6 w-full md:w-1/2 justify-between">
            <div>
              <p className="text-xl font-bold pb-3">
                Shift the overall look and feel by adding these wonderful
                touches to furniture in your home
              </p>
              <p className="text-sm pb-3 text-slate-600">
                Ever been in a room and felt like something was missing? Perhaps
                it felt slightly bare and uninviting. I’ve got some simple tips
                to help you make any room feel complete.
              </p>
            </div>

            <div className="flex justify-between items-center pt-4">
              <div className="flex items-center gap-3">
                <img
                  onClick={handleImg}
                  className="rounded-full w-10 h-10 hover:scale-125 cursor-pointer transition ease-linear duration-500"
                  src={avatar_image}
                  alt="avatar-michelle"
                />
                <div className="flex flex-col text-sm">
                  <span className="font-medium">Michelle Appleton</span>
                  <span className="text-slate-600">
                    {new Date().toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
              <FontAwesomeIcon
                onClick={onShareClick}
                icon={faShare}
                className="text-slate-600 bg-slate-300 rounded-full p-1 hover:text-blue-700 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      {selectedImg && (
        <div className="overlay" onClick={closeOverlay}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImg.src} alt={selectedImg.alt} />
          </div>
        </div>
      )}
    </>
  );
}
export default MainCard;
