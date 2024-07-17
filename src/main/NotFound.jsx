

const NotFound = () => {
    return (
        <>
            <div >
                <h2 className="text-center text-white mb-35  ">مخاطب یافت نشد ...</h2>
                <div className="d-flex justify-content-center">
                    <img className="img-floud w-50" src={require("../assets/img/no-found.gif")} alt="" />
                </div>

            </div>

        </>
    )
}

export default NotFound;


