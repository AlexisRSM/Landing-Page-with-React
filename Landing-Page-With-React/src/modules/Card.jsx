import AddCards from "./AddCards";

function Card() {
    let dogs = {
        name: "Apollo",
        age: 3,
        description: "Apollo is a sweet and playful dog who loves to run and play fetch. He is great with kids and other dogs.",

    };
    return (
        <div className="card mx-3" style={{ width: "18rem" }}>
            <AddCards dogs={dogs} />
        </div>
    );
}

export default Card;