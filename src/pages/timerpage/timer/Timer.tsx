export const Timer = () => {

/*document.addEventListener('DOMContentLoaded', () => {
        const timeLeftDisplay = document.querySelector('#time-left')
        const startBtn = document.querySelector('#start-button')
        
        let timeLeft  = 10

        function countDown() {
            setInterval(function (timeLeftDisplay) {
                if (timeLeft <= 0) {
                    clearInterval(timeLeft = 0)
                }
                timeLeftDisplay.innerHTML = timeLeftDisplay
                timeLeft -= 1
            }, 1000)
        }
    


    startBtn.addEventListener('click', countDown)

    })
*/



    return (
        <div>
            <h3>Seconds left: <span>10</span></h3>
            <button id="start-button"></button>
        </div>
    )
}
