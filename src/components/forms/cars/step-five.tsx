/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

interface StepFiveProps {
    images: File[];
    setImages: (images: File[]) => void;
}

const Step5: React.FC<StepFiveProps> = ({ images, setImages }) => {
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newImages = Array.from(e.target.files);
            setImages([...images, ...newImages]);
        }
    };

    const handleRemoveImage = (index: number) => {
        const newImages = images.filter((_, i) => i !== index);
        setImages(newImages);
    };

    return (
        <div>
            <label className="text-base font-medium text-slate-700 capitalize">Car Images</label>
            <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full py-2 px-3 mt-2 mb-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
            />
            <div className="grid grid-cols-2 gap-4 max-h-60 overflow-auto border border-gray-200 p-2 rounded-lg">
                {images.map((image, index) => (
                    <div key={index} className="relative">
                        <img src={URL.createObjectURL(image)} alt={`Car Image ${index + 1}`} className="w-full h-32 object-cover rounded-md" />
                        <button type="button" onClick={() => handleRemoveImage(index)} className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="m9.17 14.83 5.66-5.66M14.83 14.83 9.17 9.17M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Step5;