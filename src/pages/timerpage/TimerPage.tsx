import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";



// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition

const renderer = ({ hours, minutes, seconds, completed }: {
    hours: any;
    minutes: any;
    seconds: any;
    completed: any;
}) => {
    if (completed) {
        // Render a complete state
        return <Completionist />;
    } else {
        // Render a countdown
        return (
            <span>
                {hours}:{minutes}:{seconds}
            </span>
        );
    }
};

ReactDOM.render(
    <Countdown date={Date.now() + 5000} renderer={renderer} />,
    document.getElementById("root")
);



export const TimerPage = () => {
    return (
        <div id="root">
            <div>
                <div>Hej</div>
            </div>
        </div>
    )
}
