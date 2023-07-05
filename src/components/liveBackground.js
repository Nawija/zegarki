import React from "react";

const LiveBacground = () => (
    <>
        <div class="animatemeR opacity-30">
            <ul class="bg-bubblesR">
                {Array.from({ length: 13 }).map((_, i) => (
                    <li key={i}></li>
                ))}
            </ul>
        </div>
        <div class="animatemeL opacity-20">
            <ul class="bg-bubblesL">
                {Array.from({ length: 13 }).map((_, i) => (
                    <li key={i}></li>
                ))}
            </ul>
        </div>
    </>
);

export default LiveBacground;
