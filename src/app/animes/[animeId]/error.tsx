"use client";

interface ErrorDetailProps {
    error: {
        message: string;
    }
}

export default function ErrorDetail({ error }: ErrorDetailProps) {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl font-bold">{error.message}</h1>
            <p>Try again later</p>
        </div>
    );
}
