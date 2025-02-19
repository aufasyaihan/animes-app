"use client";

import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function FilterButton() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="w-fit relative">
            <button
                onClick={() => setIsOpen((prevState) => !prevState)}
                className="flex gap-2 items-center bg-gray-700 px-4 py-2 rounded-md"
            >
                Filter{" "}
                <span>
                    <IoMdArrowDropdown />
                </span>
            </button>
            {isOpen && (
                <div className="absolute right-0 w-48 flex flex-col bg-gray-700 p-2 mt-2 rounded-md">
                    <button className="hover:bg-gray-600 rounded-md text-start p-2">
                        Category1
                    </button>
                    <button className="hover:bg-gray-600 rounded-md text-start p-2">
                        Category2
                    </button>
                    <button className="hover:bg-gray-600 rounded-md text-start p-2">
                        Category3
                    </button>
                </div>
            )}
        </div>
    );
}
