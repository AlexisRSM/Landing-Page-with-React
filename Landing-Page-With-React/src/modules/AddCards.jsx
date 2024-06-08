function AddCards({ dogs }) {
    //later add card function

    return (
        <>
            {
                dogs.map((dog) => {
                    return (
                        <>
                            <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">HI! My name is {dog.name} </h5>
                                <p className="card-text">{dog.description}</p>
                                <a href="#" className="btn btn-danger">Adopt-me! OR Fund My Life!</a>
                            </div>
                        </>
                    )

                })
            }
        </>
    );
};

export default AddCards;