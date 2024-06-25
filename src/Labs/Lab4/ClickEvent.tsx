const hello = () => {
    alert("Hello World!");
};
const lifeIs = (good: string) => {
    alert(`Life is ${good}`);
};
export default function ClickEvent() {
    return (
        <div id="wd-click-event">
            <h2>Click Event</h2>
                {/* <div className="wd-click-event-buttons btn-group-vertical"> */}
                <button onClick={hello} className="wd-hello-world-click btn btn-primary m-2">
                    Hello World!</button>
                <button onClick={() => lifeIs("Good!")}
                    className="wd-life-is-good-click btn btn-primary m-2">
                    Life is Good!</button>
                <button onClick={() => {
                    hello();
                    lifeIs("Great!");
                }} className="wd-life-is-great-click btn btn-primary m-2">
                    Life is Great!
                </button>
                {/* </div> */}
            <hr />
        </div>
    );
}
