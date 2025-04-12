import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Slider } from "../ui/slider";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../ui/dialog";
import { getCroppedImg } from "../../lib/cropUtils";
import { Button } from "../ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";

interface CropperModalProps {
  image: string;
  open: boolean;
  onClose: () => void;
  onCropComplete: (croppedImage: string) => void;
}

const CropperModal: React.FC<CropperModalProps> = ({
  image,
  open,
  onClose,
  onCropComplete,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<{
    width: number;
    height: number;
    x: number;
    y: number;
  } | null>(null);

  const onCrop = useCallback(
    (
      _: any,
      croppedPixels: { width: number; height: number; x: number; y: number }
    ) => {
      setCroppedAreaPixels(croppedPixels);
    },
    []
  );

  const handleDone = async () => {
    try {
      if (!croppedAreaPixels) {
        console.error("Cropped area is not defined.");
        return;
      }
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      onCropComplete(croppedImage);
    } catch (error) {
      console.error("Error cropping image:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Image</DialogTitle>
        </DialogHeader>
        <div className="relative w-full h-[400px] bg-black">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onCropComplete={onCrop}
            onZoomChange={setZoom}
          />
        </div>
        <Slider
          value={[zoom]}
          onValueChange={(value) => setZoom(value[0])}
          min={1}
          max={5}
          step={0.1}
        />
        <DialogFooter>
          <Button onClick={onClose} variant="secondary">
            Cancel
          </Button>
          <Button variant="default" onClick={handleDone}>
            Done
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CropperModal;
