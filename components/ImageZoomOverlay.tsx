import React from 'react';
import { X } from 'lucide-react';

interface ImageZoomOverlayProps {
    src: string;
    alt: string;
    onClose: () => void;
}

const ImageZoomOverlay: React.FC<ImageZoomOverlayProps> = ({ src, alt, onClose }) => {
    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                onClick={onClose}
            >
                <X size={32} />
            </button>

            {/* Image Container */}
            <div
                className="relative w-full h-full flex items-center justify-center pointer-events-none"
            >
                <img
                    src={src}
                    alt={alt}
                    className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in-95 duration-300 pointer-events-auto cursor-zoom-out"
                />
            </div>
        </div>
    );
};

export default ImageZoomOverlay;
